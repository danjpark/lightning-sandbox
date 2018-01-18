({
	myAction : function(component, event, helper) {
	},

	doSubmit : function(component, event, helper){
		let intialABC = component.get("v.abc");

		if(intialABC){
			alert("Value is true");
			component.set("v.abc", false);
		}else {
			alert("Value is false");
			component.set("v.abc", true);
		}
	}
})
