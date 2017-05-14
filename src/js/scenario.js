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
        console.log('Start pause');
    })
    .on('end_pause.typist', function() {
        console.log('End pause');
    }).typist({
        speed: 12,
        text: ''
    }).typistPause(1000)
    //.typistAdd("\nAujourd'hui, je dois rédiger un CV.")
    .typistAdd("\nJe suis actuellement en formation à l'école du numérique régionale : Simplon Occitanie")
    .typistPause(1000)
    .typistAdd("\nEt je me suis dit...\nSi j'utilisais l'approche Agile et l'impact mapping pour me présenter ?")
    .typistPause(1000);
    window.setTimeout(animerElements1, 23000);
}

function animerElements1(){
    $('#pensee1').typistStop().fadeOut(500);
    $('#cadrePhoto').animate( {'top': '20px', 'left': '20px'} ,1000, function(){
        $('#informationsPersonnelles').fadeIn(500);
    });
    window.setTimeout(postit1, 4000);
}

function postit1(){
    $('#postit1').fadeIn( 1000).typist({
        speed: 12,
        text: ''
    })
    .typistAdd("Comment Maximiser la valeur de mon CV ?")
    .typistStop();
}
