

var drugs=[
{name:"Amphetamine",test:"Amphetamine",AddInf:"Possible False Positives include bupropion; chlorpromazine; mexilitine; pseuodoephedrine; nasal decongestants; ranitadine, SSRI's; trazadone",Brand:"Adderall XR, Adderall, Dexedrine, Desoxyn, Paremyd, Vyvanse, Ritalin, Ritalin LA, Methylin Chewable Tablets, Concerta, Focalin",Range:"1 to 2 days<br/>Urine may test positive within 3 hours",Category:"Non-opioids",Type:"Illicit"},
{name:"Barbiturates",test:"Barbiturates",AddInf:"Possible False Positives include ibuprofen; naproxyn; phenytoin",Brand:"Nembutal, Butisol, Mebaral, Amytal, Seconal, Fioricet, Phenobarbital",Range:"2 to 20 days  depending on specific agent; Chronic use may result in longer detection times.",Category:"Non-opioids",Type:"Illicit"},
{name:"Benzodiazepines",test:"Benzodiazepines",AddInf:"Possible False Positives include sertraline, oxaprozin",Brand:"Romazicon, Midazolam, Halcion, Klonopin, Diastat, Prosom, Niravam, Xanax, Librium, Tranxene, Dalmane, Restoril, Xanax XR, Valium, Ativan, Serax",Range:"1 to 14 days  depending on specific agent; Chronic use may result in longer detection times.",Category:"Non-opioids",Type:"Illicit"},
{name:"Buprenorphine",test:"Buprenorphine / Norbuprenorphine",AddInf:"Possible False Positives include tramadol; other opioids including (Codeine, Heroin, Morphine)",Brand:"Subutex, Suboxone, Zubsolv, Temgesic, Buprenex, Norspan and Butrans",Range:"1 to 6 days",Category:"Synthetic opioids",Type:"Generic"},
{name:"Cannabis",test:"Cannabis",AddInf:"Possible false positives include dronabinol, NSAIDS, PPIs",Brand:"420, Aunt Mary, baby, bobby, boom, chira, chronic, ditch, ganja, grass, greens, hash, herb, Mary Jane, nigra, Pot, reefer, rip, root, skunk, stack, torch, weed and zambi.",Range:"2 to 7 days or more<br/>Up to one month after heavy chronic use.",Category:"Non-opioids",Type:"Illicit"},
{name:"Cocaine",test:"Cocaine / Benzoylecgonine",AddInf:"Possible false positives include local anesthetics (e.g. lidocaine)",Brand:"Blow, C, candy, coke, do a line, freeze, girl, happy dust, Mama coca, mojo, monster, nose, pimp, shot, smoking gun, snow, sugar, sweet stuff, and white powder.",Range:"Usually positive up to 48 to 72 hours; Chronic use may result in longer detection times.",Category:"Non-opioids",Type:"Illicit"},
{name:"Codeine",test:"Codeine",AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Brand:"Multiple combination preparations",Range:"2 to 4 days",Category:"Opiates",Type:"Generic"},
{name:"Fentanyl",test:"Fentanyl",AddInf:"False positives are highly unlikely",Brand:"Abstral, Actiq,  Duragesic, Fentora, Ionsys, Lazanda, Onsolis, Sublimaze, Subsys ",Range:"24 Hours",Category:"Synthetic opioids",Type:"Generic"},
{name:"Heroin",test:"Opiates / 6-Monoacetylmorphine (6-MAM)",AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Brand:"Aunt Hazel, big H, black pearl, brown sugar, capital H, charley, china white, dope, good horse, H, hard stuff, hero, heroina, little boy, mud, perfect high, smack, stuff and tar.",Range:"2 to 3 days after use. Chronic use may result in longer detection times.",Category:"Opiates",Type:"Illicit"},
{name:"Hydrocodone",test:"Hydrocodone",test:"Hydrocodone",AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Brand:"Histinex HC, Hycodan, Hycotuss, Tussionex, Vicodin, Lorcet, Lortab, Norco, Rezira, Vicoprofen,  Vituz, Zohydro ER, Zolvit, Zutripro, Zydone ",Range:"24 hours",Category:"Semi-synthetic Opioids",Type:"Generic"},
{name:"Hydromorphone",test:"Hydromorphone",AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Brand:"Exalgo, Hydromorphone HP, Dilaudid, Palladone,",Range:"1 to 2 days",Category:"Semi-synthetic Opioids",Type:"Generic"},
{name:"Meperidine",test:"Meperidine",AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine;quitiapine; thioridazine; tramadol; verapamil;",Brand:"Demerol, Mepergan",Range:"2 to 3 days",Category:"Synthetic opioids",Type:"Generic"},
{name:"Methadone",test:"Methadone",AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Brand:"Dolophine, Methadose",Range:"1 to 3 days; Chronic use may result in longer detection times.",Category:"Synthetic opioids",Type:"Generic"},
{name:"Morphine",test:"Morphine",AddInf:"Possible false positives include diphenhydramine; doxylamine; clomipramine;chlorpromazine; ibuprofen; quitiapine; thioridazine; tramadol; verapamil.",Brand:"Paregoric, Apokyn, Avinza, DepoDur, Duramorph, Embeda, Kadian, Roxanol, MS-Contin",Range:"1 to 3 days; Chronic use may result in longer detection times.",Category:"Opiates",Type:"Generic"},
{name:"Oxycodone",test:"Oxycodone",AddInf:"Possible false positives include poppy seeds ; dextromethorophan; dipnehydramine; fluoroquinolones; quinine, rifampin",Brand:"Combunox, Endocet, Oxecta, Percocet, Percodan, Roxicodone, Oxycontin, Roxicet, Tylox, Xartemis XR",Range:"1 to 4 days",Category:"Semi-synthetic Opioids",Type:"Generic"},
{name:"Oxymorphone",test:"Oxymorphone",AddInf:"Possible false positives include naloxone, see list for opiates",Brand:"Numorphan, Opana, Opana ER",Range:"24 hours",Category:"Semi-synthetic Opioids",Type:"Generic"},
{name:"PCP",test:"PCP",AddInf:"Possible false positives include dextromethorophan; dipnehydramine; ibuprofen; tramadol; venlafaxine",Brand:"Angel dust, belladonna, black whack, CJ, cliffhanger, crystal joint, Detroit pink, elephant tranquilizer, hog, magic, Peter Pan, sheets, soma, TAC, trank, white horizon", Range:"1 to 3 days",Category:"Non-opioids",Type:"Illicit"}
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
            $("#jqxgrid").jqxGrid(
            {
                width: 1000,
                source: dataAdapter,
                groupable: true,		
                filterable: true,
				filtermode: 'simple',
                autorowheight: true,
				columnsresize: true,				
                autoheight: true,				
                altRows: true,				
                columns: [
					{ text: 'Drug', datafield: 'name', width: 120 },	
					{ text: 'Drug Test', datafield: 'test', width: 120 },					
					{ text: 'Brand / Street Name', datafield: 'Brand', width: 240 },
					{ text: 'Additional Information', datafield: 'AddInf', width: 240},
					{ text: 'Common Detection Range', datafield: 'Range',width: 180 },
					{ text: 'Category', datafield: 'Category', width: 70 },  
				],
				groups: ['Category']
            });
			$("#jqxgrid").jqxGrid('expandgroup', 0);			
	// trigger the column resized event.
            $("#jqxgrid").on('columnresized', function (event) {
                var column = event.args.columntext;
                var newwidth = event.args.newwidth
                var oldwidth = event.args.oldwidth;
                $("#eventlog").text("Column: " + column + ", " + "New Width: " + newwidth + ", Old Width: " + oldwidth);
            });		
        });




