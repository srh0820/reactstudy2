import React, { useEffect, useState } from 'react';
import axios from 'axios';

function API() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API 호출 함수
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // 외부데이터 get / 내부데이터 post 로 가져온다.
        // 외부데이터 다 올때까지 대기 , 전부 저장 완료 후 실행
        setUsers(response.data); 
        // 렌더링 함수 Users 에 저장되는 단계
        // .data => 어느 통신기기, 통신방법 , ... 등 제외하고 필요한 데이터만 저장됨 
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers(); // 비동기함수 실행
  }, []); // useState 1회 실행 - 과도한 렌더링 방지

  return (
    <div className="api">
        <h1>Users</h1>
        { 
            error && <p>Error: {error.message}</p>
        }
        { loading ? <p>Loading...</p> : 
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>
                                <p> 이름 : {user.name} </p>
                                <p> 이메일 : {user.email} </p>
                                <p> 주소 : {`${user.address["street"]} ${user.address["suite"]}
                                             ${user.address["city"]} ${user.address["zipcode"]}`}</p>
                                <p> 핸드폰 : {user.phone} </p>
                                <p> 사이트 : {user.website} </p>
                                <p> company </p>
                                <p> name : {user.company["name"]}</p>        
                                <p> catchPhrase : {user.company["catchPhrase"]}</p>  
                                <p> bs : {user.company["bs"]}</p>  
                            </li>
                        ))}
                    </ul>
        }
    </div>
  );
}

export default API;
