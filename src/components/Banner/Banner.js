import React, {useState} from 'react';
import { motion } from 'framer-motion';
import PlanetFive from '../../images/undraw_version_control_re_mg66 (1).svg';
import { 
    Button,
    ColumnLeft,
    ColumnRight,
    Container, 
    Image, 
    Section 
} from './BannerElements';
import Navbar from '../Navbars/Navbar';
import Info from '../InfoSection/Info';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import FormSection from '../FormSection';
import Footer from '../footer/Footer';
import NavMobile from '../navMobile';
import MobileSideBar from '../Navbars/MobileSidebar';


const AboutInfo = 
{
    id:'apropos',
    lightBg: true,
    lightText: true,
    lightTextDesc: true, 
    topLine: "Qui suis-je ?",
    headLine: "Vous êtes à la recherche d'un métier ? Consultez nos offres venant de tout le Gabon",
    description: "Salut! Je m'appelle NGUEMA NTOUGOU Hanse Roland Parfait, mon intérêt pour le développement a commencé "+
                  "au cours d'un stage en 2018 à l'Union Gabonaise de Banque où je devais réaliser une application d'automatisation "+
                  "de requête SQL en Java (Swing). Avec une faible connaissance en programmation dès le départ, j'ai alors relever ce défit. "+
                  "Cette expérience m'a fait comprendre que je pouvais me surpasser. Puis j'ai décidé de m'orienter"+
                  " dans le Génie Loiciel après mon DUT en Réseaux et Télécommubications. \n\n"+
                
                  "J'ai réalisé différents projets, qui m’ont permis d’acquérir des compétences en HTML, CSS, Bootstrap, Material UI, JavaScript, Redux, React.js, React Native, PHP, MySql, MongoDB, Firebase, Express.js et Node.js."+ 
                  "en passant par la gestion des états dans une application React grâce à la bibliothèque Redux.\n\n"+

                  "Je comprends égalements les concepts d'applications à page unique, d'applications Web progressives et d'API Rest.",
                /* "compétences en Back-end. Je suis passionné par l'utilisation "+
                 "de mes divers horizons pour déchiffrer des problèmes difficiles et créer des expériences "+
                 "délicieuses. Je continue de perfectionner mes compétences en développement Web/Mobile Web, en rédaction technique.  \n\n"+
                 "Je développe des sites Web avec HTML, CSS, JavaScript et PHP en utilisant principalement le Framework React conçu par Facebook. "+
                 "Pour les applications mobile j'utilse React Native avec Expo Cli pour la réalisation de petits projets en un de temps record.  \n\n"+
                 "Étant un homme diligent, travailleur et axé sur les résultats, je travaille toujours "+
                 "pour obtenir le meilleur résultat sur chaque projet sur lequel je mets la main.",*/
    buttonLabel: 'Télécharger mon CV',
    imgStart: false,
    img: require('../../images/avatar.svg').default,
    alt: 'logo utilisateur',
    dark: true,
    primary: true,
    darkText: false,
    showButton: false,
    path: require("../../images/Hanse-Roland-Parfait-NGUEMA-Ntougou-CV.pdf").default,
};

const ContactDetail = 
{
   
    id:'contact',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Contactez-moi',
    headLine: " Je suis disponible pour travailler sur vos projets et donner vie à vos idées. Je ne suis qu'à un clic.",
    description1: "Tél.: (221) 77 517 39 37",
    description2: "Fix: (221) 33 825 52 23",
    description3: "Email : rolandntougou@gmail.com",
    description4: "Adresse: Ouest-Foire Cité khandar Lot 8",
    description5: "https://github.com/hanseroland/",
    img: require('../../images/react_uv.svg').default,
    alt: "Logo react",
    imgStart: false,
    dark: true,
    primary: true,
    darkText: false,
};

const Banner = () => {

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
      setIsOpen(!isOpen);
     
  }
 
  return (
    <>
    <MobileSideBar  isOpen={isOpen}  toggle={toggle}  />
    <Navbar   toggle={toggle}/>
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h6
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            SALUT 👋 JE SUIS
          </motion.h6>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            NGUEMA NTOUGOU Hanse Roland Parfait
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            DEVELOPPEUR FULLSTACK
          </motion.h2>
          <motion.h6
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            Je suis un développeur fullstack passionné de React.js et React Native.
          </motion.h6>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: '#67F6E7',
              border: 'none',
              color: '#000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Engagez-moi
          </Button>
        </ColumnLeft>
        <ColumnRight>
        {/*  <Image
            src={PlanetOne}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />*/}
          <Image
            src={PlanetFive}
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
         
         {/* <Image
            src={PlanetThree}
            alt='planet'
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetFive}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />*/}
        </ColumnRight>
      </Container>
    </Section>
             <Info
                   id={AboutInfo.id}
                   lightBg={AboutInfo.lightBg}
                   lightText={AboutInfo.lightText}
                   lightTextDesc={AboutInfo.lightTextDesc}
                   topLine={AboutInfo.topLine}
                   headLine={AboutInfo.headLine}
                   description={AboutInfo.description}
                   buttonLabel={AboutInfo.buttonLabel}
                   imgStart={AboutInfo.imgStart}
                   img={AboutInfo.img}
                   alt={AboutInfo.alt}
                   dark={AboutInfo.dark}
                   primary={AboutInfo.primary}
                   darkText={AboutInfo.darkText}
                   showButton={AboutInfo.showButton}
                   path={AboutInfo.path} 
              />
             <Services/>
             <Portfolio/>
                 <FormSection
                  id={ContactDetail.id}
                  lightBg={ContactDetail.lightBg}
                  lightText={ContactDetail.lightText}
                  lightTextDesc={ContactDetail.lightTextDesc}
                  topLine={ContactDetail.topLine}
                  headLine={ContactDetail.headLine}
                  description1={ContactDetail.description1}
                  description2={ContactDetail.description2}
                  description3={ContactDetail.description3}
                  description4={ContactDetail.description4}
                  description5={ContactDetail.description5}
                  imgStart={ContactDetail.imgStart}
                  img={ContactDetail.img}
                  alt={ContactDetail.alt}
                  dark={ContactDetail.dark}
                  primary={ContactDetail.primary}
                  darkText={ContactDetail.darkText}
              
              />
              <Footer/>
    </>
  );
};

export default Banner;
