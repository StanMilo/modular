var PersonConstants = {
	PEOPLE 				: "#people", 
	ADD_PERSON_INPUT 	: "#js_add_person_input",
	REMOVE       		: ".js_remove",
	ADD_PERSON 			: "#js_add_person",
	TEMPLATE 			: "#js_people_template",
	TEMPLATE_HOLDER 	: "#js_people_template_holder",
	PERSON_HOLDER		: ".js_persone_holder"

};


var Person = (function() {

	var people = ["pera", "zika"];
	var template = $(PersonConstants.TEMPLATE).html();

	var add = function(){
		var value = $(PersonConstants.ADD_PERSON_INPUT).val();
		if(value.length <=8 && value.length >=3){
			alert("success!");
		}
		else{
			alert("invalid name!");
		};
		people.push(value);
		$(PersonConstants.ADD_PERSON_INPUT).val("")
		render();
	};

	var remove = function(event){
		$(event.currentTarget).parent(PersonConstants.PERSON_HOLDER).remove();
	};

	var render = function(){
		var data = {
			people: people,
		};
		$(PersonConstants.TEMPLATE_HOLDER).html(Mustache.render(template, data));
	}


	$("body").on("click", PersonConstants.REMOVE, remove);
	$("body").on("click", PersonConstants.ADD_PERSON, add);


	return {
		add:add,
		remove: remove,
		render:render
	}

})();

Person.render();

