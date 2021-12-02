import React, {ChangeEvent} from "react";
import {PostType} from "../../../redux/state";



type MessageType = {
    posts: PostType[];
    message: string;
    changeNewTextCallback: (newText: string) => void;
    // dispatch: (action: ActionsTypes) => void
    addPostCallback: (message: string) => void;
}

export function HelloMessage(props: MessageType) {
    const addPost = () => {
        props.addPostCallback(props.message)
    }
    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value)
    }
return( <div>Hello</div>)
// 31-34
//
//     return (<div>
//             {props.message}
//         <hr/>
//         {props.posts.map(p => <div key={p.id}>{p.message}</div>)}
//             <hr/>
//             <textarea value={props.message}
//             onChange={newTextChangeHandler}
//             >
//             </textarea>
//             <button onClick={addPost}>add post</button>
//         </div>)

}