// ==========================================================================
// ContactsTool
// ==========================================================================

ContactsTool = SC.Object.create(SC.Statechart, {

  // This will create the server for your application.  Add any namespaces
  // your model objects are defined in to the prefix array.
  server: SC.Server.create({ prefix: ['ContactsTool'] }),

  // When you are in development mode, this array will be populated with
  // any fixtures you create for testing and loaded automatically in your
  // main method.  When in production, this will be an empty array.
  FIXTURES: [],
  
  //the container on body.js is bound to this property.  it contains the path to the active view
  mainView: '',
  
  //States
  goStateA1: function() {
   //login screen
   this.set('mainView', 'ContactsTool.loginPage.mainView');
  },
  
  goStateA2: function() {
   //authentication
   //TODO: call the server
   //for now fake a sucessful call
   this.set('mainView','ContactsTool.loadingPage.mainView');
   this.authenticated();
  },
  
  goStateA3: function() {
    this.set('mainView','ContactsTool.loadingPage.mainView');
   //load contacts
   var records = this.Contact.collection();
   this.masterController.set('content', records);
   records.refresh();
   
   this.successfulLoad();
  },
  
  goStateA4: function() {
   //contatcs loaded
   this.set('mainView','ContactsTool.contactsPage.mainView');
  },
  
  goStateA5: function() {
   //loading contacts wizard
  },
  
  goStateA6: function() {
   //failure
  },
  
  goStateA7: function() {
   //switch state
  },
  
  
  //core actions
  submitLogin: function() {
    var handled = NO;
    
    switch(this.state.a){
        case 1:
          this.goState('a',2);
          handled = YES;
          break;
    }
    if(!handled) console.log('ContactsTool#submitLogin Action not handled in state %@[%@]'.fmt('a',this.state.a));
  },
  
  authenticated: function() {
    var handled = NO;
    
    switch(this.state.a){
        case 2:
          this.goState('a', 3);
          handled = YES;
          break;
    }
    if(!handled) console.log('ContactsTool#authentiated Action not handled in state %@[%@]'.fmt('a',this.state.a));
  },
  
  logout: function() {
    var handled = NO;
    
    switch(this.state.a){
        case 4:
        case 6:
          this.goState('a', 1);
          handled = YES;
          break;
    }
    if(!handled) console.log('CotnactsTool#logout Action not handled in state %@[%@]'.fmt('a',this.state.a));
  },
  
  successfulLoad: function() {
    var handled = NO;
    
    switch(this.state.a){
        case 3:
          this.goState('a', 4);
          handled = YES;
          break;
    }
    if(!handled) console.log('ContactsTool#successfulLoad Action not handled in state %@[%@]'.fmt('a',this.state.a));
  }

}) ;
