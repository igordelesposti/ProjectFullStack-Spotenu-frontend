import styled, { keyframes } from 'styled-components'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import approveBand from "../../img/undraw_accept_request_vdsd.svg"
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';


export const DivApprove = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #dcdde1;
`

export const DivIcons = styled.div`
    display: flex;
    align-items: center;
    width: 10%;
    justify-content: space-around;
    
`

export const CustomCheckIcon = styled(CheckIcon)`
    color: green;
    cursor: pointer;
    
`
export const CustomCloseIcon = styled(CloseIcon)`
    color: red;
    cursor: pointer;
`

const colors = keyframes` {
    0% {
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
}
`
export const BodyGradient = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
width: 100vw;
background: linear-gradient(45deg, #2980B9, #6DD5FA, #ffffff);
background-size: 150% 150%;
animation: ${colors} 13s ease infinite;
`

export const PaperBand = styled(Paper)`
    display: flex;
    flex-direction: column;
    width: 820px;
    margin: 0 auto;
    margin-top: 150px;

`
export const TypographyAlbum = styled.span`
    letter-spacing: 1px;
    font-size: 30px;
    font-family: 'Lato';
    text-align: center;
    margin: 0 auto;
    border-bottom: 1px solid #63cdda;
    
`

export const ApproveSvg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${approveBand});
    background-size: cover;
    margin: 0 auto;
    width: 50%;
    height: 86%;
    margin-top: 345px;
 
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 55vh;
    width: 80vw;
    
    
`

export const WrapperContent = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    overflow: hidden;    
    

`

export const Title = styled(Typography)`
   letter-spacing: 5px;
   border-bottom: 5px solid #8E2DE2;
   
`


export const CreateButton = styled(Button)`
    border-radius: 2px;
    width: 40%;
`

export const Cadastrar = styled(Typography)`
    margin-top: 28px;
    padding: 5px 20px 5px 20px;
    text-align: center;
    opacity: 90%;
`
export const Span = styled.span`
    cursor: pointer;
    :hover{
        color: blue;
        text-decoration: underline;
    }
`

export const Inputs = styled(TextField)`
    width: 60%;
`