import React, { useState } from 'react'
import './Home.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

function Home() {

  const [orders, setOrders] = useState([{id: 1,title:'Order' , customer_name: 'Pasha', amount: 100, status: 'pending', date: '2021-01-01'},{id: 1,title:'Order' , customer_name: 'Pasha', amount: 100, status: 'success', date: '2021-01-01'}])

  const handleClick = () => {
    setOrders([...orders, {id: 1,title:'Order' , customer_name: 'Pasha', amount: 100, status: 'success', date: '2021-01-01'}])
  }

  return (
    <div className='home'>
      <div className='home__header'>
        <h3 className='home__title'>All Orders</h3>
        <IconButton className='icon_button_add'><AddIcon onClick={handleClick}></AddIcon></IconButton>

      </div>
      
      <div className='home_items'>
      
        {orders.map((value, key) => {
          console.log(value)
          return(
            <>
              <div className='home__container' >
                <div className='home_container__box'>
                    <h4 className='home_container__box__info'>{value['title']}</h4>
                </div>
                <div style={{'padding':'10px 0px'}} className='display_flex_space'>
                  <div className='home_container__name'><PersonIcon /> <b style={{'paddingLeft':'10px'}}>{value['customer_name']}</b></div> 
                  <div className='home_container__amount'> ₹ {value['amount']}</div> 
                </div>
                <div className='home_container__info'><span className={`status-${value['status']}`} >{value['status']}</span> </div>
                <div className='date'><CalendarMonthIcon/><span style={{'paddingLeft':'5px'}}>{value['date']}</span> </div>

              </div>
            </>
          )
        })}
      </div>
    </div>

    
  )
}

export default Home