export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}
const HEADER_BUTTON_LIST = [
  {
    src: '/img/nav.svg',
  },
  {
    src: '/img/foto.svg',
  },
]
export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.append(img)

    header.append(button)
  })
  return header
}
