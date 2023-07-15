import './Loader.scss'


const Loader = () => {
    return (
        <div className='loader'>
            <div className='loader__ring'></div>
            <div className='loader__ring'></div>
            <div className='loader__ring'></div>
            <span className='loader__loading'>Loading...</span>
        </div>
    )  
}

export default Loader;