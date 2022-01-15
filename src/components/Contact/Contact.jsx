import React from 'react'
import './style.css'
import avatar1 from '../../assets/images/avatar1.jpg'
import avatar2 from '../../assets/images/avatar2.jpg'
import avatar3 from '../../assets/images/avatar3.jpg'


export default function Contact() {
  return (
    <><div class="main">
      <div className='titulo'>
        <h2> Conheça o nosso time!</h2>
      </div>
      <div className="persona1">
        <div class="profile-card">
          <div class="img">
            <img src={avatar1} alt="avatar1" />
          </div>
          <div class="caption">
            <h3>Eloise Taynara</h3>
            <p>Dev Full-Stack</p>
          </div>
        </div>
      </div>
      <div className='persona2'>
        <div class="profile-card">
          <div class="img">
            <img src={avatar2} alt="avatar2" />
          </div>
          <div class="caption">
            <h3>João Michael Ferreira</h3>
            <p>Dev Full-Stack</p>
          </div>
        </div>
      </div>
      <div className='persona3'>
        <div class="profile-card">
          <div class="img">
            <img src={avatar3} alt="avatar3" />
          </div>
          <div class="caption">
            <h3>Gabrielle Freire</h3>
            <p>Dev Full-Stack</p>
          </div>
        </div>
      </div>
    </div>
      <div class="box">
        <form nome="contact" method="GET">
          <section class="grid">
            <div class="camp">
              <label>Nome: </label>
              <input type="text" name="name" ></input>
            </div>
            <div class="camp">
            <label>E-mail: </label>
              <input type="text" name="email" placeholder="you@example.com" />
            </div>
              <div class="camp">
            <h4>Mensagem:</h4>
            </div>
            <div class="camp">
              <textarea rows="8" cols="50" name="mensagem" id="coment" maxlength="300" minlength="20"></textarea>
            </div>
            <div class="camp">
              <button type="submit">Enviar</button>
            </div>
          </section>
        </form>
      </div></>
  );
}