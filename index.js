const bizSdk = require('facebook-nodejs-business-sdk');

// FB.getLoginStatus(function(response) {
//     if (response.status === 'connected') {
//       var accessToken = response.authResponse.accessToken;
//     } 
//   } );

const accessToken = 'EAAIHqKeNDZBcBAK5JBn1dNZB1PYIlD4glCfFM7C7rNK7mxFmO7JzZBS5Kf8JkKZCK5RyZCCYceWnZBFWwrr9p1E7b0J8ZB1yKYF9cFasV5D6BZBAnu59b7s5hMiOEEZB8TLGQ7gMSgRys5A6E6qjt6ZA12ZBQTlhZBRoPDMEDZBHSZB8T6IqODe4ybFFfo';
const accountId = 'act_1374291752782992';

const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;
const Ads = bizSdk.Ad;
const AdCreatives = bizSdk.AdCreative;
// console.log(Ads, '------------------');
const account = new AdAccount(accountId);
var campaigns;
    
account.read([AdAccount.Fields.name])
  .then((account) =>{
    //   console.log(account, '111111111111111111111');
    return account.getAdCreatives([AdCreatives.Fields.name, AdCreatives.Fields.account_id, AdCreatives.Fields.object_url]) // fields array and params
  })
  .then((result) =>{
    console.log(result, '111111111111111111111');
    campaigns = result
    campaigns.forEach((campaign) =>console.log('+++++++++++++++', campaign.name, '-------------'))  
  }).catch(console.error);