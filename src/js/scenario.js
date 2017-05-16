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
        speed: 18,
        text: ''
    }).typistPause(1000)
    .typistAdd("\nJe suis actuellement en formation à l'école régionale du numérique Simplon Occitanie.")
    .typistPause(1000)
    .typistAdd("\nEt je me suis dit...\nSi j'utilisais l'approche Agile pour me présenter ?")
    .typistPause(1000);
    window.setTimeout(animerElements1, 15000);
}

function animerElements1(){
    $('#pensee1').typistStop().fadeOut(500);
    $('#cadrePhoto').animate( {'top': '20px', 'left': '20px'} ,1000, function(){
        $('#informationsPersonnelles').fadeIn(500);
        $('#ecranDroite').animate( {'backgroundColor': "rgb( 170, 170, 170 )"} ,1000);
    });
    window.setTimeout(afficherPensee3, 3000);
}
function afficherPensee3(){
    $('#pensee1').text("Commençons par regarder le résultat de la scéance d'impact mapping.");
    $('#pensee1').fadeIn(500).delay(2000).fadeOut(500, function(){
        dessinerImpactMapping();
    });
}
function dessinerImpactMapping(){
    $('#pensee1').fadeOut(500);
    new Vivus('impactMapping', 
        {type: 'oneByOne', 
        duration: 200, 
        delay: 10, 
        start: 'autostart', 
        file: 'src/images/impactMapping3.svg', 
        onReady: function (myVivus) {
            // `el` property is the SVG element
            myVivus.el.setAttribute('height', '650px');
        }}, 
        function(){
            coloriserImpactMapping();
    });
}

function coloriserImpactMapping(){

    var s1 = Snap("#tableau");
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
    var t2 = s1.text(350, 20, "Maximiser" ).attr({"id":"t1", fill: "#333", "font-size": '18px', opacity: 1, "text-anchor": "middle"});
    var t3 = s1.text(350, 45, "la valeur de").attr({"id":"t2", fill: "#333", "font-size": '18px', opacity: 1, "text-anchor": "middle"});
    var t4 = s1.text(350, 70, "mon CV" ).attr({"id":"t3", fill: "#333", "font-size": '18px', opacity: 1, "text-anchor": "middle"});
    window.setTimeout(regarderObjectif, 1000);
}
function regarderObjectif(){
    $('#pensee1').text("Voilà l'objectif que je me suis fixé.");
    $('#pensee1').fadeIn(500).delay(2000).fadeOut(500, function(){
        zoom();
    });
}

function zoom(){
    var s1 = Snap("#tableau");
    s1.animate({ viewBox: "250 0 500 200" }, 1000);    
}

function postit1(){
    $('#postit1').fadeIn( 1000).typist({
        speed: 12,
        text: ''
    })
    .typistAdd("Comment Maximiser la valeur de mon CV ?")
    .typistStop();
}
