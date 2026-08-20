import React from 'react'
import "../../Styles/Home.css"
import "../../Styles/PurchaseAll.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CustomerReportComponent = ({ids,setids}) => { 
    return (
      <>
          <div className={`${ids === 20 ? "" : "hidden"}`}>
            <div className='home-table2 rounded-xl p-4'>    
                <div className=''>
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <h2 className="text-xl font-semibold">Back</h2>
                        </div>
                      <button className="px-4 py-2 bg-[#5884FF] text-white rounded shadow-sm shadow-[#5884FF]" onClick={()=>setids(0)}>Download Report</button>
                    </div>
                    <div className="flex justify-between items-center mb-4 font-semibold">
                        <div className="flex items-center space-x-4 text-lg">
                            <h2>CC</h2>
                            <h2>Company</h2>
                        </div>
                        <p className="text-right mr-4">Date: 27 March, 2024</p>
                    </div>

                    {/* Detials */}
                    <div className="p-2 rounded shadow mb-4 border border-gray-400">
                        <div className=''>
                            <div className="flex border-b border-gray-400">
                                <p className='p-2 items-center w-1/4'><span className="font-bold ">Name:</span> John Doe</p>
                                <p className='p-2 items-center'><span className="font-bold">Email:</span> JohnDoe@gmail.com</p>
                            </div>
                            <div className="flex">
                                <p className='p-2 items-center w-1/4'><span className="font-bold">Phone:</span> +91 12842 12094</p>
                                <p className='p-2 items-center'><span className="font-bold">Address:</span> John Doe, 123 Elm Street, Apt 4B, Springfield, IL 62704, USA.</p>
                            </div>
                        </div>
                    </div>


        <div className="rounded shadow">
          <table className="w-full text-center table-auto custom_table">
            <thead className=''>
              <tr>
                <th className='p-2'>Invoice No.</th>
                <th>Product</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody className=''>
              <tr>
                <td rowSpan="3">#891234</td>
                <td>Mouse</td>
                <td>Graphics Card</td>
                <td>12,093</td>
                <td>Graphics Card</td>
                <td>Graphics Card</td>
                
              </tr>
              <tr>
                <td>Keyboard</td>  
                <td>Processors</td>
                <td>12,093</td>
                <td>Processors</td>
                <td>Processors</td>  
              </tr>
              <tr>
                <td>Laptop</td>  
                <td>RAM</td> 
                <td>12,093</td>
                <td>RAM</td>
                <td>RAM</td>   
              </tr>
              <tr>
                <td rowSpan="3">#891234</td>
                <td>Mouse</td>
                <td>Graphics Card</td>
                <td>12,093</td>
                <td>Graphics Card</td>
                <td>Graphics Card</td>
                
              </tr>
              <tr>
                <td>Keyboard</td>  
                <td>Processors</td>
                <td>12,093</td>
                <td>Processors</td>
                <td>Processors</td>    
              </tr>
              <tr>
                <td>Laptop</td>  
                <td>RAM</td>
                <td>12,093</td>
                <td>RAM</td>
                <td>RAM</td>   
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5" className="text-right pr-16 font-bold">Grand Total</td>
                <td>36,000</td>
              </tr>
              <tr>
                <td colSpan="5" className="text-right pr-16 font-bold">Amount Paid</td>
                <td>30,000</td>
              </tr>
              <tr>
                <td colSpan="5" className="text-right pr-16 font-bold">Amount Due</td>
                <td>6,000</td>
              </tr>
            </tfoot>
          </table>
        </div>
        </div>       
        </div>
        </div>
             </>
    )
}

export default CustomerReportComponent
