
var drug={
"Amphetamine":{AddInf:"Possible False Positives include bupropion; chlorpromazine; mexilitine; pseuodoephedrine; nasal decongestants; ranitadine, SSRI's; trazadone",Range:"1 to 2 days<br/>Urine may test positive within 3 hours"},
"Barbiturates":{AddInf:"Possible False Positives include ibuprofen; naproxyn; phenytoin",Range:"2 to 20 days  depending on specific agent; Chronic use may result in longer detection times."},
"Benzodiazepines":{AddInf:"Possible False Positives include sertraline, oxaprozin",Range:"1 to 14 days  depending on specific agent; Chronic use may result in longer detection times."},
"Buprenorphine":{AddInf:"Possible False Positives include tramadol; other opioids including (Codeine, Heroin, Morphine)",Range:"1 to 6 days"},
"Cannabis":{AddInf:"Possible false positives include dronabinol, NSAIDS, PPIs",Range:"2 to 7 days or more<br/>Up to one month after heavy chronic use."},
"Cocaine":{AddInf:"Possible false positives include local anesthetics (e.g. lidocaine)",Range:"Usually positive up to 48 to 72 hours; Chronic use may result in longer detection times."},
"Codeine":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:"2 to 4 days"},
"Fentanyl":{AddInf:"False positives are highly unlikely",Range:"24 Hours"},
"Heroin-MAM6":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:"2 to 3 days after use. Chronic use may result in longer detection times."},
"Hydrocodone":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:"24 hours"},
"Hydromorphone":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:"1 to 2 days"},
"Meperidine":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine;quitiapine; thioridazine; tramadol; verapamil;",Range:"2 to 3 days"},
"Methadone":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Range:"1 to 3 days; Chronic use may result in longer detection times."},
"Morphine":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Range:"1 to 3 days; Chronic use may result in longer detection times."},
"Oxycodone":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:"1 to 4 days"},
"Oxymorphone":{AddInf:"Possible false positives include naloxone, see list for opiates",Range:"24 hours"},
"PCP":{AddInf:"Possible false positives include dextromethorophan; dipnehydramine; ibuprofen; tramadol; venlafaxine",Range:"1 to 3 days"}
};

var drugWOpiates={
"Buprenorphine":{Interpret:"<p style='color:red'>Unexpected: 1. Opiates results are not influenced by Buprenorphine 2. Consider another opiate substance to explain the positive result.</p>",AddInf:"1. Opiate Test does not detect Buprenorphine; 2. Consider testing for Buprenorphine specifically."},
"Codeine":{Interpret:"<p style='color:blue'>Expected: Probable that Patient is taking drug as reported.</p>",AddInf:"Opiate Test is positive most likely because patient is taking codeine, however this may still be a false positive; Consider Specific testing for codeine if clinically indicated"},
"Fentanyl":{Interpret:"<p style='color:red'>Unexpected: 1. Opiates results are not influenced by Fentanyl 2. Consider another opiate substance to explain the positive result.</p>",AddInf:"1. Opiate Test does not detect Fentanyl; 2. Consider testing for Fentanyl specifically."},
"Heroin-MAM6":{Interpret:"<p style='color:blue'>Expected: Probable that Patient is taking drug as reported.",AddInf:"Opiate Test is positive most likely because patient is taking Heroin, however this may still be a false positive; Consider Specific testing for heroin if clinically indicated"},
"Hydrocodone":{Interpret:"1. Scenario likely if patient has taken medication recently, or is taking a high dose; 2. Scenario unlikely if patient taking an average or low dose",AddInf:"Do not rely on Opiate test result to determine use of Hydrocodone, Specific testing for Hydrocodone is strongly advised."},
"Hydromorphone":{Interpret:"1. Scenario likely if patient has taken medication recently, or is taking a high dose; 2. Scenario unlikely if patient taking an average or low dose",AddInf:"Do not rely on Opiate test result to determine use of Hydromorphone, Specific testing for Hydromorphone is strongly advised."},
"Meperidine":{Interpret:"<p style='color:red'>Unexpected: 1. Opiates results are not influenced by Meperidine 2. Consider another opiate substance to explain the positive result.</p>",AddInf:"1. Opiate Test does not detect Meperidine; 2. Consider testing for Meperidine specifically."},
"Methadone":{Interpret:"<p style='color:red'>Unexpected: 1. Opiates results are not influenced by Methadone 2. Consider another opiate substance to explain the positive result.</p>",AddInf:"1. Opiate Test does not detect Methadone; 2. Consider testing for Methadone specifically."},
"Morphine":{Interpret:"<p style='color:blue'>Expected: Probable that Patient is taking drug as reported.</p>",AddInf:"Opiate Test is positive most likely because patient is taking morphine, however this may still be a false positive; Consider Specific testing for morphine if clinically indicated"},
"Oxycodone":{Interpret:"1. Scenario likely if patient has taken medication recently, or is taking a high dose; 2. Scenario unlikely if patient taking an average or low dose",AddInf:"Do not rely on Opiate test result to determine use of Oxycodone, Specific testing for Oxycodone is strongly advised."},
"Oxymorphone":{Interpret:"1. Scenario likely if patient has taken medication recently, or is taking a high dose; 2. Scenario unlikely if patient taking an average or low dose",AddInf:"Do not rely on Opiate test result to determine use of Oxymorphone, Specific testing for Oxymorphone is strongly advised."},
};

