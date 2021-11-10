import React, {ChangeEvent} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {changeNewText, PostType, RootStateType} from "./redux/state";
import {addPost} from "./redux/state";

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
                       <Route path={'/hello'}
                              render={() => <HelloMessage
                                  posts={state.profilePage.posts}
                                  message={state.profilePage.messageForNewPost}
                                  addPostCallback={addPost}
                                  changeNewTextCallback={changeNewText}
                              />
                              } />
                       </div>
                   </BrowserRouter>
                </div>
            </div>
        )
}
type MessageType = {
    message: string
    posts: Array<PostType>
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (postText: string) => void

}

function HelloMessage (props: MessageType) {
    const addPost = () => {
            props.addPostCallback(props.message)
        }
    }
    const newTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)
    }
    return <div>
        {props.message}
        <hr/>
        {props.posts.map(p => <div key={p.id}>{p.message}<div/>)}
        <hr/>
        <textarea value={props.message} onChange={newTextChange}></textarea>
    <button onClick={addPost}>add post</button>
    </div>
}


export default App;