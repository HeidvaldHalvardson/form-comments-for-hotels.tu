import {setText, setDate} from "./validation.js";

const form = document.querySelector('#form')

const comments = document.querySelector('#comments')
const commentTemplate = document.querySelector('#comment').content.querySelector('.comment')
const formText = form.querySelector('#text')
const formDate = form.querySelector('#date')

const textValidation = form.querySelector('#text-validation')
const dateValidation = form.querySelector('#date-validation')

const createComment = (form, evt) => {
  const comment = commentTemplate.cloneNode(true)
  const name = comment.querySelector('.comment-author')
  const text = comment.querySelector('.comment-text')
  const date = comment.querySelector('.comment-date')

  let formNameValue = form.querySelector('#name').value
  let formTextValue = formText.value
  let formDateValue = formDate.value

  const deleteButton = comment.querySelector('.comment-delete')
  const likeButton = comment.querySelector('.comment-like')

  !formNameValue ? name.textContent = 'Аноним' :
    name.textContent = formNameValue

  setText(formTextValue, text)
  setDate(formDateValue, date)

  if (setText(formTextValue, text) === 0 || setDate(formDateValue, date) === 0) {
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
  evt.target.reset()
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault()

  createComment(form, evt)
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
