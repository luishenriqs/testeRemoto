import styled from 'styled-components';

export const WorkSpace = styled.div`
  background: #3d3d4d;
  padding: 60px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 1300px;
  background: #312e38;
  border-radius: 5px;
  margin: auto;
  padding: 25px 0;

  h1 {
    display: flex;
    justify-content: center;
    padding: 25px;
  }
`;

export const Carrinho = styled.div`
  background: #3d3d4d;
  padding: 10px;
  display: flex;
  align-items: center;

  h1 {
    color: #ffff00;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin: 5px 0 0 10px;
    color: #ffff00;
  }
`;

export const MovieContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .box {
    width: 400px;
    height: 650px;
    display: flex;
    flex-direction: column;
    margin: 0 0 25px 25px;
    padding: 24px;
    background: #232129;
    border-radius: 5px;
    align-items: center;
    text-decoration: none;
    transition: transform 0.4s;

    img {
      border-radius: 5px;
      margin-bottom: 25px;
    }

    strong {
      font-size: 20px;
      font-weight: bold;
      color: #cbcbd6;
    }

    button {
      display: flex;
      justify-content: center;
      background-color: transparent;
      margin-top: 16px;
      border: 0;
      color: #fff;
      font-weight: bold;
      margin-top: 16px;
      margin-left: 10px;

      svg {
        margin-right: 15px;
      }

    }

    &:hover {
      transform: translateX(10px);
    }
  }
`;

