// ==========================================================================
// ContactsTool.Contact
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author    AuthorName
  @version 0.1
*/
ContactsTool.Contact = SC.Record.extend(
/** @scope ContactsTool.Contact.prototype */ {

  // TODO: Add your own code here.
  fullName: function() {
    return [this.get('firstName'), this.get('lastName')].compact().join(' ');
  }.property('firstName', 'lastName')

}) ;
