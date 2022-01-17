import React from "react";
import { StyledForm } from '../components/Form/Form'



const Sign = () => {

    return (
        <div style={{

            

        }}>



<StyledForm >
                <div className='box3'>
                <h1> Como podemos ajudar?? </h1>
                 <form>
                 <fieldset> 
                    <input className='input-form' type="text" placeholder="Nome"  name="nome" />
                </fieldset>  

                <fieldset>
                     <input className='input-form' type="text" placeholder='Email' name= "email" />
                </fieldset>  

                <fieldset>
                     <input className='input-form' type={'text'} placeholder='CPF/CNPJ' name='documento' />
                </fieldset>
                
                <fieldset>
                     <input className='input-form' type={'text'}  placeholder='Telefone' name='telefone' />
                </fieldset>

                <fieldset>
                    <input className='input-form' type={'text'} placeholder='Endereço' name='endereco' />
                </fieldset>

                <fieldset>
                    <input className='input-form' type={'text'} placeholder='Campanha' name='campanha' />
                </fieldset>

                <fieldset>
                    <input className='input-form' type={'text'} placeholder='Observações' name='observacao' value = "" />
                </fieldset>
                
            </form>
            <div className='box4'>
                {/* <Button onClick type='submit'>
                    Resolve aí!
                </Button> */ }
                <div>
                    <p>Já é cadastrado?<a href="#"> Entra aí!</a></p> 
                </div>
                <small>Ao criar o seu cadastro, você concorda com a nossa Política de Privacidade.</small>
            </div>
                </div>
            </StyledForm>
        </div>
    );
};

export default Sign;