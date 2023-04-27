
// BASE
// Canvas
const canvas = document.querySelector('canvas.webgl')
// LOADERS
const loadingManager = new THREE.LoadingManager()
const gltfLoader = new THREE.GLTFLoader(loadingManager)
// TEXTURES
const textureLoader = new THREE.TextureLoader()

// Scene
var scene = new THREE.Scene()

//GLTF Model
let donut = null
// Cargar el modelo GLTF
gltfLoader.load('./assets/donut/scene.gltf', (gltf) => {
    // Obtener el objeto raíz del modelo cargado
        donut = gltf.scene
        // tamaño
        const radius = 6.5
        // posicion en pantalla
        donut.position.x = 0;
        // rotacion objeto
        donut.rotation.x = Math.PI * 0.2
        donut.rotation.z = Math.PI * 0.15
        donut.scale.set(radius, radius, radius)
        scene.add(donut)
}, undefined, (error) => {
    console.error(error);
});

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
var camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 0.1, 1000)
// muevo la cámara hacia atrás
camera.position.z = 6
scene.add(camera)

// RENDERER
var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true, //suavizado de bordes
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)

// ANIMATE
//renderizado de la escena
function animate () {
    if (!!donut) {
        donut.rotation.y += 0.03;
    }
    // Render
    renderer.render(scene, camera)
    // Call tick again on the next frame
    window.requestAnimationFrame(animate)
}
animate()
