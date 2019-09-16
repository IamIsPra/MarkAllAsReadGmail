function markAllEmailsRead() {
  var threads = GmailApp.search('label:unread');
  for(var i=0; i<threads.length; i++){
     GmailApp.markThreadRead(threads[i]);
  }
}
