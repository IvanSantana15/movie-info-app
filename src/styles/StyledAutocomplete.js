import styled from "styled-components"


export const StyledAutocomplete = styled.div`
position: absolute;
width:100% ;
background: gray;
margin-top:.5em ;
z-index:999 ;
display:flex ;
flex-direction:column ;

`

export const StyledMovieName = styled.div`

width:100% ;
height:2rem ;
margin:.3rem 0 ;
padding:.2rem ;
cursor: pointer;
display:flex ;
align-items:center ;
&>img{
    display:inline-block ;
    width: 2rem;
    height:2rem ;
    object-fit:cover ;
    margin-right:0.4rem ;
}

&>p{
   
    display:inline-block ;
    
    height:100% ;
 
    padding:.2rem ;
    white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
}
`