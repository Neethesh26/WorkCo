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
      const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 45;
      camera.position.y = 5;
      camera.position.x = 0;



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
          gltf.scene.scale.set(0.7, 0.7, 0.7);
          gltf.scene.position.set(10, 2.5, 0);
          gltf.scene.rotation.set(0.4 ,0 , 0);
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

      function setModel() {
        var roomChildren = {};

        scene.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }

            // console.log(child);

            if (child.name === "Aquarium") {
                // console.log(child);
                child.children[0].material = new THREE.MeshPhysicalMaterial();
                child.children[0].material.roughness = 0;
                child.children[0].material.color.set(0x549dd2);
                child.children[0].material.ior = 3;
                child.children[0].material.transmission = 1;
                child.children[0].material.opacity = 1;
                child.children[0].material.depthWrite = false;
                child.children[0].material.depthTest = false;
            }

            if (child.name === "Mini_Floor") {
                child.position.x = -0.289521;
                child.position.z = 8.83572;
            }

            // if (
            //     child.name === "Mailbox" ||
            //     child.name === "Lamp" ||
            //     child.name === "FloorFirst" ||
            //     child.name === "FloorSecond" ||
            //     child.name === "FloorThird" ||
            //     child.name === "Dirt" ||
            //     child.name === "Flower1" ||
            //     child.name === "Flower2"
            // ) {
            //     child.scale.set(0, 0, 0);
            // }

            child.scale.set(0, 0, 0);
            if (child.name === "Cube") {
                // child.scale.set(1, 1, 1);
                child.position.set(0, -1, 0);
                child.rotation.y = Math.PI / 4;
            }

            roomChildren[child.name.toLowerCase()] = child;
        });

        const width = 0.5;
        const height = 0.7;
        const intensity = 1;
        const rectLight = new THREE.RectAreaLight(
            0xffffff,
            intensity,
            width,
            height
        );
        rectLight.position.set(7.68244, 7, 0.5);
        rectLight.rotation.x = -Math.PI / 2;
        rectLight.rotation.z = Math.PI / 4;
        scene.add(rectLight);

        roomChildren["rectLight"] = rectLight;

        // const rectLightHelper = new RectAreaLightHelper(rectLight);
        // rectLight.add(rectLightHelper);
        // console.log(this.room);

        // this.actualRoom.scale.set(0.11, 0.11, 0.11);
    }

      setModel();
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
    scene.background = new THREE.Color(0xfff1cc);
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

  return <div><div ref={divRef} /></div>;
}