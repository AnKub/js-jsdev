import { 
  createElement, 
  createHeader,
} from "../../script/layout"

const page = document.querySelector('page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'My BloG')

page.append(title)
// method for add title
// ===================
const POST_LIST = [
{
category:[
{text: 'Important', id:1},
{text: 'New', id:2},
],
info: 'Go to hell planner, and prepare to presantation like Jobs',
date: '25/01',
viewed: false,
},
{
category: [{text: 'New', id:2}],
info: 'We try to finde more like-minded people',
date: '24/01',
viewed: true,
},
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
  const post = createElement(
    'div',
    postData.viewed
    ? 'post button post--viewed'
    : 'post button',
    )

const postHeader = createElement('div', 'post__header')

const ctegoryList = createElement(
  'div',
  'post__category--list',  
  )
  postData.category.forEach((category) =>{
  const categorySpan = createElement(
    'span',
    `post__category post__category--${category.id}`,
    category.text,
    )
    categoryList.append(categorySpan)
  })

const dateSpan = createElement(
  'span',
  'post__date',
  postData.date,
  )
  postHeader.append(categoryList, dateSpan)

const infoParagraph = createElement(
  'p',
  'post__info',
  postData.info,
  )

  post.append(postHeader, infoParagraph)

  postList.append(post)

  })
  return postList

}

const post = createPost()
page.append(post)