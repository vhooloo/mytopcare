<?php get_header(); ?>
<div class="container">
    
    <div class="row">
        <?php if (have_posts()) : ?>

            <h2>Search Results</h2>
    
            <?php //include (TEMPLATEPATH . '/inc/nav.php' ); ?>
    
            <?php while (have_posts()) : the_post(); ?>
    
                <div <?php post_class() ?> id="post-<?php the_ID(); ?>">
    
                    <a href="<?php the_permalink(); ?>">
                        <h3><?php the_title(); ?></h3>
                    </a>
    
                    <?php include (TEMPLATEPATH . '/inc/meta.php' ); ?>
    
                    <div class="entry">
                        <?php the_excerpt(); ?>
                    </div>
    
                </div>
    
            <?php endwhile; ?>
    
            <?php include (TEMPLATEPATH . '/inc/nav.php' ); ?>
    
        <?php else : ?>
    
            <h2>No posts found.</h2>
    
        <?php endif; ?>
    
    <?php //get_sidebar(); ?>
    </div>
    
</div>
	

<?php get_footer(); ?>