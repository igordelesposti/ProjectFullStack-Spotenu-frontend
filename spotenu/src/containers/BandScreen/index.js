import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router";
import { Cadastrar, Span, CreateButton, HeadphoneImg, PaperBand, Wrapper, WrapperContent, Title, TypographyAlbum } from "./style"
import { getUserById } from "../../Actions/users";



class BandScreen extends React.Component {

    componentDidMount() {
        const token = localStorage.getItem("accessToken")

        if (token === null) {
            alert("Você não está logado como banda")
            this.props.goToLoginScreen();
        } else{
            this.props.getUserById(token)
        }
    }

    render() {
        return (
            <WrapperContent>
                <br /><br />
                <Title variant="h1">Bem vindo, <i>{this.props.users.name}</i></Title>
                <Wrapper>
                    <PaperBand>
                        <HeadphoneImg></HeadphoneImg>
                    </PaperBand>
                    <PaperBand>
                        <TypographyAlbum>
                            Deseja criar um álbum?
                        </TypographyAlbum>
                        <CreateButton
                            onClick={this.props.goToCreateAlbum}
                            color="secondary"
                            variant="contained">Criar Álbum</CreateButton>
                        <Cadastrar>
                            Quer ver todos seus álbuns criados?
                        <Span
                            > Clique Aqui.</Span>
                        </Cadastrar>
                    </PaperBand>
                    <PaperBand>
                        <TypographyAlbum>
                            Deseja criar uma música?
                        </TypographyAlbum>
                        <CreateButton
                            onClick={this.props.goToCreateMusic}
                            color="secondary"
                            variant="contained">Criar Música</CreateButton>
                        <Cadastrar>
                            Quer ver todas suas músicas cadastradas?
                        <Span
                            > Clique Aqui.</Span>
                        </Cadastrar>
                    </PaperBand>
                </Wrapper>
            </WrapperContent>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToCreateAlbum: () => dispatch(push(routes.createAlbum)),
        goToCreateMusic: () => dispatch(push(routes.createMusic)),
        goToLoginScreen: () => dispatch(replace(routes.login)),
        getUserById: (accessToken) => dispatch(getUserById(accessToken))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BandScreen);