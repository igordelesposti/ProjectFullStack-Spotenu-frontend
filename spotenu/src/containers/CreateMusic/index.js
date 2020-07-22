import React from "react";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { getAlbumByUser } from "../../Actions/album";
import { createMusic } from "../../Actions/music";
import { routes } from "../Router";
import { Select, CustomForm, BodyGradient, CreateButton, Inputs, AlbumImg, PaperBand, Wrapper, WrapperContent, Title, TypographyAlbum } from "./style"


class CreateMusic extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            createMusicForm: "",
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("accessToken")

        if (token === null) {
            alert("Você não está logado")
            this.props.goToLoginScreen();
        } else {
            this.props.getAlbumByUser(token)
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({ createMusicForm: { ...this.state.createMusicForm, [name]: value } })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const token = localStorage.getItem("accessToken")

        this.props.createMusic(token, this.state.createMusicForm)

        this.setState({ createMusicForm: "" });
    }
    render() {
        const { createMusicForm } = this.state
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
                            <CustomForm onSubmit={this.handleSubmit}>

                                <TypographyAlbum>
                                    Preencha os campos abaixo.
                                </TypographyAlbum>

                                <Inputs
                                    name="name"
                                    label="Nome"
                                    required
                                    type="text"
                                    variant="outlined"
                                    value={createMusicForm.name}
                                    onChange={this.handleInputChange}
                                    InputProps={{ placeholder: "Nome da música" }}
                                />

                                <Select
                                    name="id_album"
                                    required
                                    onChange={this.handleInputChange}
                                >
                                    <option>Selecione o álbum *</option>
                                    {this.props.albuns &&
                                        this.props.albuns.map((album) => {
                                            return (
                                                <option value={album.id}>{album.name}</option>
                                            )
                                        })}

                                </Select>

                                <CreateButton type="submit" color="secondary" variant="contained" >Criar</CreateButton>
                            </CustomForm>
                        </PaperBand>
                    </Wrapper>
                </WrapperContent>
            </BodyGradient>
        )
    }
}

const mapStateToProps = state => {
    return {
        albuns: state.album.albuns
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToCreateAlbum: () => dispatch(push(routes.createAlbum)),
        goToLoginScreen: () => dispatch(replace(routes.login)),
        createMusic: (token, body) => dispatch(createMusic(token, body)),
        getAlbumByUser: (accessToken) => dispatch(getAlbumByUser(accessToken))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateMusic);