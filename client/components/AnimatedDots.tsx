import { useEffect, useRef } from "react";

interface Dot {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function AnimatedDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize dots
    const dots: Dot[] = [];
    const dotCount = 60;
    const colors = ["#21BFFF", "#570C95", "#7C3AED"];

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        id: i,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.6 + 0.25,
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off walls
        if (dot.x - dot.radius < 0 || dot.x + dot.radius > canvas.width) {
          dot.vx *= -1;
          dot.x = Math.max(
            dot.radius,
            Math.min(canvas.width - dot.radius, dot.x)
          );
        }
        if (dot.y - dot.radius < 0 || dot.y + dot.radius > canvas.height) {
          dot.vy *= -1;
          dot.y = Math.max(
            dot.radius,
            Math.min(canvas.height - dot.radius, dot.y)
          );
        }

        // Add slight friction
        dot.vx *= 0.99;
        dot.vy *= 0.99;

        // Occasionally add random velocity for more free movement
        if (Math.random() < 0.01) {
          dot.vx += (Math.random() - 0.5) * 0.5;
          dot.vy += (Math.random() - 0.5) * 0.5;
        }

        // Draw dot
        const color = colors[dot.id % colors.length];
        ctx.fillStyle = color;
        ctx.globalAlpha = dot.opacity;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw subtle glow
        ctx.strokeStyle = color;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = dot.opacity * 0.5;
        ctx.stroke();
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
