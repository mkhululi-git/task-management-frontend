import {useState} from 'react'
import Header from "./components/Header";
import Board from "./components/Board";
import axios from "axios";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

    const apiURL = 'http://127.0.0.1:8000/api/'

    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const [board, setBoard] = useState()
    const [tasks, setTasks] = useState([])

    //  ADD TASK
    const [showNewTaskModal, setShowNewTaskModal] = useState(false);
    const closeNewTaskModal = () => {
        setShowNewTaskModal(!showNewTaskModal);
    }
    const addTask = () => {
        setShowNewTaskModal(true);
    }

    //  API Requests
    const deleteTask = (id) => {
        console.log('delete: ' + id)
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const saveNewTask = (board_id, title, description) => {
        console.log(board_id + ' : ' + title + ' : ' + description)
    }

    const updateTask = (task) => {
        console.log('update : ' + JSON.stringify(task))
    }

    const updateTaskStatus = (task_id) => {
        console.log('Status change for task: ' + task_id)
        tasks.find(x => x.id === task_id).completed = !tasks.find(x => x.id === task_id).completed
        console.log(JSON.stringify(tasks))
        setTasks(tasks)
    }

    const changeUserBoard = (user_id) => {
        console.log('Requesting to view tasks for user: ' + user_id)
    }
    const [login, setLogin] = useState(true)
    const [register, setRegister] = useState(false)
    const registerLogin = () => {
        setLogin(!login)
        setRegister(!register)
    }

    const loadUsers = () => {
        if (!users.length > 0) {
            axios.get(apiURL + 'users').then(res => {
                setUsers(res.data)
                loadBoard(user.id)
            })
        }
    }
    const loadBoard = (userId) => {
        if (!board) {
            axios.get(apiURL + 'users/' + userId + '/board').then(res => {
                loadTasks();
            })
        }
    }
    const loadTasks = () => {

        axios.get(apiURL + 'boards/' + user.id + '/tasks').then(res => {
            setTasks(res.data)
            console.log("H#########################################################" + JSON.stringify(tasks))
        })
    }

    if (!user) {
        return (
            <div className="flex flex-col justify-between min-h-screen">
                <div className="py-20">
                    {login ? <Login setUser={setUser} registerLogin={registerLogin}/> : ''}
                    {register ? <Register setUser={setUser} registerLogin={registerLogin}/> : ''}
                </div>
                <div/>
            </div>
        )
    } else {
        loadUsers()

        return (
            <div className='min-h-screen flex flex-col justify-between font-sans'>
                <Header/>
                <Board board={user}
                       tasks={tasks} onDelete={deleteTask}
                       onAddTask={addTask}
                       showNewTaskModal={showNewTaskModal}
                       onCloseNewTaskModal={closeNewTaskModal}
                       onSaveNewTask={saveNewTask}
                       onUpdateTask={updateTask}
                       updateTaskStatus={updateTaskStatus}
                       users={users}
                       changeUserBoard={changeUserBoard}
                       user={user}
                />
                <div/>
            </div>
        );
    }


}

export default App;
