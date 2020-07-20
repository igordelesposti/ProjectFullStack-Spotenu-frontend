import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import SignUpListener from "../SignUpListener";
import SignUpAdministrator from "../SignUpAdministrator";
import SignUpBand from "../SignUpBand"
// import ApproveBandScreen from "../ApproveBandScreen";
// import AddGenres from "../AddGenres";
import CreateAlbum from "../CreateAlbum";
// import CreateMusic from "../CreateMusic";
import BandScreen from "../BandScreen";

export const routes = {
    root: "/",
    signUpAdministrator: "/user/signupadministrator",
    signUpListener: "/user/signup",
    signUpBand: "/user/signupband",
    // getAllBands: "/band/getallbands",
    login: "/user/login",
    // getAllGenres: "/genre/getallgenres",
    createAlbum: "/album/create",
    // createMusic: "/createmusic"
    bandScreen: "/bandscreen",
}

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.root} component={HomePage} />
                <Route exact path={routes.login} component={LoginPage} />
                <Route exact path={routes.signUpAdministrator} component={SignUpAdministrator} />
                <Route exact path={routes.signUpListener} component={SignUpListener} />
                <Route exact path={routes.signUpBand} component={SignUpBand} />
                <Route exact path={routes.bandScreen} component={BandScreen} />
                {/* <Route exact path={routes.getAllBands} component={ApproveBandScreen} />
                <Route exact path={routes.getAllGenres} component={AddGenres} /> */}
                <Route exact path={routes.createAlbum} component={CreateAlbum} />
                {/* <Route exact path={routes.createMusic} component={CreateMusic} /> */}
            </Switch>
        </ConnectedRouter>
    )
}

export default Router;