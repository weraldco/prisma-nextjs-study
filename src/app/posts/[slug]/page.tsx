import prisma from '@/lib/db';
import React from 'react';

export default async function PostPage({ params }) {
	const post = await prisma.post.findUnique({
		where: {
			slug: params.slug,
		},
	});
	return (
		<div className="flex flex-col p-20">
			<main className="grid items-center justify-center gap-4 ">
				<h1 className="text-xl font-bold">{post?.title}</h1>
				<p>{post?.content}</p>
			</main>
		</div>
	);
}
