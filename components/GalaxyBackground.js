import { useEffect, useRef } from 'react';
import styles from '../styles/GalaxyBackground.module.css';

export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    }

    function createStars() {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 1000);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random(),
          speed: Math.random() * 0.05,
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        star.y += star.speed;
        star.opacity = Math.sin(Date.now() * 0.001 * star.speed) * 0.5 + 0.5;
        
        if (star.y > canvas.height) {
          star.y = 0;
        }
      });
    }

    function drawShootingStar() {
      if (Math.random() < 0.01) {
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 10 + 5,
          opacity: 1,
        };

        const animate = () => {
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(shootingStar.x + shootingStar.length, shootingStar.y + shootingStar.length);
          ctx.strokeStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
          ctx.stroke();

          shootingStar.x += shootingStar.speed;
          shootingStar.y += shootingStar.speed;
          shootingStar.opacity -= 0.02;

          if (shootingStar.opacity > 0) {
            requestAnimationFrame(animate);
          }
        };

        animate();
      }
    }

    function animateStars() {
      drawStars();
      drawShootingStar();
      animationFrameId = requestAnimationFrame(animateStars);
    }

    resizeCanvas();
    animateStars();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.galaxyBackground}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}