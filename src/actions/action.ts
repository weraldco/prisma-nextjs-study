/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(formData: FormData) {
	try {
		await prisma.post.create({
			data: {
				title: formData.get('title') as string,
				slug: (formData.get('title') as string)
					.replace(/\s+/g, '-')
					.toLowerCase(),
				content: formData.get('content') as string,

				author: {
					connect: {
						email: 'werald@gmail.com',
					},
				},
			},
		});
	} catch (error) {
		console.log(error);
		// if (error instanceof Prisma.PrismaClientInitializationError) {
		// 	if (error.code === 'P2002') {
		// 		console.log('There are unique constraint violations');
		// 	}
		// }
	}
	revalidatePath('/posts');
	redirect('/posts');
}

export async function updatePost(formData: FormData, id: string) {
	console.log(id);
	console.log(formData);
	// try {
	// 	await prisma.post.update({
	// 		where: { id },
	// 		data: {
	// 			title: formData.get('title') as string,
	// 			slug: (formData.get('title') as string)
	// 				.replace(/\s+/g, '-')
	// 				.toLowerCase(),
	// 			content: formData.get('content') as string,
	// 		},
	// 	});
	// } catch (error) {
	// 	console.log(error);
	// }
	// revalidatePath('/posts');
	// redirect('/posts');
}

export async function deletePost(id: string) {
	try {
		await prisma.post.delete({ where: { id } });

		console.log(`Successfully delete Post with ID: ${id}`);
	} catch (error) {
		console.error('Error deleting post:', error);
	}
	revalidatePath('/posts');
	redirect('/posts');
}

export async function postCount() {
	try {
		return await prisma.post.count();
	} catch (error) {
		throw new Error('Cannot count the posts');
	}
}

export async function getData() {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email: `werald@gmail.com`,
			},
			include: { posts: true },
		});
		return user;
	} catch (error) {
		throw new Error('Failed to fetch posts');
	}
}

export async function getPostById(id: string) {
	try {
		const post = await prisma.post.findUnique({
			where: { id },
		});
		return post;
	} catch (error) {
		throw new Error(`Cannot fetch data, invalid ID.`);
	}
}
