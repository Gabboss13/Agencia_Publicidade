import React from 'react'
import './style.module.css'
import avatar1 from '../../assets/images/avatar1.jpg'
import avatar2 from '../../assets/images/avatar2.jpg'
import avatar3 from '../../assets/images/avatar3.jpg'


export default function Contact (){
 return (
   <div class="main-contact">
       <div className='titulo'>
       <h1> Conheça o nosso time!</h1>
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
 );
}

