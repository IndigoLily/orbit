const SCALE = 8, MAX_R = SCALE / 2.5, STAR = 40;

function planet(dist) {
  this.r = Math.random() * MAX_R;
  this.dist = STAR + dist * SCALE;
  this.speed = 40/(SCALE*dist+STAR)**2;
  this.off = Math.random() * Math.PI * 2;

  this.draw = function(t) {
    let x = Math.sin(t*this.speed + this.off)*this.dist;
    let y = Math.cos(t*this.speed + this.off)*this.dist;

    c.fillStyle = '#000';
    if (this.r * 2 <= 1) {
      c.fillRect(x, y, 1, 1);
    } else {
      c.beginPath();
      c.arc(x, y, this.r, 0, Math.PI*2);
      c.fill();
    }
  }
}

let p = [];

function repop() {
  p = [];
  let n = 5 + Math.random() * ((height/2 - STAR - MAX_R) / SCALE - 5);
  for(let i = 0; i < n; i++) {
    p.push(new planet(i));
  }
}

repop();

let clicked = false;
window.addEventListener('click', () => {
  clicked = true;
  repop();
});
