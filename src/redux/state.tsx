import Message from "../components/Dialogs/Message/Message";

function Store ()

export type MessageType = {
    id: number
    message: string
}

export type DialogType ={
    id: number
    name: string
}
export type PostType ={
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType ={
    posts: Array<PostType>
}

export type DialogPageType ={
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {
}

export type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
            profilePage: {
                posts: [
                    { id: 1, message: 'message 1', likesCount: 12 },
                    { id: 2, message: 'message 2', likesCount: 11 },
                    { id: 3, message: 'message 3', likesCount: 11 },
                    { id: 4, message: 'message 4', likesCount: 11 }
                ],
                newPostText: 'fffdff'
            },
            dialogsPage: {
                dialogs: [
                    { id: 1, name: 'Dimych' },
                    { id: 2, name: 'Andrew' },
                    { id: 3, name: 'Sveta' },
                    { id: 4, name: 'Sasha' },
                    { id: 5, name: 'Viktor' },
                    { id: 6, name: 'Valera' }
                ],
                messages: [
                    { id: 1, message: 'Hi' },
                    { id: 2, message: 'h' },
                    { id: 3, message: 'Yo' },
                    { id: 4, message: 'Yo' },
                    { id: 5, message: 'Yo' }
                ]
            },
            sidebar: {}
        }

        // rerenderEntireTree() {
        // },
        addPost(){
            let newPost (props:MessageType) = {
             {props.message}
            }
            state.profilePage.posts.push(newPost);
            state.profilePage.newPostText = '';
            rerenderEntireTree(state);
        }
//         updateNewPostText (newText)
//         subscribe (observer) {
//             rerenderEntireTree = observer;
//         }
//     },
//     getState() {
//         return this._state;
//     }
// },
//
//  rerenderEntireTree () {
//     console.log('state')
// },
//
//
//
// export const subscribe = (observer) => {
//        rerenderEntireTree = observer;
// }

 window.store = store;
