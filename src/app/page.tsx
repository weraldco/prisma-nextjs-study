import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex flex-col flex-1">
			<main className="grid justify-center items-center">
				<h1 className="text-3xl font-bold">Sample blog website</h1>
				<Link className="bg-blue-500 text-center text-white" href="/posts/">
					go to the blog
				</Link>
			</main>
		</div>
	);
}
