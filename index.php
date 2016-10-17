<?php
/*
Template Name: Blog
*/
?>
<?php require("head.php") ?>
<body>
	<div class="main-wrapper">
		<div class="main-container">
			<?php require("header.php") ?>
			<img class="main-img" src="http://localhost:8888/blog/wp-content/themes/blog/images/forest-trees-path-moss.jpg">
			<div class="blog-items-container">
				<div class="main-quote">
					<p class="quote">Where there is love there is life.</p>
					<p class="author">*Mahatma Gandhi</p>
				</div>
				<div class="blog-item-container">

					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
						<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						
							<?php
							       $imgId = get_post_thumbnail_id($post->ID);
							       $imgUrl = wp_get_attachment_image_src($imgId, true);
							?>

							<a href="<?php the_permalink(); ?>"><img src="<?php echo  $imgUrl[0];  ?>" height="400" width="auto"/></a>
							<div class="title-container">
								<h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h1>
							</div><!--title container-->
						</div>

					<?php endwhile; ?>

					<?php endif; ?>

					<div class="push"></div>
				</div><!--blog-item-container-->
			</div><!--blog items container-->
		</div><!--main container-->
		<?php require("footer.php") ?>
	</div><!--wrapper-->
	<?php require("footer-tags.php") ?>
</body>
</html>