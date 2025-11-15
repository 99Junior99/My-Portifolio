function sendMail() {
    let parms = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        assunto: document.getElementById("assunto").value,
        mensagem: document.getElementById("mensagem").value,
    }
    emailjs.send("service_l0bjzmq", "template_tncjydr", parms).then(alert("Email Enviado!!!"))
}