import React, { useState } from 'react';
import MadlibForm from './components/MadlibForm';
import MadlibStory from './components/MadlibStory';
import axios from 'axios';

function App() {
  const [story, setStory] = useState('');

  const generateStory = async (inputs) => {
    try {
      const response = await axios.post('http://localhost:5000/generate', inputs);
      setStory(response.data.story);
    } catch (error) {
      console.error('Error generating story', error);
    }
  };

  return (
    <div className="App">
      <h1>Madlibs Game</h1>
      <MadlibForm onGenerate={generateStory} />
      <MadlibStory story={story} />
    </div>
  );
}

export default App;
