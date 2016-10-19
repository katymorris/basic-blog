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
					<h1 class="blog-date">
					<?php echo get_the_date('F j, Y'); ?>
					</h1>
					<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
				</header><!-- .entry-header -->

				<div class="entry-content">
<?php while (have_posts()) : the_post();/* Start loop */ ?>
        <?php the_content(); ?>
<?php endwhile; /* End loop */ ?>
				</div><!-- .entry-content -->
				<h2 class="comments-title">
				    <?php
				        printf( _nx( 'One thought on "%2$s"', '%1$s thoughts on "%2$s"', get_comments_number(), 'comments title', 'twentythirteen' ),
				            number_format_i18n( get_comments_number() ), '<span>' . get_the_title() . '</span>' );
				    ?>
				</h2>
				<ol class="comment-list">
				    <?php
				        wp_list_comments( array(
				            'style'       => 'ol',
				            'short_ping'  => true,
				            'avatar_size' => 74,
				        ) );
				    ?>
				</ol><!-- .comment-list -->
				
			</article><!-- #post-## -->


		</div><!--main container-->
		<?php require("footer.php") ?>
	</div><!--wrapper-->
	<?php require("footer-tags.php") ?>
</body>
</html>


