import React from 'react'
import AllInvoiceComponent from '../Components/Invoices/AllInvoiceComponent'

const AllInvoice = ({searchQuery}) => {
  return (
    <div className='md:ml-[16%] w-full md:w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
      <div className=''>
        <AllInvoiceComponent searchQuery={searchQuery}/>
      </div>
    </div>
  )
}

export default AllInvoice
