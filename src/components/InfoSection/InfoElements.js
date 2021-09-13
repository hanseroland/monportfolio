import styled from 'styled-components'

export const InfoContainer = styled.div`
    color:#fff;
    background:  ${({lightBg}) => (lightBg ? '#131313' : '#c7c7c7')};

    @media screen and (max-width: 768px){
        padding:100px 0;
      
    }
`

export const InfoWrapper = styled.div`
       display:grid;
       z-index: 1;
       height: 600px;
       width: 90%;
       margin-right: auto;
       margin-left:auto;
       padding: 0 24px;
       justify-content: center;

       @media screen and (max-width: 768px){
       height: 100%;
    }
`

export const InfoRow =styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px){
       grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1'  'col2 col2' ` )};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2; 
`

export  const TextWrapper = styled.div`
    max-width: 540px;
    padding-top:0;
    padding-bottom: 60px;

    @media screen and (max-width: 480px){
       
        max-width: 300px;
        padding-bottom: 30px;
    }


`

export const TopLine = styled.p`
    color: #1DA84E;
    font-size:16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px
`

export const Heading = styled.h1`
    
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#fff;' : '#fbf000')};

    @media screen and (max-width: 480px){
        font-size:32px
    }

`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 12px;
    line-height: 24px;
    text-align:justify;
    color: ${({darkText}) => (darkText ? '#fbf000' : "#fff")};

    @media screen and (max-width: 380px){
     font-size: 12px;
       max-width: 300px;
    }
    
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;

`

export const ImgWrap = styled.div`
    max-width: 500px;
    height:200;
   // box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
  //  border: 7px solid white;
    background-size: cover;
    background-position: center center;
    border-radius: 5px;

 /* &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
   }*/

   @media screen and (max-width: 380px){
       max-width: 300px;
    }

`

export const Img = styled.img`
    width:80%;
    height:50%;
    margin: 10px 10px 4px 10px;
    padding-left: 20px;
   // margin-left: 30%;
`