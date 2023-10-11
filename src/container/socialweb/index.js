import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'People')

page.append(title)

//=====

const TABS = [
  { text: 'Base of knows', isActive: false },
  { text: 'Informations', isActive: true },
]
const createTabs = () => {
  const tabs = createElement('div', 'tabs')

  TABS.forEach((el) => {
    const tab = createElement(
      'button',
      el.isActive ? 'tab__button active' : 'tab__button',
      el.text,
    )
    tabs.append(tab)
  })
  return tabs
}

const tabs = createTabs()
page.append(tabs)

const createArticle = () => {
  const atricle = createElement('div', 'article')
  const image = createElement('img', 'article__image')
  image.src = 'img/ff.jpg'
  const title = createElement(
    'h2',
    'article__title',
    'What is this Base?',
  )
  const text = createElement(
    'p',
    'article__text',
    'A knowledge base is a database that contains inference rules and information about human intelligence and knowledge in a given subject area. In self-guided systems, the knowledge base also contains information that is the result of advanced improvements.',
  )
  const button = createElement(
    'button',
    'article__button',
    'Go with us',
  )
  atricle.append(image)
  atricle.append(title)
  atricle.append(text)
  atricle.append(button)
  return atricle
}
const article = createArticle()
page.append(article)
