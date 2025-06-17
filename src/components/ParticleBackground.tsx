import { useEffect, useRef } from 'react';
import { Music, MicOff } from 'lucide-react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const particleCount = 30;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      createParticle(container);
    }
    
    // Periodically create new particles
    const interval = setInterval(() => {
      if (container && document.body.contains(container)) {
        createParticle(container);
      } else {
        clearInterval(interval);
      }
    }, 800);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  const createParticle = (container: HTMLDivElement) => {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random position
    const left = Math.random() * 100;
    const bottom = Math.random() * 20;
    
    // Random size
    const size = Math.random() * 3 + 1;
    
    // Random opacity and duration
    const opacity = Math.random() * 0.7 + 0.3;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    // Set styles
    particle.style.left = `${left}%`;
    particle.style.bottom = `${bottom}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.opacity = opacity.toString();
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    // Add to container
    container.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
      if (container.contains(particle)) {
        container.removeChild(particle);
      }
    }, (duration + delay) * 1000);
  };
  
  return <div ref={containerRef} className="particles-container" />;
};

export default ParticleBackground;
