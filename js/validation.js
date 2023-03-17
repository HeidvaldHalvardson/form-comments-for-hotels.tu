const form = document.querySelector('#form')
const textValidation = form.querySelector('#text-validation')
const dateValidation = form.querySelector('#date-validation')

const setText = (value, text) => {
  if (value.length < 1) {
    textValidation.style.display = 'block'
    textValidation.innerHTML = 'Это поле не может быть пустым'
    return 0
  } else if (value.length > 250) {
    textValidation.style.display = 'block'
    textValidation.innerHTML = 'Максимум 250 символов'
    return 0
  } else {
    text.textContent = value
  }
}

const setDate = (value, dateComment) => {
  const today = new Date()
  const hours = today.getHours() < 10 ? `0${today.getHours()}` : today.getHours()
  const minutes = today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()

  let dateValue = +value.slice(-2)
  let monthValue = +value.slice(5, 7)
  const yearValue = +value.slice(0, 4)

  const dayValue = new Date(yearValue, monthValue - 1, dateValue)
  if (!value || dayValue - new Date(today.getFullYear(), today.getMonth(), today.getDate()) === 0) {
    dateComment.textContent = `сегодня, ${hours}:${minutes}`
  } else if (today < dayValue) {
    dateValidation.style.display = 'block'
    dateValidation.innerHTML = 'Увы, написать комментарий в будущее нельзя...'
    return 0
  } else if (dateValue === today.getDate() - 1 && monthValue === today.getMonth() + 1 && yearValue === today.getFullYear()) {
    dateComment.textContent = `вчера, 18:39`
  } else {
    dateValue = dateValue < 10 ? `0${dateValue}` : dateValue
    monthValue = monthValue < 10 ? `0${monthValue}` : monthValue
    dateComment.textContent = `${dateValue}.${monthValue}.${yearValue}`
  }
}


export {setText, setDate}
