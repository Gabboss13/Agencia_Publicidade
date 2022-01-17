
import React from 'react'
import styles from './style.module.css'
import avatar1 from '../../assets/images/avatar1.jpg'
import avatar2 from '../../assets/images/avatar2.jpg'
import avatar3 from '../../assets/images/avatar3.jpg'
import github from  '../../assets/images/github.png'
import linkedin from  '../../assets/images/linkedin.png'

export default function Contact() {
  return (
    <><div className={styles.main}>
      <div className={styles.titulo}>
        <h1> Conheça o nosso time!</h1>
      </div>
      <div className={styles.persona1}>
        <div className={styles.profileCard}>
          <div className={styles.img}>
            <img src={avatar1} alt="avatar1" />
          </div>
          <div className={styles.caption}>
          <div className={styles.icon}>
          <a href='https://www.linkedin.com/in/eloise-taynara/' target="_blank"><i className="fab fa-linkedin"></i></a>
            <img src={github} alt="github" />
            <img src={linkedin} alt="linkedin" />
          </div>
            <h3>Eloise Taynara</h3>
            <p>Dev Full-Stack</p>
          </div>
        </div>
      </div>
      <div className={styles.persona2}>
        <div className={styles.profileCard}>
          <div className={styles.img}>
            <img src={avatar2} alt="avatar2" />
          </div>
          <div className={styles.caption}>
            
          <div className={styles.icon}>
            <img src={github} alt="github" />
            <img src={linkedin} alt="linkedin" />
          </div>
            <h3>João Michael Ferreira</h3>
            <p>Dev Full-Stack</p>
          </div>
        </div>
      </div>
      <div className={styles.persona3}>
        <div className={styles.profileCard}>
          <div className={styles.img}>
            <img src={avatar3} alt="avatar3" />
          </div>
          <div className={styles.caption}>
          <div className={styles.icon}>
            <img src={github} alt="github" />
            <img src={linkedin} alt="linkedin" />
          </div>
            <h3>Gabrielle Freire</h3>
            <p>Dev Full-Stack</p>
          </div>
        </div>
      </div>
    </div>

      <div className={styles.box}>
        <h2>Alguma dúvida ou sugestão, entre em contato!</h2>
        <form nome="contact" method="GET">
          <section>
            <fieldset>
              <input type="text" placeholder="Nome" name="nome" />
            </fieldset>
            <fieldset>
              <input type="text" placeholder="Assunto" name="assunto" />
            </fieldset>
            <fieldset>
              <input type="text" placeholder='Email' name="email" />
            </fieldset>
            <fieldset>
              <textarea rows="8" cols="50" name="mensagem" id="coment" maxlength="300" minlength="20" placeholder="Digite s sua mensagem aqui!"></textarea>
            </fieldset>
            <fieldset>
              <button className={styles.botao} type="submit">Enviar</button>
            </fieldset>
          </section>
        </form>
        
      </div>
      <p>Crédito dos icones usados das redes sociais</p>
      <a href="https://www.flaticon.com/br/icones-gratis/github" title="github ícones">Github icons created by IconsBox - Flaticon / </a>
      <a href="https://www.flaticon.com/br/icones-gratis/linkedin" title="linkedin ícones">Linkedin icons created by IconsBox - Flaticon</a>
      </>
  );
}