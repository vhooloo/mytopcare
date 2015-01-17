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
                    <h1 class='pull-left'><?php the_title() ?></h1>
                </div>
            </div>
            <div class="col-md-4 col-sm-5 col-xs-12">
                <form action="#" class="form-inline">
                    <div class="form-group subpage-form">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="button" class="btn btn-default">Search</button>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="subpage-main-content">
    <div class="container">
        <div class="row">
            
        </div>
    </div>
</div>
<?php endwhile; endif; ?>
<?php get_footer(); ?>