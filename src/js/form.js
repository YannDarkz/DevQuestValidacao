alert('olá ')

const inputText = document.querySelectorAll('.input-form')
const botaoForm = document.querySelector('.btn-form')
const campoObrigatorio = document.querySelectorAll('.obrigatorio')


botaoForm.addEventListener("click", function(){
    inputText.forEach(inputs => {
        if (inputs.value === ""){
            inputs.classList.remove('preenchido')
            inputs.classList.add('nao-preenchido')
            inputs.nextElementSibling.classList.remove('obrigatorio')
            inputs.nextElementSibling.classList.add('obrigatorio-ativo')
           
        }else{
            inputs.classList.remove('nao-preenchido')
            inputs.classList.add('preenchido')
            inputs.nextElementSibling.classList.remove('obrigatorio-ativo')
            inputs.nextElementSibling.classList.add('obrigatorio')
          
        }
    })
})






