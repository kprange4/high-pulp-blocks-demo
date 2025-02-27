import React, {useState} from 'react';
import "./StarRating.scss";

export default function StarRating({rating, setRating}){
	const [hover, setHover] = useState(rating || 0);
	return <div className="stars">
		{[1,2,3,4,5].map(star =>
			<span key={star}
				  className={(star <= hover) ? 'star on' : 'star off'}
				  onMouseEnter={() => setHover(star)}
				  onMouseLeave={() => setHover(rating)}
				  onClick={() => setRating(star)}
			>★</span>
		)}
	</div>
}
