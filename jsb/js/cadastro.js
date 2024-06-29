var salva = document.getElementById('salva');
var conect =document.getElementById("connect");
var nick=[];
var senhas=[];
//var teste=JSON.parse(sessionStorage.getItem("listadecadastro"));
//console.log(teste);

function lista_cadastrados(){
    let lista= document.getElementById('lista');
    lista.innerHTML ="";
    nick.forEach((cada,ind) =>{
        lista.innerHTML += `  <tr>
            <th>${ind+1}</th>
            <th>${cada}</th>
            <th><button type="button" class="btn btn-outline-primary"><i class="bi bi-brush-fill"></i></button><button type="button" class="btn btn-outline-danger"><i class="bi bi-trash3"></i></button></th>
        </tr>`
    })
}
function versetem(cra){
    if( nick.indexOf(cra)<=0){
        return true;
    }else{
        return false;
    }
}
//function verifica(x){
   // for(let i=0;i <1;)
    //    nick.forEach(elem =>{
      //      if(elem = x){
       //         return true
       //         i++;
       //     }else
        //    return false
      //  })
 //   }
try{
    salva.addEventListener("click", evento=>{
        let nome = document.getElementById('nick');
        let senha = document.getElementById('senha');
       // if(verifica(nome)){
       if((nome.value =="")||(senha.value=="")){
        alert("falta algo");
        focus(nome);
       }else{
        if(versetem(nome.value)){
            alert("ja tem");
        }else{
            nick.push(nome.value)
        senhas.push(senha.value)
        nome.value = "";
        senha.value = "";
        console.log(nick,senhas);
        alert('cadastrado')
        //window.location.href="index2.html";
        lista_cadastrados()

        }
        
       // window.sessionStorage.setItem("listadecadastro",JSON.stringify(nick));
        //var teste=JSON.parse(sessionStorage.getItem("listadecadastro"));
    //}else{
    //}
}})
}catch(erro){
    console.log('ta procurando oq?')
}
try{
    conect.addEventListener('click', even=>{
        let nome = document.getElementById('nick');
        let senha = document.getElementById('senha');
       // if(verifica(nome)){
            alert(`<a href="index.html">Cadastrar?</a>`)
       // }else{
            alert("connecta")
       // }
        lista_cadastrados()
    })
}catch(erro){
    console.log('ta procurando oq?')
}