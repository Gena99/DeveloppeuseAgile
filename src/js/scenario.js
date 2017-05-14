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
    .typistAdd("\nEt je me suis dit...\n si j'utilisais Scrum et l'impact mapping pour me présenter ?")
    .typistPause(1000)
    //.typistRemove(44)
    //.typistAdd("Je me présente : ")
    //.typistPause(1000)
    ;
    
}
