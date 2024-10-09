'use server';
import prisma from '@/lib/db';
// import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

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
		revalidatePath('/posts');
	} catch (error) {
		console.log(error);
		// if (error instanceof Prisma.PrismaClientInitializationError) {
		// 	if (error.code === 'P2002') {
		// 		console.log('There are unique constraint violations');
		// 	}
		// }
	}
}

// export async function editPost(formData: FormData, id: string) {
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
// }

// export async function deletePost(id: string) {
// 	await prisma.post.delete({ where: { id } });
// }
