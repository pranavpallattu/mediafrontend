import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({ setAddStatus}) {

    const [show, setShow] = useState(false);

    const [videoDetails , setVideoDetails] = useState({
      caption:"",
      Imgurl:"",
      embedurl:""
    }
    )
    console.log(videoDetails);

    const handleCancel=()=>{
      setVideoDetails({
        caption:"",
        Imgurl:"",
        embedurl:""
      })
    }

    const handleAdd=async()=>{
      const {caption , Imgurl , embedurl} = videoDetails

      if(!caption || !Imgurl  || !embedurl){
        toast.info('please fill the form completely')
      }
      else{

        if(embedurl.startsWith('https://youtu.be/')){
          let link=`https://www.youtube.com/embed/${embedurl.slice(17,28)}`
          console.log(link);
          const result = await addVideoApi({caption,Imgurl,embedurl:link})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('video added succesfully')
            handleClose()
            setAddStatus(result)
          }
          else{
            toast.error('Something went wrong')
            handleCancel()
          }
          
        }
        else{
          let link=`https://www.youtube.com/embed/${embedurl.slice(-11)}`
          console.log(link);
          const result = await addVideoApi({caption,Imgurl,embedurl:link})
          console.log(result);
          if(result.status>=200 && result.status<300){
            toast.success('video added succesfully')
            handleClose()
            setAddStatus(result)
          }
          else{
            toast.error('Something went wrong')
            handleCancel()
          }
          
        }

       
        
      }
    }
    

    const handleClose = () => { setShow(false);
        handleCancel();
    }
    const handleShow = () => setShow(true);

  return (
    <>
    <h5>Upload New Video <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-3' /> </h5>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} /> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please fill the following details</p>
            <div className='border  border-secondary p-3 rounded'>
                <input type="text" value={videoDetails.caption} placeholder='Video Caption' onChange={(e)=>setVideoDetails({...videoDetails ,caption:e.target.value})} className='form-control mb-3' />
                <input type="text" value={videoDetails.Imgurl} placeholder='Video Image' onChange={(e)=>setVideoDetails({...videoDetails ,Imgurl:e.target.value})} className='form-control mb-3' />
                <input type="text" value={videoDetails.embedurl} placeholder='Video Url' onChange={(e)=>setVideoDetails({...videoDetails ,embedurl:e.target.value})} className='form-control mb-3' />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Add