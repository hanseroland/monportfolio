import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


function Footer(props) {
  const {menuItems} = props
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
       <p className='footer-subscription-heading'>
           Materialisez vos idées dès maintenant
        </p>
        <p className='footer-subscription-text'>
          Abonnez-vous à notre newsletter.
       </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input' 
              name='email'
              type='email'
              placeholder='Votre Email'
            />
            <Button buttonStyle='btn--outline'>S'incrire</Button>
          </form>
      </div> 
      </section>*/}
      {/*<div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <img src={Img} alt="excavatrice" style={{maxWidth:"170px", height:'200px'}} />
          </div>
          <div class='footer-link-items'>
            <h2>À propos</h2>
            <Link to='/apropos'>Qui sommes-nous ?</Link>
            <Link to='/equipe'>Notre équipe</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Services</h2>
            {
              menuItems.map((item,index) => (
                <Link key={index}  to={'/service-details/'+`${item._id}`} >{item.titre} </Link>
              ))
            }
          
          </div>
          <div class='footer-link-items'>
            <h2>Contactez-nous</h2>
            <Link to='/'>Tel.: (241) 065.540.168</Link>
            <Link to='/'>Fax: (241) 70 46 60 / 61</Link>
            <Link to='/'>contact@iac-ga.com</Link>
            <Link to='/'>B.P. 5398 – OWENDO (Rue : CITE SNI)</Link>
          </div>
        </div>
      </div>*/}
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
                  HRP
            </Link>
          </div>
          <small class='website-rights'>© Copyright 2021. Tous droits reservés by HRP</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='/'
              target='_blank'
              aria-label='Facebook'
              rel="noreferrer"
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://github.com/hanseroland/'
              target='_blank'
              aria-label='Github'
              rel="noreferrer"
            >
              <i class='fab fa-github' />
            </a>
            {/*<Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
           </Link>*/}
            <a
              class='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='Twitter'
              rel="noreferrer"
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/hanse-roland-parfait-nguema-ntougou-16a907220/'
              target='_blank'
              aria-label='LinkedIn'
              rel="noreferrer"
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;