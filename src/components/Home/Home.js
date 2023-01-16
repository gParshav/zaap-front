import React, { useEffect, useState } from 'react'
import './Home.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import AddOrderDialog from './AddOrderDialog';
import CircularProgress from '@mui/material/CircularProgress';



function Home() {

  // const [orders, setOrders] = useState([{id: 1,title:'Order' , customer_name: 'Pasha', amount: 100, status: 'pending', date: '2021-01-01'},{id: 1,title:'Order' , customer_name: 'Pasha', amount: 100, status: 'success', date: '2021-01-01'}])
  const [orders, setOrders] = useState(null);
  const [modalIsOpen, setOpenModal] = useState(false)

  const getOrders = () => {
    fetch('http://localhost:80/api/posts?shop_email=hari@gmail.com', {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setOrders(json) })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  useEffect(() => {
    getOrders();
  }, [])
  

  
  function openModal() {
    setOpenModal(true);
  }

  function closeModal() {
    setOpenModal(false);
  }
  

  return (
    <div className='home'>
      <div className='home__header'>
      <h3 className='home__title'>All Orders</h3>
        <IconButton onClick={openModal} className='icon_button_add'><AddIcon ></AddIcon></IconButton>

      </div>
      <div className='home_items'>
      
        {  orders? orders.map((value, key) => {
          return(
            <div key={key}>
              <div className='home__container' >
                <div className='home_container__box'>
                    <h4 className='home_container__box__info'>{value['title']}</h4>
                </div>
                <div style={{'padding':'10px 0px'}} className='display_flex_space'>
                  <div className='home_container__name'><PersonIcon /> <span style={{'paddingLeft':'10px'}}>{value['customer_name']}</span></div> 
                  <div className='home_container__amount'> ₹ {value['amount']}  </div> 
                </div>
                <div className='home_container__info'><span className={`status-${value['status']?"success":"pending"}`} >{value['status']?"success":"pending"}</span> </div>
                <div className='date'><CalendarMonthIcon/><span style={{'paddingLeft':'5px'}}>{value['updatedAt']}</span> </div>

              </div>
            </div>
          )
        }): <div className='loading'><CircularProgress /></div>}
      </div>
      <AddOrderDialog modalIsOpen = {modalIsOpen} closeModal = {closeModal} getOrders={getOrders} />
    </div>

    
  )
}

export default Home