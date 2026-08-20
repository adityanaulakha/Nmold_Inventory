import React from 'react';
import Img from '../../Assets/PInVerification.png';

const EnterPin = ({ ids, setids }) => {
    return (
        <div className={`${ids === 5 ? "" : "hidden"}`}>
            <div className='bg-white m-auto w-[350px] p-4 flex flex-col gap-4 rounded-xl'>
                <div className=''>
                    <h1 className='text-2xl text-center font-semibold'>PIN Verification</h1>
                    <p className='text-sm text-center p-2 font-medium text-gray-600'>Please enter your PIN to Continue</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src={Img} alt="Logo" className='w-[180px] h-[180px]'/>
                    <input type='password' placeholder='Enter Your Pin' className='my-4 p-2 border-2 border-[#5884FF] w-full rounded-md'/>
                    <button type='submit' className='btn' onClick={()=>setids(0)}>Confirm</button>
                </div>        
            </div>
        </div>
    )
}

export default EnterPin
