// [Script]
// http-response ^https?:\/\/m\.poizon\.com\/client\/init script-path=https://raw.githubusercontent.com/cbislovely/sks/master/Script/com.poizon.js,requires-body=true
// [MITM]
// hostname = m.poizon.com

let result = JSON.parse(body);

delete result.data.boot;
delete result.data.bootAnimation;

JSON.stringify(result);
