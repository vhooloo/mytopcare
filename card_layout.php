<?php
/*
Template Name: Card Layout+
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
                    <h1 class='pull-left'><?php the_title() ?></h1>
                </div>
            </div>
            <div class="col-md-4 col-sm-5">
                <?php get_search_form(); ?>
            </div>
        </div>
    </div>
</div>
<div class="subpage-main-content clearfix">
    <div class="container">
        <div class="row">
            
            <?php if(get_field('content_card')):
                while(has_sub_field('content_card')): ?>
                <div class="col-md-6">
                    <div class="subpage-box dropshadow">
                        <div class="subpage-box-header">
                            <h3>
							<?php
								$post_objects = get_sub_field('card_title');
                                if( $post_objects ):
                                    foreach( $post_objects as $post_object): ?>		
                                        <a href="<?php echo get_permalink($post_object->ID); ?>"><?php echo get_the_title($post_object->ID); ?></a>
							<?php
                                endforeach; 
                            endif; 
                            ?>
							</h3>
                        </div>
                        <div class="subpage-box-content">
                            <ul>
                                <?php  echo (get_sub_field('content')); ?>

								
								
								
								
								
								
								

                            </ul>
                        </div>
                    </div>
                </div>
                <?php endwhile;?>
            <?php endif;?>
           <!-- <div class="col-md-6">
                <div class="subpage-box dropshadow">
                    <div class="subpage-box-header">
                        <h3>Links</h3>
                    </div>
                    <div class="subpage-box-content">
                        <?php $children = wp_list_pages('title_li=&child_of='.$post->ID.'&echo=0');
                        if( $children ){ ?>
                            <ul>
                                <?php //echo $children ?>
                            </ul>
                        <?php } ?>
                    </div>
                </div>
            </div>-->
        </div>
    </div>
</div>
<?php endwhile; endif; ?>
<?php get_footer(); ?>