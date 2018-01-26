({
	// Your renderer method overrides go here
  render:function(component, helper){
    //call base render helperMethod
    //custom rendering
    let a = this.superRender();
    console.log("#### from render when comp gets initiated");
    return a;
  },

  afterRender:function(component, helper){
    // call base after render Method
    this.superAfterRender();
    //interact with Dom elements
    console.log("### afterrnder: this text should come after render() is over");
  },

  rerender:function(component,helper){
    // call base render
    this.superRender();
    console.log("this text is from renderer function.. which gets called whenever data change occuer");
  }
})
