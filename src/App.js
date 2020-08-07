import React from 'react';
import DrumPad from'./DrumPad'
import Display from './Display'

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <Display />
        <DrumPad />
      </div>
    </div>
  );
}

export default App;
