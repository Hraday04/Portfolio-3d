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
import * as THREE from "three";

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

        <Canvas
          dpr={[1, 1.5]}
          className="w-full h-full mt-15"
          frameloop="always"
          style={{ pointerEvents: isMobile ? "none" : "auto" }}
        >
          {/* LIGHTING */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Suspense fallback={<Loader />}>
            <Float
              speed={2} // animation speed
              rotationIntensity={2} // rotate
              floatIntensity={0.5} // up/down motion
              floatingRange={[0.1, 0.3]} // optional
            >
              <Enterprise
                scale={isMobile ? 0.3 : 0.5}
                position={isMobile ? [0, -0.3, 0] : [1.2, 0, -0.5]}
                rotationSpeed={0.5}
              />
            </Float>
            {!isMobile && (
              <>
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={!isMobile}
                  autoRotateSpeed={1.5}
                  minPolarAngle={Math.PI / 3.2}
                  maxPolarAngle={Math.PI / 2.2}
                  minAzimuthAngle={-Math.PI / 4}
                  maxAzimuthAngle={Math.PI / 4}
                  dampingFactor={0.1}
                  rotateSpeed={0.4}
                />
    
              </>
            )}
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
            {/* <Rig /> */}
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

// function Rig() {
//   return useFrame((state, delta) => {
//     easing.damp3(
//       state.camera.position,
//       [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
//       0.5,
//       delta
//     );
//   });
// }

// function Rig() {
//   useFrame((state, delta) => {
//     easing.damp3(
//       state.camera.position,
//       [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
//       0.5,
//       delta
//     );
//   });
//   return null;
// }

// function Rig() {
//   useFrame((state, delta) => {
//     const { mouse, camera } = state;

//     // Smoothly follow mouse with clamped bounds
//     const targetX = THREE.MathUtils.clamp(mouse.x / 5, -0.5, 0.5);
//     const targetY = THREE.MathUtils.clamp(mouse.y / 5, -0.2, 0.5);

//     // Maintain a stable Z position
//     const targetPosition = [targetX, 1 + targetY, 3];

//     // Only damp if the camera is noticeably off from target
//     if (!camera.position.equals(targetPosition)) {
//       easing.damp3(camera.position, targetPosition, 0.4, delta);
//     }

//     // Optional: make camera look at the center always
//     camera.lookAt(0, 0, 0);
//   });
//   return null;
// }



export default Hero;
