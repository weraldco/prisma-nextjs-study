import prisma from '@/lib/db';
import Link from 'next/link';
import React from 'react';

export default async function PostsPage() {
	const posts = await prisma.post.findMany({
		where: {
			title: {
				endsWith: 'Post',
			},
		},
		orderBy: {
			createdAt: 'desc',
		},
		select: {
			id: true,
			title: true,
			slug: true,
		},
		take: 1,
		skip: 1,
	});
	const postCount = await prisma.post.count();
	return (
		<div className="flex flex-col p-20">
			<main className="grid items-center justify-center gap-4 ">
				<h1 className="text-3xl font-bold">All Posts({postCount})</h1>
				<ul className="grid gap-2 ">
					{posts.map((post) => (
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
			</main>
		</div>
	);
}