var drugWOpiatesAlt={
"Buprenorphine":{Interpret:"<p style='color:blue'>Expected: 1. Opiates results are not influenced by Buprenorphine 2. Consider another opiate substance to explain the positive result.</p>",AddInf:"1. Opiate Test does not detect Buprenorphine; 2. Consider testing for Buprenorphine specifically."},
"Codeine":{Interpret:"<p style='color:red'>Unexpected: 1. Confirm Patient is taking drug as reported 2. Consider if last dosage was too low 3. Consider diversion.</p>",AddInf:"1. Consider misuse of Opiate or Semi-synthetic opioid drug; 2. Consider False positive: such as poppy seeds, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, or rifampin."},		
"Fentanyl":{Interpret:"<p style='color:blue'>Expected: 1. Opiates results are not influenced by Fentanyl 2. Consider another opiate substance to explain the positive result.</p>",AddInf:"1. Opiate Test does not detect Fentanyl; 2. Consider testing for Fentanyl specifically."},		
"Heroin-MAM6":{Interpret:"<p style='color:red'>Unexpected: 1. Confirm Patient is taking drug as reported 2. Consider if last dosage was too low.</p>",AddInf:"1. Consider misuse of Opiate or Semi-synthetic opioid drug; 2. Consider False positive: such as poppy seeds, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, or rifampin."},
"Hydrocodone":{Interpret:"1. Scenario likely if patient taking an average or low dose 2. Scenario unlikely if patient has taken medication recently, or is taking a high dose;",AddInf:"1. Consider misuse of Opiate or Semi-synthetic opioid drug; 2. Consider False positive: such as poppy seeds, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, or rifampin."},
"Hydromorphone":{Interpret:"1. Scenario likely if patient taking an average or low dose 2. Scenario unlikely if patient has taken medication recently, or is taking a high dose;",AddInf:"1. Consider misuse of Opiate or Semi-synthetic opioid drug; 2. Consider False positive: such as poppy seeds, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, or rifampin."},
"Meperidine":{Interpret:"<p style='color:blue'>Expected: 1. Opiates results are not influenced by Meperidine 2. Consider another opiate substance to explain the positive result.</p>",AddInf:"1. Opiate Test does not detect Meperidine; 2. Consider testing for Meperidine specifically."},
"Methadone":{Interpret:"<p style='color:blue'>Expected: 1. Opiates results are not influenced by Methadone 2. Consider another opiate substance to explain the positive result.</p>",AddInf:"1. Opiate Test does not detect Methadone; 2. Consider testing for Methadone specifically."},
"Morphine":{Interpret:"<p style='color:red'>Unexpected: 1. Confirm Patient is taking drug as reported 2. Consider if last dosage was too low 3. Consider diversion.</p>",AddInf:"1. Consider misuse of Opiate or Semi-synthetic opioid drug; 2. Consider False positive: such as poppy seeds, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, or rifampin."},
"Oxycodone":{Interpret:"1. Scenario likely if patient taking an average or low dose 2. Scenario unlikely if patient has taken medication recently, or is taking a high dose;",AddInf:"1. Consider misuse of Opiate or Semi-synthetic opioid drug; 2. Consider False positive: such as poppy seeds, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, or rifampin."},
"Oxymorphone":{Interpret:"1. Scenario likely if patient taking an average or low dose 2. Scenario unlikely if patient has taken medication recently, or is taking a high dose;",AddInf:"1. Consider misuse of Opiate or Semi-synthetic opioid drug; 2. Consider False positive: naloxone, see list for opiates."},
};


var opiatesPositive={
"Buprenorphine":{Expected:"Probable that Patient is taking drug as reported.",Unexpected:"• Review medication list for potential false negatives (e.g. Prescription discontinued by other provider, ran out of meds, discontinued medication related to miscommunication, etc.).<br/>• Tell patient that this medication DID NOT show up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Speak to patient to determine if false negative is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link><br/>• Assess risk for possible diversion",AddInf:"Opiate Test is positive most likely because patient is taking codeine, however this may still be a false positive; Consider Specific testing for codeine if clinically indicated"},	
"Codeine":{Expected:"Probable that Patient is taking drug as reported.",Unexpected:"• Review medication list for potential false negatives (e.g. Prescription discontinued by other provider, ran out of meds, discontinued medication related to miscommunication, etc.).<br/>• Tell patient that this medication DID NOT show up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Speak to patient to determine if false negative is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link><br/>• Assess risk for possible diversion",AddInf:"Opiate Test is positive most likely because patient is taking codeine, however this may still be a false positive; Consider Specific testing for codeine if clinically indicated"},			
"Fentanyl":{Expected:"1. Opiates results are not influenced by Fentanyl 2. Consider another opiate substance to explain the positive result.",Unexpected:"",AddInf:"1. Opiate Test does not detect Fentanyl; 2. Consider testing for Fentanyl specifically."}
};

var opiatesNegative={
"Codeine":{Expected:"Probable that Patient is NOT taking drug as reported.",Unexpected:"• Review medication list for potential false negatives (e.g. Prescription discontinued by other provider, ran out of meds, discontinued medication related to miscommunication, etc.).<br/>• Tell patient that this medication DID NOT show up in their UDT.<br/>• Ask patient if they can provide any explanation for the result.<br/>• Speak to patient to determine if false negative is possible but unexplainable, consider confirmatory testing with Gas Chromatography or Mass Spectroscopy.<br/>• Check online Prescription Monitoring Program (PMP) <link><br/>• Assess risk for possible diversion",AddInf:"1. Consider False negative: Patient may have not actually taken the drug unknowingly, last dose may have been too low or distant to be detected<br/>2. Consider confirmatory testing if clinical indicated."},			
"Fentanyl":{Expected:"Opiates results are not influenced by Fentanyl",Unexpected:"",AddInf:"1. Opiate Test does not detect Fentanyl; 2. Consider testing for Fentanyl specifically."}
};


