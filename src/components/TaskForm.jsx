import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
function TaskForm() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { createTask } = useContext(TaskContext);

	const handleSubmit = e => {
		e.preventDefault();
		createTask({ title, description });
		setDescription('');
		setTitle('');
	};
	return (
		<div className='max-w-md mx-auto'>
			<form onSubmit={handleSubmit} className='bg-slate-500'>
				<input
					className='bg-slate-50 p-3 w-full mb-2'
					autoFocus
					value={title}
					placeholder='Escribe tu tarea'
					onChange={e => {
						setTitle(e.target.value);
					}}
				/>
				<textarea
					className='bg-slate-50 p-3 w-full mb-2'
					value={description}
					placeholder='escribe la descripcion de la tarea'
					onChange={e => {
						setDescription(e.target.value);
					}}
				></textarea>
				<button>Guardar</button>
			</form>
		</div>
	);
}

export default TaskForm;
