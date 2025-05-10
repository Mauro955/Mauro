
function P(){
    const Nome=document.getElementById("Nome").value;
    const Senha=document.getElementById("Senha").value;
    const Gmail=document.getElementById("Gmail").value;
    if(!Nome || !Senha || !Gmail){
        var a="Preencha Todos os Campos"
        alert(a)
    }
    else{
        alert("Conta Criada Com Sucessso!!!")
    }
    
    }

    function V(){
        if(Nome===Nome &&  Senha===Senha){
       alert(Nome)

    }
    }