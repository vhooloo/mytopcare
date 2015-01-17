<?php
/*
Template Name: Subpage
*/
?>


<?php get_header(); ?>
<div class="breadcrumb-container">
    <div class="container">
        <?php if(function_exists('dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
    </div>
</div>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
<div class="subpage-header-container">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-sm-7">
                <div class="subpage-header">
                    <div class="icon icon-large pull-left "></div>
                    <h1 class='pull-left'>
                    <?php 
                        if (!empty($post->post_parent)) {
                            $extradata = $wpdb->get_row("select post_title from wp_posts where ID = " . $post->post_parent);
                            echo $extradata->post_title;
                        } else {
                            echo $post->post_title;
                        }
                      ?>
                    </h1>
                </div>
            </div>
            <div class="col-md-4 col-sm-5 col-xs-12">
                <?php get_search_form(); ?>
            </div>
        </div>
    </div>
</div>
<div class="page-main-content">
    <div class="container">
        <div class="row">
            <div class="page-container dropshadow">
                <div class="col-md-12 page-title">
                    <h2><?php the_title(); ?></h2>
                </div>    
                <div class="col-md-12 page-content">
                    <?php the_content();?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php endwhile; endif; ?>
<?php get_footer(); ?>