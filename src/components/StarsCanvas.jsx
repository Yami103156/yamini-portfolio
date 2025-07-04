// src/components/StarsCanvas.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import "./StarsCanvas.css";

const Stars = () => {
  const starRef = useRef();
  const velocity = useRef(0.01);
  const opacityRef = useRef(0.9);
  const directionRef = useRef(1);

  // Create star positions
  const starPositions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 5000; i++) {
      positions.push((Math.random() - 0.5) * 1000);
      positions.push((Math.random() - 0.5) * 1000);
      positions.push((Math.random() - 0.5) * 1000);
    }
    return new Float32Array(positions);
  }, []);

  // Continuous forward movement + soft twinkling
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (starRef.current) {
      // Drift forward
      starRef.current.position.z += velocity.current;
      if (starRef.current.position.z > 5) {
        starRef.current.position.z = -5;
      }

      // Twinkling effect
      const material = starRef.current.material;
      opacityRef.current += 0.002 * directionRef.current;
      if (opacityRef.current >= 1 || opacityRef.current <= 0.7) {
        directionRef.current *= -1;
      }
      material.opacity = opacityRef.current;
    }
  });

  return (
    <points ref={starRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={starPositions}
          count={starPositions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.7}
        sizeAttenuation
        depthWrite={false}
        transparent
        opacity={opacityRef.current}
      />
    </points>
  );
};

const StarsCanvas = () => {
  return (
    <div className="stars-canvas">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
