import styled from "styled-components";

export const StyledHeader = styled.div`
padding: .5em;
position:relative ;
width:100% ;
height:4em ;
background: #56494e;
display:flex ;
flex-wrap:wrap ;
align-items:center ;
justify-content:space-between ;
box-shadow:0 .2em .3em ;

&>svg{
    cursor: pointer;
    pointer-events: all;
    
}

`
export const Logo = styled.div`



&>h2{
    display:inline-block ;
    color:#db324d ;
}

&>span{
    color:#a29c9b ;
    font-style:italic ;
    font-weight:700 ;
    
}

`
export const StyledSearch = styled.form`

position:absolute ;
top:0 ;
left:0 ;
background: #556788;
width:100% ;
height:100% ;
text-align:justify;


&>div{
    padding:.5em ;
    display:flex ;
    justify-content:space-around ;
    align-items:center ;

&>input{
    margin-top:1em ;
    margin-left: 1em;
    height:2.5em ;
    width: 90%;
    max-width:30em ;
    background:none ;
   outline:none ;
    border-top:none ;
    border-left:none ;
    border-right:none ;
    border-bottom: .1em solid #a29c9b;
    font-size:1rem ;
    padding:.5rem ;
    color:#db324d ;

    &+svg{
        transform:translateX(-1em) ;
       
        cursor:pointer ;
    }

}
&>svg{
    font-size:1.2em ;
    cursor: pointer;
    margin-right:3px ;
}
}
`