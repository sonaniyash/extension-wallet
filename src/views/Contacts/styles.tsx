import styled from 'styled-components';
import { VARIABLES } from '../../styles/variables';


export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const AddButton = styled.a`
    position: relative;
    margin: 20px;
    color: ${VARIABLES.$blue_100};
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
`;

export const ImportButton = styled(AddButton)`
    &::before {
            content: "";
            position: absolute;
            width: 19px;
            height: 19px;
            left: -30px;
            top: 1px;
            display: inline-block; 
            background-repeat: no-repeat;
            background-image: url('./assets/google.png');
        }
`;

export const CreateButton = styled(AddButton)`
    &::before {
            content: "";
            position: absolute;
            width: 19px;
            height: 19px;
            left: -25px;
            top: 1px;
            display: inline-block; 
            background-repeat: no-repeat;
            background-image: url('./assets/plus.png');
        }
`;