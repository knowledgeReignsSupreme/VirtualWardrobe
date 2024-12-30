/* eslint-disable react/no-unknown-property */
import Navbar from "../Components/Navbar";
import { Experience } from "../Components/Experience";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="bg-[linear-gradient(115deg,_#ffffff,_#dddddd)] w-full h-screen">
        <Canvas >
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </Canvas>
        <Canvas style={{ height: "100vh", width: "100%" }}>
          <ambientLight intensity={0.5} />{" "}
          <directionalLight position={[5, 5, 5]} intensity={1} />{" "}
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div> */}
    </div>
  );
};

export default Homepage;