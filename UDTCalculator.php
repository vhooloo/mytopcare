<?php
/*
Template Name: UDTCalculator
*/
?>

<?php get_header(); ?>
	
			<div id="content" class="clearfix row">
			    <div class="container"> 
                    <div id="main" class="col col-lg-12 clearfix" role="main">

                        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

                        <article id="post-<?php the_ID(); ?>" <?php post_class('clearfix'); ?> role="article">

                            <!--<header>-->

                                <div class=""><h1><b><?php the_title(); ?></b></h1></div>

                            <!--</header> <!-- end article header -->

                            <section class="post_content clearfix calculator-container">


                                <div class="col-md-4 clearfix">
                                    <form id='utd-calculator' class='form-inline' method='POST'>
                                        <table class="tablepress">
                                            <thead>
                                                <tr class="odd">
                                                    <th class="column-1" style='min-width: 80px;'><div>Name</div></th>
                                                    <th class="column-1" style='min-width: 45px;'><div>Is Taking</div></th>
													<th style='min-width: 60px;'>Screening Battery Result</th>
                                                    <th style='min-width: 60px;'>Targeted Testing Result</th>
                                                    <th class="column-1" style='min-width: 240px;'>Interpretation</th>
													<th class="column-1" style='min-width: 480px;'>Additional Information</th>
                                                    <th class="text-right" style='min-width: 45px;'>Detection Range</th>
                                                </tr>
                                            </thead>
                                            <tbody class="row-hover">
                                                <tr class="even">
                                                    <td class="column-1">Buprenorphine</td>
                                                    <td class="column-1"><input type="checkbox" value="Buprenorphine"></td>
                                                    <td class="column-2"><input type="checkbox" value="Buprenorphine"></td>
                                                    <td><input type="checkbox" class='prescribed' value="Buprenorphine"></td>
                                                    <td class='result-1' ><!--Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right disabled'>1-6 Days</td>
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Codeine</td>
                                                    <td class="column-1"><input type="checkbox" value="Codeine"> </td>
													<td class="column-2"><!--<input type="checkbox" value="Codeine">--> </td>
                                                    <td><input type="checkbox" class='prescribed' value="Codeine"></td>
                                                    <td class='result-1' ><!--Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right disabled'>1-2 Days</td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Fentanyl</td>
                                                    <td class="column-1"><input type="checkbox" value="Fentanyl"></td>
													<td class="column-2"><!--<input type="checkbox" value="Fentanyl">--> </td>
                                                    <td><input type="checkbox" class='prescribed' value="Fentanyl"></td>
                                                    <td class='result-1' ><!--<span class="light-blue">May be positive</span>--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right disabled'>24 Hours</td>
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Hydrocodone</td>
                                                    <td class="column-1"><input type="checkbox" value="Hydrocodone"></td>
													<td class="column-2"><!--<input type="checkbox" value="Hydrocodone">--> </td>
                                                    <td><input type="checkbox" class='prescribed' value="Hydrocodone"></td>
                                                    <td class='result-1' ><!--<span class="light-blue">May be positive</span>--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right disabled'>24 Hours</td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Hydromorphone</td>
                                                    <td class="column-1"><input type="checkbox" value="Hydromorphone"></td>
													<td class="column-2"><!--<input type="checkbox" value="Hydromorphone">--> </td>
                                                    <td><input type="checkbox" class='prescribed' value="Hydromorphone"></td>
                                                    <td class='result-1' ><!--<span class="light-blue">May be positive</span>--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right disabled'>1-2 Days</td>                                                    
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Meperidine</td>
                                                    <td class="column-1"><input type="checkbox" value="Meperidine"></td>
													<td class="column-2"><!--<input type="checkbox" value="Meperidine">--> </td>
                                                    <td><input type="checkbox" class='prescribed' value="Meperidine"></td>
                                                    <td class='result-1'  ></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right disabled'>2-3 Days</td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Methadone</td>
                                                    <td class="column-1"><input type="checkbox" value="Methadone"></td>
													<td class="column-2"><input type="checkbox" value="Methadone"></td>
                                                    <td><input type="checkbox" class='prescribed' value="Methadone"></td>
                                                    <td class='result-1' ><!--Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right disabled'>1-3 Days</td>
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Morphine</td>
                                                    <td class="column-1"><input type="checkbox" value="Morphine"></td>
													<td class="column-2"><!--<input type="checkbox" value="Morphine">--> </td>
                                                    <td><input type="checkbox" class='prescribed' value="Morphine"></td>
                                                    <td class='result-1' ><!--Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right disabled'>1-3 Days</td><!--span class="chronic"></span>-->
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Oxycodone</td>
                                                    <td class="column-1"><input type="checkbox" value="Oxycodone"></td>
													<td class="column-2"><input type="checkbox" value="Oxycodone"></td>
                                                    <td><input type="checkbox" class='prescribed' value="Oxycodone"></td>
                                                    <td class='result-1' ><!--<span class="light-blue">May be positive</span>Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right disabled'>24 Hours</td>
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Oxymorphone</td>
                                                    <td class="column-1"><input type="checkbox" value="Oxymorphone"></td>
													<td class="column-2"><!--<input type="checkbox" value="Oxymorphone">--> </td>
                                                    <td><input type="checkbox" class='prescribed' value="Oxymorphone"></td>
                                                    <td class='result-1'  ><!--<span class="light-blue">May be positive</span>Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right disabled'>24 Hours</td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Opiates</td>
                                                    <td class="column-1"></td>
                                                    <td class="column-2"><input id="opiates" type="checkbox" value="Opiates"></td>
													<td><!--<input id="opiates" type="checkbox" class='prescribed' value="Opiates">--></td>
													<td class='result-2'></td>
                                                    <td class='text-right disabled'></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        
                                        <button type="reset" id="reset" style="margin-left:160px; margin-right:20px;" class="btn btn-default pull-Left">Reset</button>
										<button type="submit" class="btn btn-default pull-Left">Submit</button>
                                    </form>
                                </div>

                                    <div class="info-box hidden" style="position:absolute; right:0px; bottom:0px;">
                                        <!--<div class="" style="display:block;padding:5px;background-color: lightcyan;">High Dose may cause positive screen > Order Confirmatory</div>
                                        <div class="" style="display:block;padding:5px;background-color: orange;">Chronic use may result in longer detection times</div>
                                        <div class="" style="display:block;padding:5px;background-color: lightcyan;">High Dose may cause positive screen > Order Confirmatory</div>-->
                                        <div class="" style="display:block;padding:5px;background-color: lightpink;float: right;">1. Possible cause of False Positives include:other drugs as specified or poppy seeds;<br>2. Consider Confirmatory Testing for a specific drug;<br>3. Consider misuse of semi-synthetic opioids or opiates (Heroin, Codeine, Morphine).</div>
                                    </div>



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