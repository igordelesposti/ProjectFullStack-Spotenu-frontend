import { push, replace } from "connected-react-router";
import React from "react";
import { connect } from "react-redux";
import { createAlbum } from "../../Actions/album";
import { getGenres } from "../../Actions/genres";
import { routes } from "../Router";
import { AlbumImg, BodyGradient, CreateButton, CustomForm, Inputs, PaperBand, Select, Title, TypographyAlbum, Wrapper, WrapperContent } from "./style";


class CreateAlbum extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            createAlbumForm: "",
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("accessToken")

        if (token === null) {
            alert("Você não está logado")
            this.props.goToLoginScreen();
        } else {
            this.props.getGenres(token)
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({ createAlbumForm: {...this.state.createAlbumForm, [name]: value}})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const token = localStorage.getItem("accessToken")

        this.props.createAlbum(token, this.state.createAlbumForm)

        this.setState({ createAlbumForm: "" });
    }

    render() {
        const { createAlbumForm } = this.state
        return (
            <BodyGradient>
                <WrapperContent>
                    <br /><br />
                    <Title variant="h1">Mostre seu álbum ao mundo.</Title>
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
                                    value={createAlbumForm.name}
                                    onChange={this.handleInputChange}
                                    InputProps={{ placeholder: "Nome do álbum" }}
                                />

                                <Select
                                    name="id_genre"
                                    required
                                    onChange={this.handleInputChange}
                                >
                                    <option>Selecione o gênero *</option>
                                    {this.props.genres &&
                                        this.props.genres.map((genre) => {
                                            return (
                                                <option value={genre.id}>{genre.name}</option>
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
        genres: state.genre.genres
    }
}
const mapDispatchToProps = dispatch => {
    return {
        goToCreateAlbum: () => dispatch(push(routes.createAlbum)),
        getGenres: (accessToken) => dispatch(getGenres(accessToken)),
        createAlbum: (token, body) => dispatch(createAlbum(token,body)),
        goToLoginScreen: () => dispatch(replace(routes.login)),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateAlbum);