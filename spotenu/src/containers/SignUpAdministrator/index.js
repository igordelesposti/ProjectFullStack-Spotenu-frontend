import React from "react";
import { routes } from "../Router"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { WrapperSvg, AvatarSvg, CustomPaper, LoginWrapper, Entrar, Form, Inputs, EntrarButton, Cadastrar, Span } from './style'
import { signUpAdministrator } from "../../Actions/users";

export class SignUpAdministrator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signUpAdministratorForm: []
        }
    }


    handleInput = (event) => {
        const { name, value } = event.target

        this.setState({ SignUpAdministratorForm: { ...this.state.SignUpAdministratorForm, [name]: value } })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        this.props.SignUpAdministrator(this.state.SignUpAdministratorForm)
    }
    render() {
        const { signUpAdministratorForm } = this.state
        return (
            
            <LoginWrapper>
                <CustomPaper elevation={3}>
                    <WrapperSvg>
                        <AvatarSvg src={require("../../img/undraw_profile_pic_ic5t.svg")}></AvatarSvg>
                    </WrapperSvg>
                    <Form onSubmit={this.handleFormSubmit}>

                        <Entrar variant="h6">Entre com as informações para criar um usuário Administrador.</Entrar>
                        <Inputs
                            name="name"
                            label="Nome"
                            required
                            type="text"
                            variant="outlined"
                            value={signUpAdministratorForm.name}
                            InputProps={{ placeholder: "Digite seu nome" }}
                        />

                        <Inputs
                            name="email"
                            label="E-mail"
                            required
                            type="email"
                            variant="outlined"
                            value={signUpAdministratorForm.email}
                            InputProps={{ placeholder: "email@email.com" }}
                        />

                        <Inputs
                            name="nickname"
                            label="Nickname"
                            required
                            type="text"
                            variant="outlined"
                            value={signUpAdministratorForm.nickname}
                            InputProps={{ placeholder: "Digite seu apelido" }}
                        />

                        <Inputs
                            pattern="{10,}"
                            name="password"
                            label="Senha"
                            required
                            type="password"
                            variant="outlined"
                            value={signUpAdministratorForm.password}
                            InputProps={{ placeholder: "Insira sua senha." }}
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
        SignUpAdministrator: (body) => dispatch(signUpAdministrator(body))
    }
}

export default connect(null, mapDispatchToProps)(SignUpAdministrator);