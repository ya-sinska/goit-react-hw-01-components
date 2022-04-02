import styled from '@emotion/styled';

export const ProfileCard = styled.div`
padding: 30px;
text-align: center;
margin: 30px;
background-color: #f8f8f8;
width: 250px;
border-radius: 10px; 
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const Description = styled.div`
margin-bottom: 30px;
`;
export const ProfileImage = styled.img`
margin-left: auto;
margin-right: auto;
margin-bottom: 15px;
display: block;
width: 100px;
height: 100px;
border-radius: 50%;
box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 10px;
`;

export const UserName = styled.p`
margin-bottom: 7px; 
 font-size: 20px;
 font-weight: 600;
 color: #42434d;
`;

export const UserTag = styled.p`
font-size: 12px;
color: grey;
margin-bottom: 7px
`
export const UserLocation = styled.p`
font-size: 13px;
color: grey;
font-weight: 600;
`

export const Stats = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap:10px;
font-size: 10px;
color: grey;
font-weight: 600;
`
export const StatItem = styled.li`
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 10px;
width: 70px;
background-color: rgba(0, 0, 0, 0.1);
border-radius: 3px;
`;

export const Label = styled.span`
margin-bottom: 5px; 
`;

export const Quantity = styled.span`
font-size: 13px;
color: #42434d;
`;