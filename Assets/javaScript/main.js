console.clear();

let mybutton = document.getElementById("topBtn");

mybutton.addEventListener("click", topFunction )

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

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
   

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.speedX = Math.random() - 1;
        this.speedY = Math.random() - 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap particles around the canvas
        if (this.x < 0 || this.x > canvas.width) {
            this.speedX = -this.speedX;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.speedY = -this.speedY;
        }
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createParticles() {
    for (let i = 0; i < 150; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const particle of particles) {
        particle.update();
        particle.draw();
    }
}

createParticles();
animate();

