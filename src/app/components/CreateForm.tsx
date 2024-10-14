import { createPost } from '@/actions/action';
import React from 'react';

const CreateForm = () => {
	return (
		<div>
			<form className="grid gap-4 w-[300px]" action={createPost}>
				<input
					type="text"
					name="title"
					placeholder="title.."
					className="px-4 py-2 bg-slate-100 rounded-lg"
				/>
				<textarea
					name="content"
					placeholder="Content.."
					className="px-4 py-2 bg-slate-100 rounded-lg"
				/>
				<button
					className="bg-blue-500 text-white py-2 px-4 rounded-lg"
					type="submit"
				>
					Add new post
				</button>
			</form>
		</div>
	);
};

export default CreateForm;
