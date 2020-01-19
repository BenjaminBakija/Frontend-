var container;
function initialize(object){
    container = object;
}

function pretragaPredmet(nazivPredmeta){
    var regex = RegExp(nazivPredmeta,"i");
    for (let i = 0; i < container.rows.length-1; i++) {
        if (container.rows[i].id == "skip") {  
            continue;
        }
        if (container.rows[i].cells.length == 3) {
            const element = container.rows[i].cells[0].innerHTML;
            if (!regex.test(element)) {
                container.rows[i].setAttribute("style", "visibility: hidden;");
            }
            else {
                container.rows[i].setAttribute("style", "visibility: visible;");
            }
        }
    }
}

function pretragaNastavnik(imeNastavnika){
    var regex = RegExp(imeNastavnika,"i");
    for (let i = 0; i < container.rows.length-1; i++) {
        if (container.rows[i].id == "skip") {   
            continue;
        }
        if (container.rows[i].cells.length == 3) {
            const element = container.rows[i].cells[2].innerHTML;
            if (!regex.test(element)) {
                container.rows[i].setAttribute("style", "visibility: hidden;");
            }
        }
    }
}
function pretragaGodina(godina){
    for (let i = 0; i < container.rows.length-1; i++) {
        if (container.rows[i].cells.length == 1) {
            const element = container.rows[i].cells[0].innerHTML;
            if ( (godina == "1" && element == "Druga godina") || (godina == "2" && element == "Prva godina") ) {
                i++;
                while (container.rows[i].cells.length != 1 && i < container.rows.length-1){
                    if (i == container.rows.length-1){
                        break;
                    }
                    container.rows[i].setAttribute("style", "visibility: hidden;");
                    i++;
                }
            }
        }
    }
}