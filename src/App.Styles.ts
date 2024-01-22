import styled from "styled-components";
import { MdOutlineContentCopy } from "react-icons/md";

export const Card = styled.div`
    width: 300px;
    height: 260px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    justify-content: space-between;

    padding: 22px
`;

export const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: #1A202C;
    margin-bottom: 0;
`;

export const FileInput = styled.input`
    border: 1px solid #E2E8F0;
    border-radius: 4px;

    width: 100%;

    padding: 8px 4px;

    background-color: #E2E8F0;
`;

export const Footer = styled.footer`
    gap: 8px;
    width: 100%;
`;

export const Error = styled.p`
    color: #E53E3E;
    font-size: 1em;
    
    margin: 4px;

    text-align: center;
`;
export const Success = styled.p`
    color: #48BB78;
    font-size: 1em;
    
    margin: 4px;

    text-align: center;
`;
export const Loading = styled.p`
    color: #1A202C;
    font-size: 1em;
    
    margin: 4px;

    text-align: center;
`;

export const FooterWrapper = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
`;

export const Button = styled.button`
    width: 100%;
    height: 48px;

    border: none;
    border-radius: 4px;

    background-color: #48BB78;

    color: #fff;
    font-weight: bold;

    cursor: pointer;
`;

export const ButtonCopyBoard = styled.button`
    width: 56px;
    height: 48px;

    border: none;
    border-radius: 4px;

    background-color: #E2E8F0;

    color: #1A202C;
    font-weight: bold;

    cursor: pointer;
`;

export const IconCopy = styled(MdOutlineContentCopy)`
    width: 20px;
    height: 20px;
    color: #44337A;
`;
