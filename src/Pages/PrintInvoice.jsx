import React from 'react'
import PrintInvoiceComponent from '../Components/Invoices/PrintInvoiceComponent'


const PrintInvoice = ({searchQuery}) => {
  return (
    <div className='md:ml-[16%] w-full md:w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
      <div className=''>
        <PrintInvoiceComponent searchQuery={searchQuery}/>
      </div>
    </div>
  )
}

export default PrintInvoice
