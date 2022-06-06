import styled from "styled-components";

 export const StyledContent = styled.div`
background: ${props => props.theme.therdary};
position:absolute ;
top:5em ;
width:100% ;

padding:1.5em ;

display:grid ;
grid-gap:1em ;
justify-content:space-around;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) ;


`