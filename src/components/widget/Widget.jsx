import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GradingIcon from '@mui/icons-material/Grading';


const Widget = ({ type }) => {

    let data;

    const amount = 100;
    const diff = 20;


    switch(type){
        case "user":
            data={
                title: "USERS",
                isMoney: false,
                link:"See all users",
                icon: (
                    <PersonOutlineIcon 
                        className='icon'
                        style = {{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)"
                        }}
                    />
                ),
            };
            break;
         
            case "order":
                data={
                    title: "ORDERS",
                    isMoney: false,
                    link:"View all orders",
                    icon: <GradingIcon 
                        className='icon'
                        style = {{
                            color: "goldenrod",
                            backgroundColor: "rgba(218, 165, 32, 0.2)"
                        
                        }}
                    />
                };
                break;
                
                case "earning":
                data={
                    title: "EARNNGS",
                    isMoney: false,
                    link:"See all earning",
                    icon: <AttachMoneyIcon 
                    className='icon'                    
                    style = {{
                        color: "green",
                        backgroundColor: "rgba(218, 165, 32, 0.2)"
                    
                    }}
                    />
                };
                break;  
                    
                case "balance":
                data={
                    title: "BALANCE",
                    isMoney: false,
                    link:"See details",
                    icon: <AccountBalanceWalletIcon 
                    className='icon'
                    style = {{
                        color: "purple",
                        backgroundColor: "rgba(218, 165, 32, 0.2)"
                    }}
                    />
                };
                break;    

    }
  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
            {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>

      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon/>
        {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
