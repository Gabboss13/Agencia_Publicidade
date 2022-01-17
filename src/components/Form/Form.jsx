import React, {useState } from 'react'
import'./Form.css'
// import axios from 'axios';

 export default () => {



  async function post (Data) {
      const response = await fetch('https://advertising-agency-clients.herokuapp.com/clients', {
    method: 'POST',
    headers: {
      Accept: 'application/form-data',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(Data),
  }) 
  const json = await response.json() 

  console.log(json.clients)
}



    const [postData, setPostData] = useState({
        "name": "",
        "email": "",
        "document": "",
        "phone": "",
        "address": "",
        "campaign": "",
        "observations": ""
      })

      const handleInputChange = e => {
        setPostData({ ...postData, [e.target.name]: e.target.value })
      };

      function handleSubmit(event) {
        event.preventDefault();
      }
    
        return (
            <div className="body-form" >
                <div className='box3'>
                <h1> Como podemos ajudar?? </h1>
                 <form onSubmit={handleSubmit}>
                 <fieldset> 
                    <input className='input-form' type="text" placeholder="Nome"  name="name" onInput={handleInputChange} value={postData.name} />
                </fieldset>  

                <fieldset>
                     <input className='input-form' type="text" placeholder='Email' name= "email" onInput={handleInputChange} value={postData.email}  />
                </fieldset>  

                <fieldset>
                     <input className='input-form' type={'text'} placeholder='CPF/CNPJ' name='document' onInput={handleInputChange} value={postData.document}  />
                </fieldset>
                
                <fieldset>
                     <input className='input-form' type={'text'}  placeholder='Telefone' name='phone' onInput={handleInputChange} value={postData.phone}  />
                </fieldset>

                <fieldset>
                    <input className='input-form' type={'text'} placeholder='Endereço' name='address' onInput={handleInputChange} value={postData.address}   />
                </fieldset>

                <fieldset>
                    <input className='input-form' type={'text'} placeholder='Campanha' name='campaign' onInput={handleInputChange} value={postData.campaign}  />
                </fieldset>

                <fieldset>
                    <input className='input-form' type={'text'} placeholder='Observações' name='observations' onInput={handleInputChange} value={postData.observations}  />
                </fieldset>
                 <button className='btn-forms' onClick={()=> post (postData)}>
                    Enviar!</button>  
            </form>
            <div className='box4'>
                
                <div>
                    <p>Já é cadastrado?<a href="/signup"> Entra aí!</a></p> 
                </div>
                <small>Ao criar o seu cadastro, você concorda com a nossa Política de Privacidade.</small>
            </div>
                </div>
            </div>
           // ATENÇÃO!!!!! lembrar de colocar o caminho da página signin no href acima!!!!
        )
}

//validar o formulário
//conectar a API
//Hover
//botão submit