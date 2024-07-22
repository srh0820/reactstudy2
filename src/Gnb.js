import React, { Fragment } from 'react'
import cafenavi from './json/cafenavi.json';

function Gnb() {
    const d1navi = cafenavi.filter((item) => item.prnum == "" )
    return (       
        <ul className='d-flex'>
            {
                d1navi.map((v , i) =>{
                    return (
                        <Fragment key={`gnbli${i}`}>
                        <li className='px-3' key={`gnbnavi${i}`}>{v.gnbnm}</li>
                        <ul>
                            {
                            cafenavi.filter((item)=> item.prnum === v.cateno ).map((vv, ii) => <li>{vv.gnbnm}</li>)                               
                            } 
                        </ul>
                        </Fragment>
                    )
                })
            }            
        </ul>       
    )
}

export default Gnb
