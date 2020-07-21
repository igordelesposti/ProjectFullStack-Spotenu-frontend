import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { Cadastrar, Span, CreateButton, HeadphoneImg, PaperBand, Wrapper, WrapperContent, Title, TypographyAlbum } from "./style"


class AdministratorScreen extends React.Component {
    render() {
        return (
            <WrapperContent>
                <br /><br />
                <Title variant="h1">Bem vindo, Administrador</Title>
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

const mapDispatchToProps = dispatch => {
    return {
        goToCreateGender: () => dispatch(push(routes.addGenres)),
        goToApproveBand: () => dispatch(push(routes.approveBandScreen)),
    }
}
export default connect(null, mapDispatchToProps)(AdministratorScreen);