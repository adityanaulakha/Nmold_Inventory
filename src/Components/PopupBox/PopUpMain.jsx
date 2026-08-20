import React from 'react'
import UpdateSupplier from './UpdateSupplier'
import UpdateCustomer from './UpdateCustomer'
import ForgotPassword from './ForgotPassword'
import "../../Styles/Login.css"
import "./PopupBox.css"
import EnterOTP from './EnterOTP'
import NewPassword from './NewPassword'
import DeleteConfirmation from './DeleteConfirmation'
import EnterPin from './EnterPin'
import VerifyAgain from './VerifyAgain'
import AddUnit from '../Units/AddUnit'
import UpdateUnit from './UpdateUnit'
import UpdateDue from './UpdateDue'
import AddCategory from '../Categories/AddCategory'
import UpdateCategory from './UpdateCategory'
import CustomerReport from '../../Pages/CustomerReport'
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


{/* <ForgotPassword ids={ids} setids={setids} />
      <EnterOTP ids={ids} setids={setids} />
      <NewPassword ids={ids} setids={setids} />
      <DeleteConfirmation ids={ids} setids={setids} />
      <EnterPin ids={ids} setids={setids} />
      <VerifyAgain ids={ids} setids={setids} />
      <AddUnit ids={ids} setids={setids} />
      <UpdateUnit ids={ids} setids={setids} />
      <UpdateDue ids={ids} setids={setids} /> */}
      {/* <AddCategory ids={ids} setids={setids} /> */}
      {/* <UpdateCategory ids={ids} setids={setids} /> */}