var span="<span>";
var endspan="</span>";

function prettyprint(contents)
{
    var message = "";
	var outerindex = contents.length;
	while (outerindex--) {
	   message = message + contents[outerindex] + ". ";
	}
	return message;
}

jQuery(document).ready( function($){


	var opiates = -1;
	var green = 'rgb(0, 176,80)';
	var red = 'rgb(255,0,0)';					
	var strMed = "";

	$(".drugTests").change(function () {
		//add content to change function
	});
	
	$(".drugTests").bind("mousedown", function(e) {
	  e.metaKey = true;
	  //$(".drugTests").change();
	});
	
	$(".drugTests").selectable({ filter: "li" });

    $("#reset3").on('click', function(){
			$("#results").addClass("hidden");	
			$("#opiatesDrugs").addClass("hidden");
			$("#opiates").prop('checked', false);
			drugName="";
		
			$('#selectable').find('span').removeClass('ui-selected');			
			$(".ui-selected").each( function() {	
					drugName=$(this).text();
					$("#"+drugName).find('.result-2').html("");
					$("#"+drugName).find('.result-2').html("");
					$("#"+drugName).find('.text-right').html("");
				});				
			$('#selectable').find('li').removeClass('ui-selected');		
			$('input:radio').prop('checked', false);
			$("#utd-calculator tbody tr").addClass("hidden");
			$('#druggrid').show('slow');
			//$('.overview').show('slow');	
			$('input[name="opiates"]').attr('disabled',false);
    });

	$("#interpret2").click(function(f) {
		allCheck=false;
		if($('input[name="opiates"]').is(":checked")){
            $("#utd-calculator tbody tr").each( function(){
				if( ($(this).find("input:radio")).is(':checked')){
					allCheck=true;
				}	
			});
			//if(!allCheck){
			//	alert("Please select the Patient Drug(s) preference"); 
			//	return;
			//}
		} else {
			alert("Please indicate the Opiate Test Result first");
			return;
		}	
		$(this).attr("value","clicked");
		$(this).attr('disabled','disabled');
		f.preventDefault();
		$("#utd-calculator").submit();
	});
	
	
	
	var risklist = {
     bup:  [{buptake:"pos", buptest:"pos", bupmsg:"Expected Patient prescribed Buprenorphine and UDT for Buprenorphine is positive "}, {buptake:"neg", buptest:"neg", bupmsg:"Expected Patient NOT prescribed Buprenorphine and UDT for Buprenorphine is negative"},{buptake:"pos", buptest:"neg", bupmsg:"Unexpected: Patient prescribed Buprenorphine, highly unlikely that UDT for Buprenorphine would be negative"} , {buptake:"neg", buptest:"pos", bupmsg:"Unexpected:  Patient NOT prescribed Buprenorphine, highly unlikely that UDT for Buprenorphine would be positive"}],
	 meth:  [{methtake:"pos", methtest:"pos", methmsg:"Expected Patient prescribed Methadone and UDT for Methadone is positive "}, {methtake:"neg", methtest:"neg", methmsg:"Expected Patient Not prescribed Methadone and UDT for Methadone is negative"},{methtake:"pos", methtest:"neg", methmsg:"Unexpected Patient prescribed Methadone, highly unlikely that UDT for Methadone would be negative "} , {methtake:"neg", methtest:"pos", methmsg:"Unexpected Patient NOT prescribed Methadone, highly unlikely that UDT for Methadone would be positive"}],
	 //***opiates -- all that make opiates definitely positive
	codeine: [{codeinetake:"pos", opiatetest:"pos", opiatemsg:"Expected Patient prescribed Codeine, highly likely that Opiate test would be positive"}, {codeinetake:"neg", opiatetest:"neg", opiatemsg:"Expected -ve/-ve"} ,{codeinetake:"pos", opiatetest:"neg", opiatemsg:"Unexpected Patient prescribed Codeine, highly unlikely that Opiate test would be negative"}, {codeinetake:"neg", opiatetest:"pos", opiatemsg:"Unexpected Patient NOT prescribed Codeine, highly unlikely that Opiate test would be positive"}],
	heroin: [{herointake:"pos", opiatetest:"pos", opiatemsg:"Expected Patient using heroin, highly likely that Opiate test would be positive"}, {herointake:"neg", opiatetest:"neg", opiatemsg:"Expected -ve/-ve"} ,{herointake:"pos", opiatetest:"neg", opiatemsg:"Unexpected  Patient using heroin, highly unlikely that Opiate test would be negative"},{herointake:"neg", opiatetest:"pos", opiatemsg:"Unexpected Patient NOT prescribed Heroin, highly unlikely that Opiate test would be positive"}],
	morphine: [{morphinetake:"pos", opiatetest:"pos", opiatemsg:"Expected Patient prescribed morphine, highly likely that Opiate test would be positive"}, {morphinetake:"neg", opiatetest:"neg", opiatemsg:"Expected -ve/-ve"} ,{morphinetake:"pos", opiatetest:"neg", opiatemsg:"Unexpected Patient prescribed morphine, highly unlikely that Opiate test would be negative"},{morphinetake:"neg", opiatetest:"pos", opiatemsg:"Unexpected Patient NOT prescribed Morphine, highly unlikely that Opiate test would be positive"}],
	
	//*** opiates -- all that can make possibly opiates +ve but not necessarily
	hydrocod: [ {hydrocodtake:"neg", opiatetest:"neg", opiatemsg:"Expected -ve/-ve"} ,{hydrocodtake:"pos", opiatetest:"pos", opiatemsg:"Possible High dose or recent Hyrocodone can give a positive Opiates Test "},{hydrocodtake:"neg", opiatetest:"pos", opiatemsg:"Unexpected Patient not prescribed Hydrocone highly unlikely Opiate test would be positive"},{hydrocodtake:"pos", opiatetest:"neg", opiatemsg:"Possible hydrocodone not detected by opiate test all the time"}],
	hydromor: [{hydromortake:"neg", opiatetest:"neg", opiatemsg:"Expected"} ,{hydromortake:"pos", opiatetest:"pos", opiatemsg:"Possible High dose or recent Hydromorphone can give a positive Opiates Test "},{hydromortake:"neg", opiatetest:"pos", opiatemsg:"Unexepected Patient not prescribed Hydromorphone highly unlikely Opiate test would be positive"},{hydromortake:"pos", opiatetest:"neg", opiatemsg:"Possible Patient prescribed Hydromorphone Opiate test may be negative"}],
	
	//*** mep and fenta
    mep: [{meptake:"pos", opiatetest:"pos", opiatemsg:"Unexpected", mepmsg:"Possible Cannot determine if patient is or is not taking Meperidine since this medication does not show up in an Opiates only screening test, Consider Specific Confirmatory testing"}, {meptake:"neg", opiatetest:"neg", mepmsg:"Possible Cannot determine if patient is or is not taking Meperidine since this medication does not show up in an Opiates only screening test, Consider Specific Confirmatory testing"} , {meptake:"pos", opiatetest:"neg", mepmsg:"Possible Cannot determine if patient is or is not taking Meperidine since this medication does not show up in an Opiates only screening test, Consider Specific Confirmatory testing"}, {meptake:"neg", opiatetest:"pos", opiatemsg:"Unexpected", mepmsg:"Possible cannot determine if patient is or is not taking Meperidine since this medication does not show up in an Opiates only screening test, Consider Specific Confirmatory testing"}],
	fent: [{fenttake:"pos", opiatetest:"pos", opiatemsg:"Unexpected", fentmsg:"Possible Cannot determine if patient is or is not taking Fentanyl since this medication does not show up in an Opiates only screening test, Consider Specific Confirmatory testing"}, {fenttake:"neg", opiatetest:"neg", fentmsg:"Possible Cannot determine if patient is or is not taking Fentanyl since this medication does not show up in an Opiates only screening test, Consider Specific Confirmatory testing"} , {fenttake:"pos", opiatetest:"neg", fentmsg:"Possible Cannot determine if patient is or is not taking Fentanyl since this medication does not show up in an Opiates only screening test, Consider Specific Confirmatory testing"}, {fenttake:"neg", opiatetest:"pos", opiatemsg:"Unexpected", fentmsg:"Possible Cannot determine if patient is or is not taking Fentanyl since this medication does not show up in an Opiates only screening test, Consider Specific Confirmatory testing"}],
	
	 //*** oxycod and oxymorph
	 oxycod: [{oxycodtake:"pos", opiatetest:"pos", opiatemsg:"Possible High dose or recent Oxycodone can give a positive Opiates Test "}, {oxycodtake:"neg", opiatetest:"neg", opiatemsg:"Expected Irrelevant if only factor"} , {oxycodtake:"pos", opiatetest:"neg", opiatemsg:"Possible:  Only High doses or recent Oxycodone may give a positive Opiates Test"}, {oxycodtake:"neg", opiatetest:"pos", opiatemsg:"Unexpected Patient NOT prescribed Oxycodone, highly unlikely that Opiate test would be positive"},{oxycodtake:"pos", oxytest:"pos", oxymsg:"Expected: Patient  prescribed Oxycodone, highly likely that Oxycodone test would be positive"}, {oxycodtake:"neg", oxytest:"neg", oxymsg:"Expected:Patient not prescribed Oxycodone, highly likely that Oxycodone test would be negative"}, {oxycodtake:"pos", oxytest:"neg", oxymsg:"Unexpected: Patient prescribed Oxycodone, highly unlikely that Oxycodone test would be negative"}, {oxycodtake:"neg", oxytest:"pos", oxymsg:"Unexpected: Patient NOT prescribed Oxycodone, highly unlikely that Oxycodone test would be positive"}],
	 
	 oxymorph: [{oxymorphtake:"pos", opiatetest:"pos", opiatemsg:"Unexpected Patient prescribed Oxymorphone, highly unlikely  Opiates Test would be positive "}, {oxymorphtake:"neg", opiatetest:"neg", opiatemsg:"Expected Patient prescribed Oxymorphone, highly unlikely  Opiates Test would be positive"} , {oxymorphtake:"pos", opiatetest:"neg", opiatemsg:"Expected Patient prescribed Oxymorphone, highly unlikely  Opiates Test would be positive"}, {oxymorphtake:"neg", opiatetest:"pos", opiatemsg:"Unexpected due to oxy only"},{oxymorphtake:"pos", oxytest:"pos", oxymsg:"Expected:Patient prescribed Oxymorphone, highly likely that Oxycodone test would be positive"}, {oxymorphtake:"neg", oxytest:"neg", oxymsg:"Expected Patient not prescribed Oxymorphone, highly likely that Oxycodone test would be negative"}, {oxymorphtake:"pos", oxytest:"neg", oxymsg:"Unexpected:Patient prescribed Oxymorphone, highly unlikely that Oxycodone test would be negative"}, {oxymorphtake:"neg", oxytest:"pos", oxymsg:"Unexpected: Patient not prescribed Oxymorphone, highly unlikely that Oxycodone test would be positive"}]
                   };

	var myselection = {methtake:"na", methtest:"na", buptake:"na", buptest: "na", opiatetest: "na", codeinetake: "na", morphinetake:"na", hydrocodtake:"na", hydromortake:"na",  oxycodtake:"na", oxymorphtake:"na", oxytest:"na", meptake:"na", fenttake:"na", herointake:"na"}; 		
	
	$("#run").click(function(f) {
	    //alert("satrt");
		contents = $('#selectable').find('.drug');
		//if(contents.length === 0) {
		//	alert("Please select the drug test(s) for interpretation first.");
		//	$('input[name="opiates"]').prop('checked', false);
		//	f.preventDefault();				
		//	return;
		//}	
	
		$("#results").removeClass("hidden");
		$("#results-drugs").removeClass("hidden");
		$("#opiatesDrugs").removeClass("hidden");
		contents.each( function() {
			drugName=$(this).attr('name');
			console.log($(this).text());   
				if ($(this).hasClass("ui-selected")) myselection[drugName] = "pos"; else myselection[drugName] = "neg";
		});
		
		//alert ( $('input:radio[name=opiates]:checked').val());
	
		if( $('input:radio[name=opiates]:checked').val() == 1 ){
            myselection["opiatetest"] = "pos";
		} else myselection["opiatetest"] = "neg";
				if(  $('input:radio[name=buptest]:checked').val() == 1 ){
            myselection["buptest"] = "pos";
		} else myselection["buptest"] = "neg";
				if(  $('input:radio[name=methtest]:checked').val() == 1 ){
            myselection["methtest"] = "pos";
		}else myselection["methtest"] = "neg";
				if(  $('input:radio[name=oxytest]:checked').val() == 1 ){
            myselection["oxytest"] = "pos";
		}else myselection["oxytest"] = "neg";
		
			console.log (JSON.stringify(myselection));
		
		
	var diagmsg = " ";
	var opiatemsg = " ";
	var ijk = 0;
	
	var buplist = ["bup", "meth"];
	var outerindex = buplist.length;
	var drugname;
	/*while (outerindex--) {
	    drugname = buplist[outerindex];
		ijk = risklist[drugname].length;
		while (ijk--) {
			//alert(JSON.stringify(risklist["bup"][ijk]));
		  if (risklist[drugname][ijk][drugname+"take"] == myselection[drugname+"take"] && risklist[drugname][ijk][drugname+"test"] == myselection[drugname+"test"]) {
			  diagmsg += drugname + " is " + risklist[drugname][ijk][drugname+"msg"] + "\n";
			  $("#"+drugname).removeClass("hidden");
			  $("#"+drugname).find('.result-2').html( risklist[drugname][ijk][drugname+"msg"] );
			  if ( risklist[drugname][ijk][drugname+"msg"].indexOf("Unexpected") > -1 ) { $("#"+drugname).find('.result-1').html("Unexpected");$("#"+drugname).css({ "color": 'red'})}
			  else { $("#"+drugname).find('.result-1').html("Expected");$("#"+drugname).css({ "color": 'green'})}
		   } 
		}
	}*/
	//definite list for opiates
	codlist = ["codeine", "morphine", "heroin"];
	var opiateresults = {Expected:[], Unexpected:[], Possible:[]};
	outerindex = codlist.length;
	
	while (outerindex--) {
	    drugname = codlist[outerindex];
		ijk = risklist[drugname].length;
		while (ijk--) {
			//alert(JSON.stringify(risklist["codeine"][ijk]));
		  if (risklist[drugname][ijk][drugname+"take"] == myselection[drugname+"take"] && risklist[drugname][ijk]["opiatetest"] == myselection["opiatetest"]) {
			   //opiatemsg += "\n " + drugname + " opiate is " + risklist[drugname][ijk]["opiatemsg"];
			   if ( risklist[drugname][ijk]["opiatemsg"].indexOf("Expected") > -1 ) {
			      opiateresults["Expected"].push(risklist[drugname][ijk]["opiatemsg"]);}
			   if ( risklist[drugname][ijk]["opiatemsg"].indexOf("Unexpected") > -1 ) {
			      opiateresults["Unexpected"].push(risklist[drugname][ijk]["opiatemsg"]);}
		   } 
		}
	
	}
	//for opiates
	possiblelist = ["hydrocod", "hydromor", "oxycod"];
	outerindex = possiblelist.length;
	while (outerindex--) {
	    drugname = possiblelist[outerindex];
		ijk = risklist[drugname].length;
		while (ijk--) {
			//alert(JSON.stringify(risklist["codeine"][ijk]));
		  if (risklist[drugname][ijk][drugname+"take"] == myselection[drugname+"take"] && risklist[drugname][ijk]["opiatetest"] == myselection["opiatetest"]) {
			   //opiatemsg += "\n " + drugname + " opiate is " + risklist[drugname][ijk]["opiatemsg"];
			   if ( risklist[drugname][ijk]["opiatemsg"].indexOf("Possible") > -1 ) {
			      opiateresults["Possible"].push(risklist[drugname][ijk]["opiatemsg"]);}
			   if ( risklist[drugname][ijk]["opiatemsg"].indexOf("Unexpected") > -1 ) {
			      opiateresults["Unexpected"].push(risklist[drugname][ijk]["opiatemsg"]);}
		   } 
		}
	
	}
	console.log ( "All opiates trigers" + JSON.stringify(opiateresults));
	
	
	//set up variuables for opiates
    var onehardopiate = false;
    var onesoftopiate = false;
	if (myselection["codeinetake"] == "pos" || myselection["morphinetake"] == "pos" ||  myselection["herointake"] == "pos") onehardopiate = true;
	if (myselection["codeinetake"] == "neg" && myselection["morphinetake"] == "neg" &&  myselection["herointake"] == "neg") onehardopiate = false;
	if (myselection["hydrocodtake"] == "pos" || myselection["hydromortake"] == "pos"  || myselection["oxycodtake"] == "pos" ) onesoftopiate = true;
	if (myselection["hydrocodtake"] == "neg" && myselection["hydromortake"] == "neg" && myselection["oxycodtake"] == "neg" ) onesoftopiate = false;
	
	$("#opiates").removeClass("hidden");	
	//if ( myselection["opiatetest"] == "pos" && ( myselection["codeinetake"] == "pos" || myselection["morphinetake"] == "pos" ) ) $("#opiates").find('.result-2').html( JSON.stringify(opiateresults["Expected"]));
	//else if ( myselection["opiatetest"] == "pos" && ( myselection["codeinetake"] == "neg" && myselection["morphinetake"] == "neg" ) && ( myselection["hydrocodtake"] == "pos" || myselection["hydromortake"] == "pos"  || myselection["oxycodtake"] == "pos" ) )      { $("#opiates").find('.result-2').html( JSON.stringify(opiateresults["Possible"]));}
	//else if ( myselection["opiatetest"] == "neg" && ( myselection["codeinetake"] == "pos" || myselection["morphinetake"] == "pos" ) ) {$("#opiates").find('.result-2').html( JSON.stringify(opiateresults["Unexpected"]));$("#opiates").css({ "color": 'red'})}
	//else if ( myselection["opiatetest"] == "neg" && ( myselection["codeinetake"] == "neg" && myselection["morphinetake"] == "neg" ) && ( myselection["hydrocodtake"] == "neg" && myselection["hydromortake"] == "neg" ) ) $("#opiates").find('.result-2').html( JSON.stringify(opiateresults["Expected"]) );
	//else if ( myselection["opiatetest"] == "neg" && ( myselection["codeinetake"] == "neg" && myselection["morphinetake"] == "neg" ) && ( myselection["hydrocodtake"] == "pos" || myselection["hydromortake"] == "pos"  || myselection["oxycodtake"] == "pos" ) )      { $("#opiates").find('.result-2').html( JSON.stringify(opiateresults["Possible"])  );}
	//else if ( myselection["opiatetest"] == "pos" && ( myselection["codeinetake"] == "neg" && myselection["morphinetake"] == "neg" ) && ( myselection["hydrocodtake"] == "pos" || myselection["hydromortake"] == "pos"  || myselection["oxycodtake"] == "pos" ) ) 
	//      {   $("#opiates").find('.result-2').html( JSON.stringify(opiateresults["Possible"]));}
	//else alert("doh");
	
	if ( myselection["opiatetest"] == "pos" && onehardopiate ) 
		{ $("#opiates").find('.result-1').html("Expected");
			$("#opiates").css({ "color": 'green'}); 
				$("#opiates").find('.result-2').html( prettyprint(opiateresults["Expected"]))}
	else if ( myselection["opiatetest"] == "pos" && ( !onehardopiate ) && ( onesoftopiate ) )      
		{ $("#opiates").find('.result-1').html("Possible");
			$("#opiates").css({ "color": 'blue'});
				$("#opiates").find('.result-2').html( prettyprint(opiateresults["Possible"]));}
	else if ( myselection["opiatetest"] == "neg" && ( onehardopiate ) ) 
		{$("#opiates").find('.result-1').html("Unexpected");
			$("#opiates").css({ "color": 'red'});
				//$("#opiates").find('.result-2').html( JSON.stringify(opiateresults["Unexpected"]));
				$("#opiates").find('.result-2').html( prettyprint(opiateresults["Unexpected"]) );
				}
	else if ( myselection["opiatetest"] == "neg" && ( !onehardopiate) && ( !onesoftopiate ) ) 
		{$("#opiates").find('.result-1').html("Expected");$("#opiates").css({ "color": 'green'});
			$("#opiates").find('.result-2').html( "No opiates detected by Opiates Test being used or prescribed") }
	else if ( myselection["opiatetest"] == "neg" && ( !onehardopiate ) && ( onesoftopiate ) )      { $("#opiates").find('.result-1').html("Possible");$("#opiates").css({ "color": 'blue'});$("#opiates").find('.result-2').html( prettyprint(opiateresults["Possible"])  );}
	else if ( myselection["opiatetest"] == "pos" && ( !onehardopiate) && ( !onesoftopiate ) ) 
		{$("#opiates").find('.result-1').html("Unexpected");
			$("#opiates").css({ "color": 'red'});
			$("#opiates").find('.result-2').html( "Patient not prescribed Codeine, Morphine, Oxycodone, Hydromorphone or Hydromorphone nor using Heroin, so highly unlikely UDT would be positive" )}
	else {};
	
	/*var fentlist = ["mep", "fent"];	outerindex = fentlist.length;
	
	while (outerindex--) {
	   drugname = fentlist[outerindex];
		ijk = risklist[drugname].length;
		while (ijk--) {
			//alert(JSON.stringify(risklist["meperidine"][ijk]));
		  if (risklist[drugname][ijk][drugname+"take"] == myselection[drugname+"take"] && risklist[drugname][ijk]["opiatetest"] == myselection["opiatetest"]) {
			   diagmsg += " \n " + drugname +" is " + risklist[drugname][ijk][drugname+"msg"];
			   $("#"+drugname).removeClass("hidden");
			  $("#"+drugname).find('.result-2').html( risklist[drugname][ijk][drugname+"msg"] );
			  if ( risklist[drugname][ijk][drugname+"msg"].indexOf("Possible") > -1 ) { $("#"+drugname).find('.result-1').html("Possible");$("#"+drugname).css({ "color": 'blue'})}
			  else { $("#"+drugname).find('.result-1').html("Expected");$("#"+drugname).css({ "color": 'green'})}
		   } 
		}
	}	*/
	
	var oxylist = ["oxycod", "oxymorph"];	outerindex = oxylist.length;
	var oxyresults = {Expected:[], Unexpected:[]};
	while (outerindex--) {
	   drugname = oxylist[outerindex];
	   ijk = risklist[drugname].length;
		while (ijk--) {
			//alert(JSON.stringify(risklist["meperidine"][ijk]));
		  //if (risklist[drugname][ijk][drugname+"take"] == myselection[drugname+"take"] && risklist[drugname][ijk]["opiatetest"] == myselection["opiatetest"]) {
			//   opiatemsg += "\n " + drugname +" opiate is " + risklist[drugname][ijk]["opiatemsg"];
		  // } 
		   if (risklist[drugname][ijk][drugname+"take"] == myselection[drugname+"take"] && risklist[drugname][ijk]["oxytest"] == myselection["oxytest"]) {
			   //diagmsg += " \n " + drugname + " test result is " + risklist[drugname][ijk]["oxymsg"];
			   if ( risklist[drugname][ijk]["oxymsg"].indexOf("Expected") > -1 ) {
			      oxyresults["Expected"].push(risklist[drugname][ijk]["oxymsg"]);}
			   if ( risklist[drugname][ijk]["oxymsg"].indexOf("Unexpected") > -1 ) {
			      oxyresults["Unexpected"].push(risklist[drugname][ijk]["oxymsg"]);}
		   } 
		}
	}
	//if (  oxyresults["Unexpected"].length > 0 ) alert ( JSON.stringify(oxyresults["Unexpected"]));
	//else alert ( JSON.stringify(oxyresults["Expected"]));
	
	//if ( myselection["oxytest"] == "pos" && ( myselection["oxycodtake"] == "pos" || myselection["oxymorphtake"] == "pos" ) ) console.log ( JSON.stringify(oxyresults["Expected"]));
	//else if ( myselection["oxytest"] == "neg" && ( myselection["oxycodtake"] == "pos" || myselection["oxymorphtake"] == "pos" ) ) console.log ( JSON.stringify(oxyresults["Unexpected"]));
	//else if ( myselection["oxytest"] == "neg" && ( myselection["oxycodtake"] == "neg" && myselection["oxymorphtake"] == "neg" ) ) console.log ( JSON.stringify(oxyresults["Expected"]));
	
	console.log(diagmsg);
		
	$("#Oxycodone").removeClass("hidden");	
	if ( myselection["oxytest"] == "pos" && ( myselection["oxycodtake"] == "pos" || myselection["oxymorphtake"] == "pos" ) ) 
		{$("#Oxycodone").find('.result-1').html("Expected");; $("#Oxycodone").find('.result-2').html( prettyprint(oxyresults["Expected"])); $("#Oxycodone").css({ "color": 'green'})}
	else if ( myselection["oxytest"] == "neg" && ( myselection["oxycodtake"] == "pos" || myselection["oxymorphtake"] == "pos" ) ) 
		{$("#Oxycodone").find('.result-1').html("Unexpected");$("#Oxycodone").find('.result-2').html( prettyprint(oxyresults["Unexpected"]));$("#Oxycodone").css({ "color": 'red'})}
	else if ( myselection["oxytest"] == "neg" && ( myselection["oxycodtake"] == "neg" && myselection["oxymorphtake"] == "neg" ) ) 
		{$("#Oxycodone").find('.result-1').html("Expected");$("#Oxycodone").find('.result-2').html ( prettyprint(oxyresults["Expected"]));$("#Oxycodone").css({ "color": 'green'})}
	else if ( myselection["oxytest"] == "pos" && ( myselection["oxycodtake"] == "neg" && myselection["oxymorphtake"] == "neg" ) ) 
		{$("#Oxycodone").find('.result-1').html("Unexpected");$("#Oxycodone").find('.result-2').html ( prettyprint(oxyresults["Unexpected"]));$("#Oxycodone").css({ "color": 'red'})}
		
		
	
	var druglist = ["heroin", "codeine", "hydrocod", "hydromor"];	outerindex = druglist.length;
	
	while (outerindex--) {
	   drugname = druglist[outerindex];
		ijk = risklist[drugname].length;
		if (myselection[drugname+"take"] == "pos")
		{ 
		//$("#"+drugname).removeClass("hidden");	
			while (ijk--) {
				//alert(JSON.stringify(risklist["meperidine"][ijk]));
			  if (risklist[drugname][ijk][drugname+"take"] == myselection[drugname+"take"] && risklist[drugname][ijk]["opiatetest"] == myselection["opiatetest"]) {
				   diagmsg += " \n " + drugname +" is " + risklist[drugname][ijk]["opiatemsg"];
				   $("#"+drugname).removeClass("hidden");
				  $("#"+drugname).find('.result-2').html( risklist[drugname][ijk]["opiatemsg"] );
				  if ( risklist[drugname][ijk]["opiatemsg"].indexOf("Possible") > -1 ) { $("#"+drugname).find('.result-1').html("Possible");$("#"+drugname).css({ "color": 'blue'})}
				  else if ( risklist[drugname][ijk]["opiatemsg"].indexOf("Unexpected") > -1 ) { $("#"+drugname).find('.result-1').html("Unexpected");$("#"+drugname).css({ "color": 'red'})}
				  else if ( risklist[drugname][ijk]["opiatemsg"].indexOf("Expected") > -1 ) { $("#"+drugname).find('.result-1').html("Expected");$("#"+drugname).css({ "color": 'green'})}
			   } 
			}
		}
	}		
	
	druglist = ["oxymorph", "oxycod"];	outerindex = druglist.length;
	var opiatediag;
	var oxydiag;
	
	while (outerindex--) {
	   drugname = druglist[outerindex];
		ijk = risklist[drugname].length;
		if (myselection[drugname+"take"] == "pos")
		{ 
		//$("#"+drugname).removeClass("hidden");	
			while (ijk--) {
				//alert(JSON.stringify(risklist["meperidine"][ijk]));
			  if (risklist[drugname][ijk][drugname+"take"] == myselection[drugname+"take"] && risklist[drugname][ijk]["opiatetest"] == myselection["opiatetest"]) {
				opiatediag = risklist[drugname][ijk]["opiatemsg"] ;
				console.log("opiate message for oxy is  " + diagmsg);
			  }
			   if (risklist[drugname][ijk][drugname+"take"] == myselection[drugname+"take"] && risklist[drugname][ijk]["oxytest"] == myselection["oxytest"]) {
				   //diagmsg += " \n " + drugname +" is " + risklist[drugname][ijk]["opiatemsg"];
				   $("#"+drugname).removeClass("hidden");
				   console.log("oxy message1 for oxy is  " + risklist[drugname][ijk]["oxymsg"]);
				    oxydiag = risklist[drugname][ijk]["oxymsg"];
				  
				  // ( risklist[drugname][ijk]["opiatemsg"].indexOf("Possible") > -1 ) { $("#"+drugname).find('.result-1').html("Possible");$("#"+drugname).css({ "color": 'blue'})}
				  //else if ( risklist[drugname][ijk]["opiatemsg"].indexOf("Unexpected") > -1 ) { $("#"+drugname).find('.result-1').html("Unexpected");$("#"+drugname).css({ "color": 'red'})}
				  //else if ( risklist[drugname][ijk]["opiatemsg"].indexOf("Expected") > -1 ) { $("#"+drugname).find('.result-1').html("Expected");$("#"+drugname).css({ "color": 'green'})}
				  if ( risklist[drugname][ijk]["oxymsg"].indexOf("Possible") > -1 ) { $("#"+drugname).find('.result-1').html("Possible");$("#"+drugname).css({ "color": 'blue'})}
				  else if ( risklist[drugname][ijk]["oxymsg"].indexOf("Unexpected") > -1 ) { $("#"+drugname).find('.result-1').html("Unexpected");$("#"+drugname).css({ "color": 'red'})}
				  else if ( risklist[drugname][ijk]["oxymsg"].indexOf("Expected") > -1 ) { $("#"+drugname).find('.result-1').html("Expected");$("#"+drugname).css({ "color": 'green'})}
			   } 
			}
		}
		$("#"+drugname).find('.result-2').html(  oxydiag + ". " + opiatediag );
	}		
	
	
	druglist = ["bup", "fent", "mep", "meth"];	outerindex = druglist.length;
	
	while (outerindex--) {
	   drugname = druglist[outerindex];
		
		if (myselection[drugname+"take"] == "pos")
		{ 

		   $("#"+drugname).removeClass("hidden");
		  $("#"+drugname).find('.result-2').html( 'Is not detectable using a Screening UDT which often includes tests for "Opiates" or "Oxycodone"' );
		  $("#"+drugname).find('.result-1').html("If confirmation is needed, order a specific confirmatory test for this specific drug.");$("#"+drugname).css({ "color": 'orange'})
	 
		}
	}		
	//if (myselection["herointake"] == "pos")
	//{
	//	$("#Heroin").removeClass("hidden");	
	//}
		
		
	//$("#Confirmatory").removeClass("hidden");	
	//if ( myselection["oxytest"] == "pos" &&  myselection["oxycodtake"] == "pos") $("#Methadone").find('.result-2').html( JSON.stringify(methresults["Expected"]));
	//else if ( myselection["oxytest"] == "pos" &&  myselection["oxycodtake"] == "neg") $("#Methadone").find('.result-2').html( JSON.stringify(methresults["Unexpected"]));
	//else if ( myselection["oxytest"] == "neg" &&  myselection["oxycodtake"] == "pos") $("#Methadone").find('.result-2').html( JSON.stringify(methresults["Unexpected"]));
	//else if ( myselection["oxytest"] == "neg" &&  myselection["oxycodtake"] == "neg") $("#Methadone").find('.result-2').html( JSON.stringify(methresults["Expected"]));
	//$("#Oxycodone").find('.result-2').html(JSON.stringify(oxyresults["Expected"]));
	//alert("done");	
		
				//$(".ui-selected").each( function() {	
				//	drugName=$(this).text();
				//	$("#"+drugName).removeClass("hidden");
				//	if(opiates) {
				//		$("#"+drugName).find('.result-2').html(opiatesPositive[drugName].Expected);
				//		$("#"+drugName).find('.result-2').html(opiatesPositive[drugName].Unexpected);
				//		$("#"+drugName).find('.text-right').html(opiatesPositive[drugName].AddInf);			
				//	
				//	} else {
				//		$("#"+drugName).find('.result-2').html(opiatesNegative[drugName].Expected);
				//		$("#"+drugName).find('.result-2').html(opiatesNegative[drugName].Unexpected);
				//		$("#"+drugName).find('.text-right').html(opiatesPositive[drugName].AddInf);
					
				//	}			
				//});
		//$('#druggrid').hide('slow');
		//$('.overview').hide('slow');			
        
		
		//$('input[name="opiates"]').prop('disabled',true);
		f.preventDefault();				

	});

	
});



