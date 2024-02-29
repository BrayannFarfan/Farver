
const form = document.getElementById('contactForm');
const container_bottom = document.getElementById('container_bottom');
const loader = document.getElementById('loader');
const button = document.getElementById('button');
const contac_send = document.getElementById('contac_send');


form.addEventListener('submit', handleSubmitContact);

async function handleSubmitContact(e){
    e.preventDefault();

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
            contac_send.innerText = 'Gracias por contartarme, te escribiré pronto' 
        }
        
    } catch (error) {
        
    } finally {
        contac_send.innerText = '' 
        button.disabled = false;
    }

}




