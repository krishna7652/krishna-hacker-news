import React from 'react';
import { getTopStories } from '../shared/service';
import Story from '../story/story';
import './app.css';

function App() {

  const [stories, setStories] = React.useState([]);

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getTopStories();
    setStories(data);
  }

  return (
    <div className="container mx-auto my-5 px-2 text-center sm:text-left break-all sm:break-normal">
      <div className="mb-5 text-blue font-bold">Top 10 stories:</div>
      <div className="md:flex md:flex-wrap">
        {
          stories.map(storyId => <Story key={storyId} id={storyId} />)
        }
      </div>
    </div>
  );
}

export default App;