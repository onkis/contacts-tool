// ==========================================================================
// ContactsTool.DetailController
// ==========================================================================

require('core');

/** @class

  ported from sproutcore sample app contacts
  @extends SC.Object
  @author    AuthorName
  @version 0.1
  @static
*/
ContactsTool.detailController = SC.ObjectController.create(
/** @scope ContactsTool.detailController */ {

  // TODO: Add your own code here.
  contentBinding: 'ContactsTool.masterController.selection',

  commitChangesImmediately: false

}) ;
