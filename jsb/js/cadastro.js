var salva = document.getElementById('salva');
var conect =document.getElementById("connect");
var nick=[];
var senhas=[];

function lista_cadastrados(){
    let lista= document.getElementById('lista');
    lista.innerHTML ="";
    nick.forEach(cada =>{
        lista.innerHTML += `<li>${cada}<button>alterar</button><button>excluir</button></li>`;
    })
}
try{
    salva.addEventListener("click", evento=>{
        let nome = document.getElementById('nick');
        let senha = document.getElementById('senha');
        nick.push(nome.value)
        senhas.push(senha.value)
        nome.value = "";
        senha.value = "";
        console.log(nick,senhas);
        //alert('cadastrado')
        //window.location.href="index2.html";
        lista_cadastrados()
    })
}catch(erro){
    console.log('ta procurando oq?')
}
try{
    conect.addEventListener('click', even=>{
        let nome = document.getElementById('nick');
        let senha = document.getElementById('senha');
        lista_cadastrados()
    })
}catch(erro){
    console.log('ta procurando oq?')
}
