const cursor = document.getElementById("cursor")
const inner = document.getElementById('inner');

let mouseX = 0,
  mouseY = 0

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX
  mouseY = e.pageY
})

let cursorX = 0,
  cursorY = 0

function animate() {
  cursorX += (mouseX - cursorX) * 0.1
  cursorY += (mouseY - cursorY) * 0.1

  cursor.style.left = cursorX + "px"
  cursor.style.top = cursorY + "px"

  requestAnimationFrame(animate)
}

animate()

document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        cursor.style.height = "50px";
        cursor.style.width = "50px";
        inner.style.height = "20px";
        inner.style.width = "20px";
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'A') {
        cursor.style.height = "40px";
        cursor.style.width = "40px";
        inner.style.height = "0px";
        inner.style.width = "0px";
    }
});
