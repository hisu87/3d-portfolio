/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import * as THREE from "three";

const textureCache = new Map();

function useRobustTexture(url) {
  if (textureCache.has(url)) {
    const resource = textureCache.get(url);
    if (resource.status === "resolved") return resource.texture;
    if (resource.status === "rejected") throw resource.error;
    if (resource.status === "pending") throw resource.promise;
  }

  const promise = new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      // Use 1024x1024 for high quality and power-of-two size
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext("2d");
      
      // Draw image onto canvas, stretching to fill
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 16;
      textureCache.set(url, { status: "resolved", texture });
      resolve(texture);
    };
    img.onerror = (e) => {
      textureCache.set(url, { status: "rejected", error: e });
      reject(e);
    };
    img.src = url;
  });

  textureCache.set(url, { status: "pending", promise });
  throw promise;
}

const Ball = (props) => {
  const decal = useRobustTexture(props.imgUrl);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} dispose={null}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const glContextRef = React.useRef(null);

  React.useEffect(() => {
    const glContext = glContextRef.current;
    return () => {
      try {
        // Force context loss immediately on unmount
        if (glContext) {
          const ext = glContext.getExtension("WEBGL_lose_context");
          if (ext) {
            ext.loseContext();
          }
        }
      } catch (e) {
        // ignore errors during cleanup
      }
    };
  }, []);

  return (
    <Canvas
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
        preserveDrawingBuffer: true,
      }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
