// ==========================================================================
// ContactsTool
// ==========================================================================
 
require('core');
 
/** @class
 
 
@extends SC.Page
@author AuthorName

*/
ContactsTool.loginPage = SC.Page.create( // SC.Statechart,
/** @scope ContactsTool.loginPage.prototype */ {
  
  mainView: SC.View.design({
 
    childViews: [
      SC.LabelView.design({
        escapeHTML: NO,
        styleClass: 'welcome-tab',
        value: "<p>TODO: Add login fields</p>"
      }),
      
      SC.ButtonView.design({
        layout: { height: 20, width: 150, centerX: 0, centerY: 0 },
        title: 'Login',
        target: ContactsTool,
        action: 'submitLogin'
      })
    ]
    
  })
 
});