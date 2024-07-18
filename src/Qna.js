import React, { Fragment, useEffect } from 'react'
import qnalist from './json/qna.json'

const { qna } = qnalist;
// const qna = qna.qna;

function Qna(props) {

    // document.querySelector("#qna dt:nth-child(1)").classList.add("on");
    // const dts = document.querySelectorAll('#qna dt');

    // 1)
    // dts[0].classList.add("on");

    // 2)
    // dts[0].addEventListener('click', ()=> {
    //     dts[0].classList.add("on");
    // })
    // dts[0].click();

    // 대상을 저장하는 것은 useEffect 에 넣지 않아도 실행
    // 실행식은 useEffect 안에 넣어줘야 한다.
    // const dtsclick = ( num ) => {   // 함수저장
    //     dts.forEach((v, i) => {
    //         v.classList.remove("on");
    //     })
    //     dts[num].classList.add("on");
    // }

    // useEffect(()=>{   
    //     dtsclick(0)
    // }, [])

    const dtsclick = (num) => {
        const dts = document.querySelectorAll("#qna dt");
        if (dts[num]) {  // dts[num] 정의
            dts.forEach((v, i) => {
                v.classList.remove('on');
            });
            dts[num].classList.add('on');
        }
    };
      
    return (
        // 컴포넌트 재사용이 가능하도록 id 
        <dl className='container my-5' id={props.keynm}>
            {
                qna.map((v,i)=>{
                    return(
                        <Fragment key={`qnalist${i}`}>
                            <dt className={`bg-dark text-white ${ i === 0 ? 'on' : null}`} onClick={ ()=>{dtsclick(i) }}  >{v.Q}</dt>
                            <dd className='py-5'>{v.A}</dd>
                        </Fragment>
                    )
                })
            }
        </dl>
    )
}

export default Qna