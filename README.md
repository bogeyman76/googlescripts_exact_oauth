# googlescripts_exact_oauth
Google scripts OAuth2 Authentication for the Exact Online API

This script can be used with Google Scripts to authenticate a connection to Exact Online.
A window will popup for authentication the first time this script is run.

There is a note in the code where you are to add your API call to the exact endpoint required.

Sample code(replace ## with your warehouse id):

response = JSON.parse(UrlFetchApp.fetch('https://start.exactonline.com/api/v1/##/manufacturing/BillOfMaterialVersions', options));

// For paginated data sets:
psdataset = [];
psdataset.push(response.d.results);

while(response.d.__next != null) {  // cycles through bulk API calls until the last data set is found
      response = JSON.parse(UrlFetchApp.fetch(response.d.__next, options));
      psdataset.push(response.d.results);
}
//////

If you require assistance in pagination on larger data sets and/or iteration over the returned results please contact me.
