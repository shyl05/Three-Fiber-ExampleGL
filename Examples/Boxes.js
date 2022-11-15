/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber/native';

function Box(props) {
  const mesh = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => (mesh.current.rotation.x += 0.02));
  return (
    <mesh {...props} ref={mesh} scale={active ? 0.5 : 1} onClick={(event) => setActive(!active)} onPointerOver={(event) => setHover(true)} onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'red' : 'orange'} metalness={0.5} />
    </mesh>
  );
}

function Doughnut(props) {
    const mesh = useRef(null);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame((state, delta) => (mesh.current.rotation.y += 0.02));
    return (
        <mesh castShadow {...props} ref={mesh} scale={active ? 1.5 : 1} onClick={(event) => setActive(!active)} onPointerOver={(event) => setHover(true)} onPointerOut={(event) => setHover(false)}>
            <torusGeometry args={[0.6, 0.30, 16, 50]} />
            <meshStandardMaterial color={hovered ? 'red' : 'yellow'} flatShading={true} wireframe metalness={0.5} />
        </mesh>
    );
}

function Capsule(props) {
    const mesh = useRef(null);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame((state, delta) => (mesh.current.rotation.y += 0.02));
    return (
        <mesh castShadow {...props} ref={mesh} scale={active ? 1.5 : 1} onClick={(event) => setActive(!active)} onPointerOver={(event) => setHover(true)} onPointerOut={(event) => setHover(false)}>
            <capsuleGeometry args={[0.4, 0.8, 4, 8]}/>
            <meshStandardMaterial color={hovered ? 'red' : 'blue'} metalness={0.8} wireframe />
        </mesh>
    );
}

function Cone(props) {
    const mesh = useRef(null);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame((state, delta) => (mesh.current.rotation.y += 0.02));
    return (
        <mesh castShadow {...props} ref={mesh} scale={active ? 1.5 : 1} onClick={(event) => setActive(!active)} onPointerOver={(event) => setHover(true)} onPointerOut={(event) => setHover(false)}>
            <coneGeometry args={[0.6, 1.2, 8]}/>
            <meshStandardMaterial color={hovered ? 'gold' : 'silver'} wireframe />
        </mesh>
    );
}

function TorusKnot(props) {
    const mesh = useRef(null);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame((state, delta) => (mesh.current.rotation.y += 0.02));
    return (
        <mesh castShadow {...props} ref={mesh} scale={active ? 1.5 : 1} onClick={(event) => setActive(!active)} onPointerOver={(event) => setHover(true)} onPointerOut={(event) => setHover(false)}>
            <torusKnotGeometry args={[0.2, 0.6, 100, 16]}/>
            <meshStandardMaterial color={hovered ? 'gold' : 'blue'} wireframe/>
        </mesh>
    );
}

export default function Boxes() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Doughnut position={[-1.5, 3, -1]} />
      <Box position={[1.4, 2.5, 0]} />
      <Capsule position={[-1.5, 0, 0]} />
      <Cone position={[1.4, 0, 0]} />
      <TorusKnot position={[-1.5, -2.5, 0]} />
    </Canvas>
  );
}
