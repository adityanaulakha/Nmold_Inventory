import React from 'react'

const UpdateSupplier = ({ ids, setids }) => {
    return (
        <>
            <div className={`${ids === 18 ? "" : "hidden"}`}>
                <div className='bg-white m-auto w-[379px] p-4 flex flex-col gap-4 rounded-xl border-2 border-[#5884FF]'>
                    <div className='' onClick={() => { setids(0) }}>
                        <h1 className='text-[1.5rem] text-center'>Update Supplier</h1>
                    </div>
                    <div className=''>
                            <form className='flex flex-col gap-2'>
                            <div className='add-items-class'>
                                    <label className='text-[15px]'>Supplier Name</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Name' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='text-[15px]'>Supplier Mobile</label>
                                    <div className='mt-1'>
                                        <input type='number' placeholder='Contact Number' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='text-[15px]'>Supplier Email</label>
                                    <div className='mt-1'>
                                        <input type='email' placeholder='Email' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='text-[15px]'>Supplier Address</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Address' className='login-input4 w-full' />
                                    </div>
                                </div>
                            </form>
                            <div className='flex justify-center items-center mt-4'>
                                <div className='btn' onClick={() => { setids(0) }}>Add</div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateSupplier
