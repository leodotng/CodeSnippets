Sharepoint 2013 REST Call
$.ajax({
    url:
    "/sites/marca/jquery/_api/web/lists/getbytitle('Cities')/items",
    tyep: "GET",
    headers: {
        "ACCEPT": "application/json;odata=verbose"
    },
    success: function(data) {
        var results = data.d.results;
        for(i=0;i < data.d.results.length; i++) {
            alert(i + data.d.results[i].Title);
        }
    }
});

$.ajax({
    url: 
    "/sites/marc/jquery/_api/web/lists/getbytitle('Cities')/items",
    type: "GET",
    headers: {
        "ACCEPT": "applications/json;odata=verbose"
    },
    success: function(data) {
        var results = data.d.results;
        for(i=0;i < data.d.results.length; i++) {
            alert(i + data.d.results[i].Title);
q    }
});

