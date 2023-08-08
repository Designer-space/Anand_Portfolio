console.clear();

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

window.addEventListener('resize',function(){
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});


var circ = (4*(Math.sqrt(2)-1)/3);
var c = circ;

var count = Math.PI;

function drawBezierCircle(cx,cy,r){

  var c;
  var offsetX = 20 * Math.sin(count);
  var offsetY = 15 * Math.cos(count * 2);
  var num = 4;
  if (width > 1440) {
    num = 5
  }
  r = width / r * r / num;
  
  count += 0.03;
  
  ctx.translate(cx,cy); // translate to centerpoint

  ctx.beginPath();
  
  // top right
  c = circ + ( 0.2 * Math.sin(count) );
  ctx.moveTo(offsetX + 0, offsetY + -r);
  ctx.bezierCurveTo(
    offsetX + c*r, offsetY + -r, 
    offsetX + r, offsetY + -c*r, 
    offsetX + r, offsetY + 0
    );
    
  // bottom right
  c = circ + ( 0.2 * Math.cos(count) );
  ctx.bezierCurveTo(
    offsetX + r, offsetY + c*r, 
    offsetX + c*r, offsetY + r, 
    offsetX + 0, offsetY + r
    );
    
    // bottom left
    c = circ + ( 0.2 * Math.sin(count * 2) );
    ctx.bezierCurveTo(
      offsetX + -c*r, offsetY + r, 
      offsetX + -r, offsetY + c*r, 
      offsetX + -r, offsetY + 0
      );
      
      // top left
      c = circ + ( 0.2 * Math.cos(count + 1) );
      ctx.bezierCurveTo(
        offsetX + -r, offsetY + -c*r, 
        offsetX + -c*r, offsetY + -r, 
        offsetX + 0, offsetY + -r
  );
  ctx.fillStyle = "#c778dd";
  ctx.fill();
}

function render(){
  requestAnimationFrame(render);
  
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, width, height);
  
  drawBezierCircle(width/2,height/2,300);

}

render();

const text = document.querySelector(".text p");
text.innerHTML = text.innerText.split("").map((char, i) =>`<span style="transform: rotate(${i * 7.8}deg)">${char}</span>`).join("")



// Toggle Navigation Menu
const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', ()=>{
  primaryNav.hasAttribute('data-visible') 
    ? navToggle.setAttribute('aria-expanded', false) 
    : navToggle.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay')
})

window.addEventListener('scroll', () =>{
  // console.log(window.pageYOffset);
  if( window.pageYOffset > 15 ){
    primaryHeader.classList.add("transperantbg");
  } else{
    primaryHeader.classList.remove("transperantbg");
  }
})