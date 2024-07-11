import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const InfoModal = ({ open, handleOpen, name, description, price, image }) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='flex justify-center items-center'
            >
                <Box className="p-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black shadow-lg p-4">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <strong>{name}</strong>
                    </Typography>
                    <div className="card-img bg-[#ffffff] h-1/3 w-full rounded-lg ">
                        <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <strong>Descripcion: </strong>
                        {description}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <strong>Precio: </strong>
                        {price}
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default InfoModal
