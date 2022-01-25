import styled from "styled-components";

export const Containers = styled.div`
padding:50px 20px;
background-color:#07090bf2;
color: #EDDF4A;
margin-top:70px;
border-radius: 10px 10px 0 0 ;
box-shadow: 10px 10px 0 0  rgba(49, 44, 44, 0.623);




`

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
max-width:1000px;
margin:0 auto;
`

export const Column = styled.div`
display:flex;
flex-direction:column;
text-align:center;
margin-left:60px;
`

export const Row = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(230px,1fr));
grid-gap:20px;

@midia(max-width: 1000px){
    grid-template-columns:repeat(auto-fill, minmax(200px,1fr));
}
`

export const Link = styled.a`
color:#ddd;
margin-bottom:20px;
font-size:15px;
text-decoration: none;
font-family: 'Nunito', sans-serif;



&:hover{
    color: #eddf4a9d;
    transition:200ms ease-in;
    
}
`

export const Title = styled.p`
font-size:18px;
margin-bottom:40px;
font-weight:bold;
font-family: 'Nunito', sans-serif;
text-align: center;
color: #EDDF4A;

`