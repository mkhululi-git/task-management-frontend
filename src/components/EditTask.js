import {useState} from 'react'

const EditTask = ({onCloseUpdateTaskModal, onUpdateTask, task}) => {

    const [title, setTitle] = useState(task.title)
    const [errorMessage, setErrorMessage] = useState('')
    const [description, setDescription] = useState(task.description)


    const onSubmit = (e) => {
        e.preventDefault()

        if (!title ){
            setErrorMessage('Please provide a Title for the task')
            setTimeout(function (){setErrorMessage('')}, 5000)
            return
        }
        if (!description ){
            setErrorMessage('Please provide a Description for the task')
            setTimeout(function (){setErrorMessage('')}, 5000)
            return
        }
        task.title = title
        task.description = description
        onUpdateTask(task)
        onCloseUpdateTaskModal()
        setTitle('')
        setDescription('')

    }


    return (
        <div>
            <div style={OVERLAY_STYLES}  onClick={() => onCloseUpdateTaskModal()} />
            <div className="bg-gray-100  shadow-xl  px-10 rounded-lg w-100 space-y-5" style={MODAL_STYLES} >
                <form action="">
                    <div className="pt-7 flex justify-between">
                        <div className="modal-title text-xl font-bold">Edit task</div>
                        <div className="close-modal focus:ring-transparent focus:border-none focus:outline-none "><button onClick={() => onCloseUpdateTaskModal()} ><img alt="close icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAA1UlEQVRYhe2VQQ6CMBBFHy70fopE8Vpcg8TzAQluxqSpWNvOVBPTv2pIZ96DkinU1LymAQagM+zZSc8mZvMArMBsJNFJr1V6f0wLTFKwADcFvHXgC9CnFGolsuEWEmq4RsIMniNhDk+RKAaPkSgOD0l8Df6MO1hmb205PYNxv4TqzXcKCX+uR815i5z54RH4P2G/8UxzdwRz2oC/EzOXCMGLS/jwa2CvuUQK3FzimAE3k9DA1RI+/JIBV0ncpWASGW3cu2OMKTiIhAXclRiBvWHPmj/JA/aXleK4JdAgAAAAAElFTkSuQmCC"/></button></div>
                    </div>
                    {errorMessage ?
                    <div className="bg-red-100 border-l-4 border-red-500 text-orange-700 p-4 " role="alert">
                        <p>{errorMessage}</p>
                    </div> : ''}

                    <div className="flex flex-col">
                        <label htmlFor="" className="text-lg font-semibold text-gray-700 py-2">Title</label>
                        <input className="bg-gray-200 rounded-sm border-none focus:ring-1 focus:ring-gray-400" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-lg font-semibold text-gray-700 py-2">Description</label>
                        <textarea className="bg-gray-200 rounded-md border-none focus:ring-1 focus:ring-gray-400" value={description} cols="30" rows="10"  onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="flex flex-col">
                        <button onClick={onSubmit}
                                className="px-4 py-3 bg-gray-900 rounded flex justify-center text-xl font-bold text-gray-50
                    hover:bg-gray-800 w-60 focus:outline-none shadow mx-1 flex mb-10 my-5">Save Task</button>
                    </div>
                </form>
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

export default EditTask