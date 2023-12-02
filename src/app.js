// Función para generar una excusa aleatoria
function generarExcusa() {
  let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'the keys', 'the car'];
  let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

  // Obtener elementos aleatorios de cada matriz
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];


  let excusaGenerada = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

  return excusaGenerada; 
}


window.onload = function() {
 
  let excuseParagraph = document.getElementById('excuse');
  excuseParagraph.innerHTML = generarExcusa();

};
