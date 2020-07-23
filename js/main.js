const completeName = document.querySelector('#logoName');

const name = 'Krishnamurtir'

const write = (name, element) => {
  name = name.split('').reverse()
  const typer = setInterval(() => {
    if (!name.length)
      return clearInterval(typer)

    const lastLetter = name.pop()
    element.innerHTML += lastLetter
  }, 900)
}


write(name, completeName)
