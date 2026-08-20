import React , {useState} from 'react'
import { customerReportData } from '../../Data/index'
import "../../Styles/Home.css"
import "../../Styles/PurchaseAll.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PopUpMain from '../PopupBox/PopUpMain';

const CustomerWiseReportComponent = ({searchQuery}) => {
    const [state, setState] = React.useState(customerReportData);
    const [dir, setDir] = React.useState('asc')
    const [start, setstart] = React.useState(0)
    const [interval, _setinterval] = React.useState(15)
    const [showPopup, setShowPopup] = useState(false);

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
            setState(customerReportData); // Reset to original data if searchQuery is empty
            return;
        }
    
        const searchData = customerReportData.filter(item => 
            item.name1.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name2.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name3.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name4.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name5.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
    
        setState(searchData);
    }, [searchQuery]);

    return (
        <>
            {showPopup && <PopUpMain ids={20} setShowPopup={setShowPopup} />}
            <div className='home-table2 rounded-xl'>
                
                <div className=''>
                    <div className="flex justify-between items-center mb-4">
                        <Link to="/credit-customer"><div className="flex items-center space-x-2 cursor-pointer">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <h2 className="text-xl font-semibold cursor-pointer">Credit Customer</h2>
                        </div></Link>
                        <Link to="/add-customer"><button className="px-4 py-2 bg-[#5884FF] text-white rounded-md">
                        Add Customer</button></Link>
                    </div>
                    <div className='table-scroll w-full overflow-x-auto'>
                    <table className='w-full dash-table1 bg-white'>
                        <tr className='border border-solid cursor-pointer border-black h-[2rem]' style={{ backgroundColor: "white" }}>
                            <th
                                onClick={() => sortdata('name1')}
                            >Sr. No.
                            </th>
                            <th
                                onClick={() => sortdata('name2')}
                            >Customer Name
                            </th>
                            <th
                                onClick={() => sortdata('name3')}
                            >Contact
                            </th>
                            <th
                                onClick={() => sortdata('name4')}
                            >Email
                            </th>
                            <th
                                onClick={() => sortdata('name5')}
                            >Address
                            </th>
                            <th>
                                Report
                            </th>
                        </tr>
                        {state.slice(start, start + interval).map((item, index) => (
                            <tr className='h-[2rem]'>
                                <td>
                                    <div className=''>
                                        {item.name1}

                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name2}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name6}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name4}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        {item.name5}
                                    </div>
                                </td>
                                <td>
                                <div className=''>

                                    <div className='flex items-center justify-center gap-2 cursor-pointer'>
                                        <div className='' onClick={()=> setShowPopup(true)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                                                <g clip-path="url(#clip0_193_3526)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4004 22C10.0064 22 5.46039 19.244 2.59239 15C5.46039 10.756 10.0064 8 15.4004 8C20.7944 8 25.3404 10.756 28.2084 15C25.3404 19.244 20.7944 22 15.4004 22ZM15.4004 6C9.01639 6 3.71239 9.412 0.552393 14.47C0.45306 14.6289 0.400391 14.8126 0.400391 15C0.400391 15.1874 0.45306 15.3711 0.552393 15.53C3.71239 20.588 9.01639 24 15.4004 24C21.7844 24 27.0884 20.588 30.2484 15.53C30.3477 15.3711 30.4004 15.1874 30.4004 15C30.4004 14.8126 30.3477 14.6289 30.2484 14.47C27.0884 9.412 21.7844 6 15.4004 6ZM15.4004 19C16.4613 19 17.4787 18.5786 18.2288 17.8284C18.979 17.0783 19.4004 16.0609 19.4004 15C19.4004 13.9391 18.979 12.9217 18.2288 12.1716C17.4787 11.4214 16.4613 11 15.4004 11C14.3395 11 13.3221 11.4214 12.572 12.1716C11.8218 12.9217 11.4004 13.9391 11.4004 15C11.4004 16.0609 11.8218 17.0783 12.572 17.8284C13.3221 18.5786 14.3395 19 15.4004 19Z" fill="#5884FF" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_193_3526">
                                                        <rect width="30" height="30" fill="white" transform="translate(0.400391)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className=''>
                                            View
                                        </div>
                                    </div>
                                </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                    </div>
                </div>
                <div className='bottom-pagination w-full right-0 flex justify-center items-center gap-2 mt-2'>
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

export default CustomerWiseReportComponent
