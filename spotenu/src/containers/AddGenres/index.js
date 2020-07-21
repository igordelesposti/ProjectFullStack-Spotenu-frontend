import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { createGenrer } from "../../Actions/genres"
import { CustomForm, BodyGradient, CreateButton, Inputs, AlbumImg, PaperBand, Wrapper, WrapperContent, Title, TypographyAlbum } from "./style"


class AddGenres extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            genrerForm: "",
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("accessToken")

        if (token === null) {
            alert("Você não está logado")
        } 
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({ genrerForm: { ...this.state.genrerForm, [name]: value } })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const token = localStorage.getItem("accessToken");

        this.props.createGenrer(token, this.state.genrerForm)

        this.setState({ genrerForm: "" });

    }
    render() {
        
        return (
            <BodyGradient>
                <WrapperContent>
                    <br /><br />
                    <Title variant="h1">Crie um gênero.</Title>
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
                                    value={this.state.genrerForm.name}
                                    onChange={this.handleInputChange}
                                    InputProps={{ placeholder: "Nome do gênero" }}
                                />
                                <CreateButton type="submit" color="secondary" variant="contained" >Criar</CreateButton>
                            </CustomForm>
                        </PaperBand>

                    </Wrapper>
                </WrapperContent>
            </BodyGradient>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {

        createGenrer: (token, body) => dispatch(createGenrer(token, body))
    }
}
export default connect(null, mapDispatchToProps)(AddGenres);