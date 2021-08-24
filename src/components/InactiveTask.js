const InactiveTask = ({task, onDelete, onViewTask, setTaskToUpdate, updateTaskStatus}) => {
    return (
        <div id={task.id} className="bg-gray-50 border-2 flex justify-between my-5 p-5 rounded-md">
            <div className="flex">
                <div className="px-4 flex items-center">
                    <input className="rounded-sm h-5 w-5  text-gray-400" type="checkbox" checked={true} onChange={() => updateTaskStatus(task.id)}/>
                </div>
                <div className="text-xl  text-gray-500 ">{task.title}</div>
            </div>
            <div id="actions" className="flex items-center">
            </div>
        </div>
    )
}

export default InactiveTask