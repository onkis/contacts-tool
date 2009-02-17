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
      SC.ContainerView.extend({
        layout: {top: 0, left: 0, bottom: 0, right: 0},
        nowShowingBinding: 'ContactsTool.mainView'
      })
    ]
  })
});
