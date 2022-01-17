import React from "react";
import "../components/Products/Products.css"
import Product8 from '../assets/images/Product8.jpg';
import Product10 from '../assets/images/Product10.jpg';
import Product11 from '../assets/images/Product11.jpg';
import Product4 from '../assets/images/Product4.jpg';

const Services = () => {
    return (
        <div style={{

            

        }}>



<div class="container-products">
  <div class="box">
    <img src={Product8} alt="..." />
    <div className="overlay">Gerenciamento, planejamento, criação e divulgação em mídias sociais. </div>
    <span>Digital</span>
  </div>
  <div class="box">
    <img src={Product10} alt="..." />
    <div className="overlay">Planejamento editorial de conteúdo para a marcas e pessoas. </div>
    <span>Editorial</span>
  </div>
  <div class="box">
    <img src={Product11} alt="..." /> 
    <div className="overlay">Estratégias para a construção da percepção das marcas  pelo consumidor. </div>
    <span>Branding</span>
  </div>
  <div class="box">
    <img src={Product4} alt="..." /> 
    <div className="overlay">Promoção da visibilidade midiática e construção da imagem de marcas e pessoas. </div> 
    <span>Assessoria</span>
  </div>
</div>
        </div>
    );
};

export default Services;