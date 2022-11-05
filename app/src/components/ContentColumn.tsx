import * as React from 'react'
import '../stylesheets/ContentColumn.scss';

const ContentColumn = () => {

    const [search, setSearch] = React.useState('')

    return (
        <div className='content-column'>


        <div className='content-column-top'>
            <div className='content-column-searchbar' id='test'>
                <span className="material-symbols-outlined" id='search-icon-1'>
                    search
                </span>                
                <input 
                    placeholder='Search Twitter'
                    name='main-search'
                    value={search}
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}
                    // onMouseEnter={()=>{
                    //     document.getElementById('test').style.outline = '2px solid rgb(33, 174, 255)'
                    //     document.getElementById('search-icon-1').style.color = 'rgb(33, 174, 255)'
                    // }}
                    onMouseLeave={()=>{
                        document.getElementById('test').style.outline = 'none'
                        document.getElementById('search-icon-1').style.color = 'rgb(105, 105, 106)'
                    }}
                    onFocus={()=>{
                        document.getElementById('test').style.outline = '2px solid rgb(33, 174, 255)'
                        document.getElementById('search-icon-1').style.color = 'rgb(33, 174, 255)'
                    }}

                    
                ></input>
            </div>
            
            <span className="material-symbols-outlined" id='gear-icon-1'>
                settings
            </span>
        </div>

        </div>
    )
}

export default ContentColumn