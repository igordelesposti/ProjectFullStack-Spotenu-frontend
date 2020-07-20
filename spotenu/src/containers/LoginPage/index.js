import React from "react";
import { routes } from "../Router"
import { GridWrapper, WrapperSvg, AvatarSvg, CustomPaper, LoginWrapper, Entrar, Form, Inputs, EntrarButton, Cadastrar, Span } from './style'

export class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        const { email, password } = this.state
        return (
            // <GridWrapper>
                <LoginWrapper>
                    <CustomPaper elevation={3}>
                        <WrapperSvg>
                            <AvatarSvg src={require("../../img/undraw_profile_pic_ic5t.svg")}></AvatarSvg>
                        </WrapperSvg>
                        <Form>

                            <Entrar variant="h6">Para continuar, faça login no Spotenu.</Entrar>
                            <Inputs
                                name="email"
                                label="E-mail"
                                required
                                type="email"
                                variant="outlined"
                                value={email}
                                InputProps={{ placeholder: "email@email.com" }}
                            />

                            <Inputs
                                name="password"
                                label="Senha"
                                required
                                type="password"
                                variant="outlined"
                                value={password}
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
                
            // </GridWrapper>

        )
    }
}

export default LoginPage