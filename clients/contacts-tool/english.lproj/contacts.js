// ==========================================================================
// ContactsTool
// ==========================================================================
 
require('core');
 
/** @class
 
 
@extends SC.Page
@author AuthorName

*/
ContactsTool.contactsPage = SC.Page.create( // SC.Statechart,
/** @scope ContactsTool.contactsPage.prototype */ {
  mainView: SC.View.design({
    layout: {left: 0, top:0, bottom:0, right: 0},
    childViews:[
      SC.ScrollView.design({
        layout: { left: 0, width: 200, top: 0, bottom: 0 },
        contentView: SC.ListView.design({
          contentValueKey: 'fullName',
          contentBinding: 'ContactsTool.masterController.arrangedObjects',
          selectionBinding: 'ContactsTool.masterController.selection'
        })
      }),
      SC.LabelView.design({
        layout: {centerX: 0, top: 200, width: 73, height: 23},
        value: 'First Name'
      }),
      SC.TextFieldView.design({
        layout: {centerX: 100, top: 200, width: 254, height: 31},
        valueBinding: 'ContactsTool.detailController.firstName'
      }),
      SC.LabelView.design({
        layout: {centerX: 0, top: 400, width: 73, height: 23},
        value: 'Last Name'
      }),
      SC.TextFieldView.design({
        layout: {centerX: 100, top: 300, width: 254, height: 31},
        valueBinding: 'ContactsTool.detailController.lastName'
      })
    ] 
  })
 
});