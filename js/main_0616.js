$(function(){ var cardHeight = 0;

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
    _setCardHeight();
    
});

  $(function() {
  	  var $check = $(".tristate"), el;
$check
   .data('checked',0)
   .click(function(e) {
       
        el = $(this);
                
        switch(el.data('checked')) {
            
            // unchecked, going indeterminate
            case 0:
                el.data('checked',1);
                el.prop('indeterminate',true);
                break;
            
            // indeterminate, going checked
            case 1:
                el.data('checked',2);
                el.prop('indeterminate',false);
                el.prop('checked',true);                
                break;
            
            // checked, going unchecked
            default:  
                el.data('checked',0);
                el.prop('indeterminate',false);
                el.prop('checked',false);
                
        }
        
    });
    });

var drug={
"Amphetamine":{AddInf:"Possible False Positives include buprpprion; chlorpromazine; mexilitine; pseuodoephedrine; nasal decongestants; ranitadine, SSRI's; trazadone",Range:"- 1 to 2 days<br/>- Urine may test positive within 3 hours"},
"Barbiturates":{AddInf:"Possible False Positives include ibuprofen; naproxyn; phenytoin",Range:"- 2 to 20 days  depending on specific agent; Chronic use may result in longer detection times."},
"Benzodiazepines":{AddInf:"Possible False Positives include sertraline, oxaprozin",Range:" - 1 to 14 days  depending on specific agent; Chonic use may result in longer detection times."},
"Buprenorphine":{AddInf:"Possible False Positives include tramadol; other opioids including (Codeine, Heroin, Morphine)",Range:" - 1 to 6 days"},
"Cannabis":{AddInf:"Possible false positives include dronabinol, NSAIDS, PPIs",Range:" - 2 to 7 days or more<br/>- Up to one month after heavy chronic use."},
"Cocaine":{AddInf:"Possible false positives include local anesthetics (e.g. lidocaine)",Range:"- Usually positive up to 48 to 72 hours; Chronic use may result in longer detection times."},
"Codeine":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:" 2 to 4 days"},
"Fentanyl":{AddInf:"False positives are highy unlikely",Range:" 24 Hours"},
"Heroin":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:" 2 to 3 days after use. Chronic use may result in longer detection times."},
"Hydrocodone":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:" 24 hours"},
"Hydromorphone":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:" 1 to 2 days"},
"Meperidine":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine;quitiapine; thioridazine; tramadol; verapamil;",Range:"  2 to 3 days"},
"Methadone":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Range:" 1-3 days; Chronic use may result in longer detection times."},
"Morphine":{AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Range:" 1-3 days; Chronic use may result in longer detection times."},
"Oxycodone":{AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Range:" 1 to 4 days"},
"Oxymorphone":{AddInf:"Possible false positives include naloxone, see list for opiates",Range:" 24 hours"},
"PCP":{AddInf:"Possible false positives include dextromethorophan; dipnehydramine; ibuprofen; tramadol; venlafaxine",Range:" 1 to 3 days"}
};

var drugWOpiates={
"Buprenorphine":{Interpret:"Opiates results are not influenced by Bupreorphine",AddInf:"1. Opiate Test does not detect Bupreorphine drugs; 2. Consider testing for specific Bupreorphine Drug directly"},
"Codeine":{Interpret:"Expected : Probable that Pateint is taking medication/drug as reported.",AddInf:"Opiate Test is positive most likely because pateint is taking codeine, however this may still be a false positive; Consider Specific testing for codeine if clincially indicated"},
"Fentanyl":{Interpret:"Opiates results are not influenced by Fentanyl",AddInf:"1. Opiate Test does not detect Bupreorphine drugs; 2. Consider testing for specific Fentanyl Drug directly"},
"Heroin":{Interpret:"Expected : Probable that Pateint is taking medication/drug as reported.",AddInf:"Opiate Test is positive most likely because pateint is taking codeine, however this may still be a false positive; Consider Specific testing for codeine if clincially indicated"},
"Hydrocodone":{Interpret:"1. More likely: If pateint has taken medication recently, or is taking a high dose; 2. Unlikely: If pateint taking an average or low dose",AddInf:"Do not rely on Opiate test result top determine use of Hydromorphone, Specific testing for Hydromorphone is strongly advised."},
"Hydromorphone":{Interpret:"1. More likely: If pateint has taken medication recently, or is taking a high dose; 2. Unlikely: If pateint taking an average or low dose",AddInf:"Do not rely on Opiate test result top determine use of Hydromorphone, Specific testing for Hydromorphone is strongly advised."},
"Meperidine":{Interpret:"Opiates results are not influenced by Meperidine",AddInf:"1. Opiate Test does not detect Bupreorphine drugs; 2. Consider testing for specific Meperidine Drug directly"},
"Methadone":{Interpret:"Opiates results are not influenced by Methadone",AddInf:"1. Opiate Test does not detect Bupreorphine drugs; 2. Consider testing for specific Methadone Drug directly"},
"Morphine":{Interpret:"Expected : Probable that Pateint is taking medication/drug as reported.",AddInf:"Opiate Test is positive most likely because pateint is taking codeine, however this may still be a false positive; Consider Specific testing for codeine if clincially indicated"},
"Oxycodone":{Interpret:"1. More likely: If pateint has taken medication recently, or is taking a high dose; 2. Unlikely: If pateint taking an average or low dose",AddInf:"Do not rely on Opiate test result top determine use of Hydromorphone, Specific testing for Hydromorphone is strongly advised."},
"Oxymorphone":{Interpret:"1. More likely: If pateint has taken medication recently, or is taking a high dose; 2. Unlikely: If pateint taking an average or low dose",AddInf:"Do not rely on Opiate test result top determine use of Hydromorphone, Specific testing for Hydromorphone is strongly advised."},
};

