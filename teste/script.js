const form = document.querySelector('form')
form.addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('senha')

    const email = emailInput.value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
        event.preventDefault()
        alert('Email inv�lido. Por favor, insira um email v�lido.')
        return
    }

    const password = passwordInput.value
    const uppercaseRegex = /[A-Z]/
    const digitRegex = /\d/
    if (!uppercaseRegex.test(password) || !digitRegex.test(password)) {
        event.preventDefault()
        alert('A senha deve conter pelo menos um caractere mai�sculo e um algarismo.')
        return
    }
})

const phoneInput = document.getElementById('telefone')

    phoneInput.addEventListener('input', function() {
    let phone = this.value.trim() 
    phone = phone.replace(/\D/g, '') 

    if (phone.length > 2) {
            phone = `(${phone.substring(0, 2)}) ${phone.substring(2)}`
    }

    if (phone.length > 10) {
            phone = `${phone.substring(0, 10)}-${phone.substring(10)}`

    }

    if (phone.length == 15) {
        phone = `${phone.substring(0, 14)}${phone.substring(14)}`

}
    
    this.value = phone
})


const inputCpf = document.getElementById('cpf')

inputCpf.addEventListener('input', () => {
  let cpf = inputCpf.value.length;

 if (cpf === 3 || cpf === 7) {

    inputCpf.value += '.'

 }

 else if (cpf === 11){
    inputCpf.value += '-'
 }
})
