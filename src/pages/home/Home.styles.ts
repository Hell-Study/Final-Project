import styled from 'styled-components';

export const DisplayBoard = styled.main`
  width: 1050px;
  margin: 0 auto;
  display: grid;

  font-family: Arial, Helvetica, sans-serif;

  *::-webkit-scrollbar,
  *::-webkit-scrollbar-thumb {
    width: 0px;
  }

  *::-webkit-scrollbar-thumb {
  }
  *:hover::-webkit-scrollbar,
  *:hover::-webkit-scrollbar-thumb {
    width: 26px;
    border-radius: 13px;
    background-clip: padding-box;
    border: 12px solid transparent;
    color: grey;
  }

  *:hover::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
  }
`;

export const ChartsWrapper = styled.div`
  padding: 5px;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
`;

export const ChatButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
