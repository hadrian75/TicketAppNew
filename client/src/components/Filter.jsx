import React, { useState } from 'react'
import { ChevronUp20Regular, ChevronDown20Regular, ChevronRight16Regular } from '@fluentui/react-icons'
import InputFilter from './InputFilter'
import AnimateHeight from 'react-animate-height'
import '../bgAndResponsive.css'
const Filter = () => {
    const [toggleEvent, setToggleEvent] = useState(false)
    const [toggleLocation, setToggleLocation] = useState(false)



    return (
        <div className='flex flex-col px-10 py-10 my-10 gap-y-8 bg-frameColor w-[300px]'>
            <span className='flex flex-row justify-between relative items-center'>
                <label htmlFor="checkOnline" className='text-xl text-white' id='checkbox-label'>Event Offline</label>
                <input type="checkbox" value="offline" id="checkOffline" className=' text-white cursor-pointer absolute right-0 opacity-1 z-20 w-[22px] h-[22px] opacity-0 peer' />
                <span className='w-[20px] h-[20px] border-2 border-white rounded-full cursor-pointer relative '></span>
                <span className='absolute w-[12px] h-[12px] right-[3.7px] top-[4.7px] rounded-full peer-checked:bg-white z-10'></span>
            </span>
            <div className='flex flex-col'>

                <span className='flex flex-row justify-between items-center'>

                    <label htmlFor="" className='text-xl text-white flex items-center'>{toggleEvent == true ? <ChevronRight16Regular className='-translate-x-1' /> : ""}Event</label>
                    {
                        toggleEvent == false ?
                            <button className='' onClick={() => setToggleEvent(true)}><ChevronDown20Regular primaryFill='white' id='ChevUp' /></button>
                            :
                            <button className='' onClick={() => setToggleEvent(false)} > <ChevronUp20Regular primaryFill='white' id='ChevDown' /></button>

                    }
                </span>

                <div className={`${toggleEvent == false ? "hidden" : ""} w-[95%] ml-auto  `} id="FilterInput">
                    <InputFilter
                        name="All"
                        type="checkbox"
                        value="All"
                        id="checkAllLocation"
                        className={``}
                    />
                    <InputFilter
                        name="Sumbawa"
                        type="checkbox"
                        value="Sumbawa"
                        id="checkSumbawa"
                        className={``}
                    />
                    <InputFilter
                        name="Bali"
                        type="checkbox"
                        value="Bali"
                        id="checkBali"
                        className={``}
                    />
                    <InputFilter
                        name="Jawa"
                        type="checkbox"
                        value="Jawa"
                        id="checkJawa"
                        className={``}
                    />
                </div>

            </div>

            <div className='flex flex-col'>

                <span className='flex flex-row justify-between items-center'>

                    <label htmlFor="" className='text-xl text-white flex items-center'>{toggleLocation == true ? <ChevronRight16Regular className='-translate-x-1' /> : ""}Location</label>
                    {
                        toggleLocation == false ?
                            <button className='' onClick={() => setToggleLocation(true)}><ChevronDown20Regular primaryFill='white' id='ChevUp' /></button>
                            :
                            <button className='' onClick={() => setToggleLocation(false)} > <ChevronUp20Regular primaryFill='white' id='ChevDown' /></button>

                    }
                </span>

                <div className={`${toggleLocation == false ? "hidden" : ""} w-[95%] ml-auto  `} id="FilterInput">
                    <InputFilter
                        name="All"
                        type="checkbox"
                        value="All"
                        id="checkAllLocation"
                        className={``}
                    />
                    <InputFilter
                        name="Sumbawa"
                        type="checkbox"
                        value="Sumbawa"
                        id="checkSumbawa"
                        className={``}
                    />
                    <InputFilter
                        name="Bali"
                        type="checkbox"
                        value="Bali"
                        id="checkBali"
                        className={``}
                    />
                    <InputFilter
                        name="Jawa"
                        type="checkbox"
                        value="Jawa"
                        id="checkJawa"
                        className={``}
                    />
                </div>

            </div>

        </div >
    )

}
export default Filter;




   // const [list, setList] = useState(true)
    // let locationArray = []
    // const handleChange = async (event) => {
    //     if (event.target.checked) {
    //         locationArray.push(event.target.value)
    //         event.isCheck = true
    //         console.log(locationArray)
    //     }
    // }




    // return (
    //     <div className="flex flex-col px-10 py-10 my-10 w-96 bg-frameColor">
    //         <span className="flex flex-col  gap-7 pb-10">
    //             <h1 className="text-3xl font-semibold text-white">Filter</h1>
    //         </span>
    //         <span className="flex flex-col gap-7 pb-10 justify-center">
    //             <span className="flex justify-between text-white">
    //                 <label htmlFor="onlineCheck" className='text-xl'>Event Offline</label>
    //                 <input type="checkbox" value="" id="onlineCheck" onChange={() => toggleChange()} className={`mr-5`} />

    //             </span>


    //         </span>
    //         <span className="flex flex-col gap-7 pb-10">
    //             <span className='flex justify-between'>
    //                 <h1 className="text-xl  text-white">Location</h1>
    //                 {
    //                     list
    //                         ?
    //                         <ChevronDown20Regular
    //                             primaryFill='white'
    //                             className='cursor-pointer'
    //                             onClick={() => setList(false)}
    //                         />
    //                         :
    //                         <ChevronUp20Regular
    //                             primaryFill='white'
    //                             className='cursor-pointer'
    //                             onClick={() => setList(true)}
    //                         />

    //                 }
    //             </span>
    //             <span className={`w-full flex ${list ? "hidden" : ""} animate-slide-down delay-200`}>
    //                 <ul className=" w-full p-3 space-y-1 text-sm columns-1 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
    //                     <li>
    //                         <div className="flex items-center p-2 rounded">
    //                             <label htmlFor="checkBali" className="ml-2 w-full text-lg font-medium text-base-60">Bali</label>

    //                             <input id="checkBali" type="checkbox" value="bali" onChange={handleChange} className="w-[14px] h-[14px] bg-gray-100 border-gray-300 checkbox rounded-[50%]  " />
    //                         </div>
    //                     </li>
    //                     <li>
    //                         <div className="flex items-center p-2 rounded">
    //                             <label htmlFor="checkJawa" className="ml-2 w-full text-lg font-medium text-base-60 ">Jawa</label>
    //                             <input id="checkJawa" type="checkbox" value="jawa" onChange={handleChange} className="w-[14px] h-[14px] bg-gray-100 rounded border-gray-300 checkbox " />
    //                         </div>
    //                     </li>
    //                     <li>
    //                         <div className="flex items-center p-2 rounded">
    //                             <label htmlFor="checkSumbawa" className="ml-2 w-full text-lg font-medium text-base-60">Sumbawa</label>

    //                             <input id="checkSumbawa" type="checkbox" value="sumbawa" onChange={handleChange} className="w-[14px] h-[14px]  bg-gray-100 rounded border-gray-300 checkbox" />
    //                         </div>
    //                     </li>
    //                     <li>
    //                         <div className="flex items-center p-2 rounded justify-between w-full">
    //                             <label htmlFor="checkSumatra" className="ml-2 w-full text-lg font-medium text-base-60"  >Sumatra</label>
    //                             <input id="checkSumatra" type="checkbox" value="sumatra" onChange={handleChange} isCheck={(e) => e.target.isCheck = false} className={`w-[14px] h-[14px]  bg-gray-100 rounded border-gray-300`} />
    //                         </div>
    //                     </li>
    //                 </ul>
    //             </span>
    //         </span>
    //     </div >
    // )