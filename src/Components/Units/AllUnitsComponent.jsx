import React , {useState} from 'react'
import { CategoriesData } from '../../Data/index'
import "../../Styles/Home.css"
import "../../Styles/PurchaseAll.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PopUpMain from '../PopupBox/PopUpMain';

const AllUnitsComponent = ({searchQuery}) => {
    const [state, setState] = React.useState(CategoriesData);
    const [dir, setDir] = React.useState('asc')
    const [start, setstart] = React.useState(0)
    const [interval, setinterval] = React.useState(15)
    const [showPopup, setShowPopup] = useState(false);
    const [popupAction, setPopupAction] = useState(null); 
    const [selectedId, setSelectedId] = useState(null); 

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
            setState(CategoriesData); // Reset to original data if searchQuery is empty
            return;
        }
    
        const searchData = CategoriesData.filter(item => 
            item.name1.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name2.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.name3.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
    
        setState(searchData);
    }, [searchQuery]);

    const handlePopup = (action, id) => {
        setPopupAction(action);
        setSelectedId(id);
        setShowPopup(true);
    };

    return (
        <>
            {showPopup && popupAction === 'add' && <PopUpMain ids={selectedId} setShowPopup={setShowPopup} />}
            {showPopup && popupAction === 'update' && <PopUpMain ids={selectedId} setShowPopup={setShowPopup} />}
            {showPopup && popupAction === 'delete' && <PopUpMain ids={selectedId} setShowPopup={setShowPopup} />}
            <div className='home-table2 rounded-xl'>
                <div className=''>
                    <div className="flex justify-between items-center mb-4">
                        <Link to="/"><div className="flex items-center space-x-2 cursor-pointer">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <h2 className="text-xl font-semibold cursor-pointer">Dashboard</h2>
                        </div></Link>
                      <button className="px-4 py-2 bg-[#5884FF] text-white rounded-md" onClick={()=>handlePopup('add',7)}>Add Unit</button>
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
                            >Unit
                            </th>
                            <th
                                onClick={() => sortdata('name3')}
                            >Abbreviation
                            </th>
                            <th
                                
                            >
                                Edit
                            </th>
                            <th
                                
                            >
                                Delete
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
                                        {item.name3}
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        <div className='py-[2px] cursor-pointer flex gap-3 px-4 justify-center items-center' onClick={()=>handlePopup('update',8)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 15" fill="none">
                                                <path d="M0.928711 11.8225V14.2291C0.928711 14.4508 1.11204 14.625 1.34538 14.625H3.87871C3.98704 14.625 4.09538 14.5854 4.17038 14.5062L13.2704 5.86915L10.1454 2.9004L1.05371 11.5375C0.970378 11.6166 0.928711 11.7116 0.928711 11.8225ZM15.687 3.57332C15.7643 3.50008 15.8256 3.41308 15.8674 3.31731C15.9092 3.22154 15.9307 3.11887 15.9307 3.01519C15.9307 2.91151 15.9092 2.80884 15.8674 2.71307C15.8256 2.6173 15.7643 2.53031 15.687 2.45707L13.737 0.604565C13.66 0.531175 13.5684 0.47295 13.4676 0.433223C13.3668 0.393496 13.2587 0.373047 13.1495 0.373047C13.0404 0.373047 12.9323 0.393496 12.8315 0.433223C12.7307 0.47295 12.6391 0.531175 12.562 0.604565L11.037 2.05331L14.162 5.02207L15.687 3.57332Z" fill="#5884FF" />
                                            </svg>
                                            <div className=''>
                                                Edit
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className=''>
                                        <div className='py-[2px] cursor-pointer flex gap-3 px-4 justify-center items-center' onClick={()=>handlePopup('delete',4)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 13 15" fill="none">
                                                <path d="M9.34521 1.16667L8.51188 0.375H4.34522L3.51188 1.16667H0.595215V2.75H12.2619V1.16667H9.34521ZM1.42855 13.0417C1.42855 13.9125 2.17855 14.625 3.09521 14.625H9.76188C10.6785 14.625 11.4285 13.9125 11.4285 13.0417V3.54167H1.42855V13.0417ZM3.09521 5.125H9.76188V13.0417H3.09521V5.125Z" fill="#5884FF" />
                                            </svg>
                                            <div className=''>
                                                Delete
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

export default AllUnitsComponent
