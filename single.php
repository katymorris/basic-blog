<?php /*
	Template Name: Blog Post
*/ ?>
<?php
/*
Blog Post
*/
?>
<?php require("head.php") ?>
<body>
	<div class="main-wrapper">
		<div class="main-container blog-container">
			<?php require("header.php") ?>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<?php
					// Post thumbnail.
					the_post_thumbnail();
				?>

				<header class="entry-header">
					<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
				</header><!-- .entry-header -->

				<div class="entry-content">
<?php while (have_posts()) : the_post();/* Start loop */ ?>
        <?php the_content(); ?>
<?php endwhile; /* End loop */ ?>
				</div><!-- .entry-content -->

			</article><!-- #post-## -->


		</div><!--main container-->
		<?php require("footer.php") ?>
	</div><!--wrapper-->
	<?php require("footer-tags.php") ?>
</body>
</html>


