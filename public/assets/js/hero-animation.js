document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    const particle = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 0,
        color: 'gold',
        draw: function() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };

    for (let i = 0; i < 100; i++) {
        const p = Object.create(particle);
        p.x = Math.random() * canvas.width;
        p.y = Math.random() * canvas.height;
        p.vx = Math.random() * 1 - 0.5;
        p.vy = Math.random() * 1 - 0.5;
        p.radius = Math.random() * 2;
        particles.push(p);
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) {
                p.vx = -p.vx;
            }

            if (p.y < 0 || p.y > canvas.height) {
                p.vy = -p.vy;
            }

            p.draw();
        });
    }

    animate();

    // Text animation
    const title = document.querySelector('.hero-title');
    const subtitle = document.querySelector('.hero-subtitle');
    const titleText = "Fedele Messaggero";
    const subtitleText = "Fuoco nel corpo · Presenza nel giorno · Regno nella carne";

    let i = 0;
    function typeWriter() {
        if (i < titleText.length) {
            title.innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(() => {
      typeWriter();
      setTimeout(() => {
        subtitle.textContent = subtitleText;
      }, 3500)
    }, 1000);
});
