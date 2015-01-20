<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
	<?php if (is_search()) { ?>
	   <meta name="robots" content="noindex, nofollow" /> 
	<?php } ?>
	
	<link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
	<link href="<?php echo get_template_directory_uri(); ?>/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link href="<?php echo get_template_directory_uri(); ?>/css/style.css" rel="stylesheet" media="screen">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,400,300,600,700' rel='stylesheet' type='text/css'>
	<title>
		   <?php
		      if (function_exists('is_tag') && is_tag()) {
		         single_tag_title("Tag Archive for &quot;"); echo '&quot; - '; }
		      elseif (is_archive()) {
		         wp_title(''); echo ' Archive - '; }
		      elseif (is_search()) {
		         echo 'Search for &quot;'.wp_specialchars($s).'&quot; - '; }
		      elseif (!(is_404()) && (is_single()) || (is_page())) {
		         wp_title(''); echo ' - '; }
		      elseif (is_404()) {
		         echo 'Not Found - '; }
		      if (is_home()) {
		         bloginfo('name'); echo ' - '; bloginfo('description'); }
		      else {
		          bloginfo('name'); }
		      if ($paged>1) {
		         echo ' - page '. $paged; }
		   ?>
	</title>
	
	<link rel="shortcut icon" href="/favicon.ico">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
    <script type="text/javascript">
        document.domain = "mytopcare.org";
    </script>
	
	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    
    <!--[if lt IE 8]>
        <link href="<?php echo get_template_directory_uri(); ?>/css/bootstrap-ie7.css" rel="stylesheet">
        <link href="<?php echo get_template_directory_uri(); ?>/css/ie7.css" rel="stylesheet">
    <![endif]-->
	

	<?php 
	if (is_page('testopioidvh')){		do_action( 'enqueue_ORT' );	} 
	if(is_page('choose-the-right-test')){
		do_action( 'enqueue_jqxGrid' );
	} 
	if (is_page('interpret-a-urine-drug-test-result')){
		do_action( 'enqueue_interpretResults' );
	} 	
	if (is_page('interpret-opiates-test-result')){
		do_action( 'enqueue_opiateResult' );
	} 			if (is_page('suspected-opioid-misuse')){		do_action( 'enqueue_jqxGrid' );		do_action( 'enqueue_chooseRightTest1' );	}	if (is_page('what-else-should-i-test-for')){		do_action( 'enqueue_jqxGrid' );		do_action( 'enqueue_chooseRightTest2' );	} 		if (is_page('opioid-risk-tool')){		do_action( 'enqueue_ORT' );	} 			
	wp_head(); 

	?>
	

    
    
<?php


    if( is_front_page() ){
        if( simpleSessionGet("usertype") ){
            $usertype = simpleSessionGet('usertype');
            $url = home_url($usertype);
            wp_redirect($url);
        }else{                    
            if( isset( $_POST['submit'] ) && isset( $_POST['saveSession']) ){
                $usertype = $_POST['submit'];
                simpleSessionSet("usertype", $usertype);
                $url = home_url($usertype);
                wp_redirect($url);
            }else if( isset( $_POST['submit'] ) ){
                $usertype = $_POST['submit'];
                $url = home_url($usertype);
                wp_redirect($url);
            }
        }  
     }else{
    
    }
    if( isset ( $_POST['resetSession'])){
        simpleSessionDestroy();
        $url = home_url();
        wp_redirect($url);
    }
	

?>	

</head>

<body <?php body_class(); ?>>
	    
        <div class="navbar navbar-topcare" role="navigation">
            <div class="container nav-container">
            
            <!-- navbar header -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="<?php echo get_home_url(); ?>">                 
                        <img src="<?php echo get_template_directory_uri(); ?>/css/images/logo.jpg" alt="">
                    </a>
                </div>
                <form action="<?php echo get_home_url(); ?>" method="POST" role="form">
                    <div class="reset">
                        <button type="submit" name="resetSession" value="true" class="btn"><?php echo getUserType(); ?></button>
                    </div>
                </form>
                <nav class="navbar-collapse collapse">
                    <?php 
                        $theme_location = 'main-nav';
                        wp_nav_menu (
                            array (
                                'theme_location' => $theme_location,
                                'menu_class' => 'nav navbar-nav navbar-right',
                                'container' => 'div',
                                'fallback_cb' => 'wp_bootstrap_navwalker::fallback',
                                'walker' => new wp_bootstrap_navwalker()
                            )
                        );
                    ?>
                </nav>
            </div>
        </div>
        