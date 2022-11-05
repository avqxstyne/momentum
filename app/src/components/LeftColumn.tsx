import * as React from 'react';
import '../stylesheets/LeftColumn.scss';

const LeftColumn = () => {
  return (
    <div className='left-column'>

        <div id='twitter-icon-1-container'>
        <span className="material-symbols-outlined" id='twitter-icon-1'>
          token
        </span>
        </div>

        <div className='left-column-explore'>
          <span className="material-symbols-outlined" id='hash-icon-1'>
          tag
          </span>
          <div className='left-column-explore-text'>Explore</div>

        </div>

        <div className='left-column-explore'>
          <span className="material-symbols-outlined" id='settings-icon-2'>
          settings
          </span>
          <div className='left-column-explore-text'>Settings</div>

        </div>

      </div>
  )
}

export default LeftColumn