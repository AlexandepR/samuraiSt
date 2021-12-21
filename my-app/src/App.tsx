import React from 'react';
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


class App extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
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

// type MessageType = {
//     message: string
// }

// function HelloMessage(props: MessageType) {
//
//     let postMessageRef = React.createRef();
//
//     const addPost = () => {
//
//     }
//     return <div>
//         {props.message}
//         <textarea ref={post}></textarea>
//         <button onClick={addPost}>add post</button>
//     </div>
// }

export default App;

















// type AppPropsType = {
//     state: StateType
// }
//
// const App: React.FC <AppPropsType> = (props) => {
//
//     return (
//         <BrowserRouter>
//             <div className='app-wrapper'>
//                 <Header/>
//                 <Navbar/>
//                 <div className='app-wrapper-content'>
//                     <Route path='/dialogs'
//                            render ={ () => <Dialogs
//                                dialogs={props.state.dialogsPage.dialogs}
//                                messages={props.state.messagePage.messages}/> } />
//                     <Route path='/profile'
//                            render={ () => <Profile
//                                state={props.state} /> } />
//
//                     <Route path='/news' component={News}/>
//                     <Route path='/music' component={Music}/>
//                     <Route path='/settings' component={Settings}/>
//                 </div>
//             </div>
//         </BrowserRouter>
//     )
// }
//
//
// export default App;
