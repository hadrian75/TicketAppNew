import { useState } from "react"


const AddEvent = () => {
    const [Online, setOnline] = useState(false)
    const [location, setLocation] = useState('');

    const handleChange = (event) => {
        setLocation(event.target.value);
    }

    return (
        <div className="bg-frameColor m-2 rounded-lg">
            <form action="" className="flex flex-col py-2 px-10 gap-5">
                <span className="flex flex-col">
                    <label htmlFor="title" className="text-white text-[16px] font-medium">Title</label>
                    <input
                        type="text"
                        id="title"
                        onChange={(e) => e.target.value}
                        className="w-[200px] h-[28px] border-[1px] border-white rounded-lg pl-2 text-[14px] text-white font-normal bg-transparent " />
                </span>

                <span className="flex flex-col gap-2">
                    <div className="flex flex-row justify-between mt-5 relative items-center w-[200px] ">
                        <input type="checkbox" value="Online" id="isOnline" className={`absolute right-0 opacity-0 -translate-x-1 z-20 w-[22px] h-[22px] peer cursor-pointer`} onChange={() => setOnline(!Online)} />
                        <label htmlFor="" className={`text-[16px] text-white font-medium`}>Online Event</label>
                        <span className='w-[19px] h-[19px] border-2 border-white rounded-full cursor-pointer relative'></span>
                        <span className='absolute w-[12.5px] h-[12.5px] right-[3.3px] top-[5.8px] rounded-full peer-checked:bg-white z-10'></span>
                    </div>
                    <span className={`${Online == true ? "hidden" : ""} flex flex-col`}>
                        <select name="" id="" className="h-[40px] bg-transparent text-white">
                            <option value="" className="text-black">Sumbawa</option>
                            <option value="">Sumbawa</option>
                            <option value="">Sumbawa</option>
                        </select>
                    </span>
                </span>
                <span className="flex flex-col">
                    <label htmlFor="title" className="text text-[16px] font-medium">Description</label>
                    <textarea
                        type="text"
                        id="title"
                        onChange={(e) => e.target.value}
                        className="w-[600px] h-[120px] focus:ring-0 focus:border-0 focus:stroke-transparent text-white border-[1px] border-white rounded-lg pl-2 text-[14px] font-normal bg-transparent " />

                </span>


            </form>

        </div >
    )
}
export default AddEvent

