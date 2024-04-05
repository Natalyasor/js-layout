import { createHeader } from '../../script/layout'
import { createElement } from '../../script/layout2'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const CHANGE_LIST = [
  { info: 'База знань', viewed: true },

  { info: 'Інформація', viewed: false },
]

const createChange = () => {
  const changeTwo = createElement('button', 'change_info')

  CHANGE_LIST.forEach((ch) => {
    const change = createElement(
      'button',
      ch.viewed
        ? 'change__ch change--viewed'
        : 'change__ch',
    )

    const text = createElement(
      'button',
      'change__text',
      ch.info,
    )

    const under = createElement('button', 'change__under')

    change.append(text, under)

    changeTwo.append(change)
  })
  return changeTwo
}

const change = createChange()
page.append(change)

const INFO_LIST = {
  width: 340,
  height: 160,
  src: '/img/img_card.svg',
  title: 'Що таке база знань?',
  text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
  button: 'Перейти до комюніті у Телеграм',
}
const createInfo = () => {
  const infoBox = createElement('div', 'info')

  const img = createElement('img', 'info_img')

  img.src = INFO_LIST.src

  infoBox.appendChild(img)

  const title = createElement(
    'div',
    'info_title',
    INFO_LIST.title,
  )

  infoBox.appendChild(title)

  const textContainer = createElement(
    'div',
    'info_text',
    INFO_LIST.text,
  )

  infoBox.appendChild(textContainer)

  const button = createElement(
    'button',
    'info_button',
    INFO_LIST.button,
  )

  infoBox.appendChild(button)
  return infoBox
}

const info = createInfo()
page.append(info)
