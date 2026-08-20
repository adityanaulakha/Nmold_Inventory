import React from 'react'

const VerifyAgain = ({ ids, setids }) => {
    return (
        <div className={`${ids === 6 ? "" : "hidden"}`}>
            <div className='bg-white m-auto w-[379px] mt-[15%] p-4 flex flex-col gap-6 rounded-xl'>
                <div className='' onClick={() => { setids(0) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="none">
                        <path d="M45.8316 20.8332H14.1935L27.9492 7.13617C28.7341 6.35222 29.1751 5.28895 29.1751 4.18027C29.1751 3.07159 28.7341 2.00833 27.9492 1.22437C27.1642 0.44042 26.0997 0 24.9896 0C23.8796 0 22.815 0.44042 22.03 1.22437L1.18805 22.0406C0.808556 22.4365 0.511079 22.9034 0.312686 23.4144C-0.104229 24.428 -0.104229 25.5649 0.312686 26.5785C0.511079 27.0895 0.808556 27.5564 1.18805 27.9523L22.03 48.7685C22.4176 49.1587 22.8786 49.4685 23.3865 49.6798C23.8945 49.8912 24.4393 50 24.9896 50C25.5399 50 26.0847 49.8912 26.5927 49.6798C27.1006 49.4685 27.5617 49.1587 27.9492 48.7685C28.3399 48.3815 28.65 47.921 28.8616 47.4137C29.0732 46.9064 29.1822 46.3622 29.1822 45.8126C29.1822 45.263 29.0732 44.7189 28.8616 44.2115C28.65 43.7042 28.3399 43.2438 27.9492 42.8567L14.1935 29.1597H45.8316C46.9371 29.1597 47.9974 28.7211 48.7791 27.9403C49.5608 27.1595 50 26.1006 50 24.9964C50 23.8923 49.5608 22.8334 48.7791 22.0526C47.9974 21.2718 46.9371 20.8332 45.8316 20.8332Z" fill="black" />
                    </svg>
                </div>
                <div className=''>
                    <h1 className='text-[1.5rem]'>Verification failed. Please try again.  </h1>
                </div>
                <div className=''>
                    <form className=''>
                        <div className=''>
                            {/* <input type='number' placeholder='PIN' className='login-input2 w-full' /> */}
                        </div>
                        <div className='flex justify-center items-center mt-8 mb-6'>
                            <div className='btn' onClick={() => { setids(0) }}>Verify Again</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerifyAgain
