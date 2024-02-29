
const form = document.getElementById('contactForm');
const container_bottom = document.getElementById('container_bottom');
const loader = document.getElementById('loader');
const button = document.getElementById('button');
const contac_send = document.getElementById('contac_send');
const error = document.getElementById('error');


form.addEventListener('submit', handleSubmitContact);

async function handleSubmitContact(e){
    e.preventDefault();

    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    // const mensaje = document.getElementById('mensaje').value;
    // const subject = document.getElementById('subject').value;
    // const message = document.getElementById('message').value;
    
 
    // if (name.trim() === '' || email.trim() === '' || mensaje.trim() === '' || subject.trim() === '' || message.trim() === '') {
    //     alert('Por favor completa todos los campos.');
    //     return; 
    // }

    button.disabled = true;

    container_bottom.classList.add('oculto')
    loader.innerText = 'Cargando...'
    const data = new FormData(this);
    
    try {
        const res =await fetch(this.action, {
            method: this.method,
            body: data,
            headers:{
                'Accept':'application/json'
            }
        })
        
        if(res.ok){
            this.reset();
            container_bottom.classList.remove('oculto')
            loader.innerText = ''
            contac_send.classList.add('exito');
            contac_send.innerText = 'Gracias por contartarme, te escribiré pronto' ;
            
            setTimeout(() => {
                contac_send.classList.remove('exito');
                contac_send.innerText = '';
            }, 3000);
        }
        
    } catch (error) {
        error.innerText = 'Error al enviar el mensaje intentelo otra vez'
    } finally {
        setTimeout(() => {
            contac_send.innerText = '';
            button.disabled = false;
        }, 3000);
    }

}




