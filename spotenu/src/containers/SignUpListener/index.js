import React from "react";
import { routes } from "../Router"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { WrapperSvg, AvatarSvg, CustomPaper, LoginWrapper, Entrar, Form, Inputs, EntrarButton, Cadastrar, Span } from './style';
import { signUpListener } from "../../Actions/users"

export class SignUpListener extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signUpListenerForm: {}
        }
    }

    handleInput=(event)=>{
        const { name, value } = event.target

        this.setState({signUpListenerForm: {...this.state.signUpListenerForm, [name]: value}})
    }

    handleFormSubmit=(event)=>{
        event.preventDefault()

        this.props.signUpListener(this.state.signUpListenerForm)
    }

    render() {
        
        const { signUpListenerForm } = this.state
        return (
            
            <LoginWrapper>
                <CustomPaper elevation={3}>
                    <WrapperSvg>
                        <AvatarSvg src={require("../../img/undraw_profile_pic_ic5t.svg")}></AvatarSvg>
                    </WrapperSvg>
                    <Form onSubmit={this.handleFormSubmit}>

                        <Entrar variant="h6">Entre com as informações para criar um usuário.</Entrar>
                        <Inputs
                            name="name"
                            label="Nome"
                            required
                            type="text"
                            variant="outlined"
                            onChange={this.handleInput}
                            value={signUpListenerForm.name}
                            InputProps={{ placeholder: "Digite seu nome" }}
                        />

                        <Inputs
                            name="email"
                            label="E-mail"
                            required
                            type="email"
                            variant="outlined"
                            onChange={this.handleInput}
                            value={signUpListenerForm.email}
                            InputProps={{ placeholder: "email@email.com" }}
                        />

                        <Inputs
                            name="nickname"
                            label="Nickname"
                            required
                            type="text"
                            variant="outlined"
                            onChange={this.handleInput}
                            value={signUpListenerForm.nickname}
                            InputProps={{ placeholder: "Digite um apelido" }}
                        />

                        <Inputs
                            pattern="{10,}"
                            name="password"
                            label="Senha"
                            required
                            type="password"
                            variant="outlined"
                            onChange={this.handleInput}
                            value={signUpListenerForm.password}
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
        signUpListener: (body) => dispatch(signUpListener(body))
    }
}

export default connect(null, mapDispatchToProps)(SignUpListener);