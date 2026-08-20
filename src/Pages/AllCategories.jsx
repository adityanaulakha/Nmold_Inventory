import React from 'react'
import AllCategoriesComponent from '../Components/Categories/AllCategoriesComponent'

const AllCategories = ({searchQuery}) => {
  return (
    <div className='md:ml-[16%] w-full md:w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'>
            <div className=''>
                <AllCategoriesComponent searchQuery={searchQuery} />
            </div>
        </div>
  )
}

export default AllCategories
