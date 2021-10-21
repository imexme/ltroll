import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PropsType = {
    title: string
    posts: string
    profilePage: () => void
}

function Profile(props: PropsType) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost} />
        </div>
    )
}

export default Profile;