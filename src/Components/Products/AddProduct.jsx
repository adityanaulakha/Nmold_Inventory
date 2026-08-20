import React from 'react'

const AddProduct = () => {
    return (
        <>
            <div className='ml-[16%]'>
            <div className='home-table2-type3 rounded-xl flex justify-center'>
                <div className='pt-[1.6rem] flex flex-col items-center w-full '>
                    <div className='font-bold text-[25px] text-center'>
                        Add Product
                    </div>
                    {/* <div className='w-[95%] mt-2'>
                        <hr className='border-slate-300 border-[1px] w-full' />
                    </div> */}
                    <div className='mt-4 w-[95%]'>
                        <div className=''>
                            <form className='flex flex-col gap-4'>
                            <div className='add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Product Name</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Product Name' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='flex space-x-2'>
                                <div className='add-items-class w-1/2'>
                                    <label className='px-[10px] text-[15px]'>Unit</label>
                                    <div className='mt-1'>
                                        <input type='number' placeholder='Unit' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class w-1/2'>
                                    <label className='px-[10px] text-[15px]'>Category</label>
                                    <div className='mt-1'>
                                        <input type='email' placeholder='Category' className='login-input4 w-full' />
                                    </div>
                                </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Product Supplier</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Product Supplier' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className='add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Product Stock</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Product Stock' className='login-input4 w-full' />
                                    </div>
                                </div>
                            </form>
                            <div className='flex justify-center items-center mt-8 mb-6'>
                                <div className='btn w-[200px] h-[40px] items-center shadow-sm shadow-[#5884FF]'onClick={() => { }}>Add</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default AddProduct
