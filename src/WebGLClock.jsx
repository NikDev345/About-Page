import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

export default function WebGLClock({ h, m }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = 80;
    const height = 80;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.OrthographicCamera(
      -40, 40, 40, -40, 0.1, 100
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    /* ===== CLOCK FACE ===== */
    const face = new THREE.Mesh(
      new THREE.CircleGeometry(30, 64),
      new THREE.MeshStandardMaterial({
        color: 0x050505,
        metalness: 0.2,
        roughness: 0.9
      })
    );
    scene.add(face);

    /* ===== HAND MATERIAL ===== */
    const handMaterial = new THREE.MeshBasicMaterial({
      color: 0x00e5e5
    });

    const hourHand = new THREE.Mesh(
      new THREE.BoxGeometry(18, 2, 1),
      handMaterial
    );
    hourHand.position.x = 9;

    const minuteHand = new THREE.Mesh(
      new THREE.BoxGeometry(26, 2, 1),
      handMaterial
    );
    minuteHand.position.x = 13;

    scene.add(hourHand, minuteHand);

    /* ===== LIGHT ===== */
    const light = new THREE.PointLight(0x00ffff, 1, 200);
    light.position.set(0, 0, 10);
    scene.add(light);

    /* ===== BLOOM ===== */
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      0.6,   // strength (CONTROLLED)
      0.4,   // radius
      0.85   // threshold
    );
    composer.addPass(bloomPass);

    /* ===== ANIMATION ===== */
    const animate = () => {
      hourHand.rotation.z = THREE.MathUtils.degToRad(-h);
      minuteHand.rotation.z = THREE.MathUtils.degToRad(-m);
      composer.render();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [h, m]);

  return <div ref={mountRef} />;
}
