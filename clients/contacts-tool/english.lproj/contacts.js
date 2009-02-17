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
  
  // needsDesigner: YES,
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
        layout: {centerX: -126,top: 101,width: 73,height: 23},
        value: 'First Name'
      }),
      SC.TextFieldView.design({
        layout: {centerX: -39,top: 121,width: 254,height: 31},
        valueBinding: 'ContactsTool.detailController.firstName'
      }),
      SC.LabelView.design({
        layout: {centerX: -124,top: 171,width: 73,height: 23},
        value: 'Last Name'
      }),
      SC.TextFieldView.design({
        layout: {centerX: -37,top: 189,width: 254,height: 31},
        valueBinding: 'ContactsTool.detailController.lastName'
      }),
      SC.ButtonView.design({
        layout: {centerX: 45,top: 240,width: 86,height: 21},
        target: 'ContactsTool.detailController',
        action: 'commitChanges',
        isEnabledBinding: 'ContactsTool.detailController.hasChanges',
        title: 'Save'
      }),
      SC.ButtonView.design({
        layout: {centerX: -62,top: 241,width: 86,height: 21},
        target: 'ContactsTool.detailController',
        action: 'discardChanges',
        isEnabledBinding: 'ContactsTool.detailController.hasChanges',
        title: 'Cancel'
      })
    ] 
  })
 
});