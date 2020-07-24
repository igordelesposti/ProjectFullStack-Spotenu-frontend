import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router";
import { Cadastrar, Span, CreateButton, HeadphoneImg, PaperBand, Wrapper, WrapperContent, Title, TypographyAlbum } from "./style"
import { getUserById } from "../../Actions/users";

class AdministratorScreen extends React.Component {

    componentDidMount(){
        const token = localStorage.getItem("accessToken")

        if (token === null) {
            alert("Você não está logado como Admin")
            this.props.goToLoginScreen();
        } else {
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
                            Deseja criar um gênero?
                        </TypographyAlbum>
                        <CreateButton
                            onClick={this.props.goToCreateGender}
                            color="secondary"
                            variant="contained">Criar</CreateButton>
                        <Cadastrar>
                            Quer ver todas seus gêneros criados?
                        <Span
                            > Clique Aqui.</Span>
                        </Cadastrar>
                    </PaperBand>
                    <PaperBand>
                        <TypographyAlbum>
                            Deseja aprovar uma banda?
                        </TypographyAlbum>
                        <CreateButton
                            onClick={this.props.goToApproveBand}
                            color="secondary"
                            variant="contained">Aprovar</CreateButton>
                        <Cadastrar>
                            Quer ver todas suas bandas cadastradas?
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
        goToCreateGender: () => dispatch(push(routes.addGenres)),
        goToApproveBand: () => dispatch(push(routes.approveBandScreen)),
        goToLoginScreen: () => dispatch(replace(routes.login)),
        getUserById: (accessToken) => dispatch(getUserById(accessToken))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdministratorScreen);