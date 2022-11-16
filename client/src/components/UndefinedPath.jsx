import NotFoundImage from '../../images/404NotFound.png'
const UndefinedPath = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            <img src={NotFoundImage} alt="" className='object-cover w-[50%] h-auto animate-shaking' />
        </div>
    )
}
export default UndefinedPath