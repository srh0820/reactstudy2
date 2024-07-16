import React, {useState, useEffect} from 'react'

function Entery() {
    const bgcolor = ['red', 'green', 'blue'];
    useEffect(()=>{
        // document.querySelectorAll('li').forEach() -> forEach 보다는 map 으로 
    })
    return (
        <div>
            {
                bgcolor.map((v, i)=>{
                    return(
                        <button onClick={()=>{
                            document.body.style.backgroundColor = v;
                        }}>{v}</button>
                    )
                })
            }
        </div>        
    )
}

export default Entery