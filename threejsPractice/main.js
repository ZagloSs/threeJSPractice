import * as THREE from 'three';

//Scene
const scene = new THREE.Scene()

//Sphere
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshStandardMaterial({
    color : '#00ff83',
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Camera  (field of view, aspect ratio,)
const camera = new THREE.PerspectiveCamera(45, 800, 600)
camera.position.z = 20
scene.add(camera)

//Render the scene on the screen
const canva = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canva})
renderer.setSize(800, 600)
renderer.render(scene, camera)



