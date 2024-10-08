import { createPost } from '@/actions/action';
import prisma from '@/lib/db';
import Link from 'next/link';
import React from 'react';

export default async function PostsPage() {
	const user = await prisma.user.findUnique({
		where: {
			email: 'werald@gmail.com',
		},
		include: {
			posts: true,
		},
	});
	const postCount = await prisma.post.count();
	return (
		<div className="flex flex-col p-20">
			<main className="grid items-center justify-center gap-4 ">
				<h1 className="text-3xl font-bold">All Posts({postCount})</h1>
				<ul className="grid gap-2 ">
					{user?.posts.map((post) => (
						<li key={post.id} className="grid">
							<Link
								className="bg-blue-100 py-2 px-4"
								href={`/posts/${post.slug}`}
							>
								{post.title}
							</Link>
						</li>
					))}
				</ul>
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
			</main>
		</div>
	);
}
