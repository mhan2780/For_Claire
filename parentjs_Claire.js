define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/ep/qualtrics/quep5.js'], function(APIConstructor, epExtension){
	var API = new APIConstructor();
	var global = API.getGlobal();
	return epExtension(
	{
			//The prime categories.
			primeCats :  [
				{
					name : 'Black people', //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [
    				        {word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'}
				    ]
				}, 
				{
					name : 'White people', //Will appear in the data.
					//An array of all media objects for this category.
					mediaArray : [
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'}, 
    					{word: 'Your very cool stimulus'},
    					{word: 'Your very cool stimulus'} 
    				]
				}
			],	

			nTrialsPerPrimeTargetPair:15, //How many trials in a block, per prime-target combination (always three blocks).
			fixationDuration : 500, 
			errorFBDuration : 1500, 
			ITIDuration : 500,

			//Set the image folder here
			base_url : {
				image : "https://baranan.github.io/minno-tasks/images/"
			}
	});
});
