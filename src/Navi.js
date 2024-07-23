import React, { useState } from 'react';

const navi = [
    {
        "gnbnm": "미션",
        "gnblink": "misson",
        "prnum": "대메뉴1",
        "cateno": "1"
    },
    {
        "gnbnm": "소싱철학",
        "gnblink": "sourcing",
        "prnum": "대메뉴1",
        "cateno": "2"
    },
    {
        "gnbnm": "후기",
        "gnblink": "review",
        "prnum": "대메뉴2",
        "cateno": "1"
    },
    {
        "gnbnm": "혜택",
        "gnblink": "benefit",
        "prnum": "대메뉴2",
        "cateno": "2"
    },
];

function Navi() {
    const [ nav, setnav ] = useState({});

    const insetdb = () => {
        const updatedData = { ...nav };
        for (let item of navi) {
            if (!updatedData[item.prnum]) {
                updatedData[item.prnum] = [];
            }
            updatedData[item.prnum].push(item);
        }
        setnav (updatedData);
    };

    return (
        <p onClick={insetdb}>
            나를 클릭하고 콘솔창 확인
            {console.log(nav)}
        </p>
    );
}

export default Navi;
