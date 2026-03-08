import * as THREE from 'https://unpkg.com/three@0.126.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.126.0/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'https://unpkg.com/three@0.126.0/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.0/examples/jsm/controls/OrbitControls.js';

const monkeyScene = new THREE.Scene();
const monkeyCamera = new THREE.PerspectiveCamera(75, 700 / 300, 1, 500);

const monkeyRenderer = new THREE.WebGLRenderer({ alpha: true });
monkeyRenderer.setSize(500, 200);
document.getElementById("monkeyContainer").appendChild(monkeyRenderer.domElement);

// Set background color
const backgroundColor = new THREE.Color(0xcce9f7);
monkeyRenderer.setClearColor(backgroundColor);

// Camera positioning
monkeyCamera.position.z = 5;
monkeyCamera.position.y += 50;
monkeyCamera.position.x = 10;

// Orbit Controls to allow camera rotation
const monkeyControls = new OrbitControls(monkeyCamera, monkeyRenderer.domElement);
// Smooth camera motion
monkeyControls.enableDamping = true; 
monkeyControls.dampingFactor = 0.05;
// Allow zooming in/out
monkeyControls.enableZoom = true; 
// Allow panning
monkeyControls.enablePan = true; 

// DRACOLoader to handle Draco compression
const monkeyDracoLoader = new DRACOLoader();
// Point to the correct Draco decoder path
monkeyDracoLoader.setDecoderPath('https://unpkg.com/three@0.126.0/examples/js/libs/draco/');  

let monkey; 

// GLTFLoader to load the model
const monkeyLoader = new GLTFLoader();
 // Attach the DRACOLoader to the GLTFLoader
monkeyLoader.setDRACOLoader(monkeyDracoLoader);

monkeyLoader.load('./models/monkey.glb', function(gltf) {
    monkey = gltf.scene;
    monkeyScene.add(monkey);

    // Initial scaling and rotation of the model
    monkey.scale.set(200, 200, 200);
    monkey.rotation.y = 0;


}, function(error) {
    console.error(error);
});

// Ambient light for general illumination
const monkeyLight = new THREE.AmbientLight(0xf7e2cc, 1.5);
monkeyScene.add(monkeyLight);

function monkeyAnimate() {
    requestAnimationFrame(monkeyAnimate);
    // Update OrbitControls
    monkeyControls.update(); 
    monkeyRenderer.render(monkeyScene, monkeyCamera);
}

monkeyAnimate();

window.addEventListener('resize', () => {
    monkeyCamera.aspect = 700 / 300;
    monkeyCamera.updateProjectionMatrix();
    monkeyRenderer.setSize(700, 300);
});

/* DUCK------------------------------------------------------------------------------------- */
const duckScene = new THREE.Scene();
const duckCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);

const duckRenderer = new THREE.WebGLRenderer({ alpha: true });
duckRenderer.setSize(500, 200);  
document.getElementById("duckContainer").appendChild(duckRenderer.domElement);

const duckBackgroundColor = new THREE.Color(0xcce9f7);
duckRenderer.setClearColor(duckBackgroundColor);

duckCamera.position.z = 0;
duckCamera.position.y = 150;
duckCamera.position.x = 70;

const duckControls = new OrbitControls(duckCamera, duckRenderer.domElement);
duckControls.enableDamping = true; 
duckControls.dampingFactor = 0.05;
duckControls.enableZoom = true; 
duckControls.enablePan = true; 

const duckDracoLoader = new DRACOLoader();
duckDracoLoader.setDecoderPath('https://unpkg.com/three@0.126.0/examples/js/libs/draco/');  

let duck;

const duckLoader = new GLTFLoader();
duckLoader.setDRACOLoader(duckDracoLoader);  

duckLoader.load('./models/duck.glb', function(gltf) {
    duck = gltf.scene;
    duckScene.add(duck);

    duck.scale.set(200, 200, 200);
    duck.rotation.y = 0;
}, function(error) {
    console.error(error);
});

const duckLight = new THREE.AmbientLight(0xf7e2cc, 1.5); 
duckScene.add(duckLight);

function duckAnimate() {
    requestAnimationFrame(duckAnimate);
    duckControls.update();
    duckRenderer.render(duckScene, duckCamera);
}

duckAnimate();

window.addEventListener('resize', () => {
    duckCamera.aspect = 500 / 200;
    duckCamera.updateProjectionMatrix();
    duckRenderer.setSize(500, 200);
});
/* LAMP--------------------------------------------------------------------------------------------------- */
const lampScene = new THREE.Scene();
const lampCamera = new THREE.PerspectiveCamera(75, 700 / 300, 1, 500);

const lampRenderer = new THREE.WebGLRenderer({ alpha: true });
lampRenderer.setSize(500, 200);
document.getElementById("lampContainer").appendChild(lampRenderer.domElement);

const lampBackgroundColor = new THREE.Color(0xcce9f7);
lampRenderer.setClearColor(lampBackgroundColor);

lampCamera.position.z = 80;
lampCamera.position.y += 160;
lampCamera.position.x = 70;

const lampControls = new OrbitControls(lampCamera, lampRenderer.domElement);
lampControls.enableDamping = true; 
lampControls.dampingFactor = 0.05;
lampControls.enableZoom = true; 
lampControls.enablePan = true;

const lampDracoLoader = new DRACOLoader();
lampDracoLoader.setDecoderPath('https://unpkg.com/three@0.126.0/examples/js/libs/draco/');  

let lamp;

const lampLoader = new GLTFLoader();
lampLoader.setDRACOLoader(lampDracoLoader); 

lampLoader.load('./models/lamp.glb', function(gltf) {
    lamp = gltf.scene;
    lampScene.add(lamp);

    lamp.scale.set(200, 200, 200);
    lamp.rotation.y = 0;


}, function(error) {
    console.error(error);
});


const lampLight = new THREE.AmbientLight(0xf7e2cc, 1.5);
lampScene.add(lampLight);

function lampAnimate() {
    requestAnimationFrame(lampAnimate);
    lampControls.update(); 
    lampRenderer.render(lampScene, lampCamera);
}

lampAnimate();

window.addEventListener('resize', () => {
    lampCamera.aspect = 700 / 300;
    lampCamera.updateProjectionMatrix();
    lampRenderer.setSize(700, 300);
});
