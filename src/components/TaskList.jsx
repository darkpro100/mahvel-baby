import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
function TaskList() {
	const { tasks, deleteTask } = useContext(TaskContext);
	return (
		<div className='bg-gray-800 text-white grid grid-cols-4 gap-2'>
			{tasks.map(task => (
				<div key={task.id}>
					<h1>{task.title}</h1>
					<p>{task.description}</p>
					<button
						className='bg-red-500 px-2 py-1 rounded-md mt-4'
						onClick={() => deleteTask(task.id)}
					>
						borrar
					</button>
				</div>
			))}
		</div>
	);
}

export default TaskList;
