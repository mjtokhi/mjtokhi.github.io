// IMPORTS

import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './GLTFLoader.js';

// SCENE INIT
const scene = new THREE.Scene();

// CAMERA INIT
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);

// RENDERER INIT
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// RENDER
renderer.render(scene, camera);


// ADD SPHERE
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial({
  color: 0xfffff,
  //wireframe: true,
});
//const sphere = new THREE.Mesh(geometry, material);
//scene.add(sphere);
//


const loader = new GLTFLoader();

// Load a glTF resource
loader.load(
  // resource URL
  './VEN.glb',
  // called when the resource is loaded
  function (gltf) {
    const venuSaur = gltf.scene;
    scene.add(venuSaur);
    /*
    scene.add(gltf.scene);

    gltf.animations; // Array<THREE.AnimationClip>
    gltf.scene; // THREE.Group
    gltf.scenes; // Array<THREE.Group>
    gltf.cameras; // Array<THREE.Camera>
    gltf.asset; // Object
  */

  },
  // called while loading is progressing
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  // called when loading has errors
  function (error) {
    console.log('An error happened');
  }
);

const controls = new OrbitControls(camera, renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff);
pointLight.position.set( 70, 75, 75);
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}
animate();
