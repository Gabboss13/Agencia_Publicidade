import React, { Component } from 'react'
import { StyledForm } from './Form'
// import { Button } from '../Botao/Button';


export default class Form extends Component {
    // constructor (props){
    //     super(props)
    //     this.state = {
    //         fields: {},
    //         errors: {}
    //     }

    // }

    // handleValidation(){
    //     let fields = this.state.fields
    //     let errors = {}
    //     let formIsValid = true

    //     if(!fields["name"]){
    //         formIsValid = false;
    //         errors["name"] = "Cannot be empty";
    //      }

    //      if(typeof fields["name"] !== "undefined"){
    //         if(!fields["name"].match(/^[a-zA-Z]+$/)){
    //            formIsValid = false;
    //            errors["name"] = "Only letters";
    //         }        

    //      }

    //      if(!fields["email"]){
    //         formIsValid = false;
    //         errors["email"] = "Cannot be empty";
    //      }
 
    //      if(typeof fields["email"] !== "undefined"){
    //         let lastAtPos = fields["email"].lastIndexOf('@');
    //         let lastDotPos = fields["email"].lastIndexOf('.');
 
    //         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
    //            formIsValid = false;
    //            errors["email"] = "Email is not valid";
    //          }
    //     }  
    // }

    


    render(){

        return (
            <StyledForm >
                <div className='box3'>
                <h1> Como podemos ajudar?? </h1>
                 <form>
                 <fieldset> 
                    <input type="text" placeholder="Nome"  name="nome" />
                </fieldset>  

                <fieldset>
                     <input type="text" placeholder='Email' name= "email" />
                </fieldset>  

                <fieldset>
                     <input type={'text'} placeholder='CPF/CNPJ' name='documento' />
                </fieldset>
                
                <fieldset>
                     <input type={'text'}  placeholder='Telefone' name='telefone' />
                </fieldset>

                <fieldset>
                    <input type={'text'} placeholder='Endereço' name='endereco' />
                </fieldset>

                <fieldset>
                    <input type={'text'} placeholder='Campanha' name='campanha' />
                </fieldset>

                <fieldset>
                    <input type={'text'} placeholder='Observações' name='observacao' value = "" />
                </fieldset>
                
            </form>
            <div className='box4'>
                {/* <Button type='submit'>
                    Resolve aí!
                </Button>  */}
                <div>
                    <p>Já é cadastrado?<a href="#"> Entra aí!</a></p> 
                </div>
                <small>Ao criar o seu cadastro, você concorda com a nossa Política de Privacidade.</small>
            </div>
                </div>
            </StyledForm>
           // ATENÇÃO!!!!! lembrar de colocar o caminho da página signin no href acima!!!!
        )
    }
}

//validar o formulário
//conectar a API
//Hover
//botão submit