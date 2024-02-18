import '../styles/Contact.css'
import { useState } from 'react'

function validarEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export default function Contact() { 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [consulta, setConsulta] = useState('')
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
    }
    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
    }
    const handleConsultaChange = (e) => {
        const newConsulta = e.target.value;
        setConsulta(newConsulta);
    }
    function handleSubmit(e) {
        e.preventDefault()
        const mailValido = validarEmail(email)
        if (mailValido) {
            setConsulta('')
            setEmail('')
            setName('')
            alert("Consulta enviada")
        } else {
            alert("Ingrese un mail valido")
        }
    }

    return (
        <section id="contacto" className="w-full h-screen flex flex-col justify-center items-center">
            <h2 className='text-5xl font-bold text-zinc-100 text-center titulo underline custom-h1'>Contactenos</h2>
            <form className="flex flex-col pt-5" onSubmit={(e)=>{handleSubmit(e)}}>
                <div className='mb-3 flex justify-between'>
                <input type="text" onChange={handleNameChange} placeholder="Nombre y Apellido" value={name} className='w-[250px] border border-black p-1'/>
                <input type="text" onChange={handleEmailChange} placeholder="Correo electronico" value={email} className='w-[250px] border border-black p-1'/>
                </div>
                <textarea onChange={handleConsultaChange} placeholder="Ingrese su consulta" cols="70" rows="1" value={consulta} className='h-32 mb-5 border border-black p-1'></textarea>
                <input className="bg-[#9e9b9b] m-auto pr-4 pl-4 text-white rounded-sm border border-black hover:bg-[#646464] hover:cursor-pointer" type="submit" id="botonEnvio"/>
            </form>
        </section>
    )
    
    
}