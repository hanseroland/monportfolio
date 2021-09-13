import React,{useEffect} from 'react'
import {
    Column2,
    Img,
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,

 } from './InfoElements';
import {Button} from '../ButtonStyle';
import { ButtonLink } from '../ButtonLinkStyle';









const InfoSection = (props, primary, dark, dark2) => {

   
    return (
        <>
            <InfoContainer lightBg={props.lightBg} id={props.id} >
                    <InfoWrapper>
                        <InfoRow  imgStart={props.imgStart} >   
                            <Column1>
                            
                              <TextWrapper>
                                  <TopLine>{props.topLine}</TopLine>
                                  <Heading lightText={props.lightText}>{props.headLine}</Heading>
                                  <Subtitle  darkText={props.darkText}>
                                    <ul>
                                        <li>{props.description1}</li>
                                        <li>{props.description2}</li>
                                        <li>{props.description3}</li>
                                    </ul>
                                 </Subtitle>
                                  <BtnWrap>
                                     {props.showButton ? 
                                     <Button  
                                       to="home"  
                                       primary={primary ? 1 : 0}
                                       smooth={true}
                                       duration={500}
                                       spy={true}
                                       exact="true"
                                       offset={-80}
                                       dark={dark ? 1 : 0}
                                       dark2={dark2 ? 1: 0}
                                       >
                                            {props.buttonLabel}
                                        </Button> : 
                                        <ButtonLink
                                            to={props.path} 
                                              
                                        >
                                            {props.buttonLabel}
                                        </ButtonLink>
                                                                               
                                        }
                                  </BtnWrap> 
                              </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap
                                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                    style={{ transform: prop.xys.interpolate(trans) }}
                                >
                                   <Img src={props.img} alt={props.alt} />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
