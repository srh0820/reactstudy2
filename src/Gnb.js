import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

import cafenavi from './json/cafenavi.json';

function Gnb() {
    const d1navi = cafenavi.filter((item) => item.prnum == "" )
    return (       
        <ul className='d-flex'>
            {
                d1navi.map((v , i) =>{
                    return (
                        <li className='px-3' key={`gnbnavi${i}`}>
                            <Link to={v.gnblink}>{v.gnbnm}</Link>
                            <ul>
                                {
                                    cafenavi.filter((item) => item.prnum === v.cateno).map((vv, ii) => (
                                        <li key={`subgnbnavi${ii}`}>
                                            <Link to={vv.gnblink}>{vv.gnbnm}</Link>
                                        </li>
                                    ))                               
                                } 
                            </ul>
                        </li>   
                    )
                })
            }            
        </ul>
    )
}

export default Gnb
