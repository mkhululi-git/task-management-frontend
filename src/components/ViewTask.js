const ViewTask = ({title, description, closeViewTaskModal}) => {

    return (
        <div>
            <div style={OVERLAY_STYLES}  onClick={() => closeViewTaskModal()} />
            <div className="bg-gray-100  shadow-xl  px-10 rounded-lg w-100 space-y-5" style={MODAL_STYLES} >
                    <div className="pt-7 flex justify-between">
                        <div/>
                        <div className="close-modal focus:ring-transparent focus:border-none focus:outline-none "><button onClick={() => closeViewTaskModal()} ><img alt="close icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAA1UlEQVRYhe2VQQ6CMBBFHy70fopE8Vpcg8TzAQluxqSpWNvOVBPTv2pIZ96DkinU1LymAQagM+zZSc8mZvMArMBsJNFJr1V6f0wLTFKwADcFvHXgC9CnFGolsuEWEmq4RsIMniNhDk+RKAaPkSgOD0l8Df6MO1hmb205PYNxv4TqzXcKCX+uR815i5z54RH4P2G/8UxzdwRz2oC/EzOXCMGLS/jwa2CvuUQK3FzimAE3k9DA1RI+/JIBV0ncpWASGW3cu2OMKTiIhAXclRiBvWHPmj/JA/aXleK4JdAgAAAAAElFTkSuQmCC"/></button></div>
                    </div>
                    <div className="flex flex-col">
                        <label id='newTaskTitle' className="bg-gray-200 font-semibold rounded-sm border-none focus:ring-1 focus:ring-gray-400 p-4">{title} </label>
                    </div>
                    <div className="flex flex-col">
                        <p className="bg-gray-200 rounded-md border-none focus:ring-1 focus:ring-gray-400 p-5 mb-7">{description}</p>
                    </div>
            </div>
        </div>
    )
}

const MODAL_STYLES = {
    position: 'fixed',
    width: '45%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -70%)',
    zIndex: 1000,
}
const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0, .7)',
    zIndex: 1000,
}

export default ViewTask