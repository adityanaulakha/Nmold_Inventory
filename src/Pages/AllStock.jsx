import React  from 'react'
import AllStockComponent from '../Components/Stocks/AllStockComponent'

const AllStock = ({searchQuery}) => {
  return (
    <div className='md:ml-[16%] w-full md:w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
            <div>
                <AllStockComponent searchQuery={searchQuery} />
            </div>
        </div>
  )
}

export default AllStock
