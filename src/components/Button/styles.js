import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #CDCDCD;
    background-color: #87CEFA;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    border-radius: 0.5rem;
    margin: 1px;
    
    &:hover {
        opacity: 0.6;
    }

    ${({variant}) => variant === "secondary" && css`
        padding: 18px 20px;
    `}

    ${({color}) => color !== "primary" && css`
        background-color: #00AAF0;
    `}


`