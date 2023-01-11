var OAUTHURL = 'https://start.exactonline.com/api/oauth2/auth';
var TOKENURL = 'https://start.exactonline.com/api/oauth2/token';

var CLIENT_ID = 'your_client_id';
var CLIENT_SECRET = 'your_client_secret';

function run() {
  var service = getService_();

  if (service.hasAccess()) {
    var headers = {
        Authorization: 'Bearer ' + service.getAccessToken(),
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
    }
    
     var url = 'https://start.exactonline.com/api/v1/current/Me';
     var response = UrlFetchApp.fetch(url, {
      headers: {
        Authorization: 'Bearer ' + service.getAccessToken(),
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      }
    });

    
      var options = {
         headers: {
          Authorization: 'Bearer ' + service.getAccessToken(),
          'Content-Type': 'application/json',
          'Accept' : 'application/json'
        },
        contentType : 'application/json',    
        method      : 'get',      

      };
      
     // execute your API requests here
    
  } else {  
    var authorizationUrl = service.getAuthorizationUrl();
    SpreadsheetApp.getUi().alert("Please copy and past into another browser window to login:\n\n " + authorizationUrl); 
  }
}

function reset() {
  var service = getService_();
  service.reset();
}

function getService_() {
  return OAuth2.createService('Exact_addStockCode')
      .setAuthorizationBaseUrl(OAUTHURL)
      .setTokenUrl(TOKENURL)      
      .setClientId(CLIENT_ID)
      .setClientSecret(CLIENT_SECRET)      
      .setCallbackFunction('authCallback_')
      .setPropertyStore(PropertiesService.getUserProperties());
}

function authCallback_(request) {
  var service = getService_();
  var authorized = service.handleCallback(request);
  if (authorized) {
    return HtmlService.createHtmlOutput('Success! You can close this window and continue.');
  } else {
    return HtmlService.createHtmlOutput('Denied. Something seems to have gone wrong...');
  }
}

