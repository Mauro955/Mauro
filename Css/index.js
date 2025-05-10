
function validar(){
    const Nome=document.getElementById("Nome").value;
    const Email=document.getElementById("Email").value;
    const Mensagem=document.getElementById("Mensagem").value;
    
    if(!Nome || !Email || !Mensagem){
        alert("Por Favor preencha Todos os Campos")
    }
    else{
        alert("Requerimento Feito Com Sucesso 📧")
    }
};