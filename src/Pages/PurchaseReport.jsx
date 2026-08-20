import React from 'react'
import PurchaseReportComponent from '../Components/Purchases/PurchaseReportComponent'
const PurchaseReport = ({searchQuery}) => {
  return (
    <div className='md:ml-[16%] w-full md:w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
      <div className=''>
        <PurchaseReportComponent searchQuery={searchQuery}/>
      </div>
    </div>
  )
}

export default PurchaseReport 
