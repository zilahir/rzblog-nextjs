import React from 'react';

export const Body = ({content}) => (
	<div dangerouslySetInnerHTML={{__html: content}} />
)