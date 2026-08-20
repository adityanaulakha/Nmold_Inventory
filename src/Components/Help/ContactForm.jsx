import React, { useState } from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Form</h2>
      <form className='flex flex-col space-y-4'>
        <div className='flex flex-col'>
        <label className='text-md font-medium'>Email:</label>
        <input type='email' placeholder='Enter your Email' className=' mt-2 p-2 bg-white border-2 border-[#5884FF] rounded-md'/>
        </div>
        <div className='flex flex-col'>
        <label className='text-md font-medium'>Subject:</label>
        <input type='text' placeholder='Enter Subject' className=' mt-2 p-2 bg-white border-2 border-[#5884FF] rounded-md'/>
        </div>
        <div className='flex flex-col'>
        <label className='text-md font-medium'>Description:</label>
        <input type='text' placeholder='Enter Description' className=' mt-2 p-2 bg-white border-2 border-[#5884FF] rounded-md'/>
        </div>
        <div className='flex justify-center items-center'>
        <button type="submit" className='btn'>Submit</button></div>
      </form>
    </div>
  );
};

export default ContactForm;
