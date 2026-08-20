import React from 'react'
import AllPurchaseComponent from '../Components/Purchases/AllPurchase'
const AllPurchase = ({searchQuery}) => {
  return (
    <div className='md:ml-[16%] w-full md:w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
      <div className=''>
        <AllPurchaseComponent searchQuery={searchQuery}/>
      </div>
    </div>
  )
}

export default AllPurchase 
