<?php
/*
Template Name: interpret_opiates
*/
?>

<?php get_header(); ?>
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

                                <div class="">									
								<h1><b><?php the_title(); ?></b></h1>
								<span style="position: absolute; right:50px;Top:50px;"><a href="<?php echo site_url();?>/?page_id=1222" title="Urine Drug Test (UDT) Decision Support">Return to UDT Decision Support</a></span>								
								</div>

                            <!--</header> <!-- end article header -->

                            <section class="post_content clearfix calculator-container">
					
								<div class="clearfix">
                                    <form id='utd-calculator' class='form-inline' method='POST'>
									
									
									These recommendations are general, however all lab tests are different. Contact your local Clinical Pathology/Toxicology Laboratory directly if you have questions regarding interpretation of your patient’s UDT. <a  class="noprint" href="http://mytopcare.org/udt-calculator/screening-panels/">What is an opiates screening panel?</a> 
									
									<div class="row">
									<div class="col-md-8">
									<br/>
									<b>Step 1: Select results of your opiate test as reported by your lab</b>
									<br/>
									</div></div>
									<div class="row">
									<div class="col-md-8">
									
									<table id='drugresults' class="tablepress">	
									<thead>
                                                <tr class="odd">
                                                    <th style='width: 160px;'>Opiates Test</th>
													<!--<th class="column-3" style='min-width: 160px;'>Inputs</th>-->
                                                    <th class="column-3" style='width: 120px;'>Negative</th>
													<th class="column-3" style='width: 120px;'>Positive</th>
                                                    
                                                </tr>												
                                            </thead>			
								    
									<tbody class="row-hover">
										<tr class="even">
                                        <td class="column-1">Opiates result:</td>
										<!--span style='width: 60px;float:right;margin:-7px;'><button type="reset" id="reset3" class="btn btn-default">Reset</button></span-->
										<td><input type="radio" name="opiates" value="0">(-)</input></td>
										<td><input type="radio" name="opiates" value="1">(+)</input></td>
										</tr>
										<!--tr class="even">
                                        <td class="column-1">Buprenorphine:</td>
										<td><input type="radio" name="buptest" value="0">(-)</input></td>
										<td><input type="radio" name="buptest" value="1">(+)</input></td>
											</tr>
										<tr class="even">
                                        <td class="column-1">Methadone:</span>
										<td><input type="radio" name="methtest" value="0">(-)</input></td>
										<td><input type="radio" name="methtest" value="1">(+)</input></td>
											</tr>
										<tr class="even"-->
                                        <td class="column-1">Oxycodone:</span>
										<td><input type="radio" name="oxytest" value="0">(-)</input></td>
										<td><input type="radio" name="oxytest" value="1">(+)</input></td>
											</tr>
											
									</tbody>
									</table>
									</div></div>
									
									<div class="row"><div class="col-md-8">
									<!--span class="overview"-->	
										<b>Step 2: Select opiates prescribed or illicit drugs used</b>
										<!--<p>Interpreting an UDT for OPIATES can be extremely challenging. This is because of the non-specific nature of UDT for opiates as well as incomplete/inconsistent cross-reactivity of many semi-synthetic opioids. This Tool will help you interpret results from a UDT for Opiates.</p><p>
										To use this tool, first indicate if the Opiates UDT test result is positive or negative. Next indicate if the patient is taking the drug being tested for. This information may be based on the Medical Record, Patient history, report of another person (Family, Nurse, Pharmacist), or clinical judgment.</p>
										<p>Based on this input the tool provides:</p>
										<ul><li>An interpretation of the test result,</li>
										<li>Potential explanations for the result that should be considered, and</li>
										<li>Other potential substances that could cause a false positive test result.</li></ul>
										<p>Since this patient historical information can rarely be known unequivocally the interpretation reported by this tool should always be tempered by cautious clinical judgment.</p>-->
									<!--/span-->
									
									<div class="ui-widget" id='druggrid' style="position:relative; height:50px;" >
									  <!--<label>1. Click on one or more boxes below to select drug test(s) to interpret </label>-->
									  <ol class="drugTests" id="selectable" style='width:700px;padding:10px;'>
										<!--<li class="ui-state-default" value="Opiate"><span>Opiate</<span></li>-->
										<!--<li class="ui-state-default" value="Amphetamine"><span>Amphetamine</span></li>
										<li class="ui-state-default" value="Barbiturates"><span>Barbiturates</span></li>
										<li class="ui-state-default" value="Benzodiazepines"><span>Benzodiazepines</span></li>-->
										<li class="drug ui-state-default" name = "buptake" value="Buprenorphine" data-toggle="tooltip" data-placement="top" title="Buprenex, Subutex, Suboxone, Butrans" ><span>Buprenorphine</span></li>
										<!--<li class="ui-state-default" value="Cocaine"><span>Cocaine</span></li>-->
										<li class="drug ui-state-default"  name = "codeinetake" value="Codeine"><span>Codeine</span></li>
										<li class="drug ui-state-default"  name = "fenttake" value="Fentanyl" data-toggle="tooltip" data-placement="top" title="Actiq, Durogesic, Duragesic, Matrifen, Fentora, Sublimaze" ><span>Fentanyl</span></li>
										<li class="drug ui-state-default"  name = "hydrocodtake" value="Hydrocodone" data-toggle="tooltip" data-placement="top" title="Zohydro ER, Norco, Vicodin, and Lortab,Lorcet-HD, Hycodan, Vicoprofen" ><span>Hydrocodone</span></li>
										<li class="drug ui-state-default"  name = "hydromortake" value="Hydromorphone" data-toggle="tooltip" data-placement="top" title="Palladone, Palladone SR, Dilaudid, Exalgo, Hydal, Dimorphone, Sophidone LP, Dilaudid, Hydrostat, Hydromorfan, Hydromorphan, Hymorphan, Laudicon, Opidol, Palladone, Hydromorph-Contin"  ><span>Hydromorphone</span></li>
										<li class="drug ui-state-default"  name = "herointake" value="MAM6"  ><span>Heroin-MAM6</span></li>										
										<li class="drug ui-state-default"  name = "meptake" value="Meperidine" data-toggle="tooltip" data-placement="top" title="Demerol" ><span>Meperidine</span></li>
										<li class="drug ui-state-default"  name = "methtake" value="Methadone" data-toggle="tooltip" data-placement="top" title="Symoron, Dolophine, Amidone, Methadose, Physeptone, Heptadon" ><span>Methadone</span></li>
										<li class="drug ui-state-default"  name = "morphinetake" value="Morphine"><span>Morphine</span></li>
										<li class="drug ui-state-default"  name = "oxycodtake" value="Oxycodone" data-toggle="tooltip" data-placement="top" title="Roxicodone, Oxycontin, Oxecta, OxyIR, Endone, Oxynorm, Tylox, Percodan"  ><span>Oxycodone</span></li>
										<li class="drug ui-state-default"  name = "oxymorphtake" value="Oxymorphone" data-toggle="tooltip" data-placement="top" title="Opana, Opana ER, Opana IR, Numorphan, Numorphan HCl" ><span>Oxymorphone</span></li>										
										<!--<li class="ui-state-default" value="PCP"><span>PCP</span></li>-->
									  </ol>
									</div></div></div>
									

									
									<div class="row">
									<div class="col-md-6">
											
									<p><b>Step 3: Click Interpret and Review Recommendations based on Opiates Test or Medication and Drugs Taken</b> </p>
									<br/>
									<button type="reset" id="run" name="run"class="btn btn-default" data-toggle="popover" data-content="Please select a result for opiates and oxycodone test. If you need to review please refer to <a  href='http://mytopcare.org/udt-calculator/screening-panels/'>What is an opiates screening test?</a>  ">Interpret</button></span>
									<div class="bs-example">
											<div class="alert alert-danger" id="opiatescheck" style="display: none">
												<a href="#" class="close" data-dismiss="alert">&times;</a>
												Please select a result for opiates and oxycodone test. If you need to review test/drug interactions, please refer to <a  href='http://mytopcare.org/udt-calculator/suspected-opioid-misuse/'>What is an opiates screening test?</a> 
											</div>
										</div>
																			</div></div>
									
									<div class="row">
									<div class="col-md-4">
									
									<div id='results' class="clearfix hidden">
									
									<div style="font-size:18px; font-weight:bold; position:relative; top:12px; <!--margin-bottom: 36px;-->"> How do I interpret the results of the UDT? </div>
                                        <table id='opiatesDrugs' class="tablepress">	
                                            <thead style='height: 60px;'>
                                                <tr class="odd">
                                                    <th style='width: 120px;'><div>Opiates Test Results </div></th>
													<!--<th class="column-3" style='min-width: 160px;'>Inputs</th>-->
                                                    <th class="column-3" style='width: 120px;'>Interpretation</th>
													<!--th class="column-3" style='min-width: 480px;'>Interpretation if<br/>NOT taking drug</th-->
                                                    <th class="column-3" style='width: 1200px;'>Explanation</th>
                                                </tr>												
                                            </thead>										
                                            <tbody class="row-hover">	
                                                <!--<tr class="odd hidden" id="Amphetamine">
                                                    <td class="column-1">Amphetamine</td>
                                                    <td class="column-2">
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Amphetamine_take" value="2">
																N  <input type="radio" class='dst3-1' name="Amphetamine_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Amphetamine_take" value="0">
															</p>
														</div>	
													</td>
                                                    <td class='result-1' ></td>
													<td class='result-2' ></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>	
                                                <tr class="even hidden" id="Barbiturates">
                                                    <td class="column-1">Barbiturates</td>
                                                    <td class="column-2">
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Barbiturates_take" value="2">
																N  <input type="radio" class='dst3-1' name="Barbiturates_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Barbiturates_take" value="0">
															</p>
														</div>	
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>	
                                                <tr class="odd hidden" id="Benzodiazepines">
                                                    <td class="column-1">Benzodiazepines</td>
                                                    <td class="column-2">
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Benzodiazepines_take" value="2">
																N  <input type="radio" class='dst3-1' name="Benzodiazepines_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Benzodiazepines_take" value="0">
															</p>
														</div>	
													</td>
                                                    <td class='result-1' ></td>
													<td class='result-2' ></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>-->	
													<tr class="even hidden" id="opiates">
                                                    <td class="column-1" id="opiatestext">Opiates</td>
                                                    <!--<td class="column-2">
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Buprenorphine_take" value="2">
																N  <input type="radio" class='dst3-1' name="Buprenorphine_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Buprenorphine_take" value="0">
															</p>
														</div>	
													</td>-->
                                                    <td class='result-1' ><!--Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                </tr>												
                                                
                                                <!--<tr class="odd hidden" id="Cocaine">
                                                    <td class="column-1">Cocaine</td>
                                                    <td class="column-2">
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Cocaine_take" value="2">
																N  <input type="radio" class='dst3-1' name="Cocaine_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Cocaine_take" value="0">
															</p>
														</div>	
													</td>
                                                    <td class='result-1' ></td>
													<td class='result-2' ></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>-->												

                                                <tr class="even hidden" id="Morphine">
                                                    <td class="column-1">Morphine</td>
                                                    <!--<td class="column-2">													
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Morphine_take" value="2">
																N  <input type="radio" class='dst3-1' name="Morphine_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Morphine_take" value="0">
															</p>
														</div>		
													</td>-->														
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                </tr>
												
                                                <tr class="odd hidden" id="Oxycodone" style="color:blue">
                                                    <td class="column-1" id="oxytext">Oxycodone</td>
                                                    <!--<td class="column-2">													
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Oxycodone_take" value="2">
																N  <input type="radio" class='dst3-1' name="Oxycodone_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Oxycodone_take" value="0">
															</p>
														</div>	
													</td>-->														
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                </tr>
												
												
												
                                                <!--<tr class="even hidden" id="PCP">
                                                    <td class="column-1">PCP</td>
                                                    <td class="column-2">													
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="PCP_take" value="2">
																N  <input type="radio" class='dst3-1' name="PCP_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="PCP_take" value="0">
															</p>
														</div>
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>-->
                                            </tbody>
                                        </table>
									</div></div>
									
									<div class="col-md-8">
									
									<div id='results-drugs' class="clearfix hidden">
									<div style="font-size:18px; font-weight:bold; position:relative; top:12px;margin-bottom: 45px;"> What tests should I order to look for the drugs my patient is taking? </div>
                                        <table id='opiatesDrugsTaken' class="tablepress">	
                                            <thead style='height: 60px;'>
                                                <tr class="odd">
                                                    <th style='width: 100px;'><div>Medications/Drugs taken</div></th>
													<!--<th class="column-3" style='min-width: 160px;'>Inputs</th>-->
                                                    <th class="column-3" style='width: 120px;'>Test Recommended</th>
													<th class="column-3" style='width: 120px;'>Interpretation</th>
													<!--th class="column-3" style='min-width: 480px;'>Interpretation if<br/>NOT taking drug</th-->
                                                    <th class="column-3" style='width: 200px;'>Explanation</th>
													<th class="column-3" style='width: 80px;'>False Positives</th>
                                                </tr>												
                                            </thead>										
                                            <tbody class="row-hover">
											<tr class="even hidden" id="bup">
                                                    <td class="column-1">Buprenorphine</td>
                                                    <!--<td class="column-2">
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Buprenorphine_take" value="2">
																N  <input type="radio" class='dst3-1' name="Buprenorphine_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Buprenorphine_take" value="0">
															</p>
														</div>	
													</td>-->
													<td class='testrec' ><!--Test Rec--></td>		
                                                    <td class='result-1' ><!--Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
													<td class='false-positives' >NA  </td>
                                             </tr>
											<tr class="even hidden" id="codeine">
                                                    <td class="column-1">Codeine</td>
                                                    <!--<td class="column-2">
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Codeine_take" value="2">
																N  <input type="radio" class='dst3-1' name="Codeine_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Codeine_take" value="0">
															</p>
														</div>	
													</td>-->
													<td class='testrec' ><!--Test Rec--></td>															
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='false-positives' > >3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin </td>
                                                </tr>
												<tr class="even hidden" id="fent">
                                                    <td class="column-1">Fentanyl</td>
                                                    <!--<td class="column-2">
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Fentanyl_take" value="2">
																N  <input type="radio" class='dst3-1' name="Fentanyl_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Fentanyl_take" value="0">
															</p>
														</div>													
													</td>-->
													<td class='testrec' ><!--Test Rec--></td>		
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='false-positives' > NA </td>
                                                </tr>
												
											<tr class="odd  hidden" id="heroin">
                                                    <td class="column-1">Heroin-MAM6</td>
                                                    <!--<td class="column-2">
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Heroin-MAM6_take" value="2">
																N  <input type="radio" class='dst3-1' name="Heroin-MAM6_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Heroin-MAM6_take" value="0">
															</p>
														</div>	
													</td>-->
													<td class='testrec' ><!--Test Rec--></td>		
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='false-positives' > >3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin </td>
                                                    <!--td class='text-right'class="even disabled"></td-->
                                                </tr>		
											 <tr class="even hidden" id="hydrocod">
                                                    <td class="column-1">Hydrocodone</td>
                                                    <!--<td class="column-2">													
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Hydrocodone_take" value="2">
																N  <input type="radio" class='dst3-1' name="Hydrocodone_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Hydrocodone_take" value="0">
															</p>
														</div>	
													</td>-->		
													<td class='testrec' ><!--Test Rec--></td>															
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='false-positives' > >3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin </td>
                                                </tr>
                                                <tr class="odd hidden" id="hydromor">
                                                    <td class="column-1">Hydromorphone</td>
                                                    <!--<td class="column-2">													
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Hydromorphone_take" value="2">
																N  <input type="radio" class='dst3-1' name="Hydromorphone_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Hydromorphone_take" value="0">
															</p>
														</div>	
													</td>-->		
													<td class='testrec' ><!--Test Rec--></td>															
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='false-positives' > >3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin </td>
                                                </tr>
												
												<tr class="even  hidden" id="mep">
                                                    <td class="column-1">Meperidine</td>
                                                    <!--<td class="column-2">													
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Meperidine_take" value="2">
																N  <input type="radio" class='dst3-1' name="Meperidine_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Meperidine_take" value="0">
															</p>
														</div>	
													</td>-->
													<td class='testrec' ><!--Test Rec--></td>															
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='false-positives' > NA </td>
                                                    <!--td class='text-right' class="odd disabled"></td-->
                                                </tr>
											<tr class="odd hidden" id="meth">
                                                    <td class="column-1">Methadone</td>
                                                    <!--<td class="column-2">													
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Methadone_take" value="2">
																N  <input type="radio" class='dst3-1' name="Methadone_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Methadone_take" value="0">
															</p>
														</div>	
													</td>-->				
													<td class='testrec' ><!--Test Rec--></td>															
                                                    <td class='result-1'></td>
													
													<td class='result-2'></td>
													<td class='false-positives' > NA </td>
                                             </tr>	
                                               
											 <tr class="odd hidden" id="morphine">
                                                    <td class="column-1">Morphine</td>
                                                    <!--<td class="column-2">													
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Methadone_take" value="2">
																N  <input type="radio" class='dst3-1' name="Methadone_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Methadone_take" value="0">
															</p>
														</div>	
													</td>-->				
													<td class='testrec' ><!--Test Rec--></td>															
                                                    <td class='result-1'></td>
													
													<td class='result-2'></td>
													<td class='false-positives' > >3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin</td>
                                             </tr>	
											 
											 <tr class="even hidden" id="oxycod">
                                                    <td class="column-1">Oxycodone</td>
                                                    <!--<td class="column-2">													
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Oxymorphone_take" value="2">
																N  <input type="radio" class='dst3-1' name="Oxymorphone_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Oxymorphone_take" value="0">
															</p>
														</div>		
													</td>-->					
													<td class='testrec' ><!--Test Rec--></td>															
                                                    <td class='result-1'></td>
													
													<td class='result-2'></td>
													<td class='false-positives' > >3 Poppy seed bagels, naloxone, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin </td>
                                                </tr>	
											 <tr class="even hidden" id="oxymorph">
                                                    <td class="column-1">Oxymorphone</td>
                                                    <!--<td class="column-2">													
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst3-2' name="Oxymorphone_take" value="2">
																N  <input type="radio" class='dst3-1' name="Oxymorphone_take" value="1">
																Unsure<input type="radio" class='dst3-0' name="Oxymorphone_take" value="0">
															</p>
														</div>		
													</td>-->		
													<td class='testrec' ><!--Test Rec--></td>													
                                                    <td class='result-1'></td>
													
													<td class='result-2'></td>
													<td class='false-positives' >  </td>
                                                </tr>	
									 </tbody>
									 </table>
									</div></div></div>
									
					 <div class="col-md-6">
                    <div class="subpage-box dropshadow hidden" id="Confirmatory" style = "max-height:170px;">
                        <div class="subpage-box-header">
                            <h3>
							These medications are not testable using a UDT
							</h3>
                        </div>
                        <div class="subpage-box-content">
                            <ul>
                                Meperidine, Fentanyl, Methadone and Buprenorphine are not testable using a UDT. If confirmation is needed, order a specific confirmatory test for each specific drug.
                            </ul>
                        </div>
                    </div>
                </div>
										
									</form>		
							<span style="position: absolute; right:50px;bottom:5px;"><a href="<?php echo site_url();?>/?page_id=1222" title="Urine Drug Test (UDT) Decision Support">Return to UDT Decision Support</a></span><br/>										
								</div>		
					
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