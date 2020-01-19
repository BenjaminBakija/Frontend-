function postaviElemente(){
    var x = document.getElementById("pretraga");
    var predmet = x.elements[0].value;
    var nastavnik = x.elements[1].value;
    var godina = x.elements[2].value;
    var tabela = document.getElementById("tabela1");
    initialize(tabela);
    pretragaPredmet(predmet);
    pretragaNastavnik(nastavnik);
    pretragaGodina(godina);
}

//Zadatak 4
function mouseOver(a) {
    var x= document.getElementsByClassName(a);
    for(var i=0;i<x.length;i++){
      x[i].style.backgroundColor="yellow";
    }
  }
  function mouseOut(a) {
    var x= document.getElementsByClassName(a);
    for(var i=0;i<x.length;i++){
      x[i].style.backgroundColor="white";
    }
  }