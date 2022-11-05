import * as React from 'react'
import '../stylesheets/ContentColumn.scss';

const ContentColumn = () => {
    return (
        <div className='content-column'>


        <div className='content-column-top'>
            <div className='content-column-searchbar'>
                <span className="material-symbols-outlined" id='search-icon-1'>
                search
                </span>                
                <input placeholder='Search Twitter'></input>
            </div>
            
            <span className="material-symbols-outlined" id='gear-icon-1'>
                settings
            </span>
        </div>

        </div>
    )
}

export default ContentColumn