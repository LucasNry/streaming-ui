import { useState } from 'react';
import SimpleSearch from './components/SimpleSearch';
import './css/App.css';

function App() {

  const [videoName, setVideoName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {
        videoName === "" ? 
        <SimpleSearch setter={setVideoName}/>
        : <video controls autoplay="autoplay" muted src={`http://localhost:8080/video?v=${videoName}`} width="1000"/>
      }
      </header>
    </div>
  );
}

export default App;
