/* eslint-disable react/no-unknown-property */
import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  // create 5000 points -> Float32Array length must be points * 3
  const POINT_COUNT = 5000;
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(POINT_COUNT * 3), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const glContextRef = useRef(null);

  useEffect(() => {
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
    <div className="w-full h-screen absolute inset-0 -z-10">
      <Canvas
        frameloop="always"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 1] }}
        onCreated={({ gl }) => {
          glContextRef.current = gl.getContext();
        }}
        gl={{
          alpha: true,
          antialias: false,
          maxPixelRatio: 1,
          stencil: false,
          depth: false,
        }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
