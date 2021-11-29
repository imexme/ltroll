import Message from "../components/Dialogs/Message/Message";
import {renderTree} from "../render";

// function Store ()

let onChange= () => {

}



export type MessageType = {
    id: number;
    message: string;
}

export type DialogType = {
    id: number;
    name: string;

}
export type PostType = {
    id: number;
    message: string;
    likesCount: number;
}

export type ProfilePageType = {
    posts: Array<PostType>;
    messageForNewPost: string;
    newPostText: string;
}

export type DialogPageType = {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
    newMessageBody: string;
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogPageType;
    sidebar: SidebarType;
}

export type StoreType = {
    _state: RootStateType;
    changeNewText: (newText: string) => void;
    addPost: (postText: string) => void;
    _onChange: (state: RootStateType) => void;
    subscribe: (callback: (store: RootStateType) => void) => void;
    getState: () => RootStateType;
    dispatch: (action: ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>) => void
}



export  type AddPostActionType = ReturnType<typeof addPostAC>
export type ChangeNewTextActionType = ReturnType<typeof changeNewTextAC>
export type ActionsTypes = AddPostActionType | ChangeNewTextActionType


export const addPostAC = (postText: string) => {
        return {
            type: "ADD-POST",
            postText: postText,
        }
}

export const changeNewTextAC = (newText: string) => {
        return {
            type: "CHANGE-NEW-TEXT",
            newText: newText,
        } as const
}


export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: 1, message: 'message 1', likesCount: 12},
                {id: 2, message: 'message 2', likesCount: 11},
                {id: 3, message: 'message 3', likesCount: 11},
                {id: 4, message: 'message 4', likesCount: 11}
            ],
            newPostText: 'fffdff'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'h'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange(this._state)

    },
     addPost (postText: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange(this._state)
    },
    _onChange() {

    },
     subscribe  (callback)  {
        this._onChange = callback
    },
    getState(){
        return this._state
    },

    dispatch (action){
    if (action.type === "ADD-POST") {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: action.postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange(this._state)
    } else if (action.type === "CHANGE-NEW-TEXT")
        {
            this._state.profilePage.messageForNewPost = action.newText
            this._onChange(this._state)
    }
}
}

export default store