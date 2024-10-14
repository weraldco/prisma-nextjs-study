// import prisma from '@/lib/db';
// import Link from 'next/link';
import React from 'react';
import AllPosts from '../components/AllPosts';
// import DeleteBtn from '../components/DeleteBtn';

export default async function PostsPage() {
	return (
		<div className="flex flex-col p-20">
			<main className="grid items-center justify-center gap-4 ">
				<AllPosts />
			</main>
		</div>
	);
}
