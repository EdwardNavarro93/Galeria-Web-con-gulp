const topbar = document.getElementById('topbar')

const loginModal = document.getElementById('login-modal')
const loginForm = document.getElementById('login-form')
const registerModal = document.getElementById('register-modal')
const registerForm = document.getElementById('register-form')


if(topbar){
    topbar.addEventListener('click', (e)=>{
        const target = e.target.parentElement.dataset.type //si el elemento padre tiene el atributo "data-type"
        if(target != undefined){
            if (target == 'login'){
                loginModal.classList.add('lightbox--show')
            }
            else if(target == 'register'){
                registerModal.classList.add('lightbox--show')
            }
        }
    })
}

if(loginModal){ //siempre es importante preguntar si existe el elemento antes de añadir cualquier evento
    loginModal.addEventListener('click', (e)=>{
        if(e.target.classList.contains('lightbox')){ //si se ha hecho click en la ventana mas no en el formulario
            loginModal.classList.remove('lightbox--show')
        }
    })
}

if(registerModal){ 
    registerModal.addEventListener('click', (e)=>{
        if(e.target.classList.contains('lightbox')){ 
            registerModal.classList.remove('lightbox--show')
        }
    })
}


//prevenir que se envie el formulario 
if(loginForm){
    loginForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        e.target.button.blur()
    })
}

if(registerForm){
    registerForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        e.target.button.blur()
    })
}