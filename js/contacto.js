
const form = document.getElementById('contactForm');


async function handleSubmitContact(e){
    e.preventDefault();

    const data = new FormData(this);

    const res =await fetch(this.action, {
        method: this.method,
        body: data,
        headers:{
            'Accept':'application/json'
        }
    })

    if(res.ok){
        this.reset();
        alert('Gracias por contartarme, te escribiré pronto')
    }
}


form.addEventListener('submit', handleSubmitContact);

