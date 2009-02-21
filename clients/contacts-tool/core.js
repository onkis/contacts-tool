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
  loadingButtons: '',
  
  
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
   this.set('loadingButtons', 'ContactsTool.loadingPage.authenticatedButtons');
   //this.authenticated();
  },
  
  goStateA3: function() {
    this.set('mainView','ContactsTool.loadingPage.mainView');
    this.set('loadingButtons', 'ContactsTool.loadingPage.loadingContactsButtons');
   //load contacts
   var records = this.Contact.collection();
   this.masterController.set('content', records);
   records.refresh();
   //this.successfulLoad();
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
  
  goStateC1: function() {
   //retry wait
   this.set('mainView','ContactsTool.errorPage.retryWait');
  },
  
  goStateC2: function() {
   //wait server response
   this.set('mainView','ContactsTool.errorPage.waitServerResponse');
  },
  
  goStateC5: function() {
   //Fatal server error
   this.set('mainView','ContactsTool.errorPage.fatalError');
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
  },
  
  loadContacts: function() {
    var handled = NO;
    
    switch(this.state.a){
        case 4:
          this.goState('a', 5);
          this.goState('b', 1);
          handled = YES;
          break;
    }
    if(!handled) console.log('ContactsTool#loadContacts Action not handled in state %@[%@]'.fmt('a',this.state.a));
  },
  
  faildLogin: function() {
    var handled = NO;
    
    switch(this.state.a){
        case 2:
          this.goState('a',1);
          handled = YES;
          break;
    }
    if(!handled) console.log('ContactsTool#faildLogin Action not handled in state %@[%@]'.fmt('a',this.state.a));
  },
  
  retryError: function() {
    var handled = NO;
    
    switch(this.state.a){
        case 3:
        case 5:
          this.goState('a', 6);
          this.goState('c', 1);
          handled = YES;
          break;
        case 6:
          switch(this.state.c){
            case 2:
              this.goState('c',1);
              handled = YES;
              break;
          }
          break;
          
    }
    if(!handled) console.log('ContactsTool#retryError Action not handled in state %@[%@]'.fmt('a',this.state.a));
  },
  
  fatalError: function() {
    var handled = NO;
    
    switch(this.state.a){
        case 3:
        case 5:
          this.goState('a', 6);
          this.goState('c', 5);
          handled = YES;
          break;
        case 6:
          switch(this.state.c){
            case 2:
              this.goState('c', 5);
              handled= YES;
              break;
          }
          
          //handled = YES;
          break;
    }
    if(!handled) console.log('ContactsTool#fatalError Action not handled in state %@[%@]'.fmt('a',this.state.a));
  },
  
  retryCall: function() {
    var handled = NO;
    
    switch(this.state.c){
        case 1:
          this.goState('c', 2);
          handled = YES;
          break;
    }
    if(!handled) console.log('ContactsTool#retryCall Action not handled in state %@[%@]'.fmt('c',this.state.c));
  },
  
  timeout: function() {
    var handled = NO;
    
    switch(this.state.c){
        case 2:
          this.goState('c', 1);
          handled = YES;
          break;
    }
    if(!handled) console.log('ContactsTool#timeout Action not handled in state %@[%@]'.fmt('c',this.state.c));
  },
  
  failedLogin: function() {
    var handled = NO;
    
    switch(this.state.a){
        case 2:
          this.goState('a', 1);
          handled = YES;
          break;
    }
    if(!handled) console.log('ContactsTool#failedLogin Action not handled in state %@[%@]'.fmt('a',this.state.a));
  },
  
  retrySuccess: function() {
    var handled = NO;
    
    switch(this.state.a){
        case 6:
          this.goState('a', 4);
          handled = YES;
          break;
    }
    if(!handled) console.log('ContactsTool#retrySuccess Action not handled in state %@[%@]'.fmt('a',this.state.a));
  }

}) ;
