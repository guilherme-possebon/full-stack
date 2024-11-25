import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme["green-300"]};
    height: calc(100vh - 84px);
    border-radius: 16px;
`

export const LoginTitle = styled.p`
    font-size: 2rem;
    color: ${(props) => props.theme.white};
    margin-bottom: 30px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 500px;
    padding: 30px;
    background-color: white;
    border-radius: 16px;
`

export const ButtonContainer = styled.div`
    width: 100%;
    max-width: 500px;

    & button {
        width: 100%;
        padding: 10px;
        background-color: ${(props) => props.theme["green-500"]};
        color: ${(props) => props.theme.white};
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
`