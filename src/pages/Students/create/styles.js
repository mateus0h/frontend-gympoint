import styled from 'styled-components';

export const Container = styled.div`
  background: #ffff;
  max-width: 800px;
  margin: 50px auto;
`;

export const Content = styled.div`
  width: 100%;
  padding: 50px;

  strong {
    font-size: 13px;
    color: #444444;
  }

  input {
    background: #ffff;
    border: 0.8px solid #dddddd;

    border-radius: 4px;
    height: 42px;
    padding: 0 15px;
    color: #999999;
    margin: 0 0 10px;

    &::placeholder {
      color: #999999;
    }
  }

  div#double {
    display: flex;
    flex-direction: column;
  }

  div#triple {
    display: flex;
    justify-content: space-between;

    input {
      width: 100%;
    }

    strong {
      width: 190px;
    }
  }
`;
