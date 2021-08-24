import emptyListImage from '../assets/task-list-empty.jpg'
import {useState} from'react'
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import ViewTask from "./ViewTask";
import EditTask from "./EditTask";
const Board = ({   board,
                   tasks,
                   onDelete,
                   onAddTask,
                   showNewTaskModal,
                   onCloseNewTaskModal,
                   onSaveNewTask,
                   onUpdateTask,
                   updateTaskStatus,
                   users,
                   changeUserBoard,
                    user
} ) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const [taskToUpdate, setTaskToUpdate] = useState(null)

    const viewTask = (title, description) => {
        setTitle(title)
        setDescription(description)
    }
    const closeViewTaskModal = () =>{
        setTitle('')
        setDescription('')
    }


    const onCloseUpdateTaskModal = () => {
        setTaskToUpdate(null)
    }

    return (
        <div className="">
            <div className="flex justify-between items-center py-5">
                <div>
                    <select onChange={(e) => changeUserBoard(e.target.value)} className="bg-gray-100 text-gray-800 font-semibold py-3 focus:ring-gray-200 focus:outline-none border-none rounded-sm" name="board" id="">
                        {
                            users.map((user) => (
                            <option className="" key={user.id} value={user.id}>{user.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div>

                    <button
                        type="button" onClick={() => onAddTask()}
                        className="px-4 py-3 bg-gray-300 rounded text-gray hover:bg-gray-400 focus:outline-none shadow mx-1 flex">

                        <img alt="add icon" className="h-6 w-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABRklEQVRIidWVu04DMRBFD8tLoFCASJWEEigJP8CnsXwabRoeBbC0JIg0ISIR6QKFZ1cTy/ZsojS5kiWPZ3zv+DWGTceW4c+AtrRj4FDGf4FvoC9tvopAB7gCGkYSU+AR+Ag5tyOiXeAa2DPIkZgzYBcY1hHoApc1iH2cCt9XSqCDyzyGHLgB7iP+JjAGfsqBHeXMcHuewrnhB7cDn8jBZ8rRxj7QOmgIFyGBdaEVEjgxJumDvzBiKy59BgdeUE58z289uwDulF0+yIUV+PhL+KzYytYrmAFHytYZgduWMvMceE8IzsqOXsHIyLJQ/RT5ApcW6BuTlkHF5QtM1kA+BQYhgTnwZEwugDcj5gFVvkPletViB/CCl2Somg5lvLkk+Svw7A+GBMCV3DHuRe4bxBOgR+Rm1f0yWyKmv8wR7mIMSHyZm49/O8g4woHgoiYAAAAASUVORK5CYII="/>

                        <span className="ml-2 font-bold text-gray-900"> New Task</span>
                    </button>
                </div>
            </div>
            <div className="bg-gray-100 rounded-lg px-3 py-1" style={{height: 750}}>
                {
                    tasks.length > 0 ?
                        <Tasks tasks={tasks} onDelete={onDelete} user={user}
                               onViewTask={viewTask}
                               closeViewTaskModal={closeViewTaskModal}
                               setTaskToUpdate={setTaskToUpdate}
                               updateTaskStatus={updateTaskStatus}/> :
                        <div className="flex justify-center py-20">
                            <div>
                                <div className="text-lg">There aren't any uncompleted tasks.. Kudos!</div>
                                <img className="h-80" src={emptyListImage} alt="empty board" />
                            </div>
                        </div>
                }
            </div>


            {showNewTaskModal ? <AddTask onCloseNewTaskModal={onCloseNewTaskModal} onAddTask={onAddTask}
                                         onSaveNewTask={onSaveNewTask} boardId={board.id}/> : ''}


            {title ? <ViewTask title={title} description={description} closeViewTaskModal={closeViewTaskModal}/> : ''}


            { taskToUpdate ? <EditTask onCloseUpdateTaskModal={onCloseUpdateTaskModal}
                                       onUpdateTask={onUpdateTask} task={taskToUpdate}/> : ''}

        </div>




    )
}

export default Board













