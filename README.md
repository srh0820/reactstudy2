### 1. BrowserRouter

`BrowserRouter`는 HTML5의 History API를 사용하여 URL과 UI 상태를 동기화하는 라우터입니다.

 애플리케이션의 라우팅을 설정하기 위해 루트 컴포넌트로 사용합니다.

- **설명**
    - **`BrowserRouter` 는 라우팅을 위해 전체 애플리케이션을 감싸는 최상위 컴포넌트입니다.**
    - 이것을 사용하면 애플리케이션이 클라이언트 사이드 라우팅을 사용할 수 있습니다.
- **예시**
    
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter } from 'react-router-dom';
    import App from './App';
    
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById('root')
    );
    ```


### 2. Routes

`Routes`는 React Router v6에서 새로운 컴포넌트로, 여러 `Route`를 그룹화하여 처리합니다.

 이전 버전의 `Switch` 컴포넌트를 대체합니다.

- **설명**
    - **`Routes` 컴포넌트는 URL 경로에 따라 매칭되는 `Route` 컴포넌트를 렌더링합니다.**
    - `Switch`와 달리 경로가 매칭되는 첫 번째 `Route`만 렌더링하지 않고, 정확히 일치하는 경로를 찾아 렌더링합니다.
- **예시**
    
    ```jsx
    import { Routes, Route } from 'react-router-dom';
    import Home from './Home';
    import About from './About';
    
    const App = () => {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      );
    };
    
    export default App;
    ```
    

### 3. Route

`Route`는 URL 경로와 해당 경로가 매칭될 때 렌더링할 컴포넌트를 정의합니다.

- **설명**
    - `Route` **컴포넌트는 특정 경로에 매칭될 때 렌더링할 컴포넌트를 지정합니다.**
    - **`path` 속성에는 URL 경로를, `element` 속성에는 매칭될 때 렌더링할 컴포넌트를 지정합니다.**
- **예시**
    
    ```jsx
    import { Route } from 'react-router-dom';
    import Home from './Home';
    import About from './About';
    
    const App = () => {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      );
    };
    
    export default App;
    ```

---

### `useState`

- 웹처럼 페이지단위로 새로고침 하는 것이 아닌, 상태변수가 변하는 해당 컴포넌트만 새로고침 (렌더링) 진행하는 리액트의 핵심변수입니다. ( 생태계의 시작점 )
- `const [count, setCount] = useState(0);` 는 `count` 라는 상태 변수와 `setCount` 라는 상태 업데이트 함수를 생성합니다.
- `useState` 를 호출하면 초기 상태 값을 인자로 받습니다.
    - `useState` 의 초기값은 컴포넌트가 처음 렌더링될 때만 사용됩니다. 이후 상태가 변경될 때는 `useState` 의 초기값이 다시 사용되지 않습니다. 컴포넌트가 다시 렌더링되더라도, `useState` 의 초기값은 무시되고, 마지막으로 업데이트된 상태값이 유지됩니다.
- `setCount` 를 호출하면 React는 컴포넌트를 다시 렌더링하고, 새로운 상태 값이 `count`에 할당됩니다.


### `useRef`

- useState 가 진행되면 모든 것이 새롭게 시작됩니다. 하지만 여기서 유일하게 피해가는 변수가 useRef 입니다.
- 메서드를 다룹니다.
- useState 와 같지만 렌더링은 시키지 않고 이어서 자기 변수값을 가져갑니다.
- DOM 요소 접근
    - 특정 DOM 요소에 직접 접근해야 할 때 사용합니다.
    - 예를 들어, 포커스를 설정하거나 스크롤 위치를 변경하는 경우에 유용합니다.
- 렌더 사이드에서 값을 유지
    - 컴포넌트가 렌더링되는 동안에도 값이 재설정되지 않도록 값을 유지할 수 있습니다.
    - 이 값이 변경되어도 컴포넌트가 다시 렌더링되지 않습니다.


### `useEffect`

- useState 가 초기화 하고 다시 진행하면 똑같은 식을 또 해야하는 것을 막아줍니다.
( 중복실행을 막아줌 )
- useEffect 는 렌더링이 끝나고 나서 나옵니다.
- react 에서 body 에 직접 접근하기 위해서는 useEffect 를 이용해야합니다.
- 프로토타입  ⇒   `useEffect(() => {}, [])`
    - [ ] 가 비어있는 상태에선 딱 한번만 실행합니다.