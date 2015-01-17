jQuery(function($){ 
	var cardHeight = 0;

    function _setCardHeight(){

        $(".subpage-box").each( function(){ var current_height = 
        $(this).height();

            cardHeight = ( current_height > cardHeight) ? current_height : 
            cardHeight;

        }); $(".subpage-box").each( function(){ if( $(this).height() < 
        cardHeight ){ $(this).height( cardHeight );   } });

        
    }
    
    function _setNavStyle(){
        $("menu-main-menu > li > a").each( function(){
            var text = $(this).html();
            
            if( $(this).contains("for") ){
               
            }
        });
    }
    
    _setNavStyle();
    //_setCardHeight();
});
/*
$('#accordion .action-button').hover(
    function() {
        $(this).addClass('ui-state-hover');
    },
    function() {
        $(this).removeClass('ui-state-hover');
    }
);

$('#accordion .action-button a').click(function () {
    self.location.href = $(this).attr("href");
});

var drug={
"Amphetamine":{AddInf:"Possible False Positives include bupropion; chlorpromazine; mexilitine; pseuodoephedrine; nasal decongestants; ranitadine, SSRI's; trazadone",Range:"- 1 to 2 days<br/>- Urine may test positive within 3 hours"},
"Barbiturates":{AddInf:"Possible False Positives include ibuprofen; naproxyn; phenytoin",Range:"- 2 to 20 days  depending on specific agent; Chronic use may result in longer detection times."},
"Benzodiazepines":{AddInf:"Possible False Positives include sertraline, oxaprozin",Range:"- 1 to 14 days  depending on specific agent; Chonic use may result in longer detection times."},
"Buprenorphine":{AddInf:"Possible False Positives include tramadol; other opioids including (Codeine, Heroin, Morphine)",Range:"- 1 to 6 days"},
"Cannabis":{AddInf:"Possible false positives include dronabinol, NSAIDS, PPIs",Range:"- 2 to 7 days or more<br/>- Up to one month after heavy chronic use."},
"Cocaine":{AddInf:"Possible false positives include local anesthetics (e.g. lidocaine)",Range:"- Usually positive up to 48 to 72 hours; Chronic use may result in longer detection times."},
"Codeine":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:"- 2 to 4 days"},
"Fentanyl":{AddInf:"False positives are highly unlikely",Range:"- 24 Hours"},
"Heroin":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:"- 2 to 3 days after use. Chronic use may result in longer detection times."},
"Hydrocodone":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:"- 24 hours"},
"Hydromorphone":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:"- 1 to 2 days"},
"Meperidine":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine;quitiapine; thioridazine; tramadol; verapamil;",Range:"- 2 to 3 days"},
"Methadone":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Range:"- 1 to 3 days; Chronic use may result in longer detection times."},
"Morphine":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Range:"- 1 to 3 days; Chronic use may result in longer detection times."},
"Oxycodone":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:"- 1 to 4 days"},
"Oxymorphone":{AddInf:"Possible false positives include naloxone, see list for opiates",Range:"- 24 hours"},
"PCP":{AddInf:"Possible false positives include dextromethorophan; dipnehydramine; ibuprofen; tramadol; venlafaxine",Range:"- 1 to 3 days"}
};

var drugWOpiates={
"Buprenorphine":{Interpret:"<p style='color:red'>Unexpected: 1. Opiates results are not influenced by Buprenorphine 2. Consider another opiate substance to explain the positive result.</p>",AddInf:"1. Opiate Test does not detect Buprenorphine; 2. Consider testing for Buprenorphine specifically."},
"Codeine":{Interpret:"<p style='color:blue'>Expected: Probable that Patient is taking drug as reported.</p>",AddInf:"Opiate Test is positive most likely because patient is taking codeine, however this may still be a false positive; Consider Specific testing for codeine if clinically indicated"},
"Fentanyl":{Interpret:"<p style='color:red'>Unexpected: 1. Opiates results are not influenced by Fentanyl 2. Consider another opiate substance to explain the positive result.</p>",AddInf:"1. Opiate Test does not detect Fentanyl; 2. Consider testing for Fentanyl specifically."},
"Heroin":{Interpret:"<p style='color:blue'>Expected: Probable that Patient is taking drug as reported.",AddInf:"Opiate Test is positive most likely because patient is taking Heroin, however this may still be a false positive; Consider Specific testing for heroin if clinically indicated"},
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
"Heroin":{Interpret:"<p style='color:red'>Unexpected: 1. Confirm Patient is taking drug as reported 2. Consider if last dosage was too low.</p>",AddInf:"1. Consider misuse of Opiate or Semi-synthetic opioid drug; 2. Consider False positive: such as poppy seeds, dextromethorophan; dipnehydramine; fluoroquinolones; quinine, or rifampin."},
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
"Heroin":{AddInf:"1. Consider False negative: Patient may have not actually taken the drug unknowingly, last dose may have been too low or distant to be detected<br/>2. Consider confirmatory testing if clinical indicated."},
"Morphine":{AddInf:"1. Consider False negative: Patient may have not actually taken the drug unknowingly, last dose may have been too low or distant to be detected<br/>2. Consider confirmatory testing if clinical indicated."},
};

var span="<span>";
var endspan="</span>";

$(document).ready( function(){

    $('#accordion').accordion({
      collapsible: true,
	  heightStyle: "content",
	  active: false
	});

	//if (typeof jQuery != 'undefined') {  
    // jQuery is loaded => print the version
    //alert($.ui.version);
	//}
	

	var green = 'rgb(0, 176,80)';
	var red = 'rgb(255,0,0)';					
	var strMed = "";

    // Form fn
    $('#utd-calculator2a').on("submit", function(e){

       //if( $(".column-1 input:checkbox:checked") ){
            
		var sRecommendMain="<span >Order tests for <b>";
		var sRecommendOpiates=" </b> and/or <b> Opiates";

		var endSpan = '</B></span>';
		var strInterpretationWOpiates = "";
		var strAddInfoWOpiates = "";
		var strInterpretation = "";
		var strAddInfo = "";

		var val= $("#recommend").attr("value");
		if($("#recommend").attr("value")=="clicked")
		{
			//build the table
			  $("#utd-calculator2a tr").each( function(){	

				if( $(this).find("input:checkbox:checked") ){
                    var drugName = $(this).find('.column-1').text();
                    var taking = $(this).find('.column-2 input').prop('checked');              

					strMed = sRecommendMain+drugName+endSpan;

					if(taking){
						$(this).find('.result-3').html(strMed);
						$(this).find('.result-2').html(span+drug[drugName].AddInf+endspan);
						$(this).find('.text-right').html(span+drug[drugName].Range+endspan);						
					}
				}
			});
		}
	   e.preventDefault();
    });


    $('#utd-calculator2b').on("submit", function(e){
	
		if($("#interpret").attr("value")=="clicked")
		{
			//build the table
            $("#utd-calculator2b tbody tr").each( function(){	

				  $(this).find('.result-1').removeClass("hidden");
				  $(this).find('.result-2').removeClass("hidden");
				  $(this).find('.text-right').removeClass("hidden");				  

				if(($(this).find("input:radio")).is(':checked')){
                    var drugName = $(this).find('.column-1').text();
                    var taking =$('input[name="'+drugName+'"]:checked').val(); 
					if( (drugName!=null || drugName !="") && taking>=0 ) {				
						$(this).find('.result-2').html(span+drug[drugName].AddInf+endspan);
						$(this).find('.text-right').html(span+drug[drugName].Range+endspan);
						if (taking==1)
						{
							$(this).find('.result-1').html(span+"<p style='color:blue'>"+"Expected</p>"+endspan);	
						} else {
							$(this).find('.result-1').html(span+"<p style='color:red'>"+"Unexpected : Consider misuse or false positives.</p>"+endspan);	
						}
					}
                } else {
					$(this).addClass("hidden");
				}
            });
		}

		   e.preventDefault();
    });




    $('#utd-calculator2c').on("submit", function(e){
        var opiates = "";
		var opioids = "";
		var semisynth = "";

        if( $('input[name="opiates"]').is(":checked") ){
            opiates = $('input[name="opiates"]:checked').val();
		}

		if ( $('input[name="Codeine"]:checked').val() == 1 || $('input[name="Heroin"]:checked').val() == 1 ||  $('input[name="Morphine"]:checked').val() == 1) 
		{
			opoids = true;
		} else {
			opoids = false;
		}

		if ( $('input[name="Hydrocodone"]:checked').val() == 1 || $('input[name="Hydromorphone"]:checked').val() == 1 || $('input[name="Oxycodone"]:checked').val() == 1  ||  $('input[name="Oxymorphone"]:checked').val() == 1) 
		{
			semisynth = true;
		} else {
			semisynth = false;
		}

		if($("#interpret2").attr("value")=="clicked")
		{
			//build the table
            $("#utd-calculator2c tbody tr").each( function(){	
				  $(this).find('.result-1').html("");
				  $(this).find('.result-2').html("");
				  $(this).find('.text-right').html("");

				//for rule definition
				if( ($(this).find("input:radio")).is(':checked')){
                    var drugName = $(this).find('.column-1').text();
                    var taking = $(this).find('.column-2 input').prop('checked');
					
					if( (!(typeof drugName === "undefined")|| drugName !="") && taking>=0 ) {		
						if (opiates==1){
							if (  $('input[name="'+drugName+'"]:checked').val() == 1) {

								$(this).find('.result-1').html(span+drugWOpiates[drugName].Interpret+endspan);
								$(this).find('.result-2').html(span+drugWOpiates[drugName].AddInf+endspan);
								$(this).find('.text-right').html(span+drug[drugName].Range+endspan);
							} else { // the person reports not taking the drug
								if(drugName=='Codeine'||drugName=='Heroin'||drugName=='Morphine'){
									$(this).find('.result-1').html(span+"<p style='color:red'>Unexpected: Consider another Opiate or Semi-Synthetic Opioid substance to explain the positive result.</p>"+endspan);	
									$(this).find('.result-2').html(span+drugWOpiatesAlt[drugName].AddInf+endspan);
									$(this).find('.text-right').html(span+drug[drugName].Range+endspan);									
								} else if (drugName=='Hydrocodone'||drugName=='Hydromorphone'||drugName=='Oxycodone'||drugName=='Oxymorphone'){
									$(this).find('.result-2').html(span+drugWOpiates[drugName].AddInf+endspan);
									$(this).find('.text-right').html(span+drug[drugName].Range+endspan);													
								} else { // for Buprenorphine, Fentanyl , Meperidine, Meperidine
									$(this).find('.result-2').html(span+drugWOpiates[drugName].AddInf+endspan);
									$(this).find('.text-right').html(span+drug[drugName].Range+endspan);
								}							
							}
						} else {  // for negative Opiate result
							if (  $('input[name="'+drugName+'"]:checked').val() == 1) {
								if(drugName=='Codeine'||drugName=='Heroin'||drugName=='Morphine'){
									$(this).find('.result-2').html(span+drugWOOpiates[drugName].AddInf+endspan);															
								} else if (drugName=='Hydrocodone'||drugName=='Hydromorphone'||drugName=='Oxycodone'||drugName=='Oxymorphone'){
									$(this).find('.result-2').html(span+drugWOpiatesAlt[drugName].AddInf+endspan);															
								} else { // for Buprenorphine, Fentanyl , Meperidine, Meperidine
									$(this).find('.result-2').html(span+drugWOpiatesAlt[drugName].AddInf+endspan);																					
								}
								$(this).find('.result-1').html(span+drugWOpiatesAlt[drugName].Interpret+endspan);
								$(this).find('.text-right').html(span+drug[drugName].Range+endspan);	
							} else { // the person reports not taking the drug							
								$(this).find('.result-2').html(span+drugWOpiatesAlt[drugName].AddInf+endspan);
								$(this).find('.text-right').html(span+drug[drugName].Range+endspan);							
							}
						}						
					}
                } else {
					$(this).addClass("hidden");
				}
            });
				//for message formation
		}
		   e.preventDefault();
    });



    $("#reset").on('click', function(){

		if($("#recommend").attr("value")=="clicked")
		{
			$("#recommend").attr("value","");

			  $("#utd-calculator2a tr").each( function(){	
				$(this).find('.result-3').html("");
				$(this).find('.result-2').html("");
				$(this).find('.text-right').html("");			
			  });
		}
		$("#recommend").removeAttr("disabled");
    });		

    $("#reset2").on('click', function(){
		if($("#interpret").attr("value")=="clicked")
		{
			$("#interpret").attr("value","");
			  $("#utd-calculator2b tr").each( function(){	
				  $(this).find('.result-1').html("");
				  $(this).find('.result-2').html("");
				  $(this).find('.text-right').html("");
				  $(this).removeClass("hidden");
			  });
		}
		$("#interpret").removeAttr("disabled");
    });

    $("#reset3").on('click', function(){
		if($("#interpret2").attr("value")=="clicked")
		{
			$("#interpret2").attr("value","");
			  $("#utd-calculator2c tr").each( function(){	
				  $(this).find('.result-1').html("");
				  $(this).find('.result-2').html("");
				  $(this).find('.text-right').html("");
				  $(this).removeClass("hidden");				  
			  });
		}
		$("#interpret2").removeAttr("disabled");
		$("#opiatesDrugs").addClass("hidden");
		$("#opiates").prop('checked', false);
    });

	$("#recommend").click(function(g) {
		$(this).attr("value","clicked");
		$(this).attr('disabled','disabled');
		g.preventDefault();
		$("#utd-calculator2a").submit();
	});

	$("#interpret").click(function(f) {
		$(this).attr("value","clicked");
		$(this).attr('disabled','disabled');
		f.preventDefault();
		$("#utd-calculator2b").submit();
	});


	$("#interpret2").click(function(f) {
		$(this).attr("value","clicked");
		$(this).attr('disabled','disabled');
		f.preventDefault();
		$("#utd-calculator2c").submit();
	});

	$('input[name="opiates"]').click(function(f) {
		if (!($("#interpret2").attr("value")=="clicked")){
			$("#opiatesDrugs").removeClass("hidden");
			f.preventDefault();
			$("#utd-calculator2c").submit();
			}
	});

	$('#dst-2-1').click(function(f) {
		if( $(this).is(':checked') ) 
			$(".dst2-1").prop('checked', true);
		else
			$(".dst2-1").prop('checked', false);
	});
	
	$('#dst-2-2').click(function(f) {
		if( $(this).is(':checked') ) 
			$(".dst2-0").prop('checked', true);
		else
			$(".dst2-0").prop('checked', false);
	});
	
	$('#dst-2-3').click(function(f) {

	});
	
	$('#dst-2-4').click(function(f) {

	});

	$('#dst-3-1').click(function(f) {
		if( $(this).is(':checked') ) 
			$(".dst3-1").prop('checked', true);
		else
			$(".dst3-1").prop('checked', false);
	});
	
	$('#dst-3-2').click(function(f) {
		if( $(this).is(':checked') ) 
			$(".dst3-0").prop('checked', true);
		else
			$(".dst3-0").prop('checked', false);
	});
	
});


*/
