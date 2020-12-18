import styled from 'styled-components';

export const WorkSpace = styled.div`
  background: #3d3d4d;
  padding: 35px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 900px;
  background: #312e38;
  justify-content: center;
  border-radius: 5px;
  margin: auto;
  padding: 25px 0;

  h1 {
    display: flex;
    justify-content: center;
    padding: 25px;
  }
`;

export const MovieContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .head {
    display: flex;

    #titleArea {
      display: flex;
      flex-direction: column;
      margin: 30px auto;
      justify-content: center;

      button {
        border-radius: 5px;
        border: none;
        background: #ff0000;
        font-size: 18px;
        font-weight: bold;
        height: 30px;
        width: 90px;
        margin: 0 auto;
        padding: 0 15px;
            
        a {
          display: flex;
          font-size: 20px;
          text-decoration: none;
          color: #cbcbd6;
        }
      }

      .title {
        font-size: 48px;
      }
    }

    #totalArea {
      display: flex;
      flex-direction: column;
      margin: 30px auto;
      justify-content: center;
    }

    #paymentArea {
      display: flex;
      flex-direction: column;
      margin: 30px 60px;
      justify-content: center;
    }
  }

  #itens {
    width: 1200px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 50px 115px;
    margin: 0 auto;

    .box {
      display: flex;
      flex-direction: column;
      padding: 20px;

      img {
        border-radius: 5px;
        margin-bottom: 15px;
        margin: 0 auto;
      }

      h2 {
        width: 200px;
        margin: 15px auto 15px;
        text-align: center;
        color: #ffff00;
      }

      button {
        border-radius: 5px;
        border: none;
        background: #ff0000;
        font-size: 18px;
        font-weight: bold;
        color: #cbcbd6;
        height: 30px;
        width: 90px;
        margin: 0 auto;
      }
    }
  }
`;
