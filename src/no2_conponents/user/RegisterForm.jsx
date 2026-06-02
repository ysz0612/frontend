import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { userRegisterSlice } from '../../no3_store/slice/userSlice';

const initialState = {
  id: "",
  username: "",
  password: "",
  confirmPassword: "",
  age: "",
  email: "",
  city: ""
};

const RegisterForm = () => {
  const [user, setUser] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    dispatch(userRegisterSlice( user))

    alert("회원가입 성공!");
    navigate("/login");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>회원가입</Title>

      <Card>
        <Input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="사용자 이름"
        />

        <Input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />

        <Input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          placeholder="비밀번호 확인"
        />
      <Title>나이</Title>
        <Input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
          placeholder="나이"
        />
      <Title>이메일</Title>
        <Input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="이메일"
        />
      <Title>도시</Title>
        <Input
          type="text"
          name="city"
          value={user.city}
          onChange={handleChange}
          placeholder="도시"
        />

        <RegisterButton type="submit">
          회원가입
        </RegisterButton>

        <LoginButton
          type="button"
          onClick={() => navigate("/login")}
        >
          이미 계정이 있으신가요? 로그인
        </LoginButton>
      </Card>
    </Form>
  );
};

export default RegisterForm;

const Form = styled.form`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #f1f5f9;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 32px;
  color: #1e293b;
  font-size: 28px;
`;

const Card = styled.div`
  width: 400px;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 16px;
  border: 1px solid #dbe4ee;
  border-radius: 10px;
  font-size: 16px;
  outline: none;

  transition: 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
`;

const BaseButton = styled.button`
  width: 100%;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;
`;

const RegisterButton = styled(BaseButton)`
  background: #3b82f6;
  color: white;
  margin-bottom: 12px;

  &:hover {
    background: #2563ed;
  }
`;

const LoginButton = styled(BaseButton)`
  background: transparent;
  color: #3b82f6;

  &:hover {
    background: #eff6ff;
  }
`;