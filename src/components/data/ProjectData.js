import ImageOne from '../../images/ecommerce.png'
import ImageTwo from '../../images/company.png'
import ImageThree from '../../images/pizzaWeb.png'
import ImageFour from '../../images/gesStock.png'
import ImageFive from '../../images/pharmApp2.PNG'
import ImageSix from '../../images/weatherApp.PNG'
import ImageSeven from '../../images/article-v2.png'
import ImageHeight from '../../images/home.png'
import ImageNine from '../../images/simplecrud.png'



export  const ProjectData = [
    {
        id:1,
        logo:ImageOne,
        titre:"Site de E-commerce",
        soustitre:"MongoDB + Express + React + Node.js",
        description:"Site web de ecommerce, avec différentes fonctionnalités comme l'authentifiaction des utilisateurs et la gestion des rôles des utilisateurs. "+
        "Ajout , mise à jours et suppression d'articles, gestion du panier d'articles.",
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
        description:"Exemple de site web pour la présentation d'une entreprise de BTP.",
        codeSource:'https://github.com/hanseroland/company',
        lien:'https://hanseroland.github.io/company-v1',
        iconColor:'#e86a0a',
        hoverColor:'#1DA84E',
        footerColor:'#F50057'

    },
    {
        id:3,
        logo:ImageThree,
        titre:"E-commerce pizzas",
        soustitre:"React Js + Redux",
        description:"Boutique en ligne pour la vente de pizza, gestion de panier avec redux (ajouter un article au panier, augmenter la "+ 
            "quantité d'un article, diminuer la quantité d'un article, supprimer un article du panier.",
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
        "avec possibilité d'imprimer les factures au format Pdf, gestion des utilisateurs, gestions des catégories, gestions des achats. "+
        " Visualisation des statistiques avec chart Js.",
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
        description:"Avec ce projet j'ai fait mon entrée dans le développement mobile."+
        " Il est composé de deux principales parties : le Backend  et le Frontend, dans la partie"+
        " Backend nous avons confectionné une API REST avec PHP pour récupérer les données des pharmacies dans une base de données commune puis nous les renvoyons"+
        " au format JSON. Gestion et persistence de l'authentification lors de la première connexion à l'application grâce à l'API context de react et AsyncStorage. Cette application n'est pas terminée, elle reste à améloierer. Elle peut-être d'un véritable bénéfique pour les populations"+
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
        codeSource:'https://github.com/hanseroland/weather-app',
        lien:'',
        iconColor:'#2d2e33',
        hoverColor:'#1DA84E',
        footerColor:'#536DFE'

    },
    {
        id:7,
        logo:ImageSeven,
        titre:"Ecomerce v2",
        soustitre:"MongoDB + Express + React + Node Js",
        description:"Site web de ecommerce avec intégration de Stripe pour le payement par carte banquaire.",
        codeSource:'https://github.com/hanseroland/ecommerce-v2',
        lien:'',
        iconColor:'#ba0f0f',
        hoverColor:'#1DA84E',
        footerColor:'#536DFE'

    },
    {
        id:8,
        logo:ImageNine,
        titre:"Simple CRUD",
        soustitre:"MongoDB + Express + React + Node Js",
        description:"Simple application Create Read Update Delete, pour débutant avec MERN.",
        codeSource:'https://github.com/hanseroland/simplecrudmern',
        lien:'',
        iconColor:'#0f1b57',
        hoverColor:'#1DA84E',
        footerColor:'#536DFE'

    },
    {
        id:9,
        logo:ImageHeight,
        titre:"Tableau de bord",
        soustitre:"React",
        description:"Tableau de bord React, avec gestion des notification lors de l'ajout, modification et suppression des données.",
        codeSource:'https://github.com/hanseroland/dashboard-v1',
        lien:'https://hanseroland.github.io/dashboard-v1/',
        iconColor:'#080c1d',
        hoverColor:'#1DA84E',
        footerColor:'#536DFE'

    }
]
