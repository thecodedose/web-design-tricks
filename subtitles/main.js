const subtitle =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(
    " "
  )
const flex = document.querySelector(".flex")
const container = document.querySelector(".container")

const pageHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
)

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY
  container.innerHTML = ""

  const totalHeight = flex.getBoundingClientRect().height
  const percentScrolled = scrollTop / (pageHeight - totalHeight)
  console.log(scrollTop, pageHeight - totalHeight)
  const len = subtitle.length

  for (let i = 0; i < len; i++) {
    const span = document.createElement("span")
    span.classList.add("subtitle")
    span.innerText = subtitle[i]
    if ((i + 1) / len > percentScrolled) {
      span.style.opacity = 0.4
    } else {
      span.style.opacity = 1
    }
    container.appendChild(span)
  }
})
