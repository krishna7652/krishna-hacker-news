import React from 'react';
import { getTopStories } from '../shared/service';
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
    <div className="App">
      <div>Top 10 stories:</div>
      {
        stories.map(storyId => <div>{storyId}</div>)
      }
    </div>
  );
}

export default App;