import styled from 'styled-components';

export const BlogListLayoutBase = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(${props => props.numOfRows},1fr);
`;