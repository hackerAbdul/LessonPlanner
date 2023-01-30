import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

const form = () => {

    const [task, setTask] = useState()

    function handleFormSubmit(){
        console.log("hello world")
    }

    return (
        <form className="todo" onSubmit={handleFormSubmit}>
            <div className="wrapper">
                <input type="text"
                id='task'
                className='input'
                autoFocus
                placeholder="Lesson Topic"
                required
                autoComplete='off'
                value={task}
                onInput={(e) => setTask(e.target.value)}
                maxLength={60}></input>

                <label htmlFor="task" className='label'>Lesson Topic</label>
            </div>
            <button className="btn" type="submit" aria-label='Lesson Topic'>
                <PlusIcon />
            </button>
        </form>
    )
}

export default form