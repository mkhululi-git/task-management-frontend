import axios from "axios";
import {useState} from "react";

const Register = ({setUser, registerLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [name, setName] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        if (!name ){
            setErrorMessage('Please enter your name.')
            setTimeout(function (){setErrorMessage('')}, 5000)
            return
        }
        if (!email ){
            setErrorMessage('Please enter your email address')
            setTimeout(function (){setErrorMessage('')}, 5000)
            return
        }
        if (!password ){
            setErrorMessage('Please your password')
            setTimeout(function (){setErrorMessage('')}, 5000)
            return
        }
        axios.post('http://127.0.0.1:8000/register', {
            name: name,
            email: email,
            password: password,
        }).then(res => {
            setUser(res.data)
        }).catch(err => {
            console.log(err)
            setErrorMessage('Couldn\'t register user, please double check your details')
            setTimeout(function (){setErrorMessage('')}, 5000)
        })

    }

    return (
<div>
    <div className="flex justify-center"><img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/dog_1f415.png" alt="Emoji"/></div>
    <div className="bg-white flex flex-col justify-between mx-48 my-5 p-5 px-20 w-90 rounded-md shadow border-2">

        {errorMessage ?
            <div className="bg-red-100 border-l-4 border-red-500 text-orange-700 p-4 " role="alert">
                <p>{errorMessage}</p>
            </div> : ''}

        <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-semibold text-gray-700 py-2">Name</label>
            <input id='newTaskTitle' className="bg-gray-200 rounded-sm border-none focus:ring-1 focus:ring-gray-400" type="text"
                   value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-semibold text-gray-700 py-2">Email</label>
            <input id='newTaskTitle' className="bg-gray-200 rounded-sm border-none focus:ring-1 focus:ring-gray-400" type="text"
                   value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-semibold text-gray-700 py-2">Password</label>
            <input id='newTaskTitle' className="bg-gray-200 rounded-sm border-none focus:ring-1 focus:ring-gray-400" type="password"
                   value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="flex flex-col">
            <button className="px-4 py-3 bg-gray-900 rounded flex justify-center text-xl font-bold text-gray-50
                    hover:bg-gray-800 focus:outline-none shadow mx-1 flex mt-10 my-5"
            onClick={onSubmit}
            >Register</button>

            <p className="flex justify-center"><button href="#" onClick={() => registerLogin()} className="text-blue-400 px-3">Already have an account? Login here</button></p>
        </div>
    </div>
</div>
    )
}

export default Register