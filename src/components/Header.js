import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderStyle from "../assets/styles/HeaderStyle.js";
import chart from "../assets/images/chart.png";



export default function Header({children, isLogin}){
    const navigate=useNavigate();
    return (
        <HeaderStyle>
           <p onClick={()=>navigate('/')}>Driven<br/>Entertainment</p>
           <User>
           <ion-icon name="person-circle-outline"></ion-icon>
           {children}
           </User>
           <Link to={'/chart'}> <Chart src={chart}/> </Link>
           <Logout isLogin={isLogin}>
            <ion-icon  name="log-out-outline"></ion-icon>
           </Logout>
           
        </HeaderStyle>
    );
}

const Chart=styled.img`
    width: 48px;
    height: 46px;
`;

const User=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    
    > ion-icon{
        margin-right:0.5rem;
    }
`;

const Logout=styled.div`
    display:${props=>props.isLogin ? 'flex': 'none' };
    > ion-icon {
        font-size:46px;
    }
    
`;


