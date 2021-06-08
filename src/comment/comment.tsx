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
            const data = await getItemDetails(props.id);
            setCommentDetails(data);
        })();
    }, [props.id]);

    if (!commentDetails) {
        return null;
    }

    return (
        <div className="comment">
            comment {commentDetails.id}
        </div>
    );
}

export default Comment;