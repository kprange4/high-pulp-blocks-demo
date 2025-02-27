<?php
function kp_add_borders( $block_content = '', $block = [] ) {
	$defaults = [
		'bcBorderStyle' => 'none',
		'bcPadding' => '10px',
		'bcWidth' => '2px',
		'bcRadius' => '2px',
		'bcColor' => 'black',
	];

	$attrs = array_merge($defaults, $block['attrs']);
	// only do this if border style is set
	if($attrs['bcBorderStyle'] !== 'none'){
		$divStyles = "
			border-style: {$attrs['bcBorderStyle']};
			padding: {$attrs['bcPadding']}px;
			border-width: {$attrs['bcWidth']}px;
			border-radius: {$attrs['bcRadius']}px;
			border-color: {$attrs['bcColor']};
			";

		// wrap the block content with a div with these styles
		$block_content = '<div style="'.$divStyles.'">' . $block_content . '</div>';
	}

	// return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'kp_add_borders', 10, 2 );
