import React from "react";
import { routes } from "../Router"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { login } from "../../Actions/users";
import { WrapperSvg, AvatarSvg, CustomPaper, LoginWrapper, Entrar, Form, Inputs, EntrarButton, Cadastrar, Span } from './style'

export class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginForm: {}
        }
    }
    
    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({loginForm: {...this.state.loginForm, [name]: value}})
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        this.props.login(this.state.loginForm)
        console.log(this.state.loginForm)
    }


    render() {
        
        return (
            
                <LoginWrapper>
                    <CustomPaper elevation={3}>
                        <WrapperSvg>
                            <AvatarSvg src={require("../../img/undraw_profile_pic_ic5t.svg")}></AvatarSvg>
                        </WrapperSvg>
                        <Form onSubmit={this.handleFormSubmit}>

                            <Entrar variant="h6">Para continuar, faça login no Spotenu.</Entrar>
                            <Inputs
                                name="email"
                                label="E-mail"
                                required
                                type="email"
                                variant="outlined"
                                onChange={this.handleInputChange}
                                value={this.state.loginForm.email}
                                InputProps={{ placeholder: "email@email.com" }}
                            />

                            <Inputs
                                name="password"
                                label="Senha"
                                required
                                type="password"
                                variant="outlined"
                                onChange={this.handleInputChange}
                                value={this.state.loginForm.password}
                                InputProps={{ placeholder: "Insira sua senha." }}
                            />

                            <EntrarButton type="submit" color="primary" variant="contained">Entrar</EntrarButton>

                            <Cadastrar>
                                Não possui cadastro?
                        <Span> Clique Aqui.</Span>
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
        login: (body) => dispatch(login(body))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);