// ==========================================================================
// ContactsTool.loadingPage
// ==========================================================================

/** @static

  @extends SC.Page
  @author Mike Ball

*/
ContactsTool.loadingPage = SC.Page.create(
/** @scope ContactsTool.loadingPage.prototype */ {
  
  mainView: SC.View.design({
    layout: { top: 0, right: 0, bottom: 0, left: 0 },
    
    childViews: [
      SC.ImageView.design({
        layout: { centerX: 0, centerY: 0, height: 48, width: 48 },
        status: 'loaded',
        value: static_url("images/indicator.gif")
      }),
      SC.LabelView.design({
        layout: { centerX: 50, centerY: 50, height: 40, width: 400 },
        escapeHTML: NO,
        value: "<h2>Loading</h2>"
      }),
      SC.ContainerView.design({
        layout: { centerX: 50, centerY: 200, height: 40, width: 400 },
        nowShowingBinding: 'ContactsTool.loadingButtons'
      })
    ]
  }),
  
  authenticatedButtons:  SC.View.design({
    layout: {top: 0, left: 0, right: 0, bottom: 0},
    
    childViews:[
      SC.ButtonView.design({
        layout: {top: 0, left: 0, width: 86,height: 21},
        target: 'ContactsTool',
        action: 'authenticated',
        title: 'authenticated'
      }),
      SC.ButtonView.design({
        layout: {top: 0, right: 0,width: 86,height: 21},
        target: 'ContactsTool',
        action: 'failedLogin',
        title: 'failedLogin'
      })
    ]
  }),
  
  loadingContactsButtons: SC.View.design({
    layout: {top: 0, left: 0, right: 0, bottom: 0},
    
    childViews:[
      SC.ButtonView.design({
        layout: {top: 0, left: 0, width: 100,height: 21},
        target: 'ContactsTool',
        action: 'successfulLoad',
        title: 'successfulLoad'
      }),
      
      SC.ButtonView.design({
        layout: {top: 0, centerX: 0, width: 86,height: 21},
        target: 'ContactsTool',
        action: 'retryError',
        title: 'retryError'
      }),
      
      SC.ButtonView.design({
        layout: {top: 0, right: 0,width: 86,height: 21},
        target: 'ContactsTool',
        action: 'fatalError',
        title: 'fatalError'
      })
    ]
  })
  
});
