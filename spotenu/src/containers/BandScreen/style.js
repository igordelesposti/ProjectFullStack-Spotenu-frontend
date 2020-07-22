import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import HeadPhone from "../../img/dashboardband.jpg"
import Typography from '@material-ui/core/Typography'

export const PaperBand = styled(Paper)`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    justify-content: center;
    width: 400px;
    margin: 0 auto;
    margin-top: 250px;
    gap: 30px;

`

export const HeadphoneImg = styled.div`
 background-image: url(${HeadPhone});
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
    background-color: #f7f1e3;

`

export const Title = styled(Typography)`
   letter-spacing: 5px;
`
export const TypographyAlbum = styled.span`
    letter-spacing: 1px;
    font-size: 30px;
    font-family: 'Lato';
    text-align: center;
    margin: 0 auto;
    
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