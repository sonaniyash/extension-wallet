import styled from 'styled-components';
import { VARIABLES } from '../../styles/variables';


const Form = styled.form`
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Title = styled.h1`
    width: 100%;
    height: 60px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid ${VARIABLES.$grey_light_3};
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.154px;
`;

const ChangePhotoBlock = styled.div`
    display: flex;
    align-items: center;
    padding: 13px 25px 0 25px;
`;

const PhotoContact = styled.div`
    width: 70px;
    height: 70px;
    background:  ${VARIABLES.$grey_light_3};
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.154px;
    color: ${VARIABLES.$text_200};
`;

const ChangePhoto = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    background: #33373B;
    color: white;
    border-radius: 6px;
    margin: 0 16px;
`;

const Label = styled.label`
    margin: 14px 0 6px 0;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: ${VARIABLES.$text_200};
`;

const Button = styled.button`
    margin: 20px;
    align-self: center;
`;




export { ChangePhoto, Title, Label, Form, Button, PhotoContact, ChangePhotoBlock };
