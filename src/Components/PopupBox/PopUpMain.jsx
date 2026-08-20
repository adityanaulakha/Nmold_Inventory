import React from 'react'
import UpdateSupplier from './UpdateSupplier'
import UpdateCustomer from './UpdateCustomer'
import "../../Styles/Login.css"
import "./PopupBox.css"
import DeleteConfirmation from './DeleteConfirmation'
import EnterPin from './EnterPin'
import AddUnit from '../Units/AddUnit'
import UpdateUnit from './UpdateUnit'
import AddCategory from '../Categories/AddCategory'
import UpdateCategory from './UpdateCategory'
import CustomerReportComponent from '../Customers/CustomerReportComponent'
import UpdateProduct from './UpdateProduct'
import UpdatePurchase from './UpdatePurchase'

const PopUpMain = ({ ids, setShowPopup }) => {
  return (
    <div className='model-box'>
      <div className='popup-content'>
      <CustomerReportComponent ids={ids} setids={() => setShowPopup(false)}/>
      <EnterPin ids={ids} setids={()=> setShowPopup(false)}/>
      <UpdateSupplier ids={ids} setids={() => setShowPopup(false)}/>
      <DeleteConfirmation ids={ids} setids={()=>setShowPopup(false)}/>
      <UpdateCustomer ids={ids} setids={() => setShowPopup(false)}/>
      <AddUnit ids={ids} setids={()=> setShowPopup(false)}/>
      <UpdateUnit ids={ids} setids={()=> setShowPopup(false)}/>
      <AddCategory ids={ids} setids={()=>setShowPopup(false)}/>
      <UpdateCategory ids={ids} setids={()=>setShowPopup(false)}/>
      <UpdateProduct ids={ids} setids={()=> setShowPopup(false)}/>
      <UpdatePurchase ids={ids} setids={()=> setShowPopup(false)}/>
      </div>
    </div>

  )
}

export default PopUpMain
