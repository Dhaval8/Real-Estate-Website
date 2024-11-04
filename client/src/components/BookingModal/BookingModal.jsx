import React, {  useContext, useState } from 'react';
import { Modal } from '@mantine/core';
import { Button } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import '@mantine/core/styles.css';
import './BookingModal.css';
import { toast } from 'react-toastify';
import UserContextDetail from '../../Context/UserContextDetail';
import dayjs from 'dayjs';
import { useMutation } from 'react-query';
import { bookVisit } from '../../utils/api';

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {userDetails,setUserDetails} = useContext(UserContextDetail)

const handleBookingSuccess=()=>{
    toast.success("You have booked your visit",{
    position:"bottom-right",
    });
    setUserDetails((prev)=>({
        ...prev,
        bookings:[
            ...prev.bookings,{
                id:propertyId,date:dayjs(value).format("DD/MM/YYYY")
            }
        ]
    }))
};

  const{mutate,isLoading} = useMutation({
    mutationFn:()=> bookVisit(value,propertyId,email),
    onSuccess:()=>handleBookingSuccess(),
    onError:({response}) =>toast.error(response.data.message),
    onSettled:()=> setOpened(false)
  })
    // const {userDetails:{}} =useContext(UserContextDetail);
//   const handleBookingSuccess = () =>{
//     // toast.success("You have booked your visit",{
//     //     position:"bottom-right",
//     // });

//     // setUserDetails((prev)=>({
//     //     ...prev,
//     //     bookings:[
//     //         ...prev.bookings,{
//     //             id:propertyId,date:dayjs(value).format('DD/MM/YYYY')
//     //         }
//     //     ]
//     // }))
//   }
    
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit"
      zIndex={1}
    >
      <div>
        <div className='flexColCenter'>
              
        <DateInput value={value} onChange={setValue} minDate={new Date()}/>
          <Button disabled={!value || isLoading} onClick={()=>mutate()}>
          Book Visit</Button>
        </div>
      </div>
    </Modal>
  );
};

export default BookingModal;
