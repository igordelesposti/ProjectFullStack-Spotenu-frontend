import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getBands } from "../../Actions/band"
import { DivIcons, CustomCheckIcon, Cadastrar, DivApprove, CustomCloseIcon, BodyGradient, ApproveSvg, PaperBand, Wrapper, WrapperContent, Title, TypographyAlbum } from "./style"


class ApproveBandScreen extends React.Component {

    componentDidMount() {

        const token = localStorage.getItem("accessToken")

        if (token === null) {
            alert("Você não está logado")
        }else {
            this.props.getBands(token)
        }

        
    }

    render() {

        return (
            <BodyGradient>
                <WrapperContent>
                    <br /><br />
                    <Title variant="h1">Aprovação de bandas.</Title>
                    <Wrapper>
                        <ApproveSvg></ApproveSvg>
                        <PaperBand>
                            {this.props.bands && this.props.bands.map((band) => {
                                return (
                                    <DivApprove>
                                        <Cadastrar variant="h6">{band.name}</Cadastrar>
                                        <DivIcons>
                                            <CustomCheckIcon />
                                            <CustomCloseIcon />
                                        </DivIcons>
                                    </DivApprove>
                                )
                            })}
                            
                        </PaperBand>

                    </Wrapper>
                </WrapperContent>
            </BodyGradient>
        )
    }
}

const mapStateToProps = state => {
    return {
        bands: state.band.bands
    }
}
const mapDispatchToProps = dispatch => {
    return {
        goToCreateAlbum: () => dispatch(push(routes.createAlbum)),
        getBands: (accessToken) => dispatch(getBands(accessToken))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ApproveBandScreen);