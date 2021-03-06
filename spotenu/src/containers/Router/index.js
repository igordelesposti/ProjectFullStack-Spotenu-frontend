import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import SignUpListener from "../SignUpListener";
import SignUpAdministrator from "../SignUpAdministrator";
import SignUpBand from "../SignUpBand"
import ApproveBandScreen from "../ApproveBandScreen";
import AddGenres from "../AddGenres";
import CreateAlbum from "../CreateAlbum";
import CreateMusic from "../CreateMusic";
import BandScreen from "../BandScreen";
import AdministratorScreen from "../AdministratorScreen";

export const routes = {
    root: "/",
    signUpAdministrator: "/user/signupadministrator",
    signUpListener: "/user/signup",
    signUpBand: "/user/signupband",
    approveBandScreen: "/band/approveband",
    login: "/user/login",
    getAllGenres: "/genre/getallgenres",
    addGenres: "/addgenres",
    createAlbum: "/album/create",
    createMusic: "/createmusic",
    bandScreen: "/bandscreen",
    administratorScreen: "/administratorscreen"
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
                <Route exact path={routes.approveBandScreen} component={ApproveBandScreen} />
                <Route exact path={routes.addGenres} component={AddGenres} />
                <Route exact path={routes.createAlbum} component={CreateAlbum} />
                <Route exact path={routes.createMusic} component={CreateMusic} />
                <Route exact path={routes.administratorScreen} component={AdministratorScreen} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router;