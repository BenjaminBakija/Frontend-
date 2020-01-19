//Zadatak 3
$("#prvaGodina").click(function() {
    $(".druGodina").toggle();
    $(".prvGodina").show();
});
$("#drugaGodina").click(function() {
    $(".prvGodina").toggle();
    $(".druGodina").show();
});
$("#prvaDruga").click(function() {
    $(".sviPredmeti").toggle();
    $(".sviPredmeti").show();
});


//Zadatak 1
$('img:not(#log)').hover(function(){
  $(this).toggleClass("upper");
},
function() {
    $(this).toggleClass("upper");
})






//Zadatak 2
var $divs = $(".sviPredmeti");
$('#numBnt').on('click', function(){
    var predmet = $divs.sort(function(a,b){
        return $(a).find("h3").text() < $(b).find("h3").text() ?-1 : $(a).find("h3").text()>$(b).find("h3").text();
    });
    $("#sve").html(predmet);
});
	    

