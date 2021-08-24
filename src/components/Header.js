const Header = () => {
    return (
        <div className='flex justify-between items-center py-7'>
            <div className="flex text-2xl font-bold"><a href="https://mkhululi.dev">Task Manager</a></div>
            <div>
                <div>
                    <img className="rounded-full" src="https://ui-avatars.com/api/?name=Nick+X" alt="user avatar" width={48} height={40}  />
                </div>
            </div>
        </div>
    )
}

export default Header
