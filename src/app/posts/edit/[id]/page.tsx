import { getPostById } from '@/actions/action';
import EditForm from '@/app/components/EditForm';
import React from 'react';

const EditPostPage = async ({ params }: { params: { id: string } }) => {
	const post = await getPostById(params.id);
	return <div>{<EditForm post={post} />}</div>;
};

export default EditPostPage;
