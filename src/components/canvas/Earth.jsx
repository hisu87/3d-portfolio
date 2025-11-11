/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const glContextRef = React.useRef(null);

  React.useEffect(() => {
    const glContext = glContextRef.current;
    return () => {
      try {
        if (glContext) {
          const ext = glContext.getExtension("WEBGL_lose_context");
          if (ext) ext.loseContext();
        }
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 1.5]}
      onCreated={({ gl }) => {
        glContextRef.current = gl.getContext();
      }}
      gl={{
        alpha: true,
        antialias: true,
        maxPixelRatio: 1,
        stencil: false,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
