import React, { useState, useEffect } from 'react'
import tabjson from './json/tab.json'

function App3() {
    const [ tabnm, setTabnm ] = useState('notice');

    useEffect(()=>{
        const buttons = document.querySelectorAll('.tabs button'); 
        let currentIndex = 0;

        const switchTab = () => {
            buttons[currentIndex].click();  // buttons => array 형 정렬형 데이터
            currentIndex = (currentIndex + 1) % buttons.length;
        };
        const interval = setInterval(switchTab, 3000);

        return () => clearInterval(interval);   // 언마운트 - 이 컴포넌트가 삭제될 때
        
    }, [])

    return (
        <div className="tapwrap d-flex container border">
            <ul className="tabs border">
                <li><button onClick={ ()=>(setTabnm('notice')) }>{tabjson["notice"]["title"]}</button></li>
                <li><button onClick={ ()=>(setTabnm('gallery')) }>{tabjson["gallery"]["title"]}</button></li>
                <li><button onClick={ ()=>(setTabnm('qna')) }>{tabjson["qna"]["title"]}</button></li>
            </ul>
            <div className="content col border">
                
                <ul>
                    {
                        tabjson[tabnm]["content"].map((v, i) =>{
                            return(
                            <li key={`list${i}`}>
                                {
                                    v.split("|").map((vv, ii) => {
                                        return (
                                            ii === 0 ? <h2>{vv}</h2> : <p>{vv}</p>
                                        )
                                    })
                                }
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