# googlescripts_exact_oauth
Google scripts OAuth2 Authentication for the Exact Online API

This script can be used with Google Scripts to authenticate a connection to Exact Online.
A window will popup for authentication the first time this script is run.

There is a note in the code where you are to add your API call to the exact endpoint required.

Sample code(replace ## with your division):

response = JSON.parse(UrlFetchApp.fetch('https://start.exactonline.com/api/v1/##/manufacturing/BillOfMaterialVersions', options));


If you require assistance in pagination on larger data sets and/or iteration over the returned results please contact me.

This link lists the API endpoints:
https://start.exactonline.nl/docs/HlpRestAPIResources.aspx?SourceAction=10
