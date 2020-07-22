import React from "react";
import { routes } from "../Router"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { signUpBand } from "../../Actions/users"
import { WrapperSvg, AvatarSvg, CustomPaper, LoginWrapper, Entrar, Form, Inputs, EntrarButton, Cadastrar, Span } from './style'

export class SignUpBand extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signUpBandForm: {}
        }
    }

    handleInput = (event) => {
        const { name, value } = event.target

        this.setState({ signUpBandForm: { ...this.state.signUpBandForm, [name]: value } })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        this.props.signUpBand(this.state.signUpBandForm)
    }
    render() {
        const { signUpBandForm } = this.state
        return (

            <LoginWrapper>
                <CustomPaper elevation={3}>
                    <WrapperSvg>
                        <AvatarSvg src={require("../../img/undraw_profile_pic_ic5t.svg")}></AvatarSvg>
                    </WrapperSvg>
                    <Form onSubmit={this.handleFormSubmit}>

                        <Entrar variant="h6">Entre com as informações para criar uma banda.</Entrar>
                        <Inputs
                            name="name"
                            label="Nome"
                            required
                            type="text"
                            variant="outlined"
                            onChange={this.handleInput}
                            value={signUpBandForm.name}
                            InputProps={{ placeholder: "Digite seu nome" }}
                        />

                        <Inputs
                            name="email"
                            label="E-mail"
                            required
                            type="email"
                            variant="outlined"
                            onChange={this.handleInput}
                            value={signUpBandForm.email}
                            InputProps={{ placeholder: "email@email.com" }}
                        />

                        <Inputs
                            name="nickname"
                            label="Nickname"
                            required
                            type="text"
                            variant="outlined"
                            onChange={this.handleInput}
                            value={signUpBandForm.nickname}
                            InputProps={{ placeholder: "Digite um apelido" }}
                        />

                        <Inputs
                            pattern="{6,}"
                            name="password"
                            label="Senha"
                            required
                            type="password"
                            variant="outlined"
                            onChange={this.handleInput}
                            value={signUpBandForm.password}
                            InputProps={{ placeholder: "Insira sua senha." }}
                        />

                        <Inputs
                            name="description"
                            label="Descrição"
                            required
                            type="text"
                            variant="outlined"
                            onChange={this.handleInput}
                            value={signUpBandForm.description}
                            InputProps={{ placeholder: "Descrição" }}
                        />

                        <EntrarButton type="submit" color="primary" variant="contained">Cadastrar</EntrarButton>

                        <Cadastrar>
                            Quer voltar para tela inicial?
                        <Span
                                onClick={this.props.goToHomePage}
                            > Clique Aqui.</Span>
                        </Cadastrar>
                    </Form>
                </CustomPaper>
            </LoginWrapper >

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToHomePage: () => dispatch(push(routes.root)),
        signUpBand: (body) => dispatch(signUpBand(body))
    }
}

export default connect(null, mapDispatchToProps)(SignUpBand);