import React from 'react'

const AddSupplier = () => {
    return (
        <>
            <div className="md:ml-[16%] w-full md:w-[84%] px-4">
            <div className='home-table2-type3 rounded-xl flex justify-center'>
                <div className='pt-[1.6rem] flex flex-col items-center w-full '>
                    <div className='font-bold text-[25px] text-center'>
                        Add Supplier
                    </div>
                    {/* <div className='w-[95%] mt-2'>
                        <hr className='border-slate-300 border-[1px] w-full' />
                    </div> */}
                    <div className='mt-4 w-[95%]'>
                        <div className=''>
                            <form className='flex flex-col gap-6'>
                            <div className='add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Supplier Name</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Name' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Supplier Mobile</label>
                                    <div className='mt-1'>
                                        <input type='number' placeholder='Contact Number' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Supplier Email</label>
                                    <div className='mt-1'>
                                        <input type='email' placeholder='Email' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Supplier Address</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Address' className='login-input4 w-full' />
                                    </div>
                                </div>
                            </form>
                            <div className='flex justify-center items-center mt-8 mb-6'>
                                <div className="btn w-[200px] h-[40px] shadow-sm shadow-[#5884FF] items-center" onClick={() => { }}>Add</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default AddSupplier
