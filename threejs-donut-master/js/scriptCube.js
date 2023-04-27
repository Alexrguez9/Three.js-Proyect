// BASE
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Cube
const size = 1
const cubeGeometry = new THREE.BoxGeometry(size, size, size)
const cubeMaterial = new THREE.MeshStandardMaterial({color: 0x808080})
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// posicion en pantalla
cube.position.x = 0;
cube.position.y = 0;
// rotacion objeto
cube.rotation.x = Math.PI * 0.2
cube.rotation.z = Math.PI * 0.15
scene.add(cube)

// LIGHT
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(1, 2, 0)
scene.add(directionalLight)

// SIZES
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// CAMERA
const camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 0.1, 1000)
// muevo la cámara hacia atrás
camera.position.z = 8
scene.add(camera)

// RENDERER
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true, //suavizado de bordes
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)

/**

 Animate
 */
const clock = new THREE.Clock()
let lastElapsedTime = 0
//renderizado de la escena
function animate () {
    cube.rotation.y += 0.03;
// Render
    renderer.render(scene, camera)
// Call tick again on the next frame
    window.requestAnimationFrame(animate)
}
animate()