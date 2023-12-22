const snow = document.querySelector('.snow')
const snowflakes = document.querySelectorAll('.snow__flake')

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min
}

function getRndFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1)
}

snowflakes.forEach(snowflake => {
  snowflake.style.animationDuration = getRndInteger(20, 30) + 's'
})

snowflakes.forEach(snowflake => {
  snowflake.style.animationDuration = getRndInteger(20, 30) + 's'
  snowflake.style.animationDelay = getRndInteger(-1, snowflakes.length / 2) + 's'
})

const snowToggle = document.querySelector('.snow-toggle')

function changeSnowAnimation(animationName) {
  snow.style.setProperty('--animation-name',  animationName)
}

snowToggle.addEventListener('change', event => {
  changeSnowAnimation(event.target.value)
})

const storageKey = 'snow'

snowToggle.addEventListener('change', event => {
  changeSnowAnimation(event.target.value)
  localStorage.setItem(storageKey, event.target.value)
})

document.addEventListener('DOMContentLoaded', () => {
  let currentStorage = localStorage.getItem(storageKey)

  changeSnowAnimation(currentStorage)
})

document.addEventListener('DOMContentLoaded', () => {
  let currentStorage = localStorage.getItem(storageKey)

  if (currentStorage) {
    snowToggle.querySelector(`.snow-toggle__control[value='${currentStorage}']`).checked = true
  }

  changeSnowAnimation(currentStorage)
})

document.addEventListener('DOMContentLoaded', () => {
  let currentStorage = localStorage.getItem(storageKey)

  if (currentStorage) {
    snowToggle.querySelector(`.snow-toggle__control[value='${currentStorage}']`).checked = true
  }

  changeSnowAnimation(currentStorage)

  window.addEventListener('storage', () => {
    changeSnowAnimation(localStorage.getItem(storageKey))
  })
})
