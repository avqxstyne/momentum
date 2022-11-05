import './App.css';
import * as React from "react";
import ContentColumn from './components/ContentColumn';

function App() {
  return (
    <div className='main'>

      <div className='left-column'>
        <div id='twitter-icon-1-container'>
        <span className="material-symbols-outlined" id='twitter-icon-1'>
          token
        </span>
        </div>
      </div>

      <ContentColumn/>
      <div className='right-column'>HIJ</div>
    </div>
  );
}

export default App;
