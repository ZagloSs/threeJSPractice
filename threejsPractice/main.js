import * as THREE from "three";
import { ThreeMFLoader } from "three/examples/jsm/Addons.js";


//Scene
const scene = new THREE.Scene();

//Geometry
const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(3, 64, 64),
    new THREE.MeshStandardMaterial({color:"#00ff83"})
);
scene.add(mesh);


//Camera
const camera = new THREE.PerspectiveCamera(
    45,
    800/600
);
camera.position.z = 20
scene.add(camera)

//Light
const light = new THREE.PointLight(0xffffff, 1, 100)
light.position.set(0, 10, 10)
scene.add(light)

// Renderer
var canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas});
renderer.setSize(800, 600);


//Render
renderer.render(scene, camera);




