const cnv = document.getElementById('cnv');
const c = cnv.getContext('2d');

let width  = cnv.width  = window.innerWidth;
let height = cnv.height = window.innerHeight;
c.translate(width/2, height/2);

window.addEventListener('resize', () => {
  width  = cnv.width  = window.innerWidth;
  height = cnv.height = window.innerHeight;
  c.translate(width/2, height/2);
});
