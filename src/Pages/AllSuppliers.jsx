import React from 'react'
import SupplierComponent from '../Components/Suppliers/AllSupplierComponent'
const Suppliers = ({searchQuery}) => {
    return (
        <div className='md:ml-[16%] w-full md:w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
            <div className=''>
                <SupplierComponent searchQuery={searchQuery} />
            </div>
        </div>
    )
}

export default Suppliers
