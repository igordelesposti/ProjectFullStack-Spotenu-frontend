import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { Cadastrar, Span, CreateButton, HeadphoneImg, PaperBand, Wrapper, WrapperContent, Title, TypographyAlbum } from "./style"


class BandScreen extends React.Component {
    render() {
        return (
            <WrapperContent>
                <br /><br />
                <Title variant="h1">Bem vindo, bandax</Title>
                <Wrapper>
                    <PaperBand>
                        <HeadphoneImg></HeadphoneImg>
                    </PaperBand>
                    <PaperBand>
                        <TypographyAlbum>
                            Deseja criar um álbum?
                        </TypographyAlbum>
                        <CreateButton color="secondary" variant="contained">Criar Álbum</CreateButton>
                        <Cadastrar>
                            Quer ver todas seus álbuns criados?
                        <Span
                                onClick={this.props.goToCreateAlbum}
                            > Clique Aqui.</Span>
                        </Cadastrar>
                    </PaperBand>
                    <PaperBand>
                        <TypographyAlbum>
                            Deseja criar uma música?
                        </TypographyAlbum>
                        <CreateButton color="secondary" variant="contained">Criar Música</CreateButton>
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

const mapDispatchToProps = dispatch => {
    return {
        goToCreateAlbum: () => dispatch(push(routes.createAlbum)),
        
    }
}
export default connect(null, mapDispatchToProps)(BandScreen);