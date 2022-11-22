// IMPORTS

import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

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
camera.position.set(10,10, 70);

// RENDER
renderer.render(scene, camera);


// ADD SPHERE
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
});
const sphere = new THREE.Mesh(geometry, material);
sphere.scale.set(.001,.001,.001)
sphere.position.setX(-30)
scene.add(sphere);


///*
// ###### LOAD VENUSAUR GLB ############
const loader = new GLTFLoader();
var pokemon;

// Load a glTF resource
loader.load(
  // resource URL
  "VEN.glb",
  // called when the resource is loaded
  function (gltf) {
    pokemon = gltf.scene;

    const poke = gltf.scene;
    poke.scale.set(7,7,7)
    poke.position.set(0,-10,0)
    scene.add(poke);
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
// #### VENUSAUR END #####
//*/

// BACKGROUND
scene.background = new THREE.Color(0x339C48)

// LIGHTING
const pointLight = new THREE.PointLight(0xffffff, .7);
pointLight.position.set(20, 60, -10);

const hemlight = new THREE.PointLight(0xffffff, .7);
hemlight.position.set(-50, -60, -10);
scene.add( hemlight );

const hemlight1 = new THREE.PointLight(0xffffff, 2.5);
hemlight1.position.set(0, 0, 700);
scene.add( hemlight1 );

scene.add(pointLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper)

// mouse listener
const controls = new OrbitControls(camera, renderer.domElement);

// ANIMATE / RENDER
function animate() {
  requestAnimationFrame(animate);

  pokemon.rotation.y += 0.003;

  controls.update();

  renderer.render(scene, camera);
}

animate();
