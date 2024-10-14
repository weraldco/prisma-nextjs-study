'use client';
import { deletePost } from '@/actions/action';

export default function DeleteBtn({ id }: { id: string }) {
	const deletePostId = deletePost.bind(null, id);
	return (
		<form action={deletePostId}>
			<button>Delete Post</button>
		</form>
	);
}
