import React from 'react'
import styles from './style.module.css'
import avatar1 from '../../assets/images/avatar1.jpg'
import avatar2 from '../../assets/images/avatar2.jpg'
import avatar3 from '../../assets/images/avatar3.jpg'

export default function contact() {
  return (
    <><div className={styles.boxAvatar}>
      <div className={styles.titulo1}>
        <h1 className={styles.titulo2} > Conheça o nosso time!</h1>
      </div>
      <div className={styles.persona1}>
        <div className={styles.profileCard}>
          <div className={styles.caixaImagem}>
            <img className={styles.imagem} src={avatar1} alt="avatar1" />
          </div>
          <div className={styles.caption}>
            <h3 className={styles.nome}>Eloise Taynara</h3>
            <p className={styles.cargo}>Dev Full-Stack</p>
          </div>
        </div>
      </div>
      <div className={styles.persona2}>
        <div className={styles.profileCard}>
          <div className={styles.caixaImagem}>
            <img className={styles.imagem} src={avatar2} alt="avatar2" />
          </div>
          <div className={styles.caption}>
            <h3 className={styles.nome}>João M. Ferreira</h3>
            <p className={styles.cargo}>Dev Full-Stack</p>
          </div>
        </div>
      </div>
      <div className={styles.persona3}>
        <div className={styles.profileCard}>
          <div className={styles.caixaImagem}>
            <img className={styles.imagem} src={avatar3} alt="avatar3" />
          </div>
          <div className={styles.caption}>
            <h3 className={styles.nome}>Gabrielle Freire</h3>
            <p className={styles.cargo}>Dev Full-Stack</p>
          </div>
        </div>
      </div>
    </div>
      <body className={styles.corpo}>
        <div className={styles.container}>
          <form classNome={styles.contact} method="get">
          <h3 className={styles.titulo3}>Contato rápido</h3>
    <h4 className={styles.titulo4}>Entre em contato conosco hoje e receba uma resposta em 24 horas!</h4>
              <fieldset className={styles.caixaF}>
                <input className={styles.campo} type="text" placeholder="Nome" name="nome" />
              </fieldset>
              <fieldset className={styles.caixaF}>
                <input className={styles.campo} type="text" placeholder="Assunto" name="assunto" />
              </fieldset >
              <fieldset className={styles.caixaF}>
                <input className={styles.campo} type="email" placeholder='Email' name="email" />
              </fieldset>
              <fieldset className={styles.caixaF}>
                <textarea className={styles.campo2} rows="8" cols="50" name="mensagem" id="coment" maxlength="300" minlength="20" placeholder="Digite s sua mensagem aqui!"></textarea>
              </fieldset >
              <fieldset className={styles.caixaF}>
                <button className={styles.botao} type="submit">Enviar</button>
              </fieldset>
          </form>
        </div>
      </body>
    </>
  );
}