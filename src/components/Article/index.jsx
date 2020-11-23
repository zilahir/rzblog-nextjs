import React from 'react';
import { Body } from '@/components/Article/Body';

export const Article = ({
	post
}) => (
	<Body content={post.content} />
)