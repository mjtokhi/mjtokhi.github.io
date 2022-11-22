// IMPORTS

import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import {GLTFLoader} from 'three/examples/jsm/loader/GLTFLoader.js';

const venUrl = new URL('../assets/venusaur.glb', import.meta.url);
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
//renderer.render(scene, camera);

const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame( animate);

  sphere.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}
animate();