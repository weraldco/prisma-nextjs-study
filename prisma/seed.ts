import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const initialPosts: Prisma.PostCreateInput[] = [
	{
		title: 'Second Post',
		slug: 'second-post',
		content: 'This is the second time sample of seeding',
		author: {
			connectOrCreate: {
				where: {
					email: 'werald@gmail.com',
				},
				create: {
					email: 'werald@gmail.com',
					hashedPassword: 'aosdaodiaodiaosd',
				},
			},
		},
	},
	{
		title: 'Third Post',
		slug: 'third-post',
		content: 'This is the third time sample of seeding',
		author: {
			connectOrCreate: {
				where: {
					email: 'werald@gmail.com',
				},
				create: {
					email: 'werald@gmail.com',
					hashedPassword: 'aosdaodiaodiaosd',
				},
			},
		},
	},
];
async function main() {
	console.log(`Starting seeding..`);

	for (const post of initialPosts) {
		const newPost = await prisma.post.create({
			data: post,
		});

		console.log(`Created post with id: ${newPost.id}`);
	}

	console.log(`Seeding finished`);
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
