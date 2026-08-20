import React from 'react';
import Img from '../../Assets/addunit.png';

const EnterPin = ({ ids, setids }) => {
    return (
        <div className={`${ids === 7 ? "" : "hidden"}`}>
            <div className='bg-white m-auto w-[350px] p-4 flex flex-col gap-4 rounded-xl'>
                <div className=''>
                    <h1 className='text-2xl text-center font-semibold'>Add Unit</h1>
                </div>
                <div className='flex flex-col space-y-2 justify-center items-center'>
                    <img src={Img} alt="Logo" className='w-[180px] h-[180px]'/>
                    <form>
                    <label for="unit" className='font-medium mb-2'>Unit Name</label>
                    <input type='password' placeholder='' id="unit" className='p-2 border-2 border-[#5884FF] w-full rounded-md'/>
                    </form>
                    <button type='submit' className='btn' onClick={()=>setids(0)}>Add Unit</button>
                </div>        
            </div>
        </div>
    )
}

export default EnterPin
