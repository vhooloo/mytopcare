<?php
/*
Template Name: ChooseRightTest1
*/
?>
<?php get_header(); ?>
   <style type="text/css">
   @media screen{
	 .mydiv {
		width: 0px;
		height: 0px;
		/*padding: 10px;*/
		border: 2px solid black;
		margin: 0;
	position: absolute;
	visibility:hidden;
		/*top: 300px;
		left: 255px;*/
		/*z-index:999888; */
	  
	}
	.mydiv1 {
		width: 0px;
		height: 0px;
		/*padding: 10px;*/
		border: 2px solid black;
		margin: 0;
	position: absolute;
	visibility:hidden;
		/*top: 300px;
		left: 255px;*/
		/*z-index:999888; */
	  
	}
}
	@media print{
	 .mydiv {
		width: 0px;
		height: 0px;
		/*padding: 10px;*/
		border: 1px solid black;
		display:none;
	  
	}
	.mydiv1 {
		width: 0px;
		height: 0px;
		border: none;
		display:none;
	}
	.navbar, .breadcrumb, .noprint, .footer{ display:none; width:0px; height:0px;}
	}
</style>
<div class="breadcrumb-container">
    <div class="container">
        <?php if(function_exists('dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
    </div>
	<div id="mydiv" class="mydiv"></div>
<div id="mydiv1" class="mydiv1"></div>
</div>
			<div id="content" class="clearfix row">
			    <div class="container"> 
                    <div id="main" class="col col-lg-12 clearfix" role="main">

                        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                        <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article">

                            <!--<header>-->

							<div class=""><h1><b><?php the_title(); ?></b></h1>
							<span class="noprint" style="position: absolute; right:50px;Top:40px;"><a href="<?php echo site_url();?>/?page_id=1222" title="Urine Drug Test (UDT) Decision Support">Return to UDT Decision Support</a>								
							</div>

                            <!--</header> <!-- end article header -->

                            <section class="post_content clearfix calculator-container">
								<body class='default'>
									<span class="overview">	
										<!--<p>Choosing the correct UDT to order can be challenging. Because many UDT Screening panels are broad, Non-specific UDT Screening panels may lead Providers to inadvertently order incorrect or less specific tests based on the history.</p>
										<p>To use this tool, review the table for information about effectively ordering UDTs so that you choose the right test the first time.</p>-->
									</span>
								<br/>
									<!--<span><b>Click and expand the desired Category to see more details.</b></span>-->
								<br/>								
									<div id='jqxWidget' style="font-size: 14px; font-family: Verdana; float: left;width:100%;opacity:0.7;">
										<div id="jqxgrid" ></div>
										<br/>
									<span  class="noprint" style="position: absolute; right:50px;bottom:20px;"><a href="<?php echo site_url();?>/?page_id=1222" title="Urine Drug Test (UDT) Decision Support">Return to UDT Decision Support</a></span><br/>									
									</div>
								</body>
											
                            </section> <!-- end article section -->

                        </article> <!-- end article -->

                        <?php endwhile; ?>	

                        <?php else : ?>

                        <article id="post-not-found">
                            <header>
                                <h1><?php _e("Not Found", "wpbootstrap"); ?></h1>
                            </header>
                            <section class="post_content">
                                <p><?php _e("Sorry, but the requested resource was not found on this site.", "wpbootstrap"); ?></p>
                            </section>
                            <footer>
                            </footer>
                        </article>

                        <?php endif; ?>

                    </div> <!-- end #main -->
				</div> <!-- end container -->
    
				<?php //get_sidebar(); // sidebar 1 ?>
    
			</div> <!-- end #content -->

<?php get_footer(); ?>