var name=prompt("Input Your Name Please");

var elem = document.getElementById('xd');
if(typeof elem !== null && elem !== 'undefined' ) {
  document.getElementById("xd").innerHTML = `${name} `;
}