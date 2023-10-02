import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line react/prop-types
const LoadingDiv = ({show}) => {
    const loadingClass = show
    ? "fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white/50 z-50"
    : "hidden"
    return (
        <div className={loadingClass}>
            <div className='text-center'>
            <FontAwesomeIcon icon={faSpinner} spinPulse className='text-7xl text-customGreen ' />
            </div>
        </div>
    )
}

export default LoadingDiv