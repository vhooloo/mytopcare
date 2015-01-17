<?php
/*
Template Name: OpioidRiskToolVH
*/
?>
<?php get_header(); ?>
<style>
.radio-toolbar input[type="radio"] {
    display:none; 
}

.radio-toolbar label {
    display:inline-block;
    background-color:#ddd;
    padding:4px 11px;
    font-family:Arial;
    font-size:16px;
}

.radio-toolbar input[type="radio"]:checked + label { 
    background-color:#f68428;
}
</style>

<div class="breadcrumb-container">
    <div class="container">
        <?php if(function_exists('dimox_breadcrumbs')) dimox_breadcrumbs(); ?>
    </div>
</div>
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
							<?php							
							//set up the matrix of ort terms
							$ort_terms[] = array( 'TAG' => 'ORT-1A', 'DOM' => 'Family History of Substance Abuse (Alcohol)', 'FEM' => '1', 'MALE' => '3');//, 'VAL' => $this->get_template_vars('myrisk')->ort1a);
							$ort_terms[] = array( 'TAG' => 'ORT-1B', 'DOM' => 'Family History of Substance Abuse (Illegal Drugs)', 'FEM' => '2', 'MALE' => '3');//, 'VAL' => $this->get_template_vars('myrisk')->ort1b);
							$ort_terms[] = array( 'TAG' => 'ORT-1C', 'DOM' => 'Family History of Substance Abuse (Prescription Drugs) ', 'FEM' => '4', 'MALE' => '4');//, 'VAL'=>$this->get_template_vars('myrisk')->ort1c);
							$ort_terms[] = array( 'TAG' => 'ORT-2A', 'DOM' => 'Personal History of Substance Abuse (Alcohol) ', 'FEM' => '3', 'MALE' => '3');//, 'VAL' => $this->get_template_vars('myrisk')->ort2a);
							$ort_terms[] = array( 'TAG' => 'ORT-2B', 'DOM' => 'Personal History of Substance Abuse (Illegal Drugs)', 'FEM' => '4', 'MALE' => '4');//, 'VAL' => $this->get_template_vars('myrisk')->ort2b);
							$ort_terms[] = array( 'TAG' => 'ORT-2C', 'DOM' => 'Personal History of Substance Abuse (Prescription Drugs) ', 'FEM' => '5', 'MALE' => '5');//, 'VAL' => $this->get_template_vars('myrisk')->ort2c);
							$ort_terms[] = array( 'TAG' => 'ORT-3', 'DOM' => 'Age (Age 1-45) ', 'FEM' => '1', 'MALE' => '1');//, 'VAL' => $this->get_template_vars('myrisk')->ort3);
							$ort_terms[] = array( 'TAG' => 'ORT-4', 'DOM' => 'History of Preadolescent Sexual Abuse', 'FEM' => '3', 'MALE' => '0');//, 'VAL' => $this->get_template_vars('myrisk')->ort4);
							$ort_terms[] = array( 'TAG' => 'ORT-5A', 'DOM' => 'Psychological Disease (Attention Deficit Disorder, Obsessive Compulsive Disorder, Bipolar, Schizophrenia) ', 'FEM' => '2', 'MALE' => '2');//, 'VAL' => $this->get_template_vars('myrisk')->ort5a);
							$ort_terms[] = array( 'TAG' => 'ORT-5B', 'DOM' => 'Psychological Disease (Depression) ', 'FEM' => '1', 'MALE' => '1');//, 'VAL' => $this->get_template_vars('myrisk')->ort5b);			
							?>							
                            <section class="post_content clearfix calculator-container">
								<div class="clearfix">
                                    <form id='utd-calculator' class='form-inline' method='POST'>
									<a href="http://mytopcare.org/wp-content/uploads/2013/06/ORT2.pdf">Download Printable Copy of Blank ORT Form</a>
									
									<div class="opiates-border" style='width: 600px;padding:12px; position:relative;'>
										<span style='width: 320px; font-weight:bold;'>Patient Gender:</span>
										<span style='width: 60px;float:right;margin:-7px;'><button type="reset" id="reset4" class="btn btn-default">Reset</button></span>
										<span style='width: 120px;float:right;'><input type="radio" name="gender" value="0">Male</input></span>
										<span style='width: 120px;float:right;'><input type="radio" name="gender" value="1">Female</input></span>
									</div>
									
									<style type="text/css">		
									tbody tr:nth-child(odd){ background-color:#ddeeff; }
									</style>
										<table width="75%" cellspacing="0" cellpadding="0" border="1" name="mytable" id="mytable" class="list hidden">
											 <thead>
											 <th width="75%" scope="col"> <div align="left" width="100%" style="white-space: normal;"> Question </div>
											  </th>
											  <th width="20%" scope="col"> <div  id = "dyn1" align="center" width="100%" style="white-space: normal;"> Assessment </div>
											  </th>
											  <th width="5%" scope="col"> <div align="center" width="20%" style="white-space: normal;"> Score </div></th>
											 </tr>
											  </thead>
											 
											 <tbody>
											  <tr class="oddListRowS1" height="20">
											   <td  valign="top" align="left" scope="row"><h5> ORT Addiction and Diversion Risk </h5></td>
											   <td  valign="top" align="left"></td>
											   <td class="" valign="top" align="left"></td>
											  </tr>
											 <?php 
											 $i=0;
											 foreach ($ort_terms as $myrowData){
											 $i=$i+1;
											 echo '<tr class="evenListRowS1" height="20" name=Row_'.$i.'>';
											 echo '<td valign="top"  align="left" >&nbsp &nbsp '.$myrowData['TAG'].':'. $myrowData['DOM'].' </td>';
											 echo '<td class="" valign="top" align="center"><div class="radio-toolbar"><input type="radio" id="'.$myrowData['TAG'].'_checkid1" name ="'.$myrowData['TAG'].'_check" female='.$myrowData['FEM'].' male='.$myrowData['MALE'].' value=1 ><label for="'.$myrowData['TAG'].'_checkid1">Yes</label>&nbsp;<input type="radio" id="'.$myrowData['TAG'].'_checkid2" name ="'.$myrowData['TAG'].'_check"  male=0 female=0><label for="'.$myrowData['TAG'].'_checkid2">No&nbsp;</label></div></td>';
											 echo '<td class="" valign="top" align="center"><input class="opiates-border" type="text" readonly id="'.$myrowData['TAG'].'_id" name ="'.$i.'-text" style="margin:2px; text-align:center; width:40%;" value = "" width="5%"></td>';
											 echo '</tr>';
											 }
											 ?>
											 <tr class="oddListRowS1" height="20">
											  <td class="" valign="top" align="left" scope="row"><h5> ORT-SUM: Sum of Above </h5></td>
											  <td class="" valign="top" align="left"> </td>
											  <td  valign="top" align="left"><input class="opiates-border" style="margin:2px;text-align:center;font-weight:bold;width:60px;background-color:#7A7A7A;!important" name="ortsum" id="ORT_SUM" value = "0" readonly>
											 </tr>
											  </tbody>
										</table>
										<!--div id="recommendation" class = "hidden"> Recommendation </div-->
										 <div id="recommendation"  class="col-md-6 hidden">
											<div class="subpage-box dropshadow" id="Confirmatory"> <!--style = "height:200px;"-->
												<div class="subpage-box-header">
													<h3>
													Urine Drug Testing Recommendation.
													</h3>
												</div>
												<div id="rectext" class="subpage-box-content">
													<ul>
														Recommendation Text Goes here.
													</ul>
												</div>
											</div>
										</div>
							<span style="position: absolute; right:50px;bottom:5px;"><a href="http://mytopcare.org/udt-calculator/" title="Urine Drug Test (UDT) Decision Support">Return to UDT Decision Support</a></span><br/>	




							
											
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