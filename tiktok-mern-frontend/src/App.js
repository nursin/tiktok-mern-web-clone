import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      {/* app container */}
      <div className='app__videos'>
        <Video
          url={'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4'}
          channel={"bobbb"}
          description={"Dramatization nation"}
          song={"EDM Nation - Best song ever"}
          shares={12}
          likes={100}
          messages={250}
        />
        <Video
          url={'https://assets.mixkit.co/videos/preview/mixkit-womans-feet-splashing-in-the-pool-1261-large.mp4'}
          channel={"bobbb"}
          description={"Dramatization nation"}
          song={"EDM Nation - Best song ever"}
          shares={34}
          likes={55}
          messages={102}
        />
        <Video
          url={'https://assets.mixkit.co/videos/preview/mixkit-silhouette-of-urban-dancer-in-smoke-33898-large.mp4'}
          channel={"bobbb"}
          description={"Dramatization nation"}
          song={"EDM Nation - Best song ever"}
          shares={58}
          likes={75}
          messages={456}
        />
      </div>
    </div>
  );
}

export default App;
