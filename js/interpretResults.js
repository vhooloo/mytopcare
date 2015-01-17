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
					//$("#"+drugName).find('.result-1').html("");
					//$("#"+drugName).find('.result-2').html("");
					//$("#"+drugName).find('.text-right').html("");
				});				
			$('#selectable').find('li').removeClass('ui-selected');		
			$('input:radio').prop('checked', false);
			$("#utd-calculator tbody tr").addClass("hidden");
			$('#druggrid').show('slow');
			//$('.overview').show('slow');			
		});
});


var span="<span>";
var endspan="</span>";