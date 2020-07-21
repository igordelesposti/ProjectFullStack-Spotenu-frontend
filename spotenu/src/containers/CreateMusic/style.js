import styled, { keyframes } from 'styled-components'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import CreateMusic from "../../img/createmusic.jpg"
import Typography from '@material-ui/core/Typography'

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
background: linear-gradient(45deg, #C6FFDD, #FBD786, #f7797d);
background-size: 150% 150%;
animation: ${colors} 13s ease infinite;
`

export const PaperBand = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    justify-content: center;
    width: 370px;
    height: 500px;
    margin: 0 auto;
    margin-top: 150px;
    gap: 30px;

`
export const TypographyAlbum = styled.span`
    letter-spacing: 1px;
    font-size: 30px;
    font-family: 'Lato';
    text-align: center;
    margin: 0 auto;
    
`

export const AlbumImg = styled.div`
 background-image: url(${CreateMusic});
 background-size: cover;
 width: 100%;
 height: 100%;
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
    /* background-color: #f7f1e3; */

`

export const Title = styled(Typography)`
   letter-spacing: 5px;
   border-left: 2px solid whitesmoke;
   border-right: 2px solid whitesmoke;
`


export const CreateButton = styled(Button)`
    border-radius: 2px;
    width: 40%;
`

export const Cadastrar = styled(Typography)`
    margin-top: 28px;
    padding: 5px 20px 5px 20px;
    font-size: 8px;
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
    
`