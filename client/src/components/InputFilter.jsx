
const inputFilter = (props) => {
    return (
        <div className="flex flex-row justify-between mt-5 relative items-center round">
            <input type={props.type} value={props.value} id={props.id} className={`${props.className} absolute right-0 opacity-0 -translate-x-1 z-20 w-[22px] h-[22px] peer cursor-pointer`} onChange={props.onChange} />
            <label htmlFor={props.id} className={`text-xl text-base-60 peer-checked:text-white`}>{props.name}</label>
            <span className='w-[20px] h-[20px] border-2 border-white rounded-full cursor-pointer relative '></span>
            <span className='absolute w-[12px] h-[12px] right-[3.7px] top-[4.7px] rounded-full peer-checked:bg-white z-10'></span>
        </div>
    )
}
export default inputFilter;