'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function HomePage() {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      // Create a scene
      const scene = new THREE.Scene();

      // Create a camera
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 50;

      // Create a renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      divRef.current.appendChild(renderer.domElement);

      // Create a GLTFLoader
      const loader = new GLTFLoader();
      
      // Create a DRACOLoader instance
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('/draco/'); // replace with the path to the Draco decoder files in your project

      // Create a GLTFLoader
      loader.setDRACOLoader(dracoLoader); // set the DRACOLoader instance on the GLTFLoader
      // Load a glTF resource
      loader.load(
        // URL of the glTF resource
        '/models/final.glb',

        // Function called when the resource is loaded
        (gltf) => {
          // Add the model to your scene
          scene.add(gltf.scene);

          // Render the scene
          renderer.render(scene, camera);
        },

        // Function called while loading is progressing
        (xhr) => {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },

        // Function called when loading has errors
        (error) => {
          console.log('An error happened', error);
        }
      );
      function setSunlight() {
        var sunLight = new THREE.DirectionalLight("#ffffff", 3);
        sunLight.castShadow = true;
        sunLight.shadow.camera.far = 20;
        sunLight.shadow.mapSize.set(2048, 2048);
        sunLight.shadow.normalBias = 0.05;
        // const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        // this.scene.add(helper);

        sunLight.position.set(-1.5, 7, 3);
        scene.add(sunLight)
        var ambientLight = new THREE.AmbientLight("#ffffff", 1);
        scene.add(ambientLight);
    };
      setSunlight();
    function setFloor() {
        var geometry = new THREE.PlaneGeometry(100, 100);
        var material = new THREE.MeshStandardMaterial({
            color: 0xffe6a2,
            side: THREE.BackSide,
        });
        var plane = new THREE.Mesh(geometry, material);
        scene.add(plane);
        plane.rotation.x = Math.PI / 2;
        plane.position.y = -0.3;
        plane.receiveShadow = true;
    }
    scene.background = new THREE.Color(0xffe6a2);
    // setFloor();
      renderer.physicallyCorrectLights = true;
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.CineonToneMapping;
      renderer.toneMappingExposure = 1.75;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      // Function to animate the scene
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      // Start the animation
      animate();
    }
  }, []);

  return <div ref={divRef} />;
}