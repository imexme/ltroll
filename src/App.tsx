import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/state";

type StateProp ={
    state: RootStateType
}

const App = (props: StateProp) => {

    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                   <BrowserRouter>
                       <div>
                    <Route  exact path='/dialogs'  component = {Dialogs} />
                       <Route path='/profile' component = {Profile} />
                       </div>
                   </BrowserRouter>
                </div>
            </div>
        )
}
type MessageType = {
    message:string
}

function HelloMessage (props: MessageType) {
    let postMessageRef = React.createRef()
    const addPost = () => {

    }
    return <div>{props.message}
        <textarea></textarea>
    <button onClick={}>add post</button>
    </div>
}


export default App;