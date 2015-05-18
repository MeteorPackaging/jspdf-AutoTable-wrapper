Tinytest.add("jsPDF - correct export", function(test) {
	// Simply check 'jsPDF' is not undefined...
  test.isNotUndefined(jsPDF, "jsPDF doesn't seem to be correctly exported");

  // Simply check 'jsPDF.API.autoTable' is not undefined...
  test.isNotUndefined(jsPDF.API.autoTable, "autoTable doesn't seem to be added to jsPDF");
});

Tinytest.add("jsPDF - sample table creation", function(test) {
  var
    columns = [
      {title: "ID", key: "id"},
      {title: "Name", key: "name"},
      {title: "Country", key: "country"},
      {title: "Email", key: "email"}
    ],
    data = [
      {"id": 1, "name": "Shaw", "country": "Tanzania", "email": "abrown@avamba.info"},
      {"id": 2, "name": "Nelson", "country": "Kazakhstan", "email": "jjordan@agivu.com"},
      {"id": 3, "name": "Garcia", "country": "Madagascar", "email": "jdean@skinte.biz"},
    ]
  ;

	// Try creating a new document
  var doc = new jsPDF('p', 'pt');
  test.isTrue(doc.internal.pages[1].length === 2);

	// Try creating a new table
  doc.autoTable(columns, data, {});
  test.isTrue(doc.internal.pages[1].length > 2);
});
