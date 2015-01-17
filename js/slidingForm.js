jQuery(document).ready( function($){
var span="<span>";
var endspan="</span>";
	$(".drugTests").change(function () {
		//add content to change function
	});
	
	$(".drugTests").bind("mousedown", function(e) {
	  e.metaKey = true;
	  //$(".drugTests").change();
	});
	
	$(".drugTests").selectable({ filter: "li" });
	
	
	$("#selectedDrugs").click(function(f) {
	contents = $('#selectable').find('.ui-selected');
		if(contents.length === 0) {
			alert("Please select the drug test(s) for interpretation first.");
			f.preventDefault();				
			return;
		}
	
		$(this).attr("value","clicked");
		$(this).attr('disabled','disabled');
		$("#results").removeClass("hidden");		

		//$(".drugTests").selectable({
			//selected: function(event, ui) { 
				$(".ui-selected").each( function() {	
					drugName=$(this).text();
					$("#"+drugName).removeClass("hidden");
				});
		$('#druggrid').hide('slow');
		//$('.overview').hide('slow');			
		f.preventDefault();		
	});

	/*$("#interpretResults").click(function(f) {
		$(this).attr("value","clicked");
		$(this).attr('disabled','disabled');		

		$(".ui-selected").each( function() {	
			drugName=$(this).text();
			$("#"+drugName).removeClass("hidden");
		});

		$("#utd-calculator").submit();	
	});*/

	
	    $("#reset").on('click', function(){
			if($("#selectedDrugs").attr("value")=="clicked")
			{
				$("#selectedDrugs").attr("value","");
				$("#results").addClass("hidden");	
				drugName="";
			}
			$("#selectedDrugs").removeAttr("disabled");
			$('#selectable').find('span').removeClass('ui-selected');			
			$(".ui-selected").each( function() {	
					drugName=$(this).text();
					$("#"+drugName).find('.result-1').html("");
					$("#"+drugName).find('.result-2').html("");
					$("#"+drugName).find('.text-right').html("");
				});				
			$('#selectable').find('li').removeClass('ui-selected');		
			$('input:radio').prop('checked', false);
			$("#utd-calculator tbody tr").addClass("hidden");
			$('#druggrid').show('slow');
			//$('.overview').show('slow');			
		});
	
	
	$("input:radio").change(function (){
		test=take=-1;
		drugName= $(this).parents("tr").attr('id');
		test= $('input[name="'+drugName+'_test"]:checked').val();
		take= $('input[name="'+drugName+'_take"]:checked').val();

		if(typeof take === "undefined"){
			$(this).parents("td").find('.take').effect("highlight", {color:"pink"}, 3000);			
			return;
		}
		if(typeof test === "undefined"){
			$(this).parents("td").find('.test').effect("highlight", {color:"pink"}, 3000);	
			return;
		}
		tr=$(this).parents("tr");
		result1=$(this).parents("tr").find('.result-1');
		if(test>=0 && take >=0){
			tr.find('.result-2').html(span+drug[drugName].AddInf+endspan);
			tr.find('.text-right').html(span+drug[drugName].Range+endspan);
			if (test==2 && take==2)
			{
				result1.html(span+"<p style='color:blue;'>"+"Expected</p>"+endspan);	
				result1.css("style='background:lightblue;'");
			} else if (test==2 && take==1){
				result1.html(span+"<p style='color:red;'>"+"Unexpected, Consider False Positive, Misuse, Inadvertent administration.</p>"+endspan);	
				result1.css("style='background:lightpink;'");
			} else if (test==1 && take==2){
				result1.html(span+"<p style='color:red;'>"+"Unexpected, consider diversion, consider False negative due to low or remote dose, etc.</p>"+endspan);	
				result1.css("style='background:lightpink;'");
			} else if (test==1 && take==1){
				result1.html(span+"<p style='color:blue;'>"+"Expected</p>"+endspan);	
				result1.css("style='background:lightblue;'");				
			} else if ((test==0 && take==2) || (test==2 && take==0)) {
				result1.html(span+"<p style='color:orange;'>"+"Review if administration is appropriate and/or sanctioned.</p>"+endspan);	
				result1.css("style='background:lightorange;'");					
			} else {
				result1.html(span+"<p style='color:brown;'>"+"If use (sanctioned or unsanctioned) is strongly suspected, consider repeat and/or confirmatory testing.</p>"+endspan);	
				result1.css("style='background:lightyellow;'");					
				
			} 		
		}
	});
});

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
"Meperidine":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine; chlorpromazine;quitiapine; thioridazine; tramadol; verapamil;",Range:"2 to 3 days"},
"Methadone":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine; chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Range:"1 to 3 days; Chronic use may result in longer detection times."},
"Morphine":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine; chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Range:"1 to 3 days; Chronic use may result in longer detection times."},
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


var drugWOOpiates={
"Codeine":{AddInf:"1. Consider False negative: Patient may have not actually taken the drug unknowingly, last dose may have been too low or distant to be detected<br/>2. Consider confirmatory testing if clinical indicated."},			
"Heroin-MAM6":{AddInf:"1. Consider False negative: Patient may have not actually taken the drug unknowingly, last dose may have been too low or distant to be detected<br/>2. Consider confirmatory testing if clinical indicated."},
"Morphine":{AddInf:"1. Consider False negative: Patient may have not actually taken the drug unknowingly, last dose may have been too low or distant to be detected<br/>2. Consider confirmatory testing if clinical indicated."},
};

var span="<span>";
var endspan="</span>";