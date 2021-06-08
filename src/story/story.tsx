import React from 'react';
import { getItemDetails } from '../shared/service';
import './story.css';

type storyProps = {
    id: number;
}

function Story(props: storyProps) {

    const [storyDetails, setStoryDetail] = React.useState<any>(null);

    React.useEffect(() => {
        (async () => {
            const data = await getItemDetails(props.id);
            setStoryDetail(data);
        })();
    }, [props.id]);

    if (!storyDetails) {
        return null;
    }

    return (
        <div className="story">
            story {storyDetails.id}
            <div className="comments">
                {(storyDetails.kids || []).slice(0, 20).map((kidId: number) => <div>Comment {kidId}</div>)}
            </div>
        </div>
    );
}

export default Story;