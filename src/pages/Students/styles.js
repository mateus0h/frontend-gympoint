import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  margin-top: 30px;
  border-radius: 4px;
  padding: 30px;
  width: 1200px;
`;

export const StudentsTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    padding: 12px;
    text-align: left;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  tbody td#buttons {
    text-align: right;
  }

  thead th#idadeTh {
    text-align: center !important;
  }

  tbody td#idadeTd {
    text-align: center;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }

  button#edit {
    color: #4d85ee;
  }

  button#delete {
    color: #de3b3b;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
