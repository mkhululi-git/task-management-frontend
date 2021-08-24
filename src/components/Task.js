const Task = ({task, onDelete, onViewTask, setTaskToUpdate, updateTaskStatus, user}) => {
    return (
        <div id={task.id} className="bg-white flex justify-between my-5 p-5 rounded-md shadow">
            <div className="flex">
                <div className="px-4 flex items-center">
                    <input className="rounded-sm h-5 w-5  text-gray-600" type="checkbox" onChange={() => updateTaskStatus(task.id)}/>
                </div>
                <div className="text-xl  text-gray-800 ">{task.title}</div>
            </div>
            <div id="actions" className="flex items-center">
                <div className="px-3"><img src="https://img.icons8.com/plumpy/24/000000/visible.png" alt="View Task" onClick={() => onViewTask(task.title, task.description)} /></div>
                <div className="px-3"><img src="https://img.icons8.com/plumpy/24/000000/edit--v1.png" alt="Edit Task" onClick={() => setTaskToUpdate(task) } /></div>
                <div hidden={ !task.user_id === user.id } className="px-2" >
                    <img src="https://img.icons8.com/plumpy/24/000000/trash.png" alt="Delete Task"
                         onClick={() => onDelete(task.id)} /></div>
            </div>
        </div>
    )
}

export default Task