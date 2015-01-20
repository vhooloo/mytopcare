<?php	// Add RSS links to <head> section
	automatic_feed_links();
	// Load jQuery
	if ( !is_admin() ) {
	   $template_directory = get_template_directory_uri();
	   wp_deregister_script('jquery');
	   wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"), false);
	   wp_enqueue_script('jquery');
	   wp_deregister_script('bootstrap');
       wp_register_script('bootstrap', "$template_directory/js/bootstrap.js", false, null);
       wp_enqueue_script('bootstrap');
	   wp_deregister_script('main');
       wp_register_script('main', "$template_directory/js/main.js", false, null);
       wp_enqueue_script('main');		/*if(is_page(p==1492)){				
           		//If page is using slider portfolio template then load our slider script				wp_deregister_script('dst');				wp_register_script('dst', "$template_directory/js/dst.js", false, null);				wp_enqueue_script('dst');					
			}*/
	}
	/*add_action( 'fb_app_id', 'echo_fb_app_id' );	function echo_fb_app_id() {		global $post;		echo '68366786876786';		$template_name1 = get_post_meta( $post->ID, '_wp_page_template', true );		echo $template_name1;		if(is_page()){if(strcmp($template_name, 'dst1.php')){echo 'pp803pp';}}		if(is_page(p==1492))echo '1111';	}	*/	add_action( 'enqueue_jqxGrid', 'register_jqxgrid' );	function register_jqxgrid() {		   			wp_enqueue_style( 'jqx.base', get_template_directory_uri().'/jqwidgets/styles/jqx.base.css' ); 			wp_enqueue_style( 'jqx.metro', get_template_directory_uri().'/jqwidgets/styles/jqx.metro.css' ); 						wp_register_script('jqxcore', get_template_directory_uri().'/jqwidgets/jqxcore.js', false, null,false);			wp_enqueue_script('jqxcore');			   		    wp_register_script('jqxdata',get_template_directory_uri().'/jqwidgets/jqxdata.js', false, null,false);			wp_enqueue_script('jqxdata');			wp_register_script('jqxbuttons',get_template_directory_uri().'/jqwidgets/jqxbuttons.js', false, null,false);			wp_enqueue_script('jqxbuttons');			wp_register_script('jqxscrollbar',get_template_directory_uri().'/jqwidgets/jqxscrollbar.js', false, null,false);			wp_enqueue_script('jqxscrollbar');			wp_register_script('jqxmenu',get_template_directory_uri().'/jqwidgets/jqxmenu.js', false, null,false);			wp_enqueue_script('jqxmenu');			wp_register_script('jqxgrid',get_template_directory_uri().'/jqwidgets/jqxgrid.js', false, null,false);			wp_enqueue_script('jqxgrid');			wp_register_script('jqxdatatable',get_template_directory_uri().'/jqwidgets/jqxdatatable.js', false, null,false);			wp_enqueue_script('jqxdatatable');				wp_register_script('jqxcheckbox',get_template_directory_uri().'/jqwidgets/jqxcheckbox.js', false, null,false);			wp_enqueue_script('jqxcheckbox');			wp_register_script('jqxlistbox',get_template_directory_uri().'/jqwidgets/jqxlistbox.js', false, null,false);			wp_enqueue_script('jqxlistbox');					wp_register_script('jqxdropdownlist',get_template_directory_uri().'/jqwidgets/jqxdropdownlist.js', false, null,false);			wp_enqueue_script('jqxdropdownlist');				wp_register_script('jqxgrid.filter',get_template_directory_uri().'/jqwidgets/jqxgrid.filter.js', false, null,false);			wp_enqueue_script('jqxgrid.filter');						wp_register_script('jqxgrid.selection',get_template_directory_uri().'/jqwidgets/jqxgrid.selection.js', false, null,false);			wp_enqueue_script('jqxgrid.selection');			wp_register_script('jqxgrid.columnsresize',get_template_directory_uri().'/jqwidgets/jqxgrid.columnsresize.js', false, null,false);			wp_enqueue_script('jqxgrid.columnsresize');						wp_register_script('jqxgrid.grouping',get_template_directory_uri().'/jqwidgets/jqxgrid.grouping.js', false, null,false);			wp_enqueue_script('jqxgrid.grouping');		   		   /*		   wp_deregister_script('dst');	              wp_register_script('dst', get_template_directory_uri().'/js/dst.js', false, null,false);           wp_enqueue_script('dst');		   */	}			add_action( 'enqueue_slidingForm', 'register_slidingForm' );	function register_slidingForm() {	   		    wp_register_script('slidingForm',get_template_directory_uri().'/js/slidingForm.js', false, null,false);			wp_enqueue_script('slidingForm');	}			add_action( 'enqueue_interpretResults', 'register_interpretResults' );	function register_interpretResults() {	   		    wp_register_script('interpretResults',get_template_directory_uri().'/js/interpretResults.js', false, null,false);			wp_enqueue_script('interpretResults');	}			add_action( 'enqueue_opiateResult', 'register_opiateResult' );	function register_opiateResult() {	   		    wp_register_script('opiateResult',get_template_directory_uri().'/js/opiateResult.js', false, null,false);			wp_enqueue_script('opiateResult');	}					add_action( 'enqueue_chooseRightTest1', 'register_chooseRightTest1' );	function register_chooseRightTest1() {	   		    wp_register_script('chooseRightTest1',get_template_directory_uri().'/js/chooseRightTest1.js', false, null,false);			wp_enqueue_script('chooseRightTest1');	}		add_action( 'enqueue_chooseRightTest2', 'register_chooseRightTest2' );	function register_chooseRightTest2() {	   		    wp_register_script('chooseRightTest2',get_template_directory_uri().'/js/chooseRightTest2.js', false, null,false);			wp_enqueue_script('chooseRightTest2');	}				add_action( 'enqueue_ORT', 'register_ORT' );	function register_ORT() {	   		    wp_register_script('ORT',get_template_directory_uri().'/js/ort.js', false, null,false);			wp_enqueue_script('ORT');	}		
	// Clean up the <head>
	function removeHeadLinks() {
    	remove_action('wp_head', 'rsd_link');
    	remove_action('wp_head', 'wlwmanifest_link');
    }
    add_action('init', 'removeHeadLinks');
    remove_action('wp_head', 'wp_generator');
    
	// Declare sidebar widget zone
    if (function_exists('register_sidebar')) {
    	register_sidebar(array(
    		'name' => 'Sidebar Widgets',
    		'id'   => 'sidebar-widgets',
    		'description'   => 'These are widgets for the sidebar.',
    		'before_widget' => '<div id="%1$s" class="widget %2$s">',
    		'after_widget'  => '</div>',
    		'before_title'  => '<h2>',
    		'after_title'   => '</h2>'
    	));
    }
    require_once('wp_bootstrap_navwalker.php');

    add_theme_support('post-thumbnails');	
    function register_my_menus() {
      register_nav_menus(
        array(
          'main-nav' => __( 'Main Nav' ),
          'alt-nav' => __( 'Alternate Nav' )
        )
      );
    }
    add_action( 'init', 'register_my_menus' );
    
    add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);
    function special_nav_class($classes, $item){
         if( in_array('current-menu-item', $classes) ){
                 $classes[] = 'active ';
         }
         return $classes;
    }
    
    add_filter( 'post_thumbnail_html', 'remove_width_attribute', 10 );
    add_filter( 'image_send_to_editor', 'remove_width_attribute', 10 );
    
    function remove_width_attribute( $html ) {
       $html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
       return $html;
    }
    
    /**
     * Add breadcrumbs functionality to your WordPress theme 
     *
     * Once you have included the function in your functions.php file
     * you can then place the following anywhere in your theme templates
     * if(function_exists('bavota_breadcrumbs')) bavota_breadcrumbs();
     *
     * @c.bavota - http://bavotasan.com
     */
    function bavota_breadcrumbs() {
        if(!is_home()) {
            echo '<nav class="breadcrumb">';
            echo '<a href="'.home_url('/').'">Home</a><span class="divider">/</span>';
            if (is_category() || is_single()) {
                the_category(' <span class="divider">/</span> ');
                if (is_single()) {
                    echo ' <span class="divider">/</span> ';
                    the_title();
                }
            } elseif (is_page()) {
                echo the_title();
            }
            echo '</nav>';
        }
    }
    
    
    function myplugin_settings() {  
    // Add tag metabox to page
    register_taxonomy_for_object_type('post_tag', 'page'); 
    // Add category metabox to page
    register_taxonomy_for_object_type('category', 'page');  
    }
     // Add to the admin_init hook of your theme functions.php file 
    add_action( 'admin_init', 'myplugin_settings' );

    add_action('admin_head', 'my_custom_fonts');

    function my_custom_fonts() {
      echo '<style>
        .post_object{height:250px !important;}
      </style>';
    }
    
    function dimox_breadcrumbs() {

        $showOnHome = 0; // 1 - show breadcrumbs on the homepage, 0 - don't show
        $delimiter = ''; // delimiter between crumbs
        $home = 'Home'; // text for the 'Home' link
        $showCurrent = 1; // 1 - show current post/page title in breadcrumbs, 0 - don't show
        $before = '<li class="active"><span class="current">'; // tag before the current crumb
        $after = '</span></li>'; // tag after the current crumb
        
        global $post;
        $homeLink = get_bloginfo('url');
        
        if (is_home() || is_front_page()) {
        
        if ($showOnHome == 1) echo '<ul class="breadcrumb"><li><a href="' . $homeLink . '">' . $home . '</a></li></ul>';
        
        } else {
        
        echo '<ul class="breadcrumb"><li><a href="' . $homeLink . '">' . $home . '</a> ' . $delimiter . '</li> ';
        
        if ( is_category() ) {
        $thisCat = get_category(get_query_var('cat'), false);
        if ($thisCat->parent != 0) echo get_category_parents($thisCat->parent, TRUE, ' ' . $delimiter . ' ');
        echo $before . '' . single_cat_title('', false) . '' . $after;
        
        } elseif ( is_search() ) {
        echo $before . 'Search results for "' . get_search_query() . '"' . $after;
        
        } elseif ( is_day() ) {
        echo '<li><a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . '</li> ';
        echo '<li><a href="' . get_month_link(get_the_time('Y'),get_the_time('m')) . '">' . get_the_time('F') . '</a> ' . $delimiter . '</li> ';
        echo $before . get_the_time('d') . $after;
        
        } elseif ( is_month() ) {
        echo '<li><a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a> ' . $delimiter . '</li> ';
        echo $before . get_the_time('F') . $after;
        
        } elseif ( is_year() ) {
        echo $before . get_the_time('Y') . $after;
        
        } elseif ( is_single() && !is_attachment() ) {
        if ( get_post_type() != 'post' ) {
        $post_type = get_post_type_object(get_post_type());
        $slug = $post_type->rewrite;
        echo '<li><a href="' . $homeLink . '/' . $slug['slug'] . '/">' . $post_type->labels->singular_name . '</a>';
        if ($showCurrent == 1) echo ' ' . $delimiter . '</li> ' . $before . get_the_title() . $after;
        } else {
        $cat = get_the_category(); $cat = $cat[0];
        $cats = get_category_parents($cat, TRUE, ' ' . $delimiter . '</li> ');
        if ($showCurrent == 0) $cats = preg_replace("#^(.+)\s$delimiter\s$#", "$1", $cats);
        echo $cats;
        if ($showCurrent == 1) echo $before . get_the_title() . $after;
        }
        
        } elseif ( !is_single() && !is_page() && get_post_type() != 'post' && !is_404() ) {
        $post_type = get_post_type_object(get_post_type());
        echo $before . $post_type->labels->singular_name . $after;
        
        } elseif ( is_attachment() ) {
        $parent = get_post($post->post_parent);
        $cat = get_the_category($parent->ID); $cat = $cat[0];
        echo get_category_parents($cat, TRUE, ' ' . $delimiter . '</li> ');
        echo '<li><a href="' . get_permalink($parent) . '">' . $parent->post_title . '</a>';
        if ($showCurrent == 1) echo ' ' . $delimiter . '</li> ' . $before . get_the_title() . $after;
        
        } elseif ( is_page() && !$post->post_parent ) {
        if ($showCurrent == 1) echo $before . get_the_title() . $after;
        
        } elseif ( is_page() && $post->post_parent ) {
        $parent_id = $post->post_parent;
        $breadcrumbs = array();
        while ($parent_id) {
        $page = get_page($parent_id);
        $breadcrumbs[] = '<li><a href="' . get_permalink($page->ID) . '">' . get_the_title($page->ID) . '</a>';
        $parent_id = $page->post_parent;
        }
        $breadcrumbs = array_reverse($breadcrumbs);
        for ($i = 0; $i < count($breadcrumbs); $i++) {
        echo $breadcrumbs[$i];
        if ($i != count($breadcrumbs)-1) echo ' ' . $delimiter . '</li> ';
        }
        if ($showCurrent == 1) echo ' ' . $delimiter . '</li> ' . $before . get_the_title() . $after;
        
        } elseif ( is_tag() ) {
        echo $before . 'Posts tagged "' . single_tag_title('', false) . '"' . $after;
        
        } elseif ( is_author() ) {
        global $author;
        $userdata = get_userdata($author);
        echo $before . 'Articles posted by ' . $userdata->display_name . $after;
        
        } elseif ( is_404() ) {
        echo $before . 'Error 404' . $after;
        }
        
        if ( get_query_var('paged') ) {
        if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ' (';
        echo __('Page') . ' ' . get_query_var('paged');
        if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) echo ')';
        }
        
        echo '</ul>';
        
        }
    } // end dimox_breadcrumbs()
    
    //allow redirection, even if my theme starts to send output to the browser
    add_action('init', 'do_output_buffer');
    function do_output_buffer() {
            ob_start();
    }
    
    function getUserType(){
        return (simpleSessionGet("usertype")) ? simpleSessionGet("usertype") : 'default';
    }
?>