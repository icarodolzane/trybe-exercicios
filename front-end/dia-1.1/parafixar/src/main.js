import { nanoid } from 'nanoid'
import './style.css'

const getBtn = document.getElementById('myBtn')

const pswDisplay = document.getElementById('pswDisplay')

const getCopyBtn = document.getElementById('copy')
const getPCopied = document.getElementById('copied')

getBtn.addEventListener('click', () => {
  if (getPCopied) {
    getPCopied.innerText = ''
  }
  pswDisplay.innerHTML = nanoid()
})
getCopyBtn.addEventListener('click', () => {
  const textCopied = pswDisplay.innerText
  navigator.clipboard.writeText(textCopied)
  getPCopied.innerText = 'Copied!'
})
