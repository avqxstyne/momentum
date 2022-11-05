import './App.css';
import * as React from "react";
import ContentColumn from './components/ContentColumn';
import LeftColumn from './components/LeftColumn';

function App() {
  return (
    <div className='main'>
      <LeftColumn/>
      <ContentColumn/>
      <div className='right-column'>HIJ</div>
    </div>
  );
}

export default App;
