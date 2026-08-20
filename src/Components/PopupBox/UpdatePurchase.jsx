import React from 'react'

const UpdatePurchase = ({ ids, setids }) => {
    return (
        <>
            <div className={`${ids === 22 ? "" : "hidden"}`}>
                <div className='bg-white m-auto w-[379px] p-4 flex flex-col gap-4 rounded-xl border-2 border-[#5884FF]'>
                    <div className='' onClick={() => { setids(0) }}>
                        <h1 className='text-[1.5rem] text-center'>Update Purchase</h1>
                    </div>
                    <div className=''>
                            <form className='flex flex-col gap-2'>
                            <div className='add-items-class'>
                                    <label className='text-[15px]'>Product Name</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Name' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='text-[15px]'>Unit</label>
                                    <div className='mt-1'>
                                        <input type='number' placeholder='eg: 123' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='text-[15px]'>Category</label>
                                    <div className='mt-1'>
                                        <input type='email' placeholder='Category' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='text-[15px]'>Product Supplier</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='John Doe' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='text-[15px]'>Product Amount</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='eg: 430' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='text-[15px]'>Product Stock</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Stock' className='login-input4 w-full' />
                                    </div>
                                </div>
                            </form>
                            <div className='flex justify-center items-center mt-4'>
                                <div className='btn' onClick={() => { setids(0) }}>Update</div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdatePurchase
