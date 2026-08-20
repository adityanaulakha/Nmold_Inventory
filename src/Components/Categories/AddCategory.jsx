import React from 'react'

const AddCategory = ({ ids, setids }) => {
    return (
        <>
            <div className={`${ids === 10 ? "" : "hidden"}`}>
                <div className=''>
                <div className='bg-white m-auto w-[379px]  p-4 flex flex-col gap-4 rounded-xl border-2 border-[#5884FF]'>
                    <div className='' onClick={() => { setids(0) }}>
                        <h1 className='text-[1.5rem] text-center font-bold'>Add Category</h1>
                        {/* <hr className='text-[black] text-[10px] mt-2 border border-[black]' /> */}
                    </div>
                    <div className=''>
                        <p className='py-2 font-semibold text-[17px]'>Category Name</p>
                        <form className=''>
                            <div className=''>
                                <input type='text' placeholder='Category Name' className='border-2 border-[#5884FF] py-2 rounded-xl px-2 w-full' />
                            </div>
                        </form>
                            <div className='flex justify-center items-center mt-8 mb-6'>
                                <div className='btn' onClick={() => { setids(0) }}>Add</div>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default AddCategory
