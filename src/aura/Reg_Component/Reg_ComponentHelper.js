({
	helperMethod : function() {
	},

  OnClickCheckBoxHelper: function(component, event){
    // body of helperMethod
    console.log("this is changed from helper!");
    let checkBoxValue = component.find("checkBox").get("v.checked")
    console.log(checkBoxValue);

    component.set("v.CheckBoxValue", checkBoxValue)
  }
})
