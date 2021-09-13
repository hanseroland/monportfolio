import styled from 'styled-components'
import {Link} from 'react-router-dom';

export const ButtonLink = styled.a`
    
    background:  ${({primary}) => (primary ? '#1DA84E' : "#1DA84E")};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${({whiteBlue}) => (whiteBlue ? '#fff' : "#fff")};
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #008647;
        color:#fff;
    }
`