function draw(count=0) {
  c.clearRect(-width,-height,width*2,height*2);

  c.beginPath();
  c.arc(0, 0, STAR/2, 0, Math.PI*2);
  c.fill();

  for(let i = 0; i < p.length; i++) {
    c.beginPath();
    c.arc(0, 0, p[i].dist, 0, Math.PI*2);
    c.strokeStyle = '#808080';
    c.globalAlpha = .2;
    c.stroke();
    c.globalAlpha = 1;

    p[i].draw(count);
  }

  if (clicked) {
    clicked = false;
    requestAnimationFrame(() => draw(0));
  } else {
    requestAnimationFrame(() => draw(count+1));
  }
}

draw();
