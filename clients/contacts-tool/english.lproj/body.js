// ==========================================================================
// ContactsTool.bodyPage
// ==========================================================================

/** @static
    
  @extends SC.Page
  @author Mike Ball
*/
ContactsTool.bodyPage = SC.Page.create( 
/** @scope ContactsTool.bodyPage.prototype */ {
  needsDesigner: YES,
  mainPane: SC.MainPane.design({
    childViews: [
      SC.LabelView.design({
        layout: {top: 200, left: 200, width: 400, height: 100},
        value: 'Hello Nurse',
        styleClass: ['welcome-text']
      })
    ]
  })
});
