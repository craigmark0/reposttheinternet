import styled from 'styled-components';

export const BaseContainer = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-areas: 
  'header'
  'main';
  
  .header {
    grid-area: header;
  }
  .main {
    grid-area: main;
  }
`;