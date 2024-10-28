const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x282a30, 1)

document.getElementById("webGLContainer").appendChild(renderer.domElement)
camera.position.set(0, 0, 5)
camera.lookAt(0, 0, 0)

const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

// Add directional light to simulate sunlight

const modelLoader = new THREE.GLTFLoader()
let model
const joeyArmy = new THREE.Group()
modelLoader.load(
  "./concrete-shape.glb",
  function (gltf) {
    // Add the loaded model to the scene
    model = gltf.scene
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshNormalMaterial()
      }
    })
    for (let i = 0; i < 20; i++) {
      const c = model.clone()
      c.rotation.y = Math.PI / 2
      c.scale.set(0.4 + i * 0.01, 0.4 + i * 0.01, 0.4 + i * 0.01)
      if (i % 2 === 0) {
        c.position.set(i * 0.1, i * 0.1, 0)
      } else {
        c.position.set(i * -0.1, i * -0.1, 0)
      }

      joeyArmy.add(c)
    }

    scene.add(joeyArmy)
  },
  undefined,
  function (error) {
    console.error(error)
  }
)

let mouseX = 0,
  mouseY = 0
let targetRotationX = 0,
  targetRotationY = 0

// Event listener to capture mouse movements
document.addEventListener("mousemove", (event) => {
  // Normalize mouse positions to a range of -0.5 to 0.5
  mouseX = event.clientX / window.innerWidth - 0.5
  mouseY = event.clientY / window.innerHeight - 0.5
})

function animate() {
  requestAnimationFrame(animate)

  if (model) {
    // Update rotation based on mouse position
    targetRotationX = mouseY * Math.PI * 2 // Rotate based on mouse Y position
    targetRotationY = mouseX * Math.PI * 2 // Rotate based on mouse X position

    let i = 0
    while (i < joeyArmy.children.length) {
      joeyArmy.children[i].rotation.x +=
        (targetRotationX - joeyArmy.children[i].rotation.x) * 0.05
      joeyArmy.children[i].rotation.y +=
        (targetRotationY - joeyArmy.children[i].rotation.y) * 0.05
      i++
    }
  }

  renderer.render(scene, camera)
}

// Call the animation loop
animate()
