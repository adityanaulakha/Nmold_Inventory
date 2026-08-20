import React from 'react';
import Img from '../../Assets/DeleteImg.png';

const DeleteConfirmation = ({ ids, setids }) => {
    return (
        <>
            <div className={`${ids === 4 ? "" : "hidden"}`}>
                <div className='bg-white m-auto w-[350px] p-4 flex flex-col gap-4 rounded-xl border-2 border-[#1BB7EA]'>
                    <div className=''>
                        <h1 className='text-2xl text-center font-semibold'>Delete Data</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <img src={Img} alt="Icon" className='w-[180px] h-[180px]'/>
                        <p className='text-lg text-center p-2 font-medium'>Are you sure you want to delete this particular data?</p>
                    </div>
                    <div className=''>
                        <form className='flex  justify-between px-2'>
                            <div className='flex justify-center items-center my-2'>
                                <div className='btn-small-w bg-white border-2 border-[#5884FF] text-[#5884FF]' onClick={() => { setids(0) }}>Cancel</div>
                            </div>
                            <div className='flex justify-center items-center my-2'>
                                <div className='btn-small-w bg-[#5884FF] text-white' onClick={() => { setids(0) }}>Delete</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteConfirmation
