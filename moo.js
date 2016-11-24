(function(){
'use strict';

var $ = document.querySelector.bind(document);

// IndexedDB

var db = new PouchDB('mydb-idb');

db.info().then(function (info) {
  $('#idb').innerHTML = '&#10004; We can use PouchDB with IndexedDB!';

  db.allDocs({include_docs:true}).then(console.log).catch(console.error);

}).catch(function (err) {
  $('#idb').innerHTML = 'Error for IndexedDB';
});

})();
