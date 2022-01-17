import React from 'react'
import stilo from './home.module.css'
import midiaSocial from '../../assets/images/midiaSocial.png'
import alvo from '../../assets/images/alvo.png'
import dinheiro from '../../assets/images/dinheiro.png'

export default function Home() {
  return (
    <>
    
    <div className={stilo.main}>
    <div className={stilo.titulo}>
        <h1> Agência SIGA</h1>
      </div>
            <a>Nossa gência Siga é uma agência de marketing com mais de 3 meses atuando nos mercados de São Paulo e Rio de Janeiro. São mais de 1000 marcas atendidas nas áreas da tecnologia, educação, indústria, serviços e imóveis. Criamos projeto de campanha multiplataforma para elevar a sua estratégias de marketing da sua empresa criando conexões emocionais entre sua empresa e os seus clientes, de forma organica e natural. Levando a sua empresa ser o destaque por onde passa. </a>

            </div>

 <div class={stilo.coluna}>
<div class={stilo.containerPlano}>

    <div class={stilo.Plano1}><div className={stilo.icon}>
        <img src={alvo} alt="alvo" /></div><p>Quero aumentar a visibilidade do meu site</p></div>

        <div class={stilo.Plano2}><div className={stilo.icon}>
            <img src={midiaSocial} alt="midiaSocial" /></div><p>Quero deixar minhas redes sociais mais bonita e dinamica</p></div>

            <div class={stilo.Plano3}><div className={stilo.icon}>
            <img src={dinheiro} alt="dinheiro" /></div><p>Quero aumentar minhas vendas</p></div>

        </div>
        </div>
        </>
  );
}