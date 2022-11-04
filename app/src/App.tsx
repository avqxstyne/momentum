import './App.css';
import * as React from "react";

function App() {
  return (
    <div className='main'>
      <div className='left-column'>ABC</div>
      <div className='content-column'>
        <form className='content-column-input-form'>
          <div>
            <div>0\</div>
            <input placeholder='Search Twitter'></input>
          </div>
        </form>
        <div>X</div>
      </div>
      <div className='right-column'>HIJ</div>
    </div>
  );
}

export default App;
