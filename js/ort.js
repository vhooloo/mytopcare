

jQuery(document).ready( function($){
var gender="";


	$('input[name="gender"]').click(function(f) {
        if( $('input[name="gender"]').is(":checked") ){
            gender = $('input[name="gender"]:checked').val();
		}	
		$('input[name="gender"]').prop('disabled',true);
		$("#mytable").removeClass("hidden");
		$('#mytable').show('slow');
		if (gender == 0) $("#pfonlygender").text("Male"); 
		if (gender == 1) $("#pfonlygender").text("Female"); 
	
	});
	
	$("#reset4").on('click', function(){
			$("#mytable").addClass("hidden");	
			$("#recommendation").addClass("hidden");
			$("#rectext").html("");
			$("#opiatesDrugs").addClass("hidden");
			$('input[name="gender"]').prop('disabled', false);
			gender="";
					
			$('input:radio').prop('checked', false);

			$('#mytable').hide('slow');
			$("mytable").addClass("hidden");
			$('input[name="ortsum"]').css("background-color",'#7A7A7A');			
			
	});
	
	$('input[name|="ORT"]').click(function(f) {
	var value=0;
	var ortsum=0;
	var upd=1;
		$row=$(this).closest("tr");		
		if(gender ==1) { //female
			$row.find(":text").val($(this).attr("female"));	
			$row.find('[id^=respfonly]').text($(this).attr("female"));			
		} else if (gender ==0 && $(this).val()!=0){
			$row.find(":text").val($(this).attr("male"));
			$row.find('[id^=respfonly]').text($(this).attr("male"));			
		} 
		if ($(this).val() == 1)
			$row.find('[id^=pfonly]').html("YES");
		else
			$row.find('[id^=pfonly]').html("NO");
		 
		$('input[name$="text"]').each(function(i){		   
		    value = parseInt($(this).val(), 10);
			if ( !isNaN(value)) {
				ortsum += value;    
			} else {
				upd=0;
					//return;				
			}
		});		
		
		if(upd==1) {
			$("#pfonlysum").text(ortsum);
		    $("#recommendation").removeClass("hidden");
			$('input[name="ortsum"]').val(ortsum);
			if (ortsum<=3){
				$('input[name="ortsum"]').css("background-color",'#58FA82');
				$("#rectext").html("Score is 3 or lower. Low Risk - Test urine <b>2</b> times per year.");
			}else if(ortsum>3 && ortsum<=7){
				$('input[name="ortsum"]').css("background-color",'yellow');
				$("#rectext").html("Score is between 3 and 7. Medium Risk - Test urine <b>4</b> times per year.");
			}else {
				$('input[name="ortsum"]').css("background-color",'#FA5858');
				$("#rectext").html("Score is greater than 7. High Risk - Test urine <b>6</b> times per year.");
			}			
		} else {
			$('input[name$="text"]').filter( function() {
				return ($.trim($(this).val())=="");
			}).effect("highlight", {color:"pink"}, 500);	
		}
	});	
	
});
	