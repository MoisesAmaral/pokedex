import React from 'react'

import './Footer.css'


const Footer = () => {
  return(
    <footer className="footer">
        <div className="container">
            <div className="footer-copyright">
                {
                    /* adcionando ano automatico no footer */
                }
                <p>© {new Date().getFullYear()} - Todos os direitos reservados - <span>Desenvolvido por: <strong> MoisesDev</strong></span></p>
            </div>
        </div>

    </footer>
  )      
    
  
}


export default Footer