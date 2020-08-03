import React from 'react';

import './styles.css'

import whatsappIcon from '../../assets/icons/whatsapp.svg'

const TeacherItem: React.FC = () => {
  return (
        <article className="teacher-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/44098728?s=460&u=8ba621114d195ac7562ba67e10e223ac1363d96f&v=4" alt="Gabriel Figueredo"/>
            <div>
              <strong>
                Gabriel Figueiredo
                <span>Física</span>
              </strong>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias.
            <br/>
            Apaixonado por física ja lançou 50 Falcon 9 em nome da SpaceX. 2 Astronautas para a Lua e uma colônia em Marte.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$500,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;