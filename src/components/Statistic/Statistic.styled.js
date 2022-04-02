import styled from '@emotion/styled';
export const Container = styled.section`
padding: 15px;
text-align: center;
background-color: #f8f8f8;
width: 300px;
margin: 30px;
`;

export const Title = styled.h2`
text-transform: uppercase;
color: #42434d;
margin-bottom: 20px;
`;

export const List = styled.ul`
display: flex;
justify-content: space-between;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 50px;
height: 50px;
border-radius: 3px;
background-color: ${props => props.backgroundColor};
font-size: 16px;
`
export const Label = styled.span`
font-weight: 600;
color: #42434d;
`
export const Percentage = styled.span`
font-size: 14px;
color: #42434d;
`