import React from 'react';
import Comment from '../comment/comment';
import { getItemDetails } from '../shared/service';
import './story.css';

type storyProps = {
    id: number;
}

function Story(props: storyProps) {

    const [storyDetails, setStoryDetail] = React.useState<any>(null);
    const [showComments, setShowComments] = React.useState<boolean>(false);

    React.useEffect(() => {
        (async () => {
            const data = await getItemDetails(props.id);
            if (data) {
                data.timeText = data.time ? new Date(data.time).toLocaleTimeString() : null;
                setStoryDetail(data);
            }
        })();
    }, [props.id]);

    if (!storyDetails) {
        return null;
    }

    return (
        <div className={`hover:shadow-lg p-6 max-w-xl min-w-md mx-5 my-4 bg-white rounded-xl shadow-md ${showComments ? "md:w-full md:max-w-full" : ""}`}>
            <div className="mb-5"><a className="hover:text-blue-800 hover:underline cursor-pointer" href={storyDetails.url}>{storyDetails.title}</a></div>
            <div className="mt-3"><span className="font-bold">By:</span> {storyDetails.by}</div>
            <div>{storyDetails.timeText}</div>
            <button onClick={() => setShowComments(!showComments)} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mt-3 rounded">{showComments ? 'Hide Comments' : `Show Comments (${(storyDetails.kids || []).length})`}</button>
            <div className={!showComments ? "hidden" : ""}>
                {(storyDetails.kids || []).slice(0, 20).map((kidId: number) => <Comment key={kidId} id={kidId} />)}
            </div>
        </div>
    );
}

export default Story;