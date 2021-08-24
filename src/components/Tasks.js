import Task from "./Task";
import InactiveTask from "./InactiveTask";

const Tasks = ({ tasks, onDelete, onViewTask, setTaskToUpdate, updateTaskStatus, user}) => {
    return (
        <>
            {
                tasks.filter((task) => task.completed === false).map((task) => (
                    <Task key={task.id} task={task}
                          onDelete={onDelete}
                          onViewTask={onViewTask}
                          setTaskToUpdate={setTaskToUpdate}
                          updateTaskStatus={updateTaskStatus}/>
                ))
            }

            <div className="text-gray-500 px-2 pt-10 pb-0 mb-0 ">Completed tasks</div>
            {
                tasks.filter((task) => task.completed === true).map((task) => (
                    <InactiveTask key={task.id} task={task} user={user}
                          onDelete={onDelete}
                          onViewTask={onViewTask}
                          setTaskToUpdate={setTaskToUpdate}
                          updateTaskStatus={updateTaskStatus}/>
                ))
            }
        </>
    )
}

export default Tasks