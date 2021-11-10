import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MessageType, ProfilePageType} from "../../../redux/state";
import {RootStateType} from "../../../redux/state";



type PostType = {
    message: string
    likesCount: number
}

const MyPosts = ( props: ProfilePageType) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let newPostElement = React.createRef()
    let addPost = () => {
    let text = newPostElement.current.value
        props.addPost(text)
        props.updateNewPostText(text)

    }
let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)

}
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange = {onPostChange} ref={newPostElement}
                    value={newPostText}
                    />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;