import React from 'react';

import ProfileImage from '../../assets/images/perfil.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                    <img src={ProfileImage} alt="Alberto" />
                    <div>
                        <strong>Alberto Lutz</strong>
                        <span>Química</span>
                    </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias da química avançada.
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;