import React, { useEffect, useRef } from "react";
import "./PleomaxEffect.css";

const PleomaxEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const numParticles = 200;
    const particles = [];

    // Generate particles
    for (let i = 0; i < numParticles; i++) {
      const particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
      };
      particles.push(particle);
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off the canvas edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }

        // Draw particle
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Connect particles with lines
      for (let i = 0; i < numParticles - 1; i++) {
        const particleA = particles[i];

        for (let j = i + 1; j < numParticles; j++) {
          const particleB = particles[j];
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    // Set canvas size to match container size
    const container = canvas.parentNode;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    animate();
  }, []);

  return (
    <div className="pleomax-container">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default PleomaxEffect;
