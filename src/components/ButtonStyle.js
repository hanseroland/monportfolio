import styled from 'styled-components'
import {Link} from 'react-scroll';


export const Button = styled(Link)`
       
        background: ${({primary}) => (primary ? '#1a1359' : '#fbf000')};
        white-space:nowrap;
        padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
        color : ${({blue}) => (blue ? '#1a1359' : '#fff')};
        font-size: ${({fontBig})=> (fontBig ? '20px' : '16px')};
        outline: none;
        border:none; 
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items: center;
        transition: all 0.2s ease-in-out;

        &:hover {
            transition: all 0.2s ease-in-out;
            background:  ${({primary}) => (primary ? '#1a1359' : '#fbf000')};
        }
`