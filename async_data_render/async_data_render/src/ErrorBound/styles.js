import styled, { ThemeProvider } from 'styled-components';

export const Loading = styled.div`
position: absolute;
z-index: 99999;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
background-color: rgba(255,255,255, 0.7);


.MuiCircularProgress-svg {
  color: #980000;
}
`;