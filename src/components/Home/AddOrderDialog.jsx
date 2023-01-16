import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import axios from 'axios';
import { Box, FormControl, FormLabel, Input } from '@mui/material';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function AddOrderDialog({modalIsOpen,closeModal,getOrders}) {
    const [name, setName] = useState('')
    const [item, setItem] = useState('')
    const [amt, setAmt] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        const order = {name, item, amt};

        console.log(order)

        const data = {
            "title": item,
            "customer_name": name,
            "shop_email": "hari@gmail.com",
            "amount": amt,
            "status":"false"
        };
        // console.log(data)
        fetch('http://localhost:80/api/posts', {
            method: 'POST', // or 'PUT'
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            getOrders();
            // setOrders(json) 
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div>
        <Dialog
            open={modalIsOpen}
            onClose={closeModal}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
            <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Add Order
            </DialogTitle>
            <DialogContent dividers>
            {/* material-ui form */}
            <form style={{minWidth:'40vw',minHeight:'20vh'}} className='d-flex flex-column justify-content-center align-items-center'>
                <FormControl
                    variant="filled"
                    component={Box}
                    width="100%"
                    marginBottom="1rem!important"
                >
                    <FormLabel className='text-dark'>Customer name</FormLabel>
                    <Box
                        placeholder="Enter customer name"
                        name="customer_name"
                    //   value={model_name}
                    //   onChange={onChangeModelName}
                    
                        component={Input}
                        autoComplete="off"
                        type="text"
                    />
                </FormControl>
                <FormControl
                    variant="filled"
                    component={Box}
                    width="100%"
                    marginBottom="1rem!important"
                >
                    <FormLabel className='text-dark'>Product name</FormLabel>
                    <Box
                        placeholder="Enter product name"
                        name="model_name"
                        marginTop={0}
                        //   value={model_name}
                    //   onChange={onChangeModelName}
                        component={Input}
                        autoComplete="off"
                        type="text"
                    />
                </FormControl>
                <FormControl
                    variant="filled"
                    component={Box}
                    width="100%"
                    marginBottom="1.5rem!important"
                >
                    <FormLabel className='text-dark'>Amount</FormLabel>
                    <Box
                        className=""
                    //   value={labels}  
                        placeholder="Enter Amount"
                        name="labels"
                    //   onChange ={ (e) =>onChangeLabel(e)}
                        component={Input}
                        autoComplete="off"
                        type="text"
                    />
                </FormControl>

            </form>
            
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={closeModal}>
                Cancel
            </Button>
            <Button onClick={closeModal}>Add</Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}