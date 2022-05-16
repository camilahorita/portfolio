const webButton = document.querySelector("#web");
const appButton = document.querySelector("#app");
const button3D = document.querySelector("#button3d");
const contentweb = document.querySelector('.web');
const contentapp = document.querySelector('.app');
const content3d = document.querySelector('.content3d');


webButton.addEventListener('click', function(){
  webButton.style.borderBottom = "4px solid #f0782d";
  appButton.style.borderBottom = "none";
  button3D.style.borderBottom = "none";
  contentweb.classList.remove('displaynone');
  contentapp.classList.add('displaynone');
  content3d.classList.add('displaynone');
})
appButton.addEventListener('click', function(){
  appButton.style.borderBottom = "4px solid #f0782d"
  webButton.style.borderBottom = "none";
  button3D.style.borderBottom = "none";
  contentweb.classList.add('displaynone');
  contentapp.classList.remove('displaynone');
  content3d.classList.add('displaynone');
})
button3D.addEventListener('click', function(){
  appButton.style.borderBottom = "none"
  webButton.style.borderBottom = "none";
  button3D.style.borderBottom = "4px solid #f0782d";
  contentweb.classList.add('displaynone');
  contentapp.classList.add('displaynone');
  content3d.classList.remove('displaynone');
})