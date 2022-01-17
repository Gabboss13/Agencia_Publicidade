import axios from 'axios';
import React, { Component, useEffect , useState} from 'react';
import api from '../../services/api';
import './Cliente.css'

export default function Clientes() {
    
   const [clients, setClients] = useState ([])

  
useEffect(async () => {

    const response = await api.get('/clients');
    
    console.log(response.data)
    
    setClients(response.data.clients)
}, []) 

function deleteClient() {
    axios
      .delete(` /clients/${clients.id}`)
      .then(() => {
        alert("Cliente Deletado!");
        setClients(null)
      });
  }

  if (!clients) return "Nenhum Cliente Registrado!"


    
 return(
        <div>
            <h1 className='title-get'> Lista de Clientes</h1>
            <div className='display-card'>
            {clients && clients.map ( cliente => (
                <li className='card-clients' key={cliente.id}>
                    <h3>
                        <div> Nome: </div>
                        {cliente.name}
                    </h3>
                    <h3> 
                        <div>Email: </div>
                        {cliente.email}
                    </h3> 
                    <h3> 
                        <div>CPF/CNPJ: </div>
                        {cliente.document}
                    </h3> 
                    <h3> 
                        <div>Telefone: </div>
                        {cliente.phone}
                    </h3> 
                    <h3> 
                        <div>Endereço: </div>
                        {cliente.address}
                    </h3> 
                    <h3> 
                        <div>Campanha: </div>
                        {cliente.campaign}
                    </h3> 
                    <h3> 
                        <div>Observações: </div>
                        {cliente.observations}
                    </h3> 
                    
                    <button className='btn-card' > Deletar </button>
                   <button className='btn-card'> Atualizar </button>
                </li>
            ))}
        </div>
            
        </div>
    )


}

 

   

