<?php
/**
 * Variables WP gives us
 * @var array $attributes Array of block attributes
 * @var string $content The Post content from the save function
 */

// TODO: add pagination
$query = new WP_Query([
	'post_type' => 'staff',
	'orderby' => 'title',
	'order' => 'ASC',
]);
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while( $query->have_posts() ) : $query->the_post(); ?>
	<div class="flip-card">
		<div class="flip-card-inner">
			<div class="flip-card-front">
				<?= get_the_post_thumbnail(); ?>
			</div>
			<div class="flip-card-back" style="background-color: <?= $attributes['cardColor'] ?>">
				<h3 class="name" style="color: <?= $attributes['headingColor'] ?>"><?= get_the_title() ?></h3>
				<div class="position" style="color: <?= $attributes['textColor'] ?>"><?= get_post_meta(get_the_ID(), 'staff_position', true) ?></div>
				<div class="bio" style="color: <?= $attributes['textColor'] ?>">
					<p><?= get_post_meta(get_the_ID(), 'staff_bio', true) ?></p>
				</div>
			</div>
		</div>
	</div>
	<?php endwhile ?>
</div>
