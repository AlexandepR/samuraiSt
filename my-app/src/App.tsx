import React, {Component, ComponentType} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from './components/Music/Music'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainerAll from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

type IRecipeProps = mapStateToPropsType & mapDispatchToPropsType

type IRecipeState = {
}

class App extends React.Component<IRecipeProps, IRecipeState> {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='App'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainerAll/>}/>
                        <Route path='/login'
                               render={() => <LoginPage/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeApp: () => void
}


const mapStateToProps = (state:AppStateType):mapStateToPropsType => ({
    initialized: state.app.initialized
})



export default compose<ComponentType> (
    withRouter,
    connect<mapStateToPropsType, mapDispatchToPropsType,{},AppStateType>(mapStateToProps, {initializeApp}))(App);




