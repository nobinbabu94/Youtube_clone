import React from "react";
import { ACCOUNT_LOGO } from "../constant";



export const CommentList = ({ comments }) => {
    return (
        comments.map((comment, index) => (
            <div key={index}>
                <Comment data={comment} />
                <div className="ml-10 border border-l-gray-950 pl-4">
                    <CommentList comments={comment.replies} />
                </div>
            </div>
        )
        )
    )
}

const Comment = ({ data }) => {
    const { user, comment, replies } = data;
    return (
        <div className="flex flex-col">
            <div className="flex my-2 mx-1 bg-gray-200 p-2 rounded">
                <img className='w-8 h-8' src={ACCOUNT_LOGO} alt='user' />
                <div className="pl-3">
                    <h3 className="font-bold">{user}</h3>
                    <h3>{comment}</h3>
                </div>
            </div>
        </div>
    )
};

export default Comment;
