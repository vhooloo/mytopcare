<?php
/*
Template Name: ChooseRightTest2
*/
?>
<?php get_header(); ?>
    <style type="text/css">
.mydiv {
    width: 442px;
    height: 1050px;
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
    width: 291px;
    height: 1050px;
    /*padding: 10px;*/
    border: 2px solid black;
    margin: 0;
position: absolute;
visibility:hidden;
    /*top: 300px;
	left: 255px;*/
	/*z-index:999888; */
  
}

.jqx-widget .zindexClass
        {
			z-index:999999;
			
        }
	
        .jqx-widget .borderleftClass
        {
			border-style:  solid;
			border-width: 1px 1px 1px 0px;
			border-color: grey grey grey green;
			margin: -1px 0px 0px 0px;
			
        }
		
		.jqx-widget .borderrightClass
        {
			border-style:  solid;
			border-width: 1px 2px 1px 1px;
			border-color: grey green grey grey;

        }
		
		.jqx-widget .noborderrightClass
        {
			border-style:  solid solid solid solid;
			border-width: 1px 2px 1px 1px;
			border-color: grey green grey grey;

        }
		.jqx-widget .jqx-grid-cell {}
		#contenttablejqxgrid {/*border-color: red;*/ border-color: blue;
        }
		/* .jqx-widget .jqx-grid-column-header, .jqx-widget .jqx-grid-group-cell {
			border-style:  solid;
			border-width: 0px 2px 2px 0px;
			border-color: red;
			border-left-color: red;
			border-right-color: green;
        } */
    </style>
<div class="breadcrumb-container">
    <div class="container">
        <?php if(function_exists('dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
    </div>
</div>
<div id="mydiv" class="mydiv"></div>
<div id="mydiv1" class="mydiv1"></div>
			<div id="content" class="clearfix row">
			    <div class="container"> 
                    <div id="main" class="col col-lg-12 clearfix" role="main">

                        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                        <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article">

                            <!--<header>-->

							<div class=""><h1><b><?php the_title(); ?></b></h1>
							<span style="position: absolute; right:50px;Top:40px;"><a href="http://mytopcare.org/udt-calculator/" title="Urine Drug Test (UDT) Decision Support">Return to UDT Decision Support</a>								
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
									<div id='jqxWidget' style="font-size: 14px; font-family: Verdana; float: left;width:100%; opacity:0.7;">
										<div id="jqxgrid" ></div>
										<br/>
									<span style="position: absolute; right:50px;bottom:20px;"><a href="http://mytopcare.org/udt-calculator/" title="Urine Drug Test (UDT) Decision Support">Return to UDT Decision Support</a></span><br/>									
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