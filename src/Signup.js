import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {  // 모든 input , select
    const { name, value } = e.target;
    setFormData({
      ...formData,   // 이전 데이터
      [name]: value  // 진짜 name 변수가 탄생하는걸 막기 위해 [ ] 로 감싸줌
    });
  };

  const handleSubmit = (e) => {  
    e.preventDefault();  // 데이터 2번 전송됨
    console.log('Form data submitted:', formData);  // 확인
    // Here you can handle the form submission, e.g., send data to the server
  };

  return (
    <div>
      <h2>Signup Form</h2>
      {/* submit 누르면 onSubmit 실행 */}
      <form onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
