import React from 'react'
import CustomerComponent from '../Components/Customers/AllCustomersComponent'
const AllCustomers = ({searchQuery}) => {
    return (
        <div className='md:ml-[16%] w-full md:w-[84%] max-h-[100vh]  px-[2rem] mt-[2rem]'>
            <div className=''>
                <CustomerComponent searchQuery={searchQuery}/>
            </div>
        </div>
    )
}

export default AllCustomers
