import React from 'react';

export default function StaffListItem({post}) {

	return (
		//<li>{post.title.rendered} — {post.acf['staff-position']}</li>
		<li>{post.title.rendered} — {post.acf.staff_position}</li>
	)
}
