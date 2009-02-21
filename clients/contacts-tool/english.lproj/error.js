// ==========================================================================
// ContactsTool.errorPage
// ==========================================================================

/** @static

  @extends SC.Page
  @author Mike Ball

*/
ContactsTool.errorPage = SC.Page.create(
/** @scope ContactsTool.loadingPage.prototype */ {
  // needsDesigner: YES,
  retryWait: SC.View.design({
    layout: { top: 0, right: 0, bottom: 0, left: 0 },
    
    childViews: [
      SC.ImageView.design({
        layout: { centerX: 0, centerY: 0, height: 48, width: 48 },
        status: 'loaded',
        value: static_url("images/indicator.gif")
      }),
      SC.LabelView.design({
        layout: { centerX: 5,centerY: 52,height: 40,width: 110 },
        escapeHTML: NO,
        value: "<h2>Retry Wait</h2>"
      }),
      SC.ButtonView.design({
        layout: {centerX: -64,centerY: 90,width: 86,height: 21},
        target: 'ContactsTool',
        action: 'retryCall',
        title: 'retryCall'
      }),
      SC.ButtonView.design({
        layout: {centerX: 85,centerY: 89,width: 86,height: 21},
        target: 'ContactsTool',
        action: 'logout',
        title: 'logout'
      })
    ]
  }),
  
  waitServerResponse: SC.View.design({
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
        value: "<h2>Waiting for server response</h2>"
      }),
      SC.ButtonView.design({
        layout: {centerX: 0, centerY: 90, width: 86,height: 21},
        target: 'ContactsTool',
        action: 'retryError',
        title: 'retryError'
      }),
      SC.ButtonView.design({
        layout: {centerX: 200, centerY: 90, width: 86,height: 21},
        target: 'ContactsTool',
        action: 'retrySuccess',
        title: 'retrySuccess'
      }),
      SC.ButtonView.design({
        layout: {centerX: 300, centerY: 90, width: 86,height: 21},
        target: 'ContactsTool',
        action: 'timeout',
        title: 'timeout'
      }),
      SC.ButtonView.design({
        layout: {centerX: 400, centerY: 90, width: 86,height: 21},
        target: 'ContactsTool',
        action: 'fatalError',
        title: 'fatalError'
      }),
      SC.ButtonView.design({
        layout: {centerX: 500, centerY: 90, width: 86,height: 21},
        target: 'ContactsTool',
        action: 'logout',
        title: 'logout'
      })
    ]
  }),
  
  fatalError: SC.View.design({
    layout: { top: 0, right: 0, bottom: 0, left: 0 },
    
    childViews: [
      SC.LabelView.design({
        layout: { centerX: 50, centerY: 50, height: 40, width: 400 },
        escapeHTML: NO,
        value: "<h2>Server Error</h2>"
      }),
      SC.ButtonView.design({
        layout: {centerX: -9,centerY: 112,width: 86,height: 21},
        target: 'ContactsTool',
        action: 'logout',
        title: 'logout'
      })
    ]
  })
  
});
