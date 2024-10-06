import React from 'react';

export default function AddPost() {
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-2xl font-bold">Add new post</h1>
			<form className="grid justify-center items-center">
				<input
					type="text"
					name="title"
					placeholder="title.."
					className="px-4 py-2 bg-slate-50"
				/>
				<textarea
					name="content"
					placeholder="Content.."
					className="px-4 py-2 bg-slate-50"
				/>
				<button className="bg-blue-500 text-white py-2 px-4" type="submit">
					Add new post
				</button>
			</form>
		</div>
	);
}
