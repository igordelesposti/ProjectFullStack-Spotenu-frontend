import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { CreateButton, Inputs, AlbumImg, PaperBand, Wrapper, WrapperContent, Title, TypographyAlbum } from "./style"


class CreateAlbum extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            gender: '',
        }
    }

    render() {
        const { name, genrer } = this.state
        return (
            <WrapperContent>
                <br /><br />
                <Title variant="h1">Mostre seu álbum ao mundo.</Title>
                <Wrapper>
                    <PaperBand>
                        <AlbumImg></AlbumImg>
                    </PaperBand>
                    <PaperBand>
                    <TypographyAlbum>
                            Preencha os campos abaixo.
                        </TypographyAlbum>
                        <Inputs
                            name="name"
                            label="Nome"
                            required
                            type="text"
                            variant="outlined"
                            value={name}
                            InputProps={{ placeholder: "Nome do álbum" }}
                        />

                        <Inputs
                            name="genrer"
                            label="Gênero"
                            required
                            type="text"
                            variant="outlined"
                            value={genrer}
                            InputProps={{ placeholder: "Gênero" }}
                        />

                        <CreateButton color="secondary" variant="contained" >Criar</CreateButton>
                    </PaperBand>
                </Wrapper>
            </WrapperContent>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToCreateAlbum: () => dispatch(push(routes.createAlbum)),
        goToBandScreen: () => dispatch(push(routes.signUpBand)),
        goToAdministratorScreen: () => dispatch(push(routes.signUpAdministrator)),
        goToLogin: () => dispatch(push(routes.login))
    }
}
export default connect(null, mapDispatchToProps)(CreateAlbum);