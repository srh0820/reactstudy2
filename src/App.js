import { Link, Routes, Route } from 'react-router-dom';

import About from "./About";
import Board from "./Board";
import Entery from './Entery';

function App() {
  return (
    <div className="App">
      <div>
        <a href="/">로고</a>  {/* 첫페이지로 돌아가는 로고에만 a 태그 사용해서 로딩줄이기  */}
        <Link to='./about'>회사소개</Link>
        <Link to='./board'>공지사항</Link>
      </div>
      <Routes>
        <Route path='/' element={<Entery></Entery>}></Route>
        <Route path='./about' element={<About></About>}></Route>
        <Route path='./board' element={<Board></Board>}></Route>
      </Routes>
      <aside>
        퀵입니다
      </aside>
      <footer>
        하단입니다
      </footer>
    </div>
  );
}

export default App;
