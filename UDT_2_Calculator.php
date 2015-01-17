<?php
/*
Template Name: UDT_2_Calculator
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
							<br/><span><b>Select and Click the Bars below to see more details.</b></span><br/>
							<div id="accordion">
								<h3>Urine Drug Testing Guide: Why, When, and How they work.</h3>		
								<div class="clearfix">								
									<span class="content">
										<h4 dir="ltr">Why order a UDT:</h4>
										<ul>
											<li dir="ltr">
										<p dir="ltr">Provides objective information (evidence suggests that patients may not be forthcoming if they are misusing opioids) to support the safety of the patient and of the public.</p>
										</li>
											<li dir="ltr">
										<p dir="ltr">Demonstrates adherence to medication regimen.  (Is the patient using the substance that we have prescribed to them?)</p>
										</li>
											<li dir="ltr">
										<p dir="ltr">Demonstrates illicit substance use by patient. (Is the patient using any substances that he or she shouldn’t be?)</p>
										</li>
										</ul>
										<ul>
											<li dir="ltr">
										<p dir="ltr">Supports recovery efforts / helps prevent misuse or abuse if patients understand urine drug tests are an ongoing part of treatment. </p>
										</li>
											<li dir="ltr">
										<p dir="ltr">Urine drug testing is becoming the standard of care.</p>
										</li>
										</ul>
										<!--use for pop-up-->											
										<h4 dir="ltr"> How to Discuss Urine Drug Testing with Patients:</h4>
										<ul>
											<li dir="ltr">
										<p dir="ltr">Some physicians feel awkward discussing urine drug testing.</p>
										</li>
											<li dir="ltr">
										<p dir="ltr">Understanding the framework for UDT makes discussing much easier </p>
										</li>
											<li dir="ltr">
										<p dir="ltr">TIP: Frame UDT as a personal and public health issue. Explain that it is done not to catch mistakes but to help prevent them.</p>
										</li>
											<li dir="ltr">
										<p dir="ltr">TIP: Normalize Universal Testing - Explain that Providers cannot tell which patients might have problems with misuse. Clearly state that all patients treated with opioid medications receive this form of monitoring.</p>
										</li>												
										</ul>
										<h4 dir="ltr">When to Perform Urine Drug Testing:</h4>
										<ul>
											<li dir="ltr">
										<p dir="ltr">Most providers feel that random urine screening provides them with the best possible information.</p>
										</li>
											<li dir="ltr">
										<p dir="ltr">Some providers use urine drug screens only when concerns arise (e.g. the patient reports that he or she is out of the opioid medication early).</p>
										</li>
											<li dir="ltr">
										<p dir="ltr">It is also possible to perform urine drug tests on a regular, scheduled basis.</p>
										</li>
										</ul>
										<h4 dir="ltr">About Urine Drug Tests:</h4>
										<ul>
											<li dir="ltr">
										<p dir="ltr">Initial tests are generally done with immunoassays.</p>
										</li>
										</ul>
										<ul style="padding-left: 30px;">
										<li>Risks:
										<ul>
											<li>False negatives due to cut-offs for test sensitivity</li>
											<li>False positive due to cross re-activity with other drugs.</li>
										</ul>
										</li>
										</ul>
										<ul>
											<li>KEY POINTS
										<ul>
											<li>Unexpected findings; Send for further analysis using gas chromatography/mass spectroscopy  (highly sensitive and specific) to identify specific compounds.</li>
										</ul>
										<ul>
											<li>Be aware of opioid metabolic pathways to fully analyze test results (see figure).</li>
											<li>Opioid Metabolism Pathway: urine drug testing is just one piece of information that we need to integrate with everything else that we know about a patient.</li>
											<li>Why patient’s UDT comes back the way that it does can never be absolutely discerned (i.e. If the urine test is negative for opioids, we don’t know if the patient is diverting medication or if he is just using it more rapidly than he should).</li>
											<li>Dedicated deceivers can beat the system.</li>
										</ul>
										</li>
										</ul>
										<a href="http://mytopcare.org/wp-content/uploads/2014/05/CommonTestingInterpretations.png"><img class="aligncenter size-full wp-image-1365" src="http://mytopcare.org/wp-content/uploads/2014/05/CommonTestingInterpretations.png" alt="CommonTestingInterpretations" /></a>
									</span>							
								</div>								
								<h3 style="background:lightcyan;">DST 1 (PRE- Test): Choose the correct test. (A test for Opiates doesn’t test for all Opioids – This Tool will ensure you choose correctly)
								<span class="action-button ui-state-default ui-corner-all"><a class="ui-icon ui-icon-help btpad" href="javascript:alert('button clicked');">Edit</a></span></h3>
                                <div class="clearfix">							
                                    <form id='utd-calculator2a' class='form-inline' method='POST'>
										<span class="overview">Choosing the correct UDT to order can be challenging.<br/><br/>
											This Decision Support Tool (DST) provides information about effective UDT ordering strategies for drugs that may create confusion later during interpretation. Because many UDT Screening panels are broad, a targeted UDT testing strategy may require focused effort by the Provider. Without this deliberate focus, UDT Screening panels may lead Providers to inadvertently order incorrect or less specific tests based on the history. Providers may later find that they have to interpret test results that they might not have ordered if key information about test characteristics had been available.
										<h4>KEY Points:</h4>
										<ol>
											<li>Synthetic Opioids (Buprenorphine, Fentanyl, Meperidine, and Methadone) are not detected on standard Opiate Urine Drug Screening tests.</li>
											<li>Semi-synthetic Opioids (Hydrocodone, Hydromorphone, Oxycodone, and Oxymorphone) may be detected with a UDT for Opiates if patient has taken medication recently, or is taking a high dose.</li>
											<li>Semi-synthetic Opioids (Hydrocodone, Hydromorphone, Oxycodone, and Oxymorphone) are unlikely to be detected with a UDT for Opiates if the patient taking an average or low dose.</li>
											<li>Do not rely on a UDT result for Opiates to determine use of  Semi-synthetic Opioids (Hydrocodone, Hydromorphone, Oxycodone, and Oxymorphone)</li>
											<li>Because patient may take more than one opioid a UDT could be positive despite patient report of  taking a medication not detected in an Opiate UDT (Fentanyl)</li>
											<li>Another source of unexpected positive UDT may be due to a false positive from a wide range of non-opioid medications (e.g. fluoroquinolones)</li>
										</ol>
										</span>
                                        <table class="tablepress" style='width: 1040px; padding:4px !important;'>
                                            <thead>
                                                <tr class="odd">
                                                    <th style='width: 120px;'><div>Name</div></th>
                                                    <th style='width: 80px;'><div>Is<br/>Taking</div></th>
													<th class="column-3" style='min-width: 240px;'>Recommended Tests</th>
													<th class="column-3" style='min-width: 400px;'>Additional Information</th>
                                                    <th class="column-3" style='min-width: 160px;'>Common Detection Range</th													
                                                </tr>
                                            </thead>
                                            <tbody class="row-hover">	
                                                <tr class="odd">
                                                    <td class="column-1">Buprenorphine</td>
                                                    <td class="column-2"><input type="checkbox" class='taking' value="Buprenorphine"></td>
													<td class='result-3' ><!--Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right' class="odd disabled" ></td>													
                                                </tr>
												<tr class="even">
                                                    <td class="column-1">Fentanyl</td>
                                                    <td class="column-2"><input type="checkbox" class='taking' value="Fentanyl"></td>
													<td class='result-3'></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right' class="even disabled" ></td>													
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Meperidine</td>
                                                    <td class="column-2"><input type="checkbox" class='taking' value="Meperidine"></td>
													<td class='result-3'></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right' class="odd disabled" ></td>													
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Methadone</td>
                                                    <td class="column-2"><input type="checkbox" class='taking' value="Methadone"></td>
													<td class='result-3'></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right' class="even disabled" ></td>													
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Oxycodone</td>
                                                    <td class="column-2"><input type="checkbox"  class='taking' value="Oxycodone"></td>
													<td class='result-3'></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right' class="odd disabled" ></td>													
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Oxymorphone</td>
                                                    <td class="column-2"><input type="checkbox"  class='taking' value="Oxymorphone"></td>
													<td class='result-3'></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right' class="even disabled" ></td>													
                                                </tr>
                                            </tbody>
                                        </table>                    
										<button type="submit" id="recommend" value="" style="margin-left:10px; margin-right:10px;" class="btn btn-default pull-Left">Recommended Tests</button>
                                        <button type="reset" id="reset" style="margin-left:20px; margin-right:20px;" class="btn btn-default pull-Right">Reset</button>
                                    </form>
                                </div>							
	<!---------------------------------------------------------------------------------------------------------------->
								<h3 >DST 2 (POST-Test): How to interpret a <b>Positive</b> UDT based on patient history.<span class="action-button ui-state-default ui-corner-all"><a class="ui-icon ui-icon-help btpad" href="javascript:alert('button clicked');">Edit</a></span></h3> 	
								<div class="clearfix">
                                    <form id='utd-calculator2b' class='form-inline' method='POST'>
										<span class="overview ">
											This Decision Support Tool (DST) enables you to interpret previously ordered Positive UDT results. The DST assumes that the UDT result to be interpreted is <strong>Positive</strong> and <strong>Finalized</strong>.<br/><br/>
											<ol>
												<li>User input is based on whether the patient is believed to be taking the drug or not based on the Medical Record, Patient history, report of another person (Family, Nurse, Pharmacist), or clinical judgment.</li>
												<li>Patient historical information can rarely be known unequivocally, therefor the interpretation reported by this tool should always be tempered by cautious clinical judgment.</li>
											</ol>
										</span>
                                        <table class="tablepress" style='width: 1040px;padding:4px !important;'>
                                            <thead>
                                                <tr class="odd">
                                                    <th style='width: 120px;'><div>Positive Drug<br/>test for:</div></th>
                                                    <th style='width: 80px;'><div>Patient Reports Taking<br/>(Y / N)</div></th>
                                                    <th class="column-3" style='min-width: 200px;'>Interpretation</th>
													<th class="column-3" style='min-width: 400px;'>Additional Information</th>
                                                    <th class="column-3" style='min-width: 200px;'>Common Detection Range</th>
                                                </tr>
                                            </thead>
                                            <tbody>											
												<tr class="even">
													<td style="float:right;"> All Yes</td>
													<td><input type="checkbox" name="dst-2" id="dst-2-1"><input type="checkbox" name="dst-2" id="dst-2-2"></td>
													<td style="float:left;">All No</td>
													<!--<td><input type="radio" name="dst-2A" id="dst-2-3"> Select Standard Panel</td>
													<td><input type="radio" name="dst-2A" id="dst-2-4"> Select Extended Panel</td>-->
												</tr>
                                            </tbody>											
                                            <tbody class="row-hover">
                                                <tr class="even">
                                                    <td class="column-1">Amphetamine</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Amphetamine" value="1">
														<input type="radio" class='dst2-0' name="Amphetamine" value="0">
													</td>                                                    
													<td class='result-1' ><!--Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right' class="even disabled" ></td>
                                                </tr>
												<tr class="odd">
                                                    <td class="column-1">Barbiturates</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Barbiturates" value="1">
														<input type="radio" class='dst2-0' name="Barbiturates" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled" ></td>
                                                </tr>
												<tr class="even">
                                                    <td class="column-1">Benzodiazepines</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Benzodiazepines" value="1">
														<input type="radio" class='dst2-0' name="Benzodiazepines" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="even disabled" ></td>
                                                </tr>																				
                                                <tr class="odd">
                                                    <td class="column-1">Buprenorphine</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Buprenorphine" value="1">
														<input type="radio" class='dst2-0' name="Buprenorphine" value="0">
													</td>
                                                    <td class='result-1' ><!--Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>
												<tr class="even">
                                                    <td class="column-1">Cannabis</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Cannabis" value="1">
														<input type="radio" class='dst2-0' name="Cannabis" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="even disabled" ></td>
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Cocaine</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Cocaine" value="1">
														<input type="radio" class='dst2-0' name="Cocaine" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled" ></td>
                                                </tr>																				
                                                <tr class="even">
                                                    <td class="column-1">Codeine</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Codeine" value="1">
														<input type="radio" class='dst2-0' name="Codeine" value="0">
													</td>
                                                    <td class='result-1'><!--Should be positive--></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="even disabled"></td>
                                                </tr>
												<tr class="odd">
                                                    <td class="column-1">Fentanyl</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Fentanyl" value="1">
														<input type="radio" class='dst2-0' name="Fentanyl" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Heroin</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Heroin" value="1">
														<input type="radio" class='dst2-0' name="Heroin" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right'class="even disabled"></td>
                                                </tr>												
                                                <tr class="odd">
                                                    <td class="column-1">Hydrocodone</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Hydrocodone" value="1">
														<input type="radio" class='dst2-0' name="Hydrocodone" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right'class="odd disabled"></td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Hydromorphone</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Hydromorphone" value="1">
														<input type="radio" class='dst2-0' name="Hydromorphone" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="even disabled"></td>                                                    
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Meperidine</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Meperidine" value="1">
														<input type="radio" class='dst2-0' name="Meperidine" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Methadone</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Methadone" value="1">
														<input type="radio" class='dst2-0' name="Methadone" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="even disabled"></td>
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Morphine</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Morphine" value="1">
														<input type="radio" class='dst2-0' name="Morphine" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Oxycodone</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="Oxycodone" value="1">
														<input type="radio" class='dst2-0' name="Oxycodone" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="even disabled"></td>
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Oxymorphone</td>
													<td class="column-2">
														<input type="radio" class='dst2-1' name="Oxymorphone" value="1">
														<input type="radio" class='dst2-0' name="Oxymorphone" value="0">	
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">PCP</td>
                                                    <td class="column-2">
														<input type="radio" class='dst2-1' name="PCP" value="1">
														<input type="radio" class='dst2-0' name="PCP" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="even disabled" ></td>
                                                </tr>												
                                            </tbody>
                                        </table>										
										<button type="submit" id="interpret" value="" style="margin-left:10px; margin-right:10px;" class="btn btn-default pull-Left">Interpret Results</button>
										<button type="reset" id="reset2" style="margin-left:20px; margin-right:20px;" class="btn btn-default pull-Right">Reset</button>
									</form>		
								</div>	
	<!---------------------------------------------------------------------------------------------------------------->							
								<h3 style="background:lightcyan;">DST 3 (POST-Test): Interpret a UDT for Opiates based on patient history.<span class="action-button ui-state-default ui-corner-all"><a class="ui-icon ui-icon-help btpad" href="javascript:alert('button clicked');">Edit</a></span></h3>						
								<div class="clearfix">
                                    <form id='utd-calculator2c' class='form-inline' method='POST'>
									<span class="overview">								
									Interpreting an existing UDT for OPIATE can be extremely challenging. This is because of the non-specific nature of the UDT for opiates as well as inconsistent cross-reactivity of many semi-synthetic opioids.
									<br/><br/>
									This Decision Support Tool (DST) will help you interpret Positive or Negative results for a UDT for Opiates that you or a colleague previously ordered on a patient. To use this DST first select if the UDT for Opiates is positive or Negative. The DST then provides interpretations based on user input of whether the patient is believed to be taking the drug or not.
									<br/>
									<ol>
										<li>This input information may be based on the Medical Record, Patient history, report of another person (Family, Nurse, Pharmacist), or clinical judgment.</li>
										<li>Since this patient historical information can rarely be known unequivocally the interpretation reported by this tool should always be tempered by cautious clinical judgment.</li>
									</ol>
									</span>
										<table class="tablepress" style='width: 360px;'>
											<thead class="row-hover">										
												<tr class="even">
													<th colspan=2 style='width: 120px; padding: 5px;'><div style='float:Left;'>Opiates result </div></th>
													<th colspan=1><input type="radio" name="opiates" style ='float:Left;' value="1">(+)</th>
													<th colspan=1><input type="radio" name="opiates" style ='float:Left;' value="0">(-)</th>
													<th colspan=2>
														<div class="info-box hidden" style="position:absolute; right:40px;">
															<div class="" style="display:block;padding:0px;background-color: lightpink;float: right;">Unexpected: Consider Confirmatory Testing for a specific drug;</div>
														</div>													
													</th>
												</tr>	
											</thead>
										</table>
                                        <table id='opiatesDrugs' class="tablepress hidden" style='width: 1040px;padding:4px !important;'>	
                                            <thead>
                                                <tr class="odd">
                                                    <th style='width: 120px;'><div>Drug Name</div></th>
                                                    <th style='width: 80px;'><div>Is Taking<br/>(Y / N)</div></th>
                                                    <th class="column-3" style='min-width: 360px;'>Interpretation</th>
													<th class="column-3" style='min-width: 320px;'>Additional Information</th>
                                                    <th class="column-3" style='min-width: 120px;'>Common Detection Range</th>
                                                </tr>												
                                            </thead>
                                            <tbody>											
												<tr class="even">
													<td style="float:right;"> All Yes</td>
													<td><input type="checkbox" name="dst-3" id="dst-3-1"><input type="checkbox" name="dst-3" id="dst-3-2"></td>
													<td style="float:left;">All No</td>
												</tr>
                                            </tbody>											
                                            <tbody class="row-hover">																		
                                                <tr class="odd">
                                                    <td class="column-1">Buprenorphine</td>
                                                    <td class="column-2">
														<input type="radio" class='dst3-1' name="Buprenorphine" value="1">
														<input type="radio" class='dst3-0' name="Buprenorphine" value="0">
													</td>
                                                    <td class='result-1' ><!--Should be positive--></td>
													<td class='result-2' ><!--Should be positive--></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>																				
                                                <tr class="even">
                                                    <td class="column-1">Codeine</td>
                                                    <td class="column-2">
														<input type="radio" class='dst3-1' name="Codeine" value="1">
														<input type="radio" class='dst3-0' name="Codeine" value="0">	
													</td>														
													</td>
                                                    <td class='result-1'><!--Should be positive--></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="even disabled"></td>
                                                </tr>
												<tr class="odd">
                                                    <td class="column-1">Fentanyl</td>
                                                    <td class="column-2">
														<input type="radio" class='dst3-1' name="Fentanyl" value="1">
														<input type="radio" class='dst3-0' name="Fentanyl" value="0">									
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Heroin</td>
                                                    <td class="column-2">
														<input type="radio" class='dst3-1' name="Heroin" value="1">
														<input type="radio" class='dst3-0' name="Heroin" value="0">
													</td>
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right'class="even disabled"></td>
                                                </tr>													
                                                <tr class="odd">
                                                    <td class="column-1">Hydrocodone</td>
                                                    <td class="column-2">													
														<input type="radio" class='dst3-1' name="Hydrocodone" value="1">
														<input type="radio" class='dst3-0' name="Hydrocodone" value="0">	
													</td>														
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right'class="odd disabled"></td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Hydromorphone</td>
                                                    <td class="column-2">													
														<input type="radio" class='dst3-1' name="Hydromorphone" value="1">
														<input type="radio" class='dst3-0' name="Hydromorphone" value="0">	
													</td>														
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="even disabled"></td>                                                    
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Meperidine</td>
                                                    <td class="column-2">													
														<input type="radio" class='dst3-1' name="Meperidine" value="1">
														<input type="radio" class='dst3-0' name="Meperidine" value="0">	
													</td>														
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Methadone</td>
                                                    <td class="column-2">													
														<input type="radio" class='dst3-1' name="Methadone" value="1">
														<input type="radio" class='dst3-0' name="Methadone" value="0">	
													</td>														
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="even disabled"></td>
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Morphine</td>
                                                    <td class="column-2">													
														<input type="radio" class='dst3-1' name="Morphine" value="1">
														<input type="radio" class='dst3-0' name="Morphine" value="0">	
													</td>														
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>
                                                <tr class="even">
                                                    <td class="column-1">Oxycodone</td>
                                                    <td class="column-2">													
														<input type="radio" class='dst3-1' name="Oxycodone" value="1">
														<input type="radio" class='dst3-0' name="Oxycodone" value="0">	
													</td>														
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="even disabled"></td>
                                                </tr>
                                                <tr class="odd">
                                                    <td class="column-1">Oxymorphone</td>
                                                    <td class="column-2">													
														<input type="radio" class='dst3-1' name="Oxymorphone" value="1">
														<input type="radio" class='dst3-0' name="Oxymorphone" value="0">	
													</td>														
                                                    <td class='result-1'></td>
													<td class='result-2'></td>
                                                    <td class='text-right' class="odd disabled"></td>
                                                </tr>											
                                            </tbody>
                                        </table>									
										<button type="submit" id="interpret2" value="" style="margin-left:10px; margin-right:10px;" class="btn btn-default pull-Left">Interpret Results</button>
										<button type="reset" id="reset3" style="margin-left:20px; margin-right:20px;" class="btn btn-default pull-Right">Reset</button>
									</form>		
								</div>		
								
								<h3>Further References</h3> 
								<div class="clearfix">
									<span class="content">
									See also:
									<ul>
										<li><a title="A Review of the Methods, Interpretation, and Limitations of the Urine Drug Screen" href="http://www.healio.com/orthopedics/journals/ortho/%7be98ef187-30ee-4c8a-be36-47d0c7fac694%7d/a-review-of-the-methods-interpretation-and-limitations-of-the-urine-drug-screen" target="_blank">A Review of the Methods, Interpretation, and Limitations of the Urine Drug Screen</a></li>
										<li><a title="A Guide to Urine Drug Screening" href="http://www.aafp.org/afp/2010/0301/p635.html" target="_blank">A Guide to Urine Drug Screening</a></li>
										<li><a title="Urine Toxicology Use and Interpretation" href="http://www.sfhp.org/files/providers/Best_Practices/Urine_Toxicology_Use_and_Interpretation_(Kara_Lynch).pdf" target="_blank">Urine Toxicology Use and Interpretation</a></li>
									</ul>

									<em>Sources:</em><br/>

									-Christo PJ et al. Urine drug testing in chronic pain. Pain Physician 2011;14:123-143.<br/>
									-Heit HA and Gourlay DL. Urine drug testing in pain medicine. J Pain Symptom Manage 2004;27:260-267.<br/>
									-Peppin JF et al. Recommendations for urine drug monitoring as a component of opioid therapy in the treatment of chronic pain. Pain Medicine 2012;13:886-896.<br/>
									-Reisfield GM et al. ‘False-positive’ and ‘false-negative’ test results in clinical urine drug testing. Bioanalysis 2009;1(5):937-952.<br/>		
									</span>
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