import React from 'react'
import tabjson from './json/tab.json'

function App3() {

    return (
        <div className="tapwrap d-flex container border">
            <ul className="tabs border">
                <li><button>{tabjson["notice"]["title"]}</button></li>
                <li><button>{tabjson["gallery"]["title"]}</button></li>
                <li><button>{tabjson["qna"]["title"]}</button></li>
            </ul>
            <div className="content col border">
                
                <ul>
                    {
                        tabjson["gallery"]["content"].map((v, i) =>{
                            return(
                            <li key={`list${i}`}>
                                {v}
                            </li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    )
}

export default App3