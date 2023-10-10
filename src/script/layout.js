export const createElement = (tag, className, text) =>{
  const elem = document.createElement(tag)
  
  if(className) {
  elem.className = className
  }
  if(text){
  elem.innerHTML = text
  }
  
  return elem
  }

const HEADER_BUTTON_LIST = [
{
  width: 24,
  height: 24,
  src:"/svg/back.png",
},
{
  width: 24,
  height: 24,
  src:"/svg/ava.png",
},
]


  export const createHeader = () => {
  const header = createElement('header','header')
  HEADER_BUTTON_LIST.forEach((params) => {
    // make button
    const button = createElement('button', 'button')
// make picture
    const img = createElement('img')
    Object.entries(params).forEach(([key, value]) => {
    img[key] = value
    })
  button.append(img)
  header.append(button)
  })
  return header
  }