var drugs=[
{name:"Amphetamine (Adderall XR, Adderall, Dexedrine, Desoxyn, Paremyd, Vyvanse, Ritalin, Ritalin LA, Methylin Chewable Tablets, Concerta, Focalin)",screeningTest:"Imunoassay: Ampheamines",screeningExpected:"Varies",screeningUnexpected:"Varies",falsePositive:"Possible False Positives include bupropion; chlorpromazine; mexilitine; pseuodoephedrine; nasal decongestants; ranitidine, SSRI's; trazadone",confirmatoryExpected:"GC/MS: No correlation between urine drug concentration & dose",confirmatoryDrug:"Amphetamine / Methamphetamine (Amphetamine / Methamphetamine)",detectionRange:"2 days after use.Urine may test positive within 3 hours after use.",category:"Non-opioids"},
{name:"Barbiturate (Nembutal, Butisol, Mebaral, Amytal, Seconal, Fioricet, Phenobarbital)",screeningTest:"Imunoassay: Barbiturate",screeningExpected:"Varies",screeningUnexpected:"Varies",falsePositive:"Possible False Positives include ibuprofen; naproxyn; phenytoin",confirmatoryExpected:"GC/MS: No correlation between urine drug concentration & dose",confirmatoryDrug:"Barbiturates (Barbiturates)",detectionRange:"2 to 20 days after use depending on specific  agent.",category:"Non-opioids"},
{name:"Benzodiazepines (Romazicon, Midazolam, Halcion, Klonopin, Diastat, Prosom, Niravam, Xanax, Librium, Tranxene, Dalmane, Restoril, Xanax XR, Valium, Ativan, Serax)",screeningTest:"Imunoassay: Benzodiazepines",screeningExpected:"Varies",screeningUnexpected:"Varies; Ambien (Zolpidem) not detected with Benzodiazepine screen)",falsePositive:"Possible False Positives include sertraline, oxaprozin",confirmatoryExpected:"GC/MS: Specific Urine metabolites. No correlation between urine drug concentration & dose",confirmatoryDrug:"• Oxazepam (Oxazepam)<br/>• Temazepam (Temazepam, Oxazepam)<br/>• Lorazepam (Lorazepam)<br/>• Flurazepam (Hydroxyethyl-flurazepam, Desalkyl-flurazepam)<br/>• Chlordiazepoxide (Oxazepam, Nordiazepam)<br/>• Diazepam (Nordiazepam, Oxazepam, Temazepam)<br/>• Aprazolam (Alpha-Aprazolam)<br/>• Clonazepam (7-Amino-clonazepam)",detectionRange:"1 to 14 days after use depending on specific agent.",category:"Non-opioids"},
{name:"Cannabis (420, Aunt Mary, baby, bobby, boom, chira, chronic, ditch, ganja, grass, greens, hash, herb, Mary Jane, nigra, Pot, reefer, rip, root, skunk, stack, torch, weed and zambi.)",screeningTest:"Imunoassay: Cannabinoids",screeningExpected:"Varies",screeningUnexpected:"Varies",falsePositive:"Possible false positives include dronabinol, NSAIDS, PPIs",confirmatoryExpected:"GC/MS: No correlation between urine drug concentration & dose",confirmatoryDrug:"Cannabis (Tetrahydrocannabinol - THC); Marinol (Synthetic THC) ; Casament (THC > negative); Sativex (THC > positive)",detectionRange:"2 to 7 days or more after use. Up to one month after heavy chronic use.",category:"Illicits"},
{name:"Cocaine (Blow, C, candy, coke, do a line, freeze, girl, happy dust, Mama coca, mojo, monster, nose, pimp, shot, smoking gun, snow, sugar, sweet stuff, and white powder.)",screeningTest:"Imunoassay: Cocaine",screeningExpected:"Negative",screeningUnexpected:"Positive",falsePositive:"Possible false positives include local anesthetics (e.g. lidocaine)",confirmatoryExpected:"GC/MS: benzoylecgonine -  No correlation between urine drug concentration & dose",confirmatoryDrug:"Cocaine (Benzyolecgonine / Ecgonine / Ecgonine Methyl Ester (EME);  EME greatest when cocaine is ingested))",detectionRange:" Usually positive up to 48 to 72 hours after use. May be positive longer after use in chronic highdose abusers.",category:"Illicits"},
{name:"Heroin (Aunt Hazel, big H, black pearl, brown sugar, capital H, charley, china white, dope, good horse, H, hard stuff, hero, heroina, little boy, mud, perfect high, smack, stuff and tar.)",screeningTest:"Imunoassay: Opiates",screeningExpected:"Negative",screeningUnexpected:"Positive",falsePositive:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",confirmatoryExpected:"GC/MS: No correlation between urine drug concentration & dose",confirmatoryDrug:"Heroin (MAM-6)",detectionRange:"2 to 3 days after use.",category:"Illicits"},
{name:"Phencyclidine (PCP) (Angel dust, belladonna, black whack, CJ, cliffhanger, crystal joint, Detroit pink, elephant tranquilizer, hog, magic, Peter Pan, sheets, soma, TAC, trank, white horizon and zoom.)",screeningTest:"Imunoassay: Phencyclidine",screeningExpected:"Negative",screeningUnexpected:"Positive",falsePositive:"Possible false positives include dextromethorophan; dipnehydramine; ibuprofen; tramadol; venlafaxine",confirmatoryExpected:"GC/MS: No correlation between urine drug concentration & dose",confirmatoryDrug:"Phencyclidine (Phencyclidine)",detectionRange:"Up to 48 to 72 hours after use.",category:"Illicits"}
];

	
       jQuery(document).ready(function ($) {

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
			
			var cellclass = function (row, columnfield, value) {
									console.log(columnfield);
                                   return 'borderClass';
                
				};
				
            $("#jqxgrid").jqxGrid(
            {
                width: 1100,
                source: dataAdapter,
                groupable: false,		
                filterable: true,
				filtermode: 'simple',
                autorowheight: true,
				columnsresize: true,
				columnsheight: 47,				
                autoheight: true,				
                altRows: true,				
                columns: [
					{ text: 'Drug', datafield: 'name', width: 180, cellclassname: cellclass },	
					{ text: 'Test', columngroup: 'Screening',datafield: 'screeningTest', width: 100, cellclassname: cellclass  },					
					{ text: 'Expected', columngroup: 'Screening',datafield: 'screeningExpected', width: 80 },
					{ text: 'Unexpected', columngroup: 'Screening',datafield: 'screeningUnexpected', width: 80, cellclassname: cellclass },
					{ text: 'Posible False Positives<br/>(Immunoassay only)', columngroup: 'Screening',datafield: 'falsePositive', width: 180 },					
					{ text: 'Expected', columngroup: 'Confirmatory',datafield: 'confirmatoryExpected', width: 110 },
					{ text: 'Drug (Urine <br/>Metabolite to test for)', columngroup: 'Confirmatory',datafield: 'confirmatoryDrug', width: 180},		
					{ text: 'Common <br/>Detection Range', datafield: 'detectionRange',width: 110 },
					{ text: 'Category', datafield: 'category', width: 80 } 
				],
				columngroups: [
                    { text: 'Screening', align: 'center', name: 'Screening' },
					{ text: 'Confirmatory', align: 'center', name: 'Confirmatory' }
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
			
			   
        });




