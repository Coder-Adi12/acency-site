import { useEffect, useRef } from 'react';

interface Creature {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  speed: number;
  connections: number;
  connectionLength: number;
  nodes: {x: number, y: number, size: number}[];
}

const NetworkCreatures = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const creatures = useRef<Creature[]>([]);
  const backgroundNodes = useRef<{x: number, y: number, size: number}[]>([]);
  const animationRef = useRef<number>(0);
  
  // Initialize creatures and nodes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    // Set initial canvas size
    updateCanvasSize();

    // Update on window resize
    window.addEventListener('resize', updateCanvasSize);

    // Set initial mouse position
    mousePosition.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    // Create background nodes
    const numBackgroundNodes = 80;
    const newBackgroundNodes = [];
    
    for (let i = 0; i < numBackgroundNodes; i++) {
      newBackgroundNodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 1 + Math.random() * 1
      });
    }
    
    backgroundNodes.current = newBackgroundNodes;

    // Create creatures that follow cursor
    const numCreatures = 5;
    const newCreatures: Creature[] = [];
    
    for (let i = 0; i < numCreatures; i++) {
      // Random starting position
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      // Creature properties
      const creature: Creature = {
        x,
        y,
        targetX: x,
        targetY: y,
        size: 4 + Math.random() * 2,
        speed: 0.03 + Math.random() * 0.02,
        connections: 4 + Math.floor(Math.random() * 3), // 4-6 connections
        connectionLength: 30 + Math.random() * 15,
        nodes: []
      };
      
      // Create nodes for each connection
      for (let j = 0; j < creature.connections; j++) {
        const angle = (Math.PI * 2 / creature.connections) * j;
        const distance = creature.connectionLength;
        
        // Create nodes along each connection
        const nodesPerConnection = 3;
        for (let k = 1; k <= nodesPerConnection; k++) {
          const nodeDist = (distance / (nodesPerConnection + 1)) * k;
          creature.nodes.push({
            x: x + Math.cos(angle) * nodeDist,
            y: y + Math.sin(angle) * nodeDist,
            size: 2
          });
        }
      }
      
      newCreatures.push(creature);
    }
    
    creatures.current = newCreatures;

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background nodes and connections
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      for (const node of backgroundNodes.current) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Update and draw creatures
      for (let i = 0; i < creatures.current.length; i++) {
        const creature = creatures.current[i];
        
        // Update target to follow mouse with some delay
        if (i === 0) {
          // First creature follows the mouse directly
          creature.targetX = mousePosition.current.x;
          creature.targetY = mousePosition.current.y;
        } else {
          // Other creatures follow the previous creature (with offset)
          const prevCreature = creatures.current[i - 1];
          creature.targetX = prevCreature.x + (Math.random() * 20 - 10);
          creature.targetY = prevCreature.y + (Math.random() * 20 - 10);
        }
        
        // Move toward target
        creature.x += (creature.targetX - creature.x) * creature.speed;
        creature.y += (creature.targetY - creature.y) * creature.speed;
        
        // Update node positions
        for (let j = 0; j < creature.connections; j++) {
          const angle = (Math.PI * 2 / creature.connections) * j;
          const distance = creature.connectionLength;
          
          const nodesPerConnection = 3;
          for (let k = 0; k < nodesPerConnection; k++) {
            const nodeIndex = j * nodesPerConnection + k;
            if (nodeIndex < creature.nodes.length) {
              const nodeDist = (distance / (nodesPerConnection + 1)) * (k + 1);
              const targetX = creature.x + Math.cos(angle) * nodeDist;
              const targetY = creature.y + Math.sin(angle) * nodeDist;
              
              // Move nodes gently toward their target positions
              creature.nodes[nodeIndex].x += (targetX - creature.nodes[nodeIndex].x) * 0.1;
              creature.nodes[nodeIndex].y += (targetY - creature.nodes[nodeIndex].y) * 0.1;
            }
          }
        }
        
        // Draw creature connections (white lines)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 1;
        
        for (let j = 0; j < creature.connections; j++) {
          const startAngle = (Math.PI * 2 / creature.connections) * j;
          
          // Draw line from center to each node in this connection
          ctx.beginPath();
          ctx.moveTo(creature.x, creature.y);
          
          const nodesPerConnection = 3;
          for (let k = 0; k < nodesPerConnection; k++) {
            const nodeIndex = j * nodesPerConnection + k;
            if (nodeIndex < creature.nodes.length) {
              ctx.lineTo(creature.nodes[nodeIndex].x, creature.nodes[nodeIndex].y);
            }
          }
          
          ctx.stroke();
        }
        
        // Draw nodes
        ctx.fillStyle = 'black';
        for (const node of creature.nodes) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Draw central node
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(creature.x, creature.y, creature.size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationRef.current = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[5] pointer-events-none"
    />
  );
};

export default NetworkCreatures; 