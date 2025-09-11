"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

function Main() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Store stars in a ref to avoid the linter warning
  const starsRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.setZ(30);
    camera.position.setX(-3);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const torusGeometry = new THREE.TorusGeometry(10, 2, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({ color: 0xffc80f });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);

    const pointLight = new THREE.PointLight(0xffffff, 200);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill(null)
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);

      // Push the new star into the ref array
      starsRef.current.push(star);
    }

    // Create stars
    Array(200).fill(null).forEach(addStar);

    // Background
    const spaceTexture = new THREE.TextureLoader().load(
      "/podcast/Courtroom.jpg",
    );
    scene.background = spaceTexture;

    // Avatar
    const tadeoTexture = new THREE.TextureLoader().load(
      "/assets/Code-Examples.jpg",
    );
    const tadeoGeometry = new THREE.BoxGeometry(2, 2, 2);
    const tadeoMaterial = new THREE.MeshBasicMaterial({ map: tadeoTexture });
    const tadeo = new THREE.Mesh(tadeoGeometry, tadeoMaterial);
    // scene.add(tadeo);

    // Moon
    const moonTexture = new THREE.TextureLoader().load("/assets/moon.jpg");
    const normalTexture = new THREE.TextureLoader().load("/assets/normal.jpg");

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      }),
    );
    scene.add(moon);

    moon.position.z = 20;
    moon.position.setX(-10);

    tadeo.position.z = -5;
    tadeo.position.x = 1;
    tadeo.position.y = 0;

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      moon.rotation.x += 0.05;
      moon.rotation.y += 0.075;
      moon.rotation.z += 0.05;

      tadeo.rotation.y += 0.01;
      tadeo.rotation.z += 0.01;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.position.y = t * -0.0002;
    }

    document.body.onscroll = moveCamera;
    moveCamera();

    function animate() {
      requestAnimationFrame(animate);

      // Torus rotation
      torus.rotation.x += 0.005;
      torus.rotation.y += 0.0025;
      torus.rotation.z += 0.005;

      // Move stars
      starsRef.current.forEach((star) => {
        star.position.y += Math.sin(Date.now() * 0.001) * 0.02;
        star.position.x += Math.random() * 0.002 - 0.001;
        star.position.z += Math.random() * 0.002 - 0.001;
      });

      renderer.render(scene, camera);
    }
    animate();

    // Cleanup on unmount
    return () => {
      renderer.dispose();
      starsRef.current.forEach((star) => {
        scene.remove(star);
        star.geometry.dispose();
      });
      starsRef.current = [];
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="bg"
        style={{ width: "100%", height: "100vh" }}
      />
      <div className="canvas-overlay"></div>
    </>
  );
}

export default Main;
