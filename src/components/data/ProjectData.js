import ImageOne from '../../images/ecommerce.png'
import ImageTwo from '../../images/company.png'
import ImageThree from '../../images/pizzaWeb.png'
import ImageFour from '../../images/gesStock.png'
import ImageFive from '../../images/pharmApp2.PNG'
import ImageSix from '../../images/weatherApp.PNG'


export  const ProjectData = [
    {
        id:1,
        logo:ImageOne,
        titre:"Site de E-commerce",
        soustitre:"MongoDB + Express + React + Node.js",
        description:"Site web de ecommerce, avec des différentes fonctionnalités comme l'authentifiaction des utilisateurs, "+
        "création, ajout et suppression d'articles, gestion du panier d'articles.",
        codeSource:'https://github.com/hanseroland/ecommerce-v1',
        lien:'',
        iconColor:'#F50057',
        hoverColor:'#1DA84E',
        footerColor:'#00B0FF'
 
    },
    {
        id:2,
        logo:ImageTwo,
        titre:"Design site web pour entreprise",
        soustitre:"React Js",
        description:"Exemple de site pour la présentation de son entreprise.",
        codeSource:'https://github.com/hanseroland/company',
        lien:'https://hanseroland.github.io/company',
        iconColor:'#e86a0a',
        hoverColor:'#1DA84E',
        footerColor:'#F50057'

    },
    {
        id:3,
        logo:ImageThree,
        titre:"Design site web pour la vente de pizzas",
        soustitre:"React Js",
        description:"Template de boutique en ligne pour la vente pizza",
        codeSource:'https://github.com/hanseroland/e-pizzaria',
        lien:'https://hanseroland.github.io/e-pizzaria',
        iconColor:'#020201',
        hoverColor:'#1DA84E',
        footerColor:'#536DFE'

    },
    {
        id:4,
        logo:ImageFour,
        titre:"Application Web de gestion de stock",
        soustitre:"PHP + MySQL + JQuery + Bootstrap",
        description:"Application web, pour les petites boutiques qui souhaîtent avoir une maîtrise de leur stock."+
        "Cette application contient les fonctionnalités suivantes : Facturations des client "+
        "avec emissionsdes factures au format Pdf, gestion des utilisateurs, gestions des catégories, gestions des achats.",
        codeSource:'https://github.com/hanseroland/gestion-de-stock',
        lien:'',
        iconColor:'#777777',
        hoverColor:'#1DA84E',
        footerColor:'#536DFE'

    },
    {
        id:5,
        logo:ImageFive,
        titre:"Application mobile de Géolocalisation de Pharmacie",
        soustitre:"React Native + PHP + MySQL",
        description:"Avec ce projet j'ai fait mon premier pas dans le développement mobile."+
        " Il est composée de deux principales parties , le Back-end et le Front-end, dans la partie"+
        " Back-end nous avons confectionée une API Rest avec PHP et Mysql pour récupérer les données des pharmacies qui seront ensuite traitées"+
        " au format JSON. Cette application n'est pas terminée, elle reste à améloierée. Elle peut-être d'un véritable bénéfique pour les populations"+
        " vivant dans des zones reculées ou en cas d'urgence dans la nuit par exemple. Elle doit permettre de trouver la pharmacie de garde"+
        " la plus prôche qui possède le produit recherché.",
        codeSource:'https://github.com/hanseroland/geo-pharmacie',
        lien:'',
        iconColor:'#1DA84E',
        hoverColor:'#1DA84E',
        footerColor:'#536DFE'

    },
    {
        id:6,
        logo:ImageSix,
        titre:"Application mobile de Météo",
        soustitre:"React Native",
        description:"Application de prédiction météo en temps réel, dans cette application, nous "+
        "recupérons des données au format JSON depuis l' API Open Weather que nous traitons par la suite.",
        codeSource:'https://github.com/hanseroland/application-meteo',
        lien:'',
        iconColor:'#2d2e33',
        hoverColor:'#1DA84E',
        footerColor:'#536DFE'

    }
]