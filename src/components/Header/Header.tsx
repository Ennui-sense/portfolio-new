import "./Header.scss";

import { Suspense } from "react";
import { Bounds, Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { stackData } from "~/data/stackData";

import Socials from "../Socials/Socials";

const PROFILE_MODEL_SRC = "/me.glb";

const ProfileModel = () => {
  const { scene } = useGLTF(PROFILE_MODEL_SRC);

  return (
    <Bounds fit clip observe margin={1.15}>
      <Center>
        <primitive object={scene} />
      </Center>
    </Bounds>
  );
};

useGLTF.preload(PROFILE_MODEL_SRC);

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <div
          className="header__image"
          role="img"
          aria-label="3D-модель профиля"
        >
          <Canvas camera={{ position: [0, 0.2, 4], fov: 35 }}>
            <ambientLight intensity={1.4} />
            <directionalLight position={[3, 4, 5]} intensity={2.2} />
            <directionalLight position={[-3, 2, 2]} intensity={0.8} />

            <Suspense fallback={null}>
              <ProfileModel />
            </Suspense>

            <OrbitControls
              enableDamping
              enablePan={false}
              enableZoom={false}
              rotateSpeed={0.7}
            />
          </Canvas>
        </div>

        <div className="header__content">
          <p className="header__name">Анатолий Шредер</p>
          <p className="header__description">
            Фронтенд-разработчик с&nbsp;2&nbsp;годами опыта с&nbsp;интересом
            к&nbsp;созданию технически качественных пользовательских интерфейсов
          </p>

          <Socials className="header__socials" />
        </div>

        <div className="header__stack">
          <p className="header__stack-title">Стек технологий</p>

          <ul className="header__stack-list">
            {stackData.map(({ id, label }) => (
              <li className="header__stack-item" key={id}>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
