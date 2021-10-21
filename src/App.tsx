import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                   <BrowserRouter>
                    <Route path='/dialogs' component = {Dialogs} />
                       <Route path='/profile'
                          component={ Dialogs } />

                       <Profile
                               profilePage={props.profilePage}
                               addPost={props.addPost}
                               updateNewPostText={props.updateNewPostText}
                           /> }/>
                   </BrowserRouter>
                </div>
            </div>
        )
}
type MessageType = {
    message:string
}


export default App;