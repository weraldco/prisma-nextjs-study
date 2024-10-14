import { updatePost } from '@/actions/action';
import React from 'react';

const EditForm = ({ post }) => {
	// const updatePostById = updatePost.bind(FormData, post.id);
	return (
		<div>
			<form className="grid gap-4 w-[300px]" action={updatePost}>
				<input
					type="text"
					name="title"
					placeholder="title.."
					className="px-4 py-2 bg-slate-100 rounded-lg"
					defaultValue={post?.title}
				/>
				<textarea
					name="content"
					placeholder="Content.."
					className="px-4 py-2 bg-slate-100 rounded-lg"
					defaultValue={post?.content}
				/>
				<button
					className="bg-blue-500 text-white py-2 px-4 rounded-lg"
					type="submit"
				>
					Update Post
				</button>
			</form>
		</div>
	);
};

export default EditForm;
