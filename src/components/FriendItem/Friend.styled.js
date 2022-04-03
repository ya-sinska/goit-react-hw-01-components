import styled from '@emotion/styled';
export const Item = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
&:not(:last-child){
  margin-bottom: 20px;  
}
padding: 5px 15px;
box-shadow: 0px 0px 12px 3px rgba(0,0,0,0.31);
border-radius: 3px;
`;
export const Avatar = styled.img`
display: block;
padding: 3px;
margin: 0 10px;
border-radius: 50%;
box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.2);
`
export const Name = styled.p`
font-size: 16px;
font-weight: 600;
color: #42434d;
`

export const Status = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
border: 1px solid #42434d;
background-color: ${p => p.chack? 'green':'red'}
`