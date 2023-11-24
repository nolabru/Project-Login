const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => 
{
    document.body.classList.toggle('light'); 
});

const login = document.getElementById('enviar');

function alterarNome()
{
    const nomeAlterado = document.getElementById('name');
    const user = document.getElementById('user');
    const password = document.getElementById('password');

    if (user.value !== '' && password.value !== '')
    {
        nomeAlterado.innerHTML = user.value; 
    }
    else
    {
        swal("Preencha os Dados Corretamente", {buttons: false,timer: 2000,});
    }

    user.value = '';
    password.value = '';

};

login.addEventListener('click', alterarNome);

