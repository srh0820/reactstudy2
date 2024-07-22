import React from 'react'
import { Link } from 'react-router-dom';
import godo from './json/gnbgo.json'

function Gnbgo() {
    const d1info = godo.filter((item) => item["prnum"].split('|').length === 1 )
    return (
        <ul>
            {   // d1info 값이 false , null , undefined 일 경우 map 이 돌지 않음
                d1info && d1info.map((v, i) => {
                    return (
                        <li key={`gnbli${i}`}>
                            <Link to = {v.gnblink}>{v.gnbnm}</Link>
                            <ul>
                                {
                                    godo.filter((item) => 
                                        item["prnum"].split('|').length > 1 && item["prnum"].split('|')[0] === v.prnum )
                                    .map((vv, ii) => {
                                        return (
                                            <li key={`gnbsubli${ii}`}>
                                                <Link to={vv.gnblink}>{vv.gnbnm}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Gnbgo