import React, { useEffect } from 'react'
import Videocard from './Videocard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, deleteCategoryApi, getCategoryApi, updateCategoryApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Category(categoryVDStatus) {
 
  
  const [show, setShow] = useState(false);
  const[categoryName , setCategoryName] = useState("")
  const[allCategory , setAllCategory] = useState([])
  const[categoryStatus , setCategoryStatus] = useState({})
  const[deleteStatus , setDeleteStatus] = useState([])
  const[categoryUpdateStatus,setCategoryUpdateStatus]=useState({})

  const handleClose = () => {setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  console.log(categoryName);

  const handleCancel = () =>{
    setCategoryName("")
  }

  const handleAdd =async()=>{
    if(!categoryName){
      alert('please fill the form completelt')
    }
    else{
      const reqBody = {
        category: categoryName,
        allVideos:[]
      }
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.info('Category added successfully')
        handleClose()
        setCategoryStatus(result)

      }
      else{
        toast.warning('something went wrong')
      }
      
    }

  }

  const getCategory = async()=>{
    const result = await getCategoryApi()
    // console.log(result);
    if(result.status>=200 && result.status<300){
      setAllCategory(result.data)
    }
    
  }

  const deleteCategory = async(id)=>{
  const result =  await deleteCategoryApi(id)
  if(result.status>=200 && result.status<300)  
{  
  setDeleteStatus(result)
}
  }


  const videoOver = (e)=>{
    //reload
    e.preventDefault()
  }


  const videoDrop = async(e , categoryDetails)=>{
   console.log(categoryDetails);
   const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
   console.log(videoDetails);
   
  



  if(categoryDetails.allVideos.find((item)=>item.id==videoDetails.id)){
   alert('video already in the category')
  }
  else{
  
   categoryDetails.allVideos.push(videoDetails)
   console.log(categoryDetails);
   const result = await updateCategoryApi(categoryDetails.id , categoryDetails)
   console.log(result);

   if(result.status>=200 && result.status<300){
      setCategoryUpdateStatus(result)
   }
   
  }
   
  
  }


  console.log(allCategory);

  const videoDrag=(e,videoDetails,categoryDetails)=>{
    console.log(videoDetails,categoryDetails);

    const details={
      videoDetails,
      categoryDetails
    }
    e.dataTransfer.setData("Details",JSON.stringify(details))
    
  }
  

  useEffect(()=>{
    getCategory()
  },[categoryStatus,deleteStatus,categoryUpdateStatus,categoryVDStatus])


  return (
    <>
    <h5 className='mt-5'>Category</h5>
    <button onClick={handleShow} className='btn btn-warning mt-4 w-100'>Add category</button>
    
    
    {allCategory?.length>0?
    allCategory?.map((item)=>(
    <div className='border border-secondary p-3 rounded mt-4 ' droppable onDragOver={(e)=>videoOver(e)} onDrop={(e)=>videoDrop(e, item)} >
        <div className='d-flex justify-content-between mb-3'>
            <h6>{item?.category}</h6>
            <button onClick={()=>deleteCategory(item?.id)} className='btn btn-danger '><FontAwesomeIcon icon={faTrash} /></button>
        </div>
       { item?.allVideos.length>0 &&

          item?.allVideos.map((video)=>(
            <div draggable onDragStart={(e)=>videoDrag(e, video , item)}>
              <Videocard videoDetails={video} present={true}/> 
            </div>
          )) 
       }

    </div>
    ))

  
:

    <h5 className='text-center text-danger mt-4'>No Category Added Yet...</h5>}
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-4 rounded border border-dark'>
            <input type="text" placeholder='Enter Category Name' className='form-control' onChange={(e)=>setCategoryName(e.target.value)} value={categoryName} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Category