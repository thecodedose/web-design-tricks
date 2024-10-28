document.addEventListener("mousemove", function (event) {
  for (const i = 0; i < 5; i++) {
    const confetti = document.createElement("div")
    confetti.classList.add("confetti")
    document.body.appendChild(confetti)

    const randomX = Math.floor(Math.random() * 30)
    const randomY = Math.floor(Math.random() * 30)

    confetti.style.left = event.clientX + randomX + "px"
    confetti.style.top = event.clientY + randomY + "px"

    const randomColor = Math.floor(Math.random() * 256)
    confetti.style.backgroundColor = "rgb(256, 256, " + randomColor + ")"

    // const randomAngle = Math.floor(Math.random() * 360)
    // confetti.style.transform = `rotate(${randomAngle}deg)`

    // const randomSkew = Math.floor(Math.random() * 10)
    // confetti.style.transform += `skew(${randomSkew}deg, ${randomSkew}deg)`

    setInterval(() => {
      document.body.removeChild(confetti)
    }, 500)
  }
})
