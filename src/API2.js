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
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
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

  // 중복 포함한 모든 albumId 추출
  const albumIds = users.map(item => item.albumId);
  console.log('중복 포함 albumId', albumIds); 

  // 중복 제거한 고유한 albumId 제거
  const uniqueAlbumIds2 = [...new Set(users.map(item => item.albumId))]; 
  console.log('중복 제거한 고유한 albumId', uniqueAlbumIds2);

  const uniqueAlbumIds = Array.from(new Set(users.map(item => item.albumId)));
  console.log('중복 제거한 고유한 albumId', uniqueAlbumIds);
  // uniqueAlbumIds 데이터 array
  // 클래스(붕어빵틀) 생성자 new 복제 (인스턴스 - 붕어빵)

  return (
    <div className="App">
      <h2>Users</h2>
      <div>
        {
          uniqueAlbumIds.map(albumId => (
            <button key={albumId} value={albumId}>
              Album {albumId}
            </button>
          ))
        }
      </div>

      {
        error && <p>Error: {error.message}</p>
      }
      { loading ? <p>Loading...</p> :
                  <ul style={{display:"flex",flexWrap :"wrap"}}>
                      { users.filter((item) => item.albumId === 1 ).map(user => (
                              <li key={user.id} style={{width:"33%", listStyle:"none", padding : "0"}}>
                                    <h2 style={{fontSize : "16px"}}>{user.title}</h2> 
                                    <img src={user.thumbnailUrl}></img>                       
                              </li>
                      ))}
                  </ul>
      }
    </div>

  );
}

export default API;
