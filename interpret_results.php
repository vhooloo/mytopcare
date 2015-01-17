<?php
/*
Template Name: Interpret Results
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

                                <div class=""><h1><b><?php the_title(); ?></b></h1>
								<span style="position: absolute; right:50px;Top:40px;"><a href="http://mytopcare.org/udt-calculator/" title="Urine Drug Test (UDT) Decision Support">Return to UDT Decision Support</a></span>									
								</div>

                            <!--</header> <!-- end article header -->

                            <section class="post_content clearfix calculator-container">										
								<h3 ></h3>						
								<div class="clearfix">
                                    <form id='utd-calculator' class='form-inline' method='POST'>
									<span class="overview">		
										<p><b>Step 1: Click on available Urine Drug Test Results. (Assumes that Patient is both Prescribed AND Taking the Drug/Medication)<br/>
										Step 2: Click Run.</b></p>									
										<!--<p>Interpreting an existing UDT can be extremely challenging. This Decision Support Tool will help you interpret results from a UDT.</p>
										<p>To use this tool, first select the Urine Drug Test(s) that were obtained from the patient. Next indicate if the test result is Positive or Negative. This tool will then provide decision support information regarding the UDT results depending on whether the patient is taking the drug being tested for. This information may be based on the Medical Record, Patient history, report of another person (Family, Nurse, Pharmacist), or clinical judgment.</p>
										<p>Based on the sum of this input, this tool provides:</p>
										<ol><li>An interpretation of the test result,</li>
										<li>Potential explanations for the result that should be considered, and</li>
										<li>Other potential substances that could cause a false positive test result.</li></ol>
										<p>Since this patient historical information can rarely be known unequivocally the interpretation reported by this tool should always be tempered by cautious clinical judgment.</p>-->
									</span>							
									<div class="ui-widget" id='druggrid'>
									  <!--<label>1. Click on one or more boxes below to select drug test(s) to interpret </label>-->
									  <ol class="drugTests" id="selectable">
										<!--<li class="ui-state-default" value="Opiate"><span>Opiate</<span></li>-->
										<li class="ui-state-default" value="Amphetamine"><span>Amphetamine</span></li>
										<li class="ui-state-default" value="Barbiturates"><span>Barbiturates</span></li>
										<li class="ui-state-default" value="Benzodiazepines"><span>Benzodiazepines</span></li>
										<!--li class="ui-state-default" value="Buprenorphine"><span>Buprenorphine</span></li-->
										<li class="ui-state-default" value="Cocaine"><span>Cocaine</span></li>
										<!--li class="ui-state-default" value="Codeine"><span>Codeine</span></li>
										<li class="ui-state-default" value="Fentanyl"><span>Fentanyl</span></li>
										<li class="ui-state-default" value="Hydrocodone"><span>Hydrocodone</span></li>
										<li class="ui-state-default" value="Hydromorphone"><span>Hydromorphone</span></li>
										<li class="ui-state-default" value="MAM6"><span>Heroin-MAM6</span></li>										
										<li class="ui-state-default" value="Meperidine"><span>Meperidine</span></li-->
										<li class="ui-state-default" value="Methadone"><span>Methadone</span></li>
										<li class="ui-state-default" value="Morphine"><span>Morphine</span></li>
										<li class="ui-state-default" value="Oxycodone"><span>Oxycodone</span></li>
										<!--li class="ui-state-default" value="Oxymorphone"><span>Oxymorphone</span></li-->										
										<li class="ui-state-default" value="PCP"><span>PCP</span></li>										
									  </ol>
									</div>									
									<div id='results' class="clearfix hidden">
										<table id='interpret' class="tablepress">
                                            <thead>
                                                <tr class="odd">
                                                    <th style='width: 120px;'><div>Drug Name</div></th>
													<th class="column-3" style='min-width: 160px;'>If Unexpected</th>
                                                    <th class="column-3" style='min-width: 240px;'>Potential False Positives</th>
													<th class="column-3" style='min-width: 240px;'>Next Steps (What to do now)</th>
													<th class="column-3" style='min-width: 240px;'>If Problematic use Identified…</th>													
                                                    <th class="column-3" style='min-width: 100px;'>Common Detection Range</th>
                                                </tr>												
                                            </thead>		
                                            <tbody class="row-hover">
                                                <tr class="even hidden" id="Amphetamine">
                                                    <td class="column-1">Amphetamine</td>
                                                    <!--<td>
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Amphetamine_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Amphetamine_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Amphetamine_test" value="0">
															</p></div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Amphetamine_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Amphetamine_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Amphetamine_take" value="0">

															</p></div>															
													</td>-->                                                    
													<td class='result-2'>Consider Misuse, Consider False positive due to other substances. Review if administration is appropriate and/or sanctioned. If use is likely, consider repeat and/or confirmatory testing.</td>
													<td class='result-2'>amantadine; benzphetamine, bupropion; chlorpromazine; clobenzorex; dimethylamphetamine; dopamine; decongestants (e.g. brompheniramine, phenteramine, phenylpropanolamine); desipramine; Ephedrine; fenfluramine, fenproporex; isoxsuprine; mefenorex; mephentermine; methylphenidate; mexilitine; phenmetrazine; pseuodoephedrine; nasal promethazine; ranitadine; selegiline; SSRI's; trazadone; Vicks Vapor Spray (L-amphetamine - Psychoactive form of amphetamine is D-form: If < 80% is L-form, then Vicks cannot be sole source) .</td>
													<td class='text-right' >• Review medication list for potential False Positives.<br/>• Tell patient that this medication showed up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Ask patient if they are taking potential false positive medications that you may not be aware of.<br/>• Speak to patient to determine if false positive is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link>• Assess the severity of use of substance (COMM <link>; AUDIT <link>; DAST <link>)<br/>• Assess for Pseudo-addiction (Suspect Behaviors a/w suboptimal pain management plan)</td>
													<td class='text-right'>Consider (Based on assessed severity):<br/>• Providing counseling<br/>• Providing referral to self-help, treatment, detox a/o treatment for addiction<br/>• Increasing refill frequency (decrease duration of pain medication prescription)<br/>• Increasing visit frequency (decrease time to next return visit)<br/>• Increasing frequency of UDT (decrease time to next UDT)<br/>• Starting random pill counts</td>	
                                                    <td class='result-2' class="even disabled" >1 to 2 days. Urine may test positive within 3 hours</td>
                                                </tr>
												<tr class="odd hidden" id="Barbiturates">
                                                    <td class="column-1">Barbiturates</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Barbiturates_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Barbiturates_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Barbiturates_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Barbiturates_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Barbiturates_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Barbiturates_take" value="0">
															</p>
														</div>
													</td> -->
													<td class='result-2'>Consider Misuse, Consider False positive due to other substances. Review if administration is appropriate and/or sanctioned. If use is likely, consider repeat and/or confirmatory testing.</td>
													<td class='result-2'>Ibuprofen; naproxyn; phenytoin</td>
													<td class='text-right' >• Review medication list for potential False Positives.<br/>• Tell patient that this medication showed up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Ask patient if they are taking potential false positive medications that you may not be aware of.<br/>• Speak to patient to determine if false positive is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link>• Assess the severity of use of substance (COMM <link>; AUDIT <link>; DAST <link>)<br/>• Assess for Pseudo-addiction (Suspect Behaviors a/w suboptimal pain management plan)</td>
													<td class='text-right'>Consider (Based on assessed severity):<br/>• Providing counseling<br/>• Providing referral to self-help, treatment, detox a/o treatment for addiction<br/>• Increasing refill frequency (decrease duration of pain medication prescription)<br/>• Increasing visit frequency (decrease time to next return visit)<br/>• Increasing frequency of UDT (decrease time to next UDT)<br/>• Starting random pill counts</td>	
                                                    <td class='result-2' class="even disabled" >2 to 20 days depending on specific agent; Chronic use may result in longer detection times.</td>
                                                </tr>
												<tr class="even hidden" id="Benzodiazepines">
                                                    <td class="column-1">Benzodiazepines</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Benzodiazepines_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Benzodiazepines_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Benzodiazepines_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Benzodiazepines_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Benzodiazepines_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Benzodiazepines_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <td class='result-2'>Consider Misuse, Consider False positive due to other substances. Review if administration is appropriate and/or sanctioned. If use is likely, consider repeat and/or confirmatory testing.</td>
													<td class='result-2'>Sertraline, oxaprozin.</td>
													<td class='text-right' >• Review medication list for potential False Positives.<br/>• Tell patient that this medication showed up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Ask patient if they are taking potential false positive medications that you may not be aware of.<br/>• Speak to patient to determine if false positive is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link>• Assess the severity of use of substance (COMM <link>; AUDIT <link>; DAST <link>)<br/>• Assess for Pseudo-addiction (Suspect Behaviors a/w suboptimal pain management plan)</td>
													<td class='text-right'>Consider (Based on assessed severity):<br/>• Providing counseling<br/>• Providing referral to self-help, treatment, detox a/o treatment for addiction<br/>• Increasing refill frequency (decrease duration of pain medication prescription)<br/>• Increasing visit frequency (decrease time to next return visit)<br/>• Increasing frequency of UDT (decrease time to next UDT)<br/>• Starting random pill counts</td>	
                                                    <td class='result-2' class="even disabled" >1 to 14 days depending on specific agent; Chronic use may result in longer detection times</td>
                                                </tr>
												<tr class="odd hidden" id="Buprenorphine">
                                                    <td class="column-1">Buprenorphine</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Buprenorphine_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Buprenorphine_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Buprenorphine_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Buprenorphine_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Buprenorphine_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Buprenorphine_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='result-3' ><!--Should be positive--></td>	
													<td class='result-4' ><!--Should be positive--></td>	
                                                    <td class='text-right' class="even disabled" ></td>
                                                </tr>
												<tr class="even hidden" id="Cocaine">
                                                    <td class="column-1">Cocaine</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Cocaine_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Cocaine_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Cocaine_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Cocaine_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Cocaine_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Cocaine_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <td class='result-2'>Consider Misuse, Consider False positive due to other substances. Review if administration is appropriate and/or sanctioned. If use is likely, consider repeat and/or confirmatory testing.</td>
													<td class='result-2'>Local anesthetics (TAC: Tetracaine, Adrenaline, & Ccaine HCL). Not found in Lidocaine, Benzocaine,Mepivacaine)</td>
													<td class='text-right' >• Review medication list for potential False Positives.<br/>• Tell patient that this medication showed up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Ask patient if they are taking potential false positive medications that you may not be aware of.<br/>• Speak to patient to determine if false positive is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link>• Assess the severity of use of substance (COMM <link>; AUDIT <link>; DAST <link>)<br/>• Assess for Pseudo-addiction (Suspect Behaviors a/w suboptimal pain management plan)</td>
													<td class='text-right'>Consider (Based on assessed severity):<br/>• Providing counseling<br/>• Providing referral to self-help, treatment, detox a/o treatment for addiction<br/>• Increasing refill frequency (decrease duration of pain medication prescription)<br/>• Increasing visit frequency (decrease time to next return visit)<br/>• Increasing frequency of UDT (decrease time to next UDT)<br/>• Starting random pill counts</td>	
                                                    <td class='result-2' class="even disabled" >Usually positive up to 48 to 72 hours; Chronic use may result in longer detection times.</td>
                                                </tr>
												<tr class="odd hidden" id="Codeine">
                                                    <td class="column-1">Codeine</td>
                                                    <!--<td class="column-2">
														<div  class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Codeine_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Codeine_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Codeine_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Codeine_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Codeine_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Codeine_take" value="0">
															</p>
														</div>
													</td> -->
													<td class='result-2'>Consider Misuse, Consider False positive due to other substances. Review if administration is appropriate and/or sanctioned. If use is likely, consider repeat and/or confirmatory testing.</td>
													<td class='result-2'>Poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin.</td>
													<td class='text-right' >• Review medication list for potential False Positives.<br/>• Tell patient that this medication showed up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Ask patient if they are taking potential false positive medications that you may not be aware of.<br/>• Speak to patient to determine if false positive is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link>• Assess the severity of use of substance (COMM <link>; AUDIT <link>; DAST <link>)<br/>• Assess for Pseudo-addiction (Suspect Behaviors a/w suboptimal pain management plan)</td>
													<td class='text-right'>Consider (Based on assessed severity):<br/>• Providing counseling<br/>• Providing referral to self-help, treatment, detox a/o treatment for addiction<br/>• Increasing refill frequency (decrease duration of pain medication prescription)<br/>• Increasing visit frequency (decrease time to next return visit)<br/>• Increasing frequency of UDT (decrease time to next UDT)<br/>• Starting random pill counts</td>
                                                    <td class='result-2' class="even disabled">2 to 4 days</td>
                                                </tr>
												<tr class="even hidden" id="Fentanyl">
                                                    <td class="column-1">Fentanyl</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Fentanyl_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Fentanyl_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Fentanyl_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Fentanyl_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Fentanyl_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Fentanyl_take" value="0">
															</p>
														</div>
													</td> -->
													<td class='result-2'>Consider Misuse, Consider False positive due to other substances. Review if administration is appropriate and/or sanctioned. If use is likely, consider repeat and/or confirmatory testing.</td>
													<td class='result-2'>False positives are highly unlikely.</td>
													<td class='text-right' >• Review medication list for potential False Positives.<br/>• Tell patient that this medication showed up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Ask patient if they are taking potential false positive medications that you may not be aware of.<br/>• Speak to patient to determine if false positive is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link>• Assess the severity of use of substance (COMM <link>; AUDIT <link>; DAST <link>)<br/>• Assess for Pseudo-addiction (Suspect Behaviors a/w suboptimal pain management plan)</td>
													<td class='text-right'>Consider (Based on assessed severity):<br/>• Providing counseling<br/>• Providing referral to self-help, treatment, detox a/o treatment for addiction<br/>• Increasing refill frequency (decrease duration of pain medication prescription)<br/>• Increasing visit frequency (decrease time to next return visit)<br/>• Increasing frequency of UDT (decrease time to next UDT)<br/>• Starting random pill counts</td>	
                                                    <td class='result-2' class="even disabled" >24 Hours</td>
                                                </tr>
												<tr class="odd hidden" id="Heroin-MAM6">
                                                    <td class="column-1">Heroin-MAM6</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Heroin-MAM6_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Heroin-MAM6_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Heroin-MAM6_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Heroin-MAM6_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Heroin-MAM6_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Heroin-MAM6_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='result-3' ><!--Should be positive--></td>	
													<td class='result-4' ><!--Should be positive--></td>	
                                                    <td class='text-right' class="even disabled" ></td>
                                                </tr>													
												<tr class="even hidden" id="Hydrocodone">
                                                    <td class="column-1">Hydrocodone</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Hydrocodone_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Hydrocodone_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Hydrocodone_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Hydrocodone_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Hydrocodone_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Hydrocodone_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='result-3' ><!--Should be positive--></td>	
													<td class='result-4' ><!--Should be positive--></td>	
                                                    <td class='text-right' class="even disabled" ></td>
                                                </tr>	
												<tr class="odd hidden" id="Hydromorphone">
                                                    <td class="column-1">Hydromorphone</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Hydromorphone_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Hydromorphone_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Hydromorphone_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Hydromorphone_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Hydromorphone_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Hydromorphone_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='result-3' ><!--Should be positive--></td>	
													<td class='result-4' ><!--Should be positive--></td>	
                                                    <td class='text-right' class="even disabled" ></td>
                                                </tr>													
												<tr class="even hidden" id="Meperidine">
                                                    <td class="column-1">Meperidine</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Meperidine_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Meperidine_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Meperidine_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Meperidine_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Meperidine_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Meperidine_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='result-3' ><!--Should be positive--></td>	
													<td class='result-4' ><!--Should be positive--></td>	
                                                    <td class='text-right' class="even disabled" ></td>
                                                </tr>
												<tr class="odd hidden" id="Methadone">
                                                    <td class="column-1">Methadone</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Methadone_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Methadone_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Methadone_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Methadone_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Methadone_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Methadone_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <td class='result-2'>Consider Misuse, Consider False positive due to other substances. Review if administration is appropriate and/or sanctioned. If use is likely, consider repeat and/or confirmatory testing.</td>
													<td class='result-2'>Diphenhydramine; doxylamine; clomipramine; chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil. </td>
													<td class='text-right' >• Review medication list for potential False Positives.<br/>• Tell patient that this medication showed up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Ask patient if they are taking potential false positive medications that you may not be aware of.<br/>• Speak to patient to determine if false positive is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link>• Assess the severity of use of substance (COMM <link>; AUDIT <link>; DAST <link>)<br/>• Assess for Pseudo-addiction (Suspect Behaviors a/w suboptimal pain management plan)</td>
													<td class='text-right'>Consider (Based on assessed severity):<br/>• Providing counseling<br/>• Providing referral to self-help, treatment, detox a/o treatment for addiction<br/>• Increasing refill frequency (decrease duration of pain medication prescription)<br/>• Increasing visit frequency (decrease time to next return visit)<br/>• Increasing frequency of UDT (decrease time to next UDT)<br/>• Starting random pill counts</td>	
                                                    <td class='result-2' class="even disabled" >1 to 3 days; Chronic use may result in longer detection times.</td>
                                                </tr>
												<tr class="even hidden" id="Morphine">
                                                    <td class="column-1">Morphine</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Morphine_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Morphine_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Morphine_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Morphine_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Morphine_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Morphine_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <<td class='result-2'>Consider Misuse, Consider False positive due to other substances. Review if administration is appropriate and/or sanctioned. If use is likely, consider repeat and/or confirmatory testing.</td>
													<td class='result-2'>Diphenhydramine; doxylamine; clomipramine; chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.</td>
													<td class='text-right' >• Review medication list for potential False Positives.<br/>• Tell patient that this medication showed up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Ask patient if they are taking potential false positive medications that you may not be aware of.<br/>• Speak to patient to determine if false positive is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link>• Assess the severity of use of substance (COMM <link>; AUDIT <link>; DAST <link>)<br/>• Assess for Pseudo-addiction (Suspect Behaviors a/w suboptimal pain management plan)</td>
													<td class='text-right'>Consider (Based on assessed severity):<br/>• Providing counseling<br/>• Providing referral to self-help, treatment, detox a/o treatment for addiction<br/>• Increasing refill frequency (decrease duration of pain medication prescription)<br/>• Increasing visit frequency (decrease time to next return visit)<br/>• Increasing frequency of UDT (decrease time to next UDT)<br/>• Starting random pill counts</td>	
                                                    <td class='result-2' class="even disabled" >1 to 3 days; Chronic use may result in longer detection times.</td>
                                                </tr>
												<tr class="odd hidden" id="Oxycodone">
                                                    <td class="column-1">Oxycodone</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Oxycodone_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Oxycodone_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Oxycodone_test" value="0">
															</p>
														</div>
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Oxycodone_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Oxycodone_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Oxycodone_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <td class='result-2'>Consider Misuse, Consider False positive due to other substances. Review if administration is appropriate and/or sanctioned. If use is likely, consider repeat and/or confirmatory testing.</td>
													<td class='result-2'>Poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin.</td>
													<td class='text-right' >• Review medication list for potential False Positives.<br/>• Tell patient that this medication showed up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Ask patient if they are taking potential false positive medications that you may not be aware of.<br/>• Speak to patient to determine if false positive is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link>• Assess the severity of use of substance (COMM <link>; AUDIT <link>; DAST <link>)<br/>• Assess for Pseudo-addiction (Suspect Behaviors a/w suboptimal pain management plan)</td>
													<td class='text-right'>Consider (Based on assessed severity):<br/>• Providing counseling<br/>• Providing referral to self-help, treatment, detox a/o treatment for addiction<br/>• Increasing refill frequency (decrease duration of pain medication prescription)<br/>• Increasing visit frequency (decrease time to next return visit)<br/>• Increasing frequency of UDT (decrease time to next UDT)<br/>• Starting random pill counts</td>	
                                                    <td class='result-2' class="even disabled" >1 to 4 days</td>
                                                </tr>
												<tr class="even hidden" id="Oxymorphone">
                                                    <td class="column-1">Oxymorphone</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="Oxymorphone_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="Oxymorphone_test" value="1">
																NA<input type="radio" class='dst2A-0' name="Oxymorphone_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="Oxymorphone_take" value="2">
																N  <input type="radio" class='dst2B-1' name="Oxymorphone_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="Oxymorphone_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
													<td class='result-3' ><!--Should be positive--></td>	
													<td class='result-4' ><!--Should be positive--></td>	
                                                    <td class='text-right' class="even disabled" ></td>
                                                </tr>
												<tr class="odd hidden" id="PCP">
                                                    <td class="column-1">PCP</td>
                                                    <!--<td class="column-2">
														<div class="test"><p>Test Result</p>
															<p>
																(+)  <input type="radio" class='dst2A-2' name="PCP_test" value="2">
																(-)  <input type="radio" class='dst2A-1' name="PCP_test" value="1">
																NA<input type="radio" class='dst2A-0' name="PCP_test" value="0">
															</p>
														</div>	
														<div class="take"><p>Taking Drug</p>
															<p>
																Y  <input type="radio" class='dst2B-2' name="PCP_take" value="2">
																N  <input type="radio" class='dst2B-1' name="PCP_take" value="1">
																Unsure<input type="radio" class='dst2B-0' name="PCP_take" value="0">
															</p>
														</div>
													</td> -->
                                                    <td class='result-2'>Consider Misuse, Consider False positive due to other substances. Review if administration is appropriate and/or sanctioned. If use is likely, consider repeat and/or confirmatory testing.</td>
													<td class='result-2'>Dextromethorophan; dipnehydramine; ibuprofen; tramadol; venlafaxine. </td>
													<td class='text-right' >• Review medication list for potential False Positives.<br/>• Tell patient that this medication showed up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Ask patient if they are taking potential false positive medications that you may not be aware of.<br/>• Speak to patient to determine if false positive is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link>• Assess the severity of use of substance (COMM <link>; AUDIT <link>; DAST <link>)<br/>• Assess for Pseudo-addiction (Suspect Behaviors a/w suboptimal pain management plan)</td>
													<td class='text-right'>Consider (Based on assessed severity):<br/>• Providing counseling<br/>• Providing referral to self-help, treatment, detox a/o treatment for addiction<br/>• Increasing refill frequency (decrease duration of pain medication prescription)<br/>• Increasing visit frequency (decrease time to next return visit)<br/>• Increasing frequency of UDT (decrease time to next UDT)<br/>• Starting random pill counts</td>	
                                                    <td class='result-2' class="even disabled" >1 to 3 days</td>
                                                </tr>												
                                            </tbody>
										</table>									
									</div>
									<div class="ui-widget" style="position:absolute; left:20px;bottom:10px;" ><!--style="width:200px; height:140px; position: absolute; right:80px;bottom:100px;  border: 1px solid lightgrey; padding-left:5px;">-->
									    <!--<label>2. Run UDT Interpretation Tool:</label>-->
										<button type="submit" id="selectedDrugs" value="" style="margin-left:5px; margin-right:5px;" class="btn btn-default pull-Left">Run</button>
										<!--<button type="submit" id="interpretResults" value="" style="margin-left:5px; margin-right:10px;" class="btn btn-default pull-Left">Interpret Results</button>-->								
										<button type="reset" id="reset" style="margin-left:20px; margin-right:20px;" class="btn btn-default pull-Right">Reset</button>
									</div>											
									</form>		
							<span style="position: absolute; right:50px;bottom:10px;"><a href="http://mytopcare.org/udt-calculator/" title="Urine Drug Test (UDT) Decision Support">Return to UDT Decision Support</a></span><br/>										
							</div>
							<br/><br/>
										
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