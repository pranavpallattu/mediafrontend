import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addHistoryApi, removeVideo } from '../services/allApi';




function Videocard({ videoDetails, setDeleteStatus, present }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    let caption = videoDetails?.caption
    let url = videoDetails?.embedurl
    const time = new Date()
    console.log(time);
    const timeStamp = new Intl.DateTimeFormat("en-GB", { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', }).format(time)
    console.log(timeStamp);

    const reqBody = {
      caption,
      url,
      timeStamp
    }

    const result = await addHistoryApi(reqBody)
    console.log(result);
  }


  const handleDelete = async (id) => {
    const result = await removeVideo(id)
    console.log(result);
    if (result.status == 200) {
      setDeleteStatus(result)
    }

  }

  const videoDrag = (e, vDetails) => {
    console.log(e);
    console.log(vDetails);
    e.dataTransfer.setData("videoDetails", JSON.stringify(vDetails))

  }



  return (
    <>
      <Card style={{ width: '100%' }} className='mt-4' draggable onDragStart={(e) => videoDrag(e, videoDetails)} >
        {!present && <Card.Img onClick={handleShow} variant="top" src={videoDetails?.Imgurl} style={{ height: '300px' }} />
        }
        <Card.Body className='d-flex justify-content-between'>
          <Card.Title>{videoDetails?.caption}</Card.Title>
          {!present && <Button onClick={() => { handleDelete(videoDetails?.id) }} variant="danger"><FontAwesomeIcon icon={faTrash} /></Button>
          }
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{`${videoDetails?.caption}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <iframe width="100%" height="315" src={`${videoDetails?.embedurl}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>

      </Modal>



    </>

  )
}

export default Videocard