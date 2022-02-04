import store, {PostType} from "./state";
import state from "./state";


const ProfileReducer = (store, action) =>
{
    if (action.type === "ADD-POST") {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: action.postText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._onChange(this._state)
    } else if (action.type === "CHANGE-NEW-TEXT") {
        this._state.profilePage.messageForNewPost = action.newText
        this._onChange(this._state)
    }
    return state
}