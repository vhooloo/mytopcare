var drugs=[
{name:"Buprenorphine (Subutex, Suboxone,<br/> Zubsolv, Temgesic, Buprenex,<br/> Norspan, Butrans)",screeningTest:"Opiates Immunoassay",screeningExpected:"Opiates - Positive",screeningUnexpected:"Opiates - Negative",confirmatoryTest:"GC/MS or LC/MS Buprenorphine",confirmatoryExpected:"Buprenorphine / Nor<br/>buprenorphine",confirmatoryUnexpected:"Buprenorphine / Nor<br/>buprenorphine - None Detected",falsePositives:"Tramadol; other opioids including (Codeine, Heroin, Morphine)",detectionRange:"1 to 10 days after use",category:"Synthetic Opioid"},
{name:"Codeine (Tylenol #3 or #4)",screeningTest:"Opiates Immunoassay",screeningExpected:"Opiates - Positive",screeningUnexpected:"Opiates - Negative",confirmatoryTest:"GC/MS or LC/MS Opiates",confirmatoryExpected:"Codeine, possibly Morphine",confirmatoryUnexpected:"Hydrocodone, Hydromorphone, Oxycodone, Oxymorphone, or 6-acetyl morphine (Heroin metabolite)",falsePositives:"Poppy seeds ; dextromethorophan; diphenhydramine; fluoroquinolones; quinine, rifampin",detectionRange:"2 to 4 days after use",category:"Opiate"},
{name:"Fentanyl (Abstral, Actiq,  Duragesic, Fentora, Ionsys, Lazanda, Onsolis, Sublimaze, Subsys )",screeningTest:"Not detected by screening test. Use confirmatory test.",screeningExpected:"Not detected by screening test. Use confirmatory test.",screeningUnexpected:"Opiates - Positive by Immunoassay",confirmatoryTest:"GC/MS or LC/MS Fentanyl",confirmatoryExpected:"Mass Spectrometry",confirmatoryUnexpected:"Fentanyl and Norfentanyl",falsePositives:"Highly Unlikely",detectionRange:"1 to 2 days after use",category:"Synthetic Opioid"},
{name:"Hydrocodone (Histinex HC, Hycodan, Hycotuss, Tussionex, Vicodin, Lorcet, Lortab, Norco, Rezira, Vicoprofen,  Vituz, Zohydro ER, Zolvit, Zutripro, Zydone)",screeningTest:"Opiates by Immunoassay",screeningExpected:"Opiates - Positive",screeningUnexpected:"Opiates - Negative",confirmatoryTest:"GC/MS or LC/MS Opiates",confirmatoryExpected:"Hydrocodone, possibly Hydromorphone",confirmatoryUnexpected:"Codeine, Morphine, Oxycodone, Oxymorphone, or 6-acetyl morphine (Heroin metabolite)",falsePositives:"Poppy seeds ; dextromethorophan; diphenhydramine; fluoroquinolones; quinine, rifampin",detectionRange:"1 to 4 days after use",category:"Semi-Synthetic Opioid"},
{name:"Hydromorphone (Exalgo, Hydromorphone HP, Dilaudid, Palladone)",screeningTest:"Opiates by Immunoassay",screeningExpected:"Opiates - Positive",screeningUnexpected:"Opiates - Negative",confirmatoryTest:"GC/MS or LC/MS Opiates",confirmatoryExpected:"Hydromorphone",confirmatoryUnexpected:"Codeine, Morphine, Hydrocodone, Oxycodone, Oxymorphone, 6-acetyl morphine (Heroin metabolite)",falsePositives:"Poppy seeds ; dextromethorophan; diphenhydramine; fluoroquinolones; quinine, rifampin",detectionRange:"1 to 4 days after use",category:"Semi-Synthetic Opioid"},
{name:"Meperidine (Demerol, Mepergan)",screeningTest:"Not detected by screening test. Use confirmatory test.",screeningExpected:"Not detected by screening test. Use confirmatory test.",screeningUnexpected:"Opiates - Positive by Immunoassay",confirmatoryTest:"GC/MS or LC/MS Meperidine",confirmatoryExpected:"Normeperidine, possibly Meperidine",confirmatoryUnexpected:"Codeine, Morphine, Hydrocodone, Oxycodone, Oxymorphone, 6-acetyl morphine (Heroin metabolite)",falsePositives:"Diphenhydramine; doxylamine; clomipramine;<br/>chlorpromazine; quitiapine; thioridazine; tramadol; verapamil;",detectionRange:"Meperidine: <1 day; Normeperidine: upto 2 days",category:"Synthetic Opioid"},
{name:"Methadone (Dolophine , Methadose®)",screeningTest:"Methadone Immunoassay",screeningExpected:"Methadone - Positive",screeningUnexpected:"Opiates - Positive",confirmatoryTest:"GC/MS or LC/MS Methadone",confirmatoryExpected:"Methadone and EDDP",confirmatoryUnexpected:"Methadone only",falsePositives:"clomipramine;<br/>chlorpromazine; Diphenhydramine; doxylamine; ibuprofen;quitiapine; thioridazine; verapamil;",detectionRange:"Upto 10 days; Detection times of methadone in urine can be variable: patients on lower doses (<40mg) of methadone may screen Negative by Immunoassay. ",category:"Synthetic Opioid"},
{name:"Morphine (Apokyn, Avinza®, DepoDur, Duramorph, Embeda, Kadian®, MSContin®, MSIR®, Oramorph SR®, Paregoric, Roxanol®)",screeningTest:"Opiates Immunoassay",screeningExpected:"Opiates - Positive",screeningUnexpected:"Opiates - Negative",confirmatoryTest:"GC/MS or LC/MS Opiates",confirmatoryExpected:"Morphine, possibly Hydromorphone if on high dose or chronic Morphine",confirmatoryUnexpected:"Codeine, Hydrocodone, Oxycodone, Oxymorphone, 6-acetyl morphine (Heroin metabolite)",falsePositives:"Diphenhydramine; doxylamine; clomipramine;<br/>chlorpromazine; ibuprofen;<br/>quitiapine; thioridazine; tramadol; verapamil;",detectionRange:"1 to 4 days after use",category:"Opiate"},
{name:"Oxycodone (Combunox, Endocet, Oxecta, OxyIR®, Percocet , Percodan, Roxicodone, Roxicet, Tylox®, Xartemis XR)",screeningTest:"Oxycodone Immunoassay",screeningExpected:"Oxycodone - Positive; Opiates - Negative, dose <100 mg/day; Opiates - Positive by Immunoassay, dose >100 mg/day",screeningUnexpected:"Oxycodone - Negative by Immunoassay; Opiates - Negative, dose >100 mg/day; Opiates - Positive by Immunoassay, dose <100 mg/day",confirmatoryTest:"GC/MS or LC/MS Opiates",confirmatoryExpected:"Oxycodone, Oxymorphone",confirmatoryUnexpected:"Codeine, Morphine, Hydrocodone, Hydromorphone, 6-acetyl morphine (Heroin metabolite)",falsePositives:"Poppy seeds ; dextromethorophan; diphenhydramine; fluoroquinolones; quinine, rifampin",detectionRange:"1 to 4 days after use",category:"Semi-Synthetic Opioid"},
{name:"Oxycodone®ER (Oxycontin )",screeningTest:"Oxycodone Immunoassay",screeningExpected:"Oxycodone - Positive; Opiates - Positive, dose > 100 mg/day",screeningUnexpected:"Oxycodone - Negative",confirmatoryTest:"GC/MS or LC/MS Opiates",confirmatoryExpected:"Oxycodone and Oxymorphone",confirmatoryUnexpected:"Codeine, Morphine, Hydrocodone, Hydromorphone, or 6-acetyl morphine (Heroin metabolite)",falsePositives:"Poppy seeds ; dextromethorophan; diphenhydramine; fluoroquinolones; quinine, rifampin",detectionRange:"1 to 4 days after use",category:"Semi-Synthetic Opioid"},
{name:"Oxymorphone (Opana®, Opana ER®, Numorphan)",screeningTest:"Oxycodone Immunoassay",screeningExpected:"Oxycodone - Positive",screeningUnexpected:"Opiates - Positive by Immunoassay",confirmatoryTest:"GC/MS or LC/MS Opiates",confirmatoryExpected:"Oxymorphone",confirmatoryUnexpected:"Codeine, Morphine, Hydrocodone, Hydromorphone, Oxycodone, or 6-acetyl morphine (Heroin metabolite)",falsePositives:"Naloxone, see list for opiates",detectionRange:"1 to 4 days after use",category:"Semi-Synthetic Opioid"},
{name:"Propoxyphene (Darvon®, Darvocet®)",screeningTest:"Propoxyphene Immunoassay",screeningExpected:"Propoxyphene - Positive",screeningUnexpected:"Opiates - Positive by Immunoassay",confirmatoryTest:"GC/MS or LC/MS Propoxyphene",confirmatoryExpected:"Propoxyphene / Norpropoxyphene",confirmatoryUnexpected:"Codeine, Morphine, Hydrocodone, Oxycodone, Oxymorphone, 6-acetyl morphine (Heroin metabolite)",falsePositives:"Poppy Seeds; Codeine; ",detectionRange:"1 to 5 days after use",category:"Synthetic Opioid"},
{name:"Tramadol (Ultram®, Ultracet®)",screeningTest:"Not detected by screening test. Use confirmatory test.",screeningExpected:"Not detected by screening test. Use confirmatory test.",screeningUnexpected:"Opiates - Positive by Immunoassay",confirmatoryTest:"GC/MS or LC/MS Tramadol",confirmatoryExpected:"Tramadol and metabolites",confirmatoryUnexpected:"Codeine, Morphine, Hydrocodone, Oxycodone, Oxymorphone, 6-acetyl morphine (Heroin metabolite)",falsePositives:"Dextromethorphan",detectionRange:"1 to 24 hrs after use",category:"Semi-Synthetic Opioid"}
];


	
       jQuery(document).ready(function ($) {
	/*       function WrapText() {
        for (i = 0; i <= 10; i++) {
            WrapRow(i);
        }            
    }
	
    function WrapRow(number) {
        var currentRow = '#row' + number + 'jqxgrid';
        var arr = $(currentRow + ' .jqx-grid-cell-workgroup span');
        var hOfRow = $(currentRow).height();
        var hOfSpan = $(arr[1]).height();
        var hToIncrease = hOfSpan - hOfRow;
        if (hToIncrease > 0) {
            hToIncrease += 5;
            IncreaseSize('#jqxgrid', hToIncrease);
            IncreaseSize('#contentjqxgrid', hToIncrease);
            IncreaseSize(currentRow, hToIncrease);
            MoveDown('#pager', hToIncrease);
        }
    }
    function IncreaseSize(element, pixels) {
        var current = $(element).height();
        $(element).height(current + pixels);
    }
    function MoveDown(element, pixels) {
        $(element).css('top', '+=' + pixels);
    } */
            var source =
            {
                localdata: drugs,
                datatype: "array"
            };
            var dataAdapter = new $.jqx.dataAdapter(source, {
                downloadComplete: function (drugs, status, xhr) { },
                loadComplete: function (drugs) { },
                loadError: function (xhr, status, error) { }
            });
			
			var columnsrenderer = function (value) {
			    if (value == 'Screening')
					return '<div id="map" style="font-weight:bold;text-align:center;">' + value + '</div>';
				else
					return '<div id="map1" style="font-weight:bold;text-align:center;">' + value + '</div>';
			};
			
			 // $("#jqxgrid").bind("bindingcomplete", function (event) {
		    // console.log("wrapping");
            // WrapText();
			// console.log("wrapping");
        // });
			
            $("#jqxgrid").jqxGrid(
            {
                width: 1100,
                source: dataAdapter,
                groupable: false,		
                filterable: false,
				//filtermode: 'simple',
                autorowheight: true,
			    columnsresize: false,				
                autoheight: true,
				//rowsheight: 150,
                altRows: true,				
                columns: [
					{ text: 'Drug', datafield: 'name', width: 140 },	
					{ text: 'Test', columngroup: 'Screening',datafield: 'screeningTest', width: 95 },					
					{ text: 'Expected', columngroup: 'Screening',datafield: 'screeningExpected', width: 100 },
					{ text: 'Unexpected', columngroup: 'Screening',datafield: 'screeningUnexpected', width: 100},
					{ text: 'Test', columngroup: 'Confirmatory',datafield: 'confirmatoryTest', width: 95 },					
					{ text: 'Expected', columngroup: 'Confirmatory',datafield: 'confirmatoryExpected', width: 100 },
					{ text: 'Unexpected', columngroup: 'Confirmatory',datafield: 'confirmatoryUnexpected', width: 120},		
					{ text: 'Possible False<br/>Positives', datafield: 'falsePositives',width: 150 },
					{ text: 'Common<br/>Detection Range', datafield: 'detectionRange',width: 120 },
					{ text: 'Category', datafield: 'category', width: 80 } 
				],
				columngroups: [
                    { text: 'Screening', align: 'center', name: 'Screening', renderer:columnsrenderer},
					{ text: 'Confirmatory', align: 'center', name: 'Confirmatory', renderer:columnsrenderer}
                ]
				//groups: ['category']
            });
			//$("#jqxgrid").jqxGrid('expandgroup', 0);	
			//$("#jqxgrid").jqxGrid('hidecolumn', 'category');
	        // trigger the column resized event.
            $("#jqxgrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth
                var oldwidth = event.args.oldwidth;
                $("#eventlog").text("Column: " + column + ", " + "New Width: " + newwidth + ", Old Width: " + oldwidth);
            });		
			
		
			
			$("#mydiv").css('top',  $("#map").offset().top);
			$("#mydiv").css('left',  $("#map").offset().left-1);
			$("#mydiv").css('height',  $("#jqxgrid").height());
			$("#mydiv").css('width',  $("#map").width()+1);
			$("#mydiv1").css('top',  $("#map1").offset().top);
			$("#mydiv1").css('left',  $("#map1").offset().left-1);
			$("#mydiv1").css('height',  $("#jqxgrid").height());
			$("#mydiv1").css('width',  $("#map1").width()+1);
			$("#mydiv").css( "visibility", "visible" );
			$("#mydiv1").css( "visibility", "visible" );
			$( window ).resize(function() {
			  console.log( "Handler for .resize() called." );
			  $("#mydiv").css('top',  $("#map").offset().top);
				$("#mydiv").css('left',  $("#map").offset().left-1);
				$("#mydiv1").css('top',  $("#map1").offset().top);
			$("#mydiv1").css('left',  $("#map1").offset().left-1);
			});
			
        });




