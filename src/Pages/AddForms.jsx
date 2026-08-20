import React from 'react'
import AddProduct from '../Components/Products/AddProduct'
import AddInvoice from '../Components/Invoices/AddInvoice'
import AddPurchase from '../Components/Purchases/AddPurchase'

const AddForms = () => {
  return (
    <>
        <div className=' ml-[16%] aw-[100%]  max-h-screen px-[2rem] mt-[2rem] flex justify-center '>
            <div className=''>
                {/* <AddProduct /> */}
                {/* <AddInvoice/> */}
                <AddPurchase/>
            </div>
        </div>
    </>
  )
}

export default AddForms
