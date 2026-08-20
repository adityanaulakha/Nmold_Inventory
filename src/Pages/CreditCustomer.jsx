import React from 'react'
import DueCustomersComponent from '../Components/Customers/CreditCustomerComponent'

const DueCustomers = ({searchQuery}) => {
  return (
    <div className='md:ml-[16%] w-full md:w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
            <div className=''>
                <DueCustomersComponent searchQuery={searchQuery} />
            </div>
        </div>
  )
}

export default DueCustomers
