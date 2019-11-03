import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column; 
height: 100vh;

`
const Main = styled.div`
display: flex;
flex-direction: row;
flex:1;
`
const MainLeft = styled.div`
display: flex;
flex-direction: column;
justify-content:stretch;
`



export { Container, Main, MainLeft }