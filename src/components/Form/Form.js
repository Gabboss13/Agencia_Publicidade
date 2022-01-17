import styled from 'styled-components'


export const StyledForm = styled.div`
    display: grid;
    place-items: start-end;
    background-size: cover;
    
    .box3 {
    width: 50%;
    padding: 20px;
    box-shadow: 0 0 5px 0 ;
    margin: 10%  25% ;
    background-color: rgba(67, 38, 58, 0.8);
    border-radius:10px;
    }

    fieldset{
        border: none;
        padding: 15px;
    }
  
    .input-form{
        border: none;
        border-radius: 10px;
        width: 100%;
        height: 35px;
        transition: 0.2s;
        box-shadow: 2px 3px rgba(0,0,0,0.4);
    }


    placeholder {
        color: rgba(255, 255, 255, 0.4)
    }
    
    h1 {
        padding: 10px;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 30px;
        color:rgba(255,255,255, 0.8);
        text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1)
    }

    .box4 {
        text-align: center;
    }

    p {
        color:rgba(255,255,255, 0.7);
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
    }

    a {
        text-decoration:none;
        color: RGB(218, 170, 60)
    }

    small{
        color:rgba(255,255,255, 0.7);
        font-family: 'Roboto', sans-serif;
    }
`
