import React from 'react'
import AllUnitsComponent from '../Components/Units/AllUnitsComponent'

const Units = ({searchQuery}) => {
    return (
        <div className='md:ml-[16%] w-full md:w-[84%] max-h-[100vh] px-[2rem] mt-[2rem]'> {/*h-[100vh]*/}
            <div className=''>
                <AllUnitsComponent searchQuery={searchQuery} />
            </div>
        </div>
    )
}

export default Units
