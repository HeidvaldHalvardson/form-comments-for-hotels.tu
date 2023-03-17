import {setText, setDate} from "./validation.js";

const form = document.querySelector('#form')

const comments = document.querySelector('#comments')
const commentTemplate = document.querySelector('#comment').content.querySelector('.comment')
const formName = form.querySelector('#name')
const formText = form.querySelector('#text')
const formDate = form.querySelector('#date')

const textValidation = form.querySelector('#text-validation')
const dateValidation = form.querySelector('#date-validation')

formText.focus()

const createComment = () => {
  const comment = commentTemplate.cloneNode(true)
  const name = comment.querySelector('.comment-author')
  const text = comment.querySelector('.comment-text')
  const date = comment.querySelector('.comment-date')

  const deleteButton = comment.querySelector('.comment-delete')
  const likeButton = comment.querySelector('.comment-like')

  !formName.value ? name.textContent = 'Аноним' :
    name.textContent = formName.value

  setText(formText.value, text)
  setDate(formDate.value, date)

  if (setText(formText.value, text) === 0 || setDate(formDate.value, date) === 0) {
    return
  }

  deleteButton.addEventListener('click', () => {
    comment.remove()
  })

  likeButton.addEventListener('click', () => {
     likeButton.querySelectorAll('.like').forEach((item) =>{
      item.classList.toggle('like-toggle')
    })
  })

  comments.append(comment)
  formName.value = ''
  formText.value = ''
  formDate.value = ''
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault()

  createComment()
})

formText.addEventListener('keydown', (evt) => {
  if (evt.key === 'Enter' && evt.ctrlKey) {
    formText.value += `\n`
  } else if (evt.key === 'Enter') {
    evt.preventDefault()
    createComment()
  }
})

formText.addEventListener('input', () => {
  if (textValidation) {
    textValidation.style.display = 'none'
  }
})

formDate.addEventListener('input', () => {
  if (dateValidation) {
    dateValidation.style.display = 'none'
  }
})


