import React, { useEffect, useState } from 'react'
import './Home.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Modal from 'react-modal';



function Home() {

  // const [orders, setOrders] = useState([{id: 1,title:'Order' , customer_name: 'Pasha', amount: 100, status: 'pending', date: '2021-01-01'},{id: 1,title:'Order' , customer_name: 'Pasha', amount: 100, status: 'success', date: '2021-01-01'}])
  const [orders, setOrders] = useState([])
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      height: '250px',
      width: '400px',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  useEffect(() => {
    fetch('http://localhost:80/api/posts?email=hari@gmail.com', {
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
  }, [])
  
  const handleClick = () => {
    setOrders([...orders, {id: 1,title:'Order' , customer_name: 'Pasha', amount: 100, status: 'success', date: '2021-01-01'}])
  }

  const handleSubmit = () => {
    handleClick();
    closeModal();
  }

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  

  return (
    <div className='home'>
      <div className='home__header'>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div className='modal__top'>
        <h2>Add order</h2>
      </div>
        <div className='modal__bottom'>
          <button onClick={closeModal} >Cancel</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </Modal>
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