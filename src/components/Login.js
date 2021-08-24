import {useState} from 'react'
import axios from "axios";
const Login = ({setUser, registerLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        if (!email ){
            setErrorMessage('Please enter your email adddress')
            setTimeout(function (){setErrorMessage('')}, 5000)
            return
        }
        if (!password ){
            setErrorMessage('Please your password')
            setTimeout(function (){setErrorMessage('')}, 5000)
            return
        }
        axios.post('http://127.0.0.1:8000/login', {
            email: email,
            password: password,
        }).then(res => {
            setUser(res.data)
        }).catch(err => {
            console.log(err)
            setErrorMessage('Username or password incorrect')
            setTimeout(function (){setErrorMessage('')}, 5000)
        })
    }

    return (
    <div>
        {/*<div className="flex justify-center"><img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/whatsapp/303/otter_1f9a6.png" alt="Emoji"/></div>*/}
        <div className="bg-white flex flex-col justify-between mx-48 my-5 p-5 px-20 w-90 rounded-md shadow border-2">

            {errorMessage ?
                <div className="bg-red-100 border-l-4 border-red-500 text-orange-700 p-4 " role="alert">
                    <p>{errorMessage}</p>
                </div> : ''}

            <div className="flex flex-col">
                <label htmlFor="" className="text-lg font-semibold text-gray-700 py-2">Email</label>
                <input className="bg-gray-200 rounded-sm border-none focus:ring-1 focus:ring-gray-400"
                       type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="" className="text-lg font-semibold text-gray-700 py-2">Password</label>
                <input className="bg-gray-200 rounded-sm border-none focus:ring-1 focus:ring-gray-400"
                       type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex flex-col">
                <button className="px-4 py-3 bg-gray-900 rounded flex justify-center text-xl font-bold text-gray-50
                    hover:bg-gray-800 focus:outline-none shadow mx-1 flex mt-10 mb-5"
                    onClick={onSubmit}
                    >Login</button>
                <p className="flex justify-center"><button onClick={() => registerLogin()} className="text-blue-400 px-3">Don't have an account ? Create Account here</button></p>
            </div>
        </div>
    </div>
    )
}

export default Login