$(document).ready(function(){
	window.setTimeout(start, 1000);
});

function start(){
	$('#pensee1').fadeIn(500);
	window.setTimeout(afficherPensee1, 1000);
}

function afficherPensee1(){
  $('#pensee1')
  .typist({
    speed: 12,
    text: ''
})
  .typistAdd("Bonjour, \n je m'appelle Gwenaëlle PAILHA.")
  .typistStop();
  window.setTimeout(afficherPhotoGena, 4000);
}
function afficherPhotoGena(){
	$('#photoGena').fadeIn(2000);
	window.setTimeout(afficherPensee2, 3000);
}
function afficherPensee2(){
	$('#pensee1')
    .on('start_pause.typist', function() {
        //console.log('Start pause');
    })
    .on('end_pause.typist', function() {
        //console.log('End pause');
    }).typist({
        speed: 12,
        text: ''
    }).typistPause(1000)
    .typistAdd("\nJe suis actuellement en formation à l'école du numérique régionale : Simplon Occitanie.")
    .typistPause(1000)
    .typistAdd("\nEt je me suis dit...\nSi j'utilisais l'approche Agile pour me présenter ?")
    .typistPause(1000);
    window.setTimeout(animerElements1, 23000);
}

function animerElements1(){
    $('#pensee1').typistStop().fadeOut(500);
    $('#cadrePhoto').animate( {'top': '20px', 'left': '20px'} ,1000, function(){
        $('#informationsPersonnelles').fadeIn(500);
        $('#ecranDroite').animate( {'backgroundColor': "rgb( 170, 170, 170 )"} ,1000);
    });
    window.setTimeout(afficherPensee3, 4000);
}
function afficherPensee3(){
    $('#pensee1').text('')
    $('#pensee1').fadeIn(500)
    $('#pensee1').typist({
        speed: 12,
        text: ''
    }).typistAdd("Commençons par regarder le résultat de la scéance d'impact mapping.")
    .typistPause(1000)
    .typistStop();
    window.setTimeout(dessinerImpactMapping, 6000);
}
function dessinerImpactMapping(){
    $('#pensee1').fadeOut(500);
    new Vivus('impactMapping', {type: 'oneByOne', duration: 200, delay: 10, file: 'src/images/impactMapping1.svg'}, function(){
        coloriserImpactMapping();
    });
}

function coloriserImpactMapping(){
    console.log('Yeap ?');

    var s1 = Snap("#postit");
    var shadow = s1.filter(Snap.filter.shadow(-10, 8, 0.3));
    var set = s1.selectAll('path', 'circle[id!="svgEditorBackground"]');
    //var p1 = s1.select("#p1");
    set.attr({
        fill: "rgb(230, 230, 230)",
        stroke: "#000",
        filter: shadow,
        strokeWidth: 2
    });
    var t1 = s1.text(55, 50, "Objectif");
    var t1 = s1.text(350, 20, "Maximiser" ).attr({"id":"t1", fill: "#333", "font-size": '18px', opacity: 1, "text-anchor": "middle"});
    var t1 = s1.text(350, 45, "la valeur de").attr({"id":"t2", fill: "#333", "font-size": '18px', opacity: 1, "text-anchor": "middle"});
    var t1 = s1.text(350, 70, "mon CV" ).attr({"id":"t3", fill: "#333", "font-size": '18px', opacity: 1, "text-anchor": "middle"});
}

function remplirTextesImpactMapping(){
    console.log("on remplit les textes");
    $('#textObjectif').typist({
        speed: 12,
        text: ''
    }).typistAdd("Objectif")
    .typistStop();
    $('#textQui').typist({
        speed: 12,
        text: ''
    }).typistAdd("Qui")
    .typistStop();
}

function postit1(){
    $('#postit1').fadeIn( 1000).typist({
        speed: 12,
        text: ''
    })
    .typistAdd("Comment Maximiser la valeur de mon CV ?")
    .typistStop();
}
