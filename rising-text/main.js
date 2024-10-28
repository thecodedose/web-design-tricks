const text = "Use this text reveal in your websites".split(" ")

for (let i = 0; i < text.length; i++) {
  const div = document.createElement("div")
  div.classList.add("container")

  const span = document.createElement("span")
  span.innerText = text[i]
  span.classList.add("rising-text")
  span.style.animationDelay = `${i * 200}ms`

  div.appendChild(span)
  document.body.appendChild(div)
}
