

var drugs=[
{name:"Amphetamine",AddInf:"Possible False Positives include bupropion; chlorpromazine; mexilitine; pseuodoephedrine; nasal decongestants; ranitadine, SSRI's; trazadone",Brand:"Adderall XR, Adderall, Dexedrine, Desoxyn, Paremyd, Vyvanse, Ritalin, Ritalin LA, Methylin Chewable Tablets, Concerta, Focalin",Range:"- 1 to 2 days<br/>- Urine may test positive within 3 hours",Category:"Non-opioids",Type:"Illicit"},
{name:"Barbiturates",AddInf:"Possible False Positives include ibuprofen; naproxyn; phenytoin",Brand:"Nembutal, Butisol, Mebaral, Amytal, Seconal, Fioricet, Phenobarbital",Range:"- 2 to 20 days  depending on specific agent; Chronic use may result in longer detection times.",Category:"Non-opioids",Type:"Illicit"},
{name:"Benzodiazepines",AddInf:"Possible False Positives include sertraline, oxaprozin",Brand:"Romazicon, Midazolam, Halcion, Klonopin, Diastat, Prosom, Niravam, Xanax, Librium, Tranxene, Dalmane, Restoril, Xanax XR, Valium, Ativan, Serax",Range:"- 1 to 14 days  depending on specific agent; Chonic use may result in longer detection times.",Category:"Non-opioids",Type:"Illicit"},
{name:"Buprenorphine",AddInf:"Possible False Positives include tramadol; other opioids including (Codeine, Heroin, Morphine)",Brand:"Subutex, Suboxone, Zubsolv, Temgesic, Buprenex, Norspan and Butrans",Range:"- 1 to 6 days",Category:"Synthetic opioids",Type:"Generic"},
{name:"Cannabis",AddInf:"Possible false positives include dronabinol, NSAIDS, PPIs",Brand:"420, Aunt Mary, baby, bobby, boom, chira, chronic, ditch, ganja, grass, greens, hash, herb, Mary Jane, nigra, Pot, reefer, rip, root, skunk, stack, torch, weed and zambi.",Range:"- 2 to 7 days or more<br/>- Up to one month after heavy chronic use.",Category:"Non-opioids",Type:"Illicit"},
{name:"Cocaine",AddInf:"Possible false positives include local anesthetics (e.g. lidocaine)",Brand:"Blow, C, candy, coke, do a line, freeze, girl, happy dust, Mama coca, mojo, monster, nose, pimp, shot, smoking gun, snow, sugar, sweet stuff, and white powder.",Range:"- Usually positive up to 48 to 72 hours; Chronic use may result in longer detection times.",Category:"Non-opioids",Type:"Illicit"},
{name:"Codeine",AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Brand:"Multiple combination preparations",Range:"- 2 to 4 days",Category:"Opiates",Type:"Generic"},
{name:"Fentanyl",AddInf:"False positives are highly unlikely",Brand:"Abstral, Actiq,  Duragesic, Fentora, Ionsys, Lazanda, Onsolis, Sublimaze, Subsys ",Range:"- 24 Hours",Category:"Synthetic opioids",Type:"Generic"},
{name:"Heroin",AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Brand:"Aunt Hazel, big H, black pearl, brown sugar, capital H, charley, china white, dope, good horse, H, hard stuff, hero, heroina, little boy, mud, perfect high, smack, stuff and tar.",Range:"- 2 to 3 days after use. Chronic use may result in longer detection times.",Category:"Opiates",Type:"Illicit"},
{name:"Hydrocodone",AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Brand:"Histinex HC, Hycodan, Hycotuss, Tussionex, Vicodin, Lorcet, Lortab, Norco, Rezira, Vicoprofen,  Vituz, Zohydro ER, Zolvit, Zutripro, Zydone ",Range:"- 24 hours",Category:"Semi-synthetic Opioids",Type:"Generic"},
{name:"Hydromorphone",AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Brand:"Exalgo, Hydromorphone HP, Dilaudid, Palladone,",Range:"- 1 to 2 days",Category:"Semi-synthetic Opioids",Type:"Generic"},
{name:"Meperidine",AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine;quitiapine; thioridazine; tramadol; verapamil;",Brand:"Demerol, Mepergan",Range:"- 2 to 3 days",Category:"Synthetic opioids",Type:"Generic"},
{name:"Methadone",AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Brand:"Dolophine, Methadose",Range:"- 1 to 3 days; Chronic use may result in longer detection times.",Category:"Synthetic opioids",Type:"Generic"},
{name:"Morphine",AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Brand:"Paregoric, Apokyn, Avinza, DepoDur, Duramorph, Embeda, Kadian, Roxanol, MS-Contin",Range:"- 1 to 3 days; Chronic use may result in longer detection times.",Category:"Opiates",Type:"Generic"},
{name:"Oxycodone",AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Brand:"Combunox, Endocet, Oxecta, Percocet, Percodan, Roxicodone, Oxycontin, Roxicet, Tylox, Xartemis XR",Range:"- 1 to 4 days",Category:"Semi-synthetic Opioids",Type:"Generic"},
{name:"Oxymorphone",AddInf:"Possible false positives include naloxone, see list for opiates",Brand:"Numorphan, Opana, Opana ER",Range:"- 24 hours",Category:"Semi-synthetic Opioids",Type:"Generic"},
{name:"PCP",AddInf:"Possible false positives include dextromethorophan; dipnehydramine; ibuprofen; tramadol; venlafaxine",Brand:"Angel dust, belladonna, black whack, CJ, cliffhanger, crystal joint, Detroit pink, elephant tranquilizer, hog, magic, Peter Pan, sheets, soma, TAC, trank, white horizon", Range:"- 1 to 3 days",Category:"Non-opioids",Type:"Illicit"}
];

var drugWOpiates1={
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

var drugWOpiatesAlt1={
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


var drugWOOpiates1={
"Codeine":{AddInf:"1. Consider False negative: Patient may have not actually taken the drug unknowingly, last dose may have been too low or distant to be detected<br/>2. Consider confirmatory testing if clinical indicated."},			
"Heroin":{AddInf:"1. Consider False negative: Patient may have not actually taken the drug unknowingly, last dose may have been too low or distant to be detected<br/>2. Consider confirmatory testing if clinical indicated."},
"Morphine":{AddInf:"1. Consider False negative: Patient may have not actually taken the drug unknowingly, last dose may have been too low or distant to be detected<br/>2. Consider confirmatory testing if clinical indicated."},
};
	
       $(document).ready(function () {

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
            $("#jqxgrid").jqxGrid(
            {
                width: 980,
                source: dataAdapter,
                groupable: true,		
                filterable: true,
				filtermode: 'simple',
                autorowheight: true,
				columnsresize: true,
				groupsexpandedbydefault : true,
                autoheight: true,				
                altRows: true,				
                columns: [
					{ text: 'Drug', datafield: 'name', width: 120 },			
					{ text: 'Brand / Street Name', datafield: 'Brand', width: 280 },
					{ text: 'Additional Information', datafield: 'AddInf', width: 280},
					{ text: 'Common Detection Range', datafield: 'Range',width: 200 },
					{ text: 'Category', datafield: 'Category', width: 70 },  
				],
				groups: ['Category']
            });
			
	// trigger the column resized event.
            $("#jqxgrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth
                var oldwidth = event.args.oldwidth;
                $("#eventlog").text("Column: " + column + ", " + "New Width: " + newwidth + ", Old Width: " + oldwidth);
            });	

			$.extend($.jgrid.defaults, {
				groupingView: {
					groupCollapse: true
				}
			});
			var $grid = $("#jqxgrid"), inOnClickGroup = false;
			$grid.jqGrid({
				// ... other options
				grouping: true,
				onClickGroup: function (hid) {
					var idPrefix = this.id + "ghead_", id, i, l,
						groups = this.p.groupingView.sortnames[0];

					if (!inOnClickGroup && hid.length > idPrefix.length &&
							hid.substr(0, idPrefix.length) === idPrefix) {
						id = Number(hid.substr(idPrefix.length));
						if (typeof (groups[id]) !== "undefined") {
							inOnClickGroup = true; // set to skip recursion
							for (i = 0, l = groups.length; i < l; i++) {
								if (i !== id) {
									$(this).jqGrid('groupingToggle', this.id + 'ghead_' + i);
								}
							}
							inOnClickGroup = false;
						}
					}
				}
			});













			
        });




