// src/components/RobotModel.jsx
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function RobotModel() {
  const { scene } = useGLTF("/robot.glb");
  const ref = useRef();

  // Slight floating + rotation animation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(t * 0.5) * 0.5;
    ref.current.position.y = Math.sin(t * 1.5) * 0.05 - 1.3;
  });

  return <primitive ref={ref} object={scene} scale={1.2} />;
}
