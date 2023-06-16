import Comment, { CommentList } from "./Comment";


const commentData = [
    {
        user: 'Nobin',
        comment: 'This is looks cools. Waiting to see more. Very exiting',
        replies: [
            {
                user: 'Albin',
                comment: 'Thank you for your valuable comment. Will do for sure',
                replies: [
                    {
                        user: 'Nobin',
                        comment: 'happy, you give reply...',
                        replies: []
                    }
                ]
            }
        ]
    },

    {
        user: 'Nobin',
        comment: 'This is looks cools. Waiting to see more. Very exiting',
        replies: [
            {
                user: 'Nobin',
                comment: 'happy, you give reply...',
                replies: []
            }
        ]
    },
    {
        user: 'Nobin',
        comment: 'This is looks cools. Waiting to see more. Very exiting',
        replies: [
            {
                user: 'Nobin',
                comment: 'happy, you give reply...',
                replies: []
            }
        ]
    }
]

const CommentsContainer = () => {

    return (

        <div className="mt-5">
              <h1 className="font-bold">Comments</h1>
            <CommentList comments={commentData}/>
        </div>
    )
}

export default CommentsContainer;