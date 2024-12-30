/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Tshirt } from "./Tshirt";

export const Experience = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Debugging Helpers */}
      <axesHelper args={[5]} />
      <gridHelper args={[10, 10]} />

      {/* 3D Model */}
      <Tshirt position={[0, -60, 0]} />
    </group>
  );
};
