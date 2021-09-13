import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
  position: relative;
  z-index: 1;
  top: 0;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
   
    font-size: 2rem;
    color: fff;
  }
  h2 {
    
    font-size: 1.5rem;
    color: #1DA84E;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
  h6 {
    margin: 2rem 0;
    font-size: 1rem;
    line-height: 1.1;
  }

  @media screen and (max-width: 768px){
    h1 {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #fff;
    }
  p {
    margin: 2rem 0;
    font-size: 1rem;
    line-height: 1;
  }
      
    }
`;

export const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;

  @media screen and (max-width: 768px){
      padding: 1rem 1rem;
      font-size: 0.7rem;
        
    }
`;

export const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 450px;

  @media screen and (max-width: 768px){
       width: 70%;
       height: 70%;
      
    }
`;

export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 60px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 100px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 300px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 50px;
    right: 75px;
  }
`;