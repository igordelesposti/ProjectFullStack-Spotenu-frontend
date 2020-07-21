import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { BodyGradient, CreateButton, Inputs, AlbumImg, PaperBand, Wrapper, WrapperContent, Title, TypographyAlbum } from "./style"


class CreateMusic extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            album: '',
        }
    }

    render() {
        const { name, genrer } = this.state
        return (
            <BodyGradient>
                <WrapperContent>
                    <br /><br />
                    <Title variant="h1">Crie sua música.</Title>
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
                                name="album"
                                label="Álbum"
                                required
                                type="text"
                                variant="outlined"
                                value={genrer}
                                InputProps={{ placeholder: "Álbum" }}
                            />

                            <CreateButton color="secondary" variant="contained" >Criar</CreateButton>
                        </PaperBand>
                    </Wrapper>
                </WrapperContent>
            </BodyGradient>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToCreateAlbum: () => dispatch(push(routes.createAlbum)),
        
    }
}
export default connect(null, mapDispatchToProps)(CreateMusic);