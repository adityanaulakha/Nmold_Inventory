import React from 'react'
import { purchasealldata } from '../../Data/index'
import "../../Styles/Home.css"
import "../../Styles/PurchaseAll.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import D from '../../Assets/download.png';

const PurchaseReportComponent = ({searchQuery}) => {
    const [state, setState] = React.useState(purchasealldata);
    const [dir, setDir] = React.useState('asc')
    const [start, setstart] = React.useState(0)
    const [interval, _setinterval] = React.useState(15)
    const [_num,_setnumber]=React.useState(-1)
    
    const sortdata = (key) => {
        const sortedData = [...state].sort((a, b) => {
            if (a[key] > b[key]) return dir === 'asc' ? 1 : -1;
            if (a[key] < b[key]) return dir === 'asc' ? -1 : 1;
            return 0;
        });
        setDir(dir === 'asc' ? 'desc' : 'asc');
        setState(sortedData);
    };

    React.useEffect(() => {
        if (!searchQuery) {
            setState(purchasealldata); // Reset to original data if searchQuery is empty
            return;
        }
    
        const searchData = purchasealldata.filter(item => 
            item.name1.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name2.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name3.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name4.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name5.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name6.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
    
        setState(searchData);
    }, [searchQuery]);
    
    return (
        <>
            {/* <PopUpMain id={_num}/> */}
            <div className='home-table2 rounded-xl'>
                <div className=''>
                     <div className="flex justify-between items-center mb-4">
                        <Link to="/all-purchase"><div className="flex items-center space-x-2 cursor-pointer">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <h2 className="text-xl font-semibold cursor-pointer">All Purchase</h2>
                        </div>
                        </Link>
                        <div className='flex bg-[#5884FF]'>
                            <button className="flex items-center px-4 py-2 bg-[#5884FF] text-white rounded-md shadow-sm shadow-[#5884FF]"><img src={D} alt="Logo" className="h-6 w-6 mr-2" />Download PDF</button>
                        </div>
                      
                      </div>
                      <div className='table-scroll w-full overflow-x-auto'>
                    <table className='w-full dash-table1 bg-white'>
                        <tr className='border border-solid table-header-row cursor-pointer ' style={{ backgroundColor: "white" }}>
                            <th
                                onClick={() => sortdata('name1')}
                            >
                                S.No
                            </th>
                            <th
                                onClick={() => sortdata('name2')}
                            >
                                Purchase No.
                            </th>
                            <th
                                onClick={() => sortdata('name3')}
                            >
                                Date
                            </th>
                            <th
                                onClick={() => sortdata('name9')}
                            >Price/Qty
                            </th>
                            <th
                                onClick={() => sortdata('name5')}
                            >
                                Category
                            </th>
                            <th onClick={() => sortdata('name6')}>
                                Qty
                            </th>
                            <th
                                onClick={() => sortdata('name7')}
                            >
                                Product Name
                            </th>

                            <th
                                onClick={() => sortdata('name8')}
                            >
                                Total Price
                            </th>
                        </tr>
                        {state.slice(start, start + interval).map((item, index) => (
                            <tr className='h-[2rem]'>
                                <td>
                                    <div className=''>
                                        {index + 1}

                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name2}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name3}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name9}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name5}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name6}
                                    </div>
                                </td>

                                <td>
                                    <div className=''>
                                        {item.name7}
                                    </div>
                                </td>
                                <td>
                                    <div>{item.name10}</div>
                                </td>
                            </tr>
                        ))}
                        <tr className='font-semibold'>
                            <td  colSpan="7" className='text-right pr-12 uppercase '>Grand Total</td>
                            <td className=''>Rs. 36000</td>
                        </tr>
                    </table></div>
                </div>
                <div className='w-full bottom-pagination right-0 flex justify-center items-center gap-2 mt-2 bottom-pagination'>
                    <div className='flex gap-2'>
                        <div className=' home-gt-btn cursor-pointer'
                            onClick={() => {
                                setstart(Math.max(0, start - interval))
                            }}
                        >
                            &lt; &nbsp; Back
                        </div>
                        <div className='home-pagination cursor-pointer home-pagination-active'
                            onClick={() => setstart(0)}
                        >
                            1
                        </div>
                        <div className={`home-pagination cursor-pointer ${Math.ceil(start / (interval)) + 1 > 1 ? "" : "hidden"}`}
                            style={{ display: (Math.ceil(start / (interval)) > 0 && (Math.ceil(start / (interval)) + 1) * interval < state.length) ? "block" : "none" }}
                            onClick={() => {
                                setstart(Math.max(0, Math.ceil(start / (interval))) * interval)
                            }}>
                            {Math.ceil(start / (interval)) + 1}
                        </div>
                        <div className={`home-pagination cursor-pointer ${start >= interval ? "hidden" : " hidden "} `}
                            style={{ display: state.length > interval ? "block" : "none" }}
                        >
                            ...
                        </div>
                        <div className={`home-pagination cursor-pointer ${state.length > 15 ? "" : "hidden"} `}
                            onClick={() => setstart(
                                Math.max(0, Math.min(state.length, Math.floor(state.length / interval) * interval))
                            )}
                        >
                            {Math.ceil(state.length / interval)}
                        </div>
                        <div className='home-gt-btn cursor-pointer'
                            onClick={() => {
                                if (start + interval < state.length) setstart(Math.min(state.length, start + interval));
                            }}
                        >
                            Next  &nbsp; &gt;
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PurchaseReportComponent
