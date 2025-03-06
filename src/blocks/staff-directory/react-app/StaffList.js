import React, {useState} from 'react';
import StaffListItem from "./StaffListItem";

export default function StaffList({posts}) {
	return (
		<ul>
			{posts.map(post => (
				<StaffListItem post={post} key={post.id}/>
			))}
		</ul>
	)
}
