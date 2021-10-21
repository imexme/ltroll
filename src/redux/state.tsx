// function Store ()

type MessageType ={
    id: number
    message: string
}

type DialogType ={
    id: number
    name: string
}
type PostType ={
    id: number
    message: string
    likesCount: number
}

type ProfilePageType ={
    id: number
    message: string
    posts: Array<PostType>
}

type DialogPageType ={
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
type SidebarType = {
}

type RootStateType ={
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

let state: RootStateType = {
            profilePage: {
                posts: [
                    { id: 1, message: 'message 1', likesCount: 12 },
                    { id: 2, message: 'message 2', likesCount: 11 },
                    { id: 3, message: 'message 3', likesCount: 11 },
                    { id: 4, message: 'message 4', likesCount: 11 }
                ]
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

//         rerenderEntireTree() {
//             console.log('state')
//         },
//         addPost()  {
//             let newPost = {
//                 id: 5,
//                 message: state.profilePage.newPostText,
//                 likesCount: 0
//             };
//             state.profilePage.posts.push(newPost);
//             state.profilePage.newPostText = '';
//             rerenderEntireTree(state);
//         },
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

export default state;
 // window.store = store;
