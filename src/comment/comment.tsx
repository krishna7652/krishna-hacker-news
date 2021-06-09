import React from 'react';
import { getItemDetails } from '../shared/service';
import './comment.css';

type commentProps = {
    id: number;
}

function Comment(props: commentProps) {

    const [commentDetails, setCommentDetails] = React.useState<any>(null);

    React.useEffect(() => {
        (async () => {
            let data = await getItemDetails(props.id);
            if (data) {
                data.timeText = data.time ? new Date(data.time).toLocaleTimeString() : null;
                setCommentDetails(data);
            }
        })();
    }, [props.id]);

    if (!commentDetails) {
        return null;
    }

    const getComment = () => {
        return {
            __html: commentDetails.text
        }
    }

    return (
        <div className="hover:shadow-lg hover:bg-purple-300  px-4 py-3 rounded relative shadow-md my-5">
            <div dangerouslySetInnerHTML={getComment()} />
            <div className="mt-3"><span className="font-bold">By:</span> {commentDetails.by}</div>
            <div>{commentDetails.timeText}</div>
        </div>
    );
}

export default Comment;