import styled from 'styled-components';

export const Container = styled.div`
  form {
    width: 100%;

    legend {
      font-size: 32px;
      font-weight: bold;
      margin: 30px auto;
    }

    fieldset {
      border: none;
      margin: 0 auto;
    }

    input {
      width: 220px;
      height: 50px;
      align-items: center;
      padding: 15px;
      border-radius: 5px;
      border: none;
      margin-right: 20px;
    }

    button {
      width: 100px;
      border-radius: 5px;
      height: 50px;
      background: #FF8000;
      color: #fff;
      border: none;
      font-weight: bold;
      transition: 0.5s;

      &:hover {
        border: solid 1px #FF8000;
      }
    }
  }
`;
