import React from 'react'
import {homedatacart} from "../../Data/index"
import "../../Styles/Home.css"

const Card = () => {

    
    return (
        <>
             <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
                {homedatacart.map((item, index)=> {
                    return (<div key={index} className='dashboard-top-cards shadow-lg flex items-center justify-center flex-col custom-shadow'>
                        <div className='dash-top-card-img flex items-center justify-center p-4 rounded-[10px]'>
                            <img src={item.img} alt="" className='w-[2rem] h-[2rem]' />
                        </div>
                        <div className='mt-2 font-semibold text-[16px] '>
                            {item.name}
                        </div>
                        <div className=' font-bold text-[19px]'>
                            {item.value}
                        </div>
                        <div className='mt-3 text-[11px]'>
                            <span className='text-[#34A853]'>{item.percentage}%</span>
                            &nbsp;
                            From Previous Period
                        </div>
                    </div>
                    )
                })}

            </div>
        </>
    )
}

export default Card
