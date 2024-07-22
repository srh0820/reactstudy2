import { Link } from 'react-router-dom';
import cafenavi from './json/cafenavi.json';

function Gnb() {
    const d1navi = cafenavi.filter((item) => item.prnum === "" )
    // cafenavi 배열에서 prnum 속성이 빈 문자열("")인 항목들을 필터링하여 d1navi 배열에 저장
    // 이 필터링 작업을 통해 상위 메뉴(또는 루트 메뉴)를 추출

    const submenus = {};
    // 소메뉴를 저장할 빈 객체 submenus를 초기화
    // 소메뉴 수집 - item.prnum 를 key 로, 소메뉴는 prnum을 키로 사용하여 object화
   
    for (let item of cafenavi) {
    // of => object , in => index ,  cafenavi 배열의 각 항목을 순회
        if (item.prnum) {
        // 소메뉴인 경우 수집 , prnum 이 동일한 경우만 수집

            if (!submenus[item.prnum]) {
                submenus[item.prnum] = [];  // 초기값 선언
            }
            // submenus 객체에 item.prnum 키가 존재하지 않으면, 빈 배열로 초기화
			// 해당 item.prnum 키에 해당하는 배열에 item을 추가

            submenus[item.prnum].push(item);
            // submenus 객체에는 prnum을 키로 하고, 각 키에 대응하는 소메뉴 항목들이 배열로 저장
        }
    }

    //  submenus["1"] --> array
    //  const submenus = {
    //     "1" : [ {
    //          "gnbnm" : "미션",
    //          "gnblink" : "misson",
    //          "prnum" : "1",
    //          "cateno" : "1"
    //      },       
    //      {
    //          "gnbnm" : "소싱철학",
    //          "gnblink" : "sourcing",
    //          "prnum" : "1",
    //          "cateno" : "2"
    //      } ],
    //     "2" : []
    //  }

    return (
        <ul className='d-flex'>
            {
                d1navi.map((v, i) => {
                    return (
                        <li className='px-3' key={`gnbnavi${i}`}>
                            <Link to={v.gnblink}>{v.gnbnm}</Link>
                            { submenus[v.cateno] &&
                            <ul>
                                {
                                    // 소메뉴 매핑
                                    // submenus[v.cateno] 값이 생성되고, 그때 map 하겠다.
                                     submenus[v.cateno].map((vv, ii) => (
                                        <li key={`submenu${ii}`}>
                                            <Link to={vv.gnblink}>{vv.gnbnm}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            }
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Gnb;
