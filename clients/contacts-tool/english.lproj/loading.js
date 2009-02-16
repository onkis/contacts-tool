// ==========================================================================
// ContactsTool.loadingPage
// ==========================================================================

/** @static

  @extends SC.Page
  @author Mike Ball

*/
ContactsTool.loadingPage = SC.Page.create(
/** @scope ContactsTool.loadingPage.prototype */ {
  
  mainView: SC.View.create({
    layout: { top: 0, right: 0, bottom: 0, left: 0 },
    
    childViews: [
      SC.ImageView.create({
        layout: { centerX: 0, centerY: 0, height: 48, width: 48 },
        status: 'loaded',
        value: static_url("images/indicator.gif")
      }),
      SC.LabelView.create({
        layout: { centerX: 50, centerY: 50, height: 40, width: 400 },
        escapeHTML: NO,
        value: "<h2>Loading</h2>"
      })
    ]
  })
  
});
