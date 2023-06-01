window.contador=0;          
window.contadorcubogrande=0;
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
  var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

      var arreglovoz = [  'hola pet',
    'gracias pet',
    'eso es todo por ahora',
    'pet ¿cuando te descubrieron?',
    'pet ¿desde que año existes?',
    'cuantos especies de ustedes existen',
    'pet cuenta tu historia',
    'gracias pet',
    'eso es todo por ahora',
    'pet ataca',
    'pet quieto',];

var grammar = '#JSGF V1.0; grammar arreglovoz; public <arreglovoz> = ' + arreglovoz.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;           
recognition.lang = 'es-MX';        
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('#text');  
//var hints = document.querySelector('.hints');  
var vozHTML= '';
arreglovoz.forEach(function(v, i, a){
console.log(v, i);

});
document.onkeydown = function() {
recognition.start();
console.log('Estoy listo para escuchar.');

}       

recognition.onresult = function(event) {            
var voz = event.results[0][0].transcript;
//diagnostic.textContent = 'Dijiste: ' + voz + '.';           
diagnostic.setAttribute("value", "Dijiste: " + voz + ".");
//diagnostic.textContent = 'Dijiste: ' + voz + '.';
bg = voz;
var bg = document.querySelector('text');


//VISUALIZO EN CONSOLA
console.log(bg);
console.log(voz);

function randD(array){
var rand= Math.random()*array.length|0;
var result=array[rand];
return result;
}

            // Interacciones iniciales
            if (voz === 'hola pet') {
                  console.log("Hola, estas saludando!");
                  let utterance = new SpeechSynthesisUtterance('Hola amigo, bienvenido. Estoy listo. Te escucho...')
                  utterance.lang = 'es-MX'
                  speechSynthesis.speak(utterance)
                }
            
            
                if (voz === 'gracias pet') {
                  console.log("Estas dando las gracias");
                  let utterance = new SpeechSynthesisUtterance('De nada amigo, quieres que te ayude con algo mas?')
                  utterance.lang = 'es-MX'
                  speechSynthesis.speak(utterance)
                }
            
            
                if (voz === 'eso es todo por ahora') {
                  console.log("Hola, estas saludando!");
                  let utterance = new SpeechSynthesisUtterance('De nada amigo, siempre es un placer ayudarte.')
                  utterance.lang = 'es-MX'
                  speechSynthesis.speak(utterance)
                }
            
                if (voz === 'pet  ¿cuando te descubrieron?') {
                  console.log("pet cuenta su descubrimento!");
                  let utterance = new SpeechSynthesisUtterance('El lobo es una especie de mamífero placentario del orden de los carnívoros. El naturalista Carlos Linneo, en la décima edición de su obra Systema naturæ, publicada en 1758.')
                  utterance.lang = 'es-MX'
                  speechSynthesis.speak(utterance)
                }
            
                if (voz === 'pet ¿desde que año existes?') {
                  console.log("pet, cuenta su existencia");
                  let utterance = new SpeechSynthesisUtterance('La evolución del lobo tuvo lugar durante unos 800 000 años, cuando aparecen los primeros ejemplares morfológicamente similares al lobo (Canis lupus).')
                  utterance.lang = 'es-MX'
                  speechSynthesis.speak(utterance)
                }
            
                if (voz === 'pet cuenta tu historia'){
                  console.log("pet, cuenta su historia");
                  let utterance = new SpeechSynthesisUtterance('Yo existia hace mucho tiempo. Hay dos teorías que podrían explicar esta doble descendencia: una es que los lobos fueron domesticados más de una vez y que, más tarde, las diferentes poblaciones se mezclaron entre sí; la otra es que la domesticación ocurrió solo una vez, pero estos animales domesticados se mezclaron después con lobos salvajes.')
                  utterance.lang = 'es-MX'
                  speechSynthesis.speak(utterance)
                }
                //interaccion con RA         
                 if (voz === 'pet ataca') 
                 {
                  console.log("¡Cuidado el pet esta atacando!");
                  var es = document.querySelector('#avatar');
                  es.setAttribute("src", 'https://cdn.glitch.global/2438b448-b8b3-4153-a94e-fe3cd5b69162/t%20rexF.glb?v=1685499258975');
                  es.setAttribute("scale", '.10 .10 .10');
                  el.setAttribute("position", '0 0 0');
                  el.setAttribute(animation, {'property': position,'to': {x: 1, y: 1, z: 1}, 'startEvents': 'startanim001'});
                 }
            
                if (voz === 'pet quieto') 
                {
                  console.log("pet esta trnaquilizandoce");
                  var el = document.querySelector('#avatar');
                  el.setAttribute("src", 'https://cdn.glitch.global/2438b448-b8b3-4153-a94e-fe3cd5b69162/t%20rexF2.glb?v=1685504345906');
                  el.setAttribute("scale", '0.1 0.1 0.1');
                  el.setAttribute("position", '0 -0.25 0');
                  el.setAttribute("rotation", '0 0 0');
                  el.setAttribute("visible", 'true');
            
                  let utterance = new SpeechSynthesisUtterance('Enseguida amigo. aunque ya me estoy cansando.')
                  utterance.lang = 'es-MX'
                  speechSynthesis.speak(utterance)
            
                }
            
                console.log('Confidence: ' + event.results[0][0].confidence);
              }
            
            
              recognition.onspeechend = function () {
                recognition.stop();
              }
            
              recognition.onnomatch = function (event) {
                diagnostic.setAttribute("value", "No puedo escucharte claramente, por favor repiteme.");
              }
            
              recognition.onerror = function (event) {
                diagnostic.setAttribute("value", 'Ocurrio un error al escucharte: ' + event.error);
              }
            