const messages = [
    "Confía en ti misma, eres más fuerte de lo que crees.",
    "Cada día es una nueva oportunidad para brillar.",
    "Tu amor ilumina el mundo.",
    "No hay montaña que no puedas escalar.",
    "Tu sonrisa tiene el poder de cambiar el mundo.",
    "El amor que das vuelve a ti multiplicado.",
    "Eres el corazón de nuestra familia.",
    "Siempre encuentra la belleza en las pequeñas cosas.",
    "No olvides lo increíble que eres.",
    "Tu bondad es una luz en el mundo.",
    "El esfuerzo siempre trae recompensas.",
    "Nunca dejes de creer en tus sueños.",
    "Tu amor incondicional es nuestra mayor fortaleza.",
    "La vida está llena de bendiciones, y tú eres una de ellas.",
    "Siempre hay un arcoíris después de la tormenta.",
    "Eres el ejemplo de amor y paciencia.",
    "Cada día contigo es un regalo.",
    "Tu alegría es contagiosa y hermosa.",
    "Nunca subestimes el poder de tus acciones.",
    "Eres la mejor mamá del mundo.",
    "Gracias por todo tu amor y apoyo.",
    "¡Eres increíblemente especial para mí!",
    "Cada día a tu lado es un regalo.",
    "Eres mi inspiración y mi fuerza.",
    "¡Te quiero con todo mi corazón!",
    "Tu sonrisa ilumina mi día.",
    "Lo mejor está por venir.",
    "Tu valentía es inspiradora.",
    "Siempre tienes un lugar en mi corazón.",
    "El amor que compartimos es eterno."
];

function showMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').innerText = messages[randomIndex];
}