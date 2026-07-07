import { Suspense, useEffect } from "react";
import { Bounds, Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const PROFILE_MODEL_SRC = "/me.optimized.glb";

interface ProfileModelProps {
  onLoaded: () => void;
}

const ProfileModel = ({ onLoaded }: ProfileModelProps) => {
  const { scene } = useGLTF(PROFILE_MODEL_SRC);

  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  return (
    <Bounds fit clip observe margin={1.15}>
      <Center>
        <primitive object={scene} />
      </Center>
    </Bounds>
  );
};

interface HeaderModelProps {
  onLoaded: () => void;
}

const HeaderModel = ({ onLoaded }: HeaderModelProps) => {
  return (
    <Canvas camera={{ position: [0, 0.2, 4], fov: 35 }}>
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <directionalLight position={[-3, 2, 2]} intensity={0.8} />

      <Suspense fallback={null}>
        <ProfileModel onLoaded={onLoaded} />
      </Suspense>

      <OrbitControls
        autoRotate
        autoRotateSpeed={1.8}
        enableDamping
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2.3}
        rotateSpeed={0.7}
      />
    </Canvas>
  );
};

export default HeaderModel;
