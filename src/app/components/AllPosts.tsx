import { getData, postCount } from '@/actions/action';
import Link from 'next/link';
import React from 'react';
import DeleteBtn from './DeleteBtn';
// import DeleteBtn from './DeleteBtn';

const AllPosts = async () => {
	const user = await getData();
	return (
		<div>
			<h1 className="text-3xl font-bold">All Posts({postCount()})</h1>
			<ul className="grid gap-2 ">
				{user?.posts.map((post) => (
					<li key={post.id} className="grid grid-cols-2">
						<Link
							className="bg-blue-100 py-2 px-4"
							href={`/posts/${post.slug}`}
						>
							{post.title}
						</Link>
						<Link href={`posts/edit/${post.id}`}>Edit</Link>
						<DeleteBtn id={post.id} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllPosts;
