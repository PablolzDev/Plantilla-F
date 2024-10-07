"use client";
import styled from 'styled-components';
import Login from './login/Login';

const MainContainer = styled.main`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1c1c1c;
`;

export default function Home() {
  return (
    <MainContainer>
      <Login />
    </MainContainer>
  );
}