var span="<span>";
var endspan="</span>";

$(document).ready( function(){

    $('#accordion').accordion({
      collapsible: true
	});


	var green = 'rgb(0, 176,80)';
	var red = 'rgb(255,0,0)';					
	var strMed = "";

    // Form fn
    $('#utd-calculator2a').on("submit", function(e){

       //if( $(".column-1 input:checkbox:checked") ){
            
		var sRecommendMain="<span >Prescribe tests for <b>";
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

					switch (drugName) {
						case 'Amphetamine':
							strMed = sRecommendMain + drugName+ "s"+endSpan;
							break; //Amphetamine
						case 'Cannabis':
							strMed = sRecommendMain+"THC"+endSpan;
							break; //Cannabis
						case 'Heroin':
							strMed = sRecommendMain+drugName+sRecommendOpiates +endSpan;
							break; //Heroin
						case 'Morphine':
							strMed = sRecommendMain+'Heroin'+sRecommendOpiates +endSpan;
							break; //Morphine
						};

					if(taking){
						$(this).find('.result-3').html(strMed);
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
					//var negative=  $(this).find('.column-2 input').prop('indeterminate'); 
					if( (drugName!=null || drugName !="") && taking>=0 ) {				
						$(this).find('.result-2').html(span+drug[drugName].AddInf+endspan);
						$(this).find('.text-right').html(span+drug[drugName].Range+endspan);
						if (taking==1)
						{
							$(this).find('.result-1').html(span+"<p style='color:blue'>"+"Expected</p>"+endspan);	
						} else {
							$(this).find('.result-1').html(span+"<p style='color:red'>"+"Unexpected : Consider diversion</p>"+endspan);	
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
        if( $('input[name="opiates"]').is(":checked") ){
			//alert( $('input[name="opiates"]:checked').val());
            opiates = $('input[name="opiates"]').val();
		}

		if($("#interpret2").attr("value")=="clicked")
		{
			//build the table
            $("#utd-calculator2c tbody tr").each( function(){	
				  $(this).find('.result-1').html("");
				  $(this).find('.result-2').html("");
				  $(this).find('.text-right').html("");

				if( ($(this).find("input:radio")).is(':checked') ){
                    var drugName = $(this).find('.column-1').text();
                    var taking = $(this).find('.column-2 input').prop('checked');
					
					if( (drugName!=null || drugName !="") && taking>=0 ) {	
						$(this).find('.result-1').html(span+drugWOpiates[drugName].Interpret+endspan);						
						$(this).find('.result-2').html(span+drugWOpiates[drugName].AddInf+endspan);
						$(this).find('.text-right').html(span+drug[drugName].Range+endspan);
					}
						//alert( drugName+"--" +taking +"--+"  +result1+ $(this).find('.result1-1').html());


                }
            });
		}

		   e.preventDefault();
    });



    $("#reset").on('click', function(){

		if($("#recommend").attr("value")=="clicked")
		{
			$("#recommend").attr("value","");

			  $("#utd-calculator2a tr").each( function(){	
				$(this).find('.result-3').html("");
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
			  });
		}
		$("#interpret2").removeAttr("disabled");
		$("#opiates").prop('checked', false);
		$("#opiatesDrugs").addClass("hidden");
    });

	$("#recommend").click(function(g) {
//		alert($(this).attr("value"));
		$(this).attr("value","clicked");
		$(this).attr('disabled','disabled');
		//$("#interpret").attr('disabled','disabled');
		//$("#interpret2").attr('disabled','disabled');
		g.preventDefault();
		$("#utd-calculator2a").submit();
	});

	$("#interpret").click(function(f) {
//		alert($(this).attr("value"));
		$(this).attr("value","clicked");
		$(this).attr('disabled','disabled');
		//$("#recommend").attr('disabled','disabled');
		//$("#interpret2").attr('disabled','disabled');
		f.preventDefault();
		$("#utd-calculator2b").submit();
	});


	$("#interpret2").click(function(f) {
//		alert($(this).attr("value"));
		$(this).attr("value","clicked");
		$(this).attr('disabled','disabled');
		//$("#recommend").attr('disabled','disabled');
		//$("#interpret").attr('disabled','disabled');
		f.preventDefault();
		$("#utd-calculator2c").submit();
	});

		$('input[name="opiates"]').click(function(f) {
//		alert($(this).attr("value"));
		$("#opiatesDrugs").removeClass("hidden");
		f.preventDefault();
		$("#utd-calculator2c").submit();
	});

});

