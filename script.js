function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "testfabrica@email.com" && senha == "123456"){
        alert('Sucesso');
        location.href = "page.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}