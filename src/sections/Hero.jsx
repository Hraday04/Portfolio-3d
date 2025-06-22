import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBg from "../components/ParallaxBg";
import { Enterprise } from "../components/Enterprise";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { OrbitControls } from "@react-three/drei";
import { style } from "motion/react-client";
import { color } from "motion";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      id="home"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBg />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* LIGHTING */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Canvas className="w-full h-full mt-15">
          {/* LIGHTING */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Suspense fallback={<Loader />}>
            <Float>
              <Enterprise
                scale={isMobile ? 0.2 : 0.3}
                position={isMobile ? [0, -0.3, 0] : [1.2, 0, -0.5]}
                rotationSpeed={0.5}
              />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={!isMobile}
                autoRotate={true}
                autoRotateSpeed={1.5}
                minPolarAngle={Math.PI / 3.2} // ~56°
                maxPolarAngle={Math.PI / 2.2} // ~81°
                minAzimuthAngle={-Math.PI / 4} // -45°
                maxAzimuthAngle={Math.PI / 4} // +45°
                dampingFactor={0.1}
                rotateSpeed={0.4}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
