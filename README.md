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
    