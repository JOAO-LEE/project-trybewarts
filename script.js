const characterCounter = document.getElementById('counter');
const inputTextArea = document.getElementById('textarea');
const btn = document.querySelector('#botao');
// const submissionButton = document.getElementsById('submit-btn');
// const formInfo = document.getElementById('evaluation-form')

function login() {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btn.addEventListener('click', login);
const submitButton = document.querySelector('#submit-btn');
const agreementButton = document.querySelector('#agreement');

function buttonAppearance() {
  if (agreementButton.checked) {
    submitButton.removeAttribute('disabled');
  }
}
agreementButton.addEventListener('click', buttonAppearance);

function counter() {
  let initialCount = characterCounter.innerText;
  initialCount = 500;
  characterCounter.innerText = initialCount - inputTextArea.value.length;
}
inputTextArea.addEventListener('keyup', counter);

// formInfo.addEventListener('submit', function(event){
//   event.preventDefault()
// })
