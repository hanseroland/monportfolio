import React,{useState,useEffect}  from 'react'
import {
    Column2,
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Img,
 } from './FormElements';
import FormContact from './FormContact';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { IoMdMailOpen } from 'react-icons/io';
import { ImLocation2 } from 'react-icons/im';
import { Link } from 'react-router-dom';


  

const FormSection = (props) => {

    return (
        <>
            <InfoContainer lightBg={props.lightBg} id={props.id} >
                    <InfoWrapper>
                        <InfoRow  imgStart={props.imgStart} >   
                            <Column1>  
                              <TextWrapper>
                                  <TopLine  >{props.topLine}</TopLine>
                                  <Heading lightText={props.lightText}>{props.headLine}</Heading>
                                  <Subtitle  darkText={props.darkText}>
                                    <ul style={{color:'#fff',listStyle:'none'}}  >
                                        <li> <span><FaPhoneAlt size={20} color="#1DA84E" /></span> {props.description1}</li>
                                        <li><span><FaPhoneAlt size={20} color="#1DA84E" /></span>  {props.description2}</li>
                                        <li><span><IoMdMailOpen size={20} color="#1DA84E" /></span> <a style={{color:"white"}} href="mailto:rolandntougou@gmail.com">{props.description3}</a></li>
                                        <li><span><ImLocation2 size={20} color="#1DA84E" /></span>  {props.description4}</li>
                                        <li><span><FaGithub size={20} color="#1DA84E" /></span> <a style={{color:"white"}} rel="noreferrer"  target='_blank' href={props.description5}> Github/hanseroland</a></li>
                                        <li><span><FaLinkedin size={20} color="#1DA84E" /></span> <a style={{color:"white"}} 
                                        rel="noreferrer"  target='_blank' href="https://linkedin.com/in/hanse-roland-parfait-nguema-ntougou-16a907220"> 
                                        Linkedin/hanse-roland-parfait</a></li>
                                    </ul>
                                  </Subtitle>                                 
                              </TextWrapper>
                            </Column1> 
                            <Column2> 
                                <ImgWrap>  
                                  {/* <FormContact/> */}
                                  <Img src={props.img} alt={props.alt} />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default FormSection
