import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";


type ProfileType = {
    profilePage: ProfilePageType
}

type PostType ={
    posts: Array<PostType>
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

function Profile(PostType) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}
            newPostText = {props.profilePage.newPostText}
            addPost = {props.addPost}
            />
        </div>
    )
}

export default Profile;