document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(location);
    
    // Coletar os dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Verificar se os campos estão preenchidos
    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Mensagem enviada com sucesso!");
        // Aqui você pode adicionar a lógica de envio do formulário (ex: usando Fetch API)
    }
    
});