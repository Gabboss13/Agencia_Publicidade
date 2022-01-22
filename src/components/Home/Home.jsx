import React from 'react'
import stilo from './home.module.css'


export default function Home() {
  return (
    <>
      <div className={stilo.estrutura1}>
        <div className={stilo.estrutura2}>
          <h5 className={stilo.titul}> Agência SIGA</h5>
          </div>
          <div className={stilo.caixaTexto}>
          <h2 className={stilo.caixaTexto2}> Nossa gência Siga é uma agência de marketing com mais de 3 meses atuando nos mercados de São Paulo e Rio de Janeiro. São mais de 1000 marcas atendidas nas áreas da tecnologia, educação, indústria, serviços e imóveis. Criamos projeto de campanha multiplataforma para elevar a sua estratégias de marketing da sua empresa criando conexões emocionais entre sua empresa e os seus clientes, de forma organica e natural. Levando a sua empresa ser o destaque por onde passa. </h2>
          </div>

        

        <div className={stilo.contPlano}>
          <div className={stilo.PlanoHome}>
            <a className={stilo.linhaHome}>Quer aumentar a visibilidade do meu site</a></div>

          <div className={stilo.PlanoHome}>
            <a className={stilo.linhaHome}>Quer deixar minhas redes sociais mais bonita e dinamica</a></div>

          <div className={stilo.PlanoHome}>
            <a className={stilo.linhaHome}>Quer aumentar minhas vendas</a>
            </div>
            <div className={stilo.final}>
            <a className={stilo.final}>Então entre em contato e para conhecer mais sobre o nosso trabalho!</a>
            </div>

        </div>
        
        </div>
    </>
  );
}