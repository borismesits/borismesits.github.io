var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="setuptools.data";var REMOTE_PACKAGE_BASE="setuptools.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","pkg_resources",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/pkg_resources","_vendor",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/pkg_resources/_vendor","packaging",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/pkg_resources","extern",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","setuptools",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools","command",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools","_vendor",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools/_vendor","packaging",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/setuptools","extern",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","setuptools-40.0.0-py3.7.egg-info",true,true);Module["FS_createPath"]("/","bin",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:1020957,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1361,2673,4136,5368,6626,7961,9103,10121,11327,12538,13813,15081,16181,17481,18624,19891,21190,22374,23298,24648,26053,27429,28592,29520,30555,31782,32981,34105,35247,36452,37688,38787,40025,41323,42551,43720,44999,46225,47420,48674,49689,50997,52197,53318,54453,55602,56823,58211,59462,60859,62323,63941,65080,66150,67167,67939,68819,69520,69991,70725,71815,72721,73835,74874,76210,77759,79163,80282,81567,82887,84178,85544,86822,88059,89202,90238,91392,93004,94378,95771,97140,98376,99575,100614,101513,102332,103522,104629,105705,106859,107966,108921,110019,111102,112363,113630,114905,116096,117303,118510,119805,120943,122163,123052,123784,124645,125757,126983,128217,129374,130491,131727,132967,133779,134725,135321,136042,137169,138178,139404,140516,141444,142549,143645,144977,146067,147255,148261,149661,150796,151673,152975,154222,155239,156341,157551,158764,159838,160800,161754,162936,163920,165068,166189,167262,168430,169723,170677,171785,172720,173921,175160,176390,177583,178822,179927,180943,182246,183402,184592,185753,187006,188296,189577,190614,192e3,193266,194632,195996,197428,198640,199934,201193,202490,203696,205066,206082,207136,208395,209222,210484,211487,212853,213777,214668,215758,216693,218071,219207,220319,221298,222404,223479,224619,225535,226724,227629,228555,229792,230956,231812,232917,234075,235062,236049,237333,238386,239610,240518,241853,242866,243796,245153,246361,247561,248807,250070,251427,252761,254587,256446,258198,259955,261668,263552,265356,267007,268828,270687,272534,274328,276126,277748,279367,281026,282913,284651,286478,288349,290110,291926,293719,295602,297237,298479,299126,300288,301336,301794,302889,304226,306058,307920,309683,311435,313154,315042,316853,318479,320299,322171,324044,325876,327677,329309,330961,332600,334465,336226,338044,339911,341689,343515,345261,347148,348908,350150,350797,351960,353010,353467,354593,355840,357612,359385,361157,362987,364804,366497,368292,370151,371784,373563,375319,377092,378827,380522,382272,383893,385579,387427,389259,390971,392696,394524,396295,398064,399948,401695,402772,404125,404625,406283,407724,408859,409337,410082,411293,412619,413946,415095,416241,417250,418248,419608,420806,421903,423176,424579,425845,427185,428528,429704,431063,432433,433717,434969,436240,437479,438751,440093,441356,442442,443619,444632,445774,446928,448090,449351,450730,452093,453366,454438,455606,456811,457960,459339,460281,461434,462381,463845,465157,466504,468311,470112,471895,473703,475536,477236,479017,480774,482583,484266,486108,487730,489478,491211,492997,494603,496423,498182,499979,501742,503486,505176,506928,508745,510538,511702,513076,513900,515131,516688,518122,518831,519182,519957,521747,523309,524674,526151,527430,528436,529636,530903,532082,533377,534560,535641,536716,537868,539125,540562,542081,543301,544366,545506,546642,547861,548945,550197,551136,552293,553576,554708,556005,557358,558466,559770,560968,562275,563661,564830,565977,567135,568258,569331,570521,571571,572369,573688,575494,577371,579175,580867,582590,584471,586316,587828,589673,591527,593403,595221,597017,598643,600285,601899,603784,605545,607353,609221,610991,612822,614592,616475,618071,619494,620048,621208,622450,622924,623893,625018,626175,627348,628533,629379,630150,631284,632220,633253,634276,635213,636176,637466,638277,639065,639930,640805,641661,642421,643619,644825,646220,647390,648499,649732,651574,653411,655281,656894,658722,660497,662377,663982,665823,667651,669544,671379,673187,674803,676534,678255,680047,681850,683654,685454,687278,689095,690903,692701,694446,696049,696818,697879,699317,699856,700653,701914,703122,704394,705612,706841,707970,709174,710488,711687,712792,713859,715095,716379,717703,719050,720350,721506,722645,723735,724885,726037,727245,728567,729649,730794,731885,733061,734252,735542,736531,737416,738713,739758,740923,742185,743479,744586,745885,747135,748234,749401,750705,751888,753001,754417,755785,757165,758481,759734,761090,762259,763512,764615,765855,767101,768301,769552,770879,772e3,773173,774299,775555,776780,778114,779504,780807,781989,783341,784622,785488,786608,787762,788868,790040,791224,792616,793871,795118,796453,797651,799042,800186,801442,802601,803979,805084,806124,807243,808325,809310,810502,811758,812991,814121,815378,816528,817674,818867,820099,821157,822147,823368,824644,825733,826932,828170,829351,830421,831174,832049,833349,834518,835833,837073,838305,839330,840796,842113,843215,844323,845161,846093,846745,847382,848050,849098,849993,851053,852172,853434,854829,856495,857953,859406,860882,861994,863285,864432,865345,866390,867362,868469,869478,870589,871664,872816,873766,874931,876009,877021,878254,879489,880551,881731,882895,884218,885367,886453,887188,888150,889068,890229,891476,892719,893655,894892,896150,896870,897998,898886,899328,900505,901554,902691,903845,905042,906092,907081,908392,909502,910529,911680,912928,914186,915112,916319,917497,918679,919519,920680,921970,923238,924394,925157,926107,927089,928064,929195,930403,931641,932798,933959,934932,936084,937057,938326,939516,940733,941884,943180,944269,945576,946582,947777,949e3,950168,951469,952819,953997,955412,956550,957885,959192,960542,961875,963094,964221,965645,966767,968155,969387,970160,971348,972478,973644,974691,975971,977270,977952,978916,980037,981324,982583,983690,984650,985584,986819,987827,988733,989807,990945,991872,993025,994185,995057,996259,997469,998266,999430,1000642,1001740,1002880,1003881,1005143,1006318,1007065,1008343,1009643,1011033,1012267,1013610,1014834,1015742,1016319,1017014,1017908,1019014,1020178],sizes:[1361,1312,1463,1232,1258,1335,1142,1018,1206,1211,1275,1268,1100,1300,1143,1267,1299,1184,924,1350,1405,1376,1163,928,1035,1227,1199,1124,1142,1205,1236,1099,1238,1298,1228,1169,1279,1226,1195,1254,1015,1308,1200,1121,1135,1149,1221,1388,1251,1397,1464,1618,1139,1070,1017,772,880,701,471,734,1090,906,1114,1039,1336,1549,1404,1119,1285,1320,1291,1366,1278,1237,1143,1036,1154,1612,1374,1393,1369,1236,1199,1039,899,819,1190,1107,1076,1154,1107,955,1098,1083,1261,1267,1275,1191,1207,1207,1295,1138,1220,889,732,861,1112,1226,1234,1157,1117,1236,1240,812,946,596,721,1127,1009,1226,1112,928,1105,1096,1332,1090,1188,1006,1400,1135,877,1302,1247,1017,1102,1210,1213,1074,962,954,1182,984,1148,1121,1073,1168,1293,954,1108,935,1201,1239,1230,1193,1239,1105,1016,1303,1156,1190,1161,1253,1290,1281,1037,1386,1266,1366,1364,1432,1212,1294,1259,1297,1206,1370,1016,1054,1259,827,1262,1003,1366,924,891,1090,935,1378,1136,1112,979,1106,1075,1140,916,1189,905,926,1237,1164,856,1105,1158,987,987,1284,1053,1224,908,1335,1013,930,1357,1208,1200,1246,1263,1357,1334,1826,1859,1752,1757,1713,1884,1804,1651,1821,1859,1847,1794,1798,1622,1619,1659,1887,1738,1827,1871,1761,1816,1793,1883,1635,1242,647,1162,1048,458,1095,1337,1832,1862,1763,1752,1719,1888,1811,1626,1820,1872,1873,1832,1801,1632,1652,1639,1865,1761,1818,1867,1778,1826,1746,1887,1760,1242,647,1163,1050,457,1126,1247,1772,1773,1772,1830,1817,1693,1795,1859,1633,1779,1756,1773,1735,1695,1750,1621,1686,1848,1832,1712,1725,1828,1771,1769,1884,1747,1077,1353,500,1658,1441,1135,478,745,1211,1326,1327,1149,1146,1009,998,1360,1198,1097,1273,1403,1266,1340,1343,1176,1359,1370,1284,1252,1271,1239,1272,1342,1263,1086,1177,1013,1142,1154,1162,1261,1379,1363,1273,1072,1168,1205,1149,1379,942,1153,947,1464,1312,1347,1807,1801,1783,1808,1833,1700,1781,1757,1809,1683,1842,1622,1748,1733,1786,1606,1820,1759,1797,1763,1744,1690,1752,1817,1793,1164,1374,824,1231,1557,1434,709,351,775,1790,1562,1365,1477,1279,1006,1200,1267,1179,1295,1183,1081,1075,1152,1257,1437,1519,1220,1065,1140,1136,1219,1084,1252,939,1157,1283,1132,1297,1353,1108,1304,1198,1307,1386,1169,1147,1158,1123,1073,1190,1050,798,1319,1806,1877,1804,1692,1723,1881,1845,1512,1845,1854,1876,1818,1796,1626,1642,1614,1885,1761,1808,1868,1770,1831,1770,1883,1596,1423,554,1160,1242,474,969,1125,1157,1173,1185,846,771,1134,936,1033,1023,937,963,1290,811,788,865,875,856,760,1198,1206,1395,1170,1109,1233,1842,1837,1870,1613,1828,1775,1880,1605,1841,1828,1893,1835,1808,1616,1731,1721,1792,1803,1804,1800,1824,1817,1808,1798,1745,1603,769,1061,1438,539,797,1261,1208,1272,1218,1229,1129,1204,1314,1199,1105,1067,1236,1284,1324,1347,1300,1156,1139,1090,1150,1152,1208,1322,1082,1145,1091,1176,1191,1290,989,885,1297,1045,1165,1262,1294,1107,1299,1250,1099,1167,1304,1183,1113,1416,1368,1380,1316,1253,1356,1169,1253,1103,1240,1246,1200,1251,1327,1121,1173,1126,1256,1225,1334,1390,1303,1182,1352,1281,866,1120,1154,1106,1172,1184,1392,1255,1247,1335,1198,1391,1144,1256,1159,1378,1105,1040,1119,1082,985,1192,1256,1233,1130,1257,1150,1146,1193,1232,1058,990,1221,1276,1089,1199,1238,1181,1070,753,875,1300,1169,1315,1240,1232,1025,1466,1317,1102,1108,838,932,652,637,668,1048,895,1060,1119,1262,1395,1666,1458,1453,1476,1112,1291,1147,913,1045,972,1107,1009,1111,1075,1152,950,1165,1078,1012,1233,1235,1062,1180,1164,1323,1149,1086,735,962,918,1161,1247,1243,936,1237,1258,720,1128,888,442,1177,1049,1137,1154,1197,1050,989,1311,1110,1027,1151,1248,1258,926,1207,1178,1182,840,1161,1290,1268,1156,763,950,982,975,1131,1208,1238,1157,1161,973,1152,973,1269,1190,1217,1151,1296,1089,1307,1006,1195,1223,1168,1301,1350,1178,1415,1138,1335,1307,1350,1333,1219,1127,1424,1122,1388,1232,773,1188,1130,1166,1047,1280,1299,682,964,1121,1287,1259,1107,960,934,1235,1008,906,1074,1138,927,1153,1160,872,1202,1210,797,1164,1212,1098,1140,1001,1262,1175,747,1278,1300,1390,1234,1343,1224,908,577,695,894,1106,1164,779],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_setuptools.data")}Module["addRunDependency"]("datafile_setuptools.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/easy_install.py",start:0,end:126,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/__init__.py",start:126,end:103939,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/py31compat.py",start:103939,end:104492,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/__init__.py",start:104492,end:104492,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/six.py",start:104492,end:134590,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/appdirs.py",start:134590,end:156964,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/pyparsing.py",start:156964,end:386831,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/__init__.py",start:386831,end:387344,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/specifiers.py",start:387344,end:415369,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/_structures.py",start:415369,end:416785,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/markers.py",start:416785,end:425033,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/utils.py",start:425033,end:425454,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/version.py",start:425454,end:437010,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/__about__.py",start:437010,end:437730,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/requirements.py",start:437730,end:442085,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/_vendor/packaging/_compat.py",start:442085,end:442945,audio:0},{filename:"/lib/python3.7/site-packages/pkg_resources/extern/__init__.py",start:442945,end:445443,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/windows_support.py",start:445443,end:446161,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/cli-32.exe",start:446161,end:511697,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/gui-32.exe",start:511697,end:577233,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/launch.py",start:577233,end:578020,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/gui-64.exe",start:578020,end:653284,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/wheel.py",start:653284,end:661386,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/lib2to3_ex.py",start:661386,end:663399,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/monkey.py",start:663399,end:668603,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/namespaces.py",start:668603,end:671802,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/__init__.py",start:671802,end:677516,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/package_index.py",start:677516,end:717826,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/archive_util.py",start:717826,end:724418,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/sandbox.py",start:724418,end:738694,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/dep_util.py",start:738694,end:739629,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py33compat.py",start:739629,end:740824,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/cli-64.exe",start:740824,end:815576,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/glibc.py",start:815576,end:818726,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/extension.py",start:818726,end:820455,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/build_meta.py",start:820455,end:826126,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/ssl_support.py",start:826126,end:834618,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/dist.py",start:834618,end:877231,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/depends.py",start:877231,end:883068,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/config.py",start:883068,end:901089,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/cli.exe",start:901089,end:966625,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/msvc.py",start:966625,end:1007502,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/site-patch.py",start:1007502,end:1009804,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/version.py",start:1009804,end:1009948,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/unicode_utils.py",start:1009948,end:1010944,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/glob.py",start:1010944,end:1016151,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/script (dev).tmpl",start:1016151,end:1016369,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/gui.exe",start:1016369,end:1081905,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py31compat.py",start:1081905,end:1082725,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/pep425tags.py",start:1082725,end:1093602,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py36compat.py",start:1093602,end:1096493,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/script.tmpl",start:1096493,end:1096631,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/py27compat.py",start:1096631,end:1097167,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/test.py",start:1097167,end:1106395,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/upload.py",start:1106395,end:1107567,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/launcher manifest.xml",start:1107567,end:1108195,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/easy_install.py",start:1108195,end:1195246,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/rotate.py",start:1195246,end:1197410,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/bdist_egg.py",start:1197410,end:1215597,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/register.py",start:1215597,end:1215867,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/__init__.py",start:1215867,end:1216461,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install.py",start:1216461,end:1221144,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/bdist_wininst.py",start:1221144,end:1221781,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/build_clib.py",start:1221781,end:1226265,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/build_py.py",start:1226265,end:1235861,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/sdist.py",start:1235861,end:1242572,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/dist_info.py",start:1242572,end:1243532,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/bdist_rpm.py",start:1243532,end:1245040,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/saveopts.py",start:1245040,end:1245698,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/upload_docs.py",start:1245698,end:1253009,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/build_ext.py",start:1253009,end:1265906,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/alias.py",start:1265906,end:1268332,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install_lib.py",start:1268332,end:1272172,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install_egg_info.py",start:1272172,end:1274375,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/develop.py",start:1274375,end:1282435,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/py36compat.py",start:1282435,end:1287421,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/install_scripts.py",start:1287421,end:1289860,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/egg_info.py",start:1289860,end:1314660,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/command/setopt.py",start:1314660,end:1319745,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/__init__.py",start:1319745,end:1319745,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/six.py",start:1319745,end:1349843,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/pyparsing.py",start:1349843,end:1579710,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/__init__.py",start:1579710,end:1580223,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/specifiers.py",start:1580223,end:1608248,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/_structures.py",start:1608248,end:1609664,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/markers.py",start:1609664,end:1617903,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/utils.py",start:1617903,end:1618324,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/version.py",start:1618324,end:1629880,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/__about__.py",start:1629880,end:1630600,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/requirements.py",start:1630600,end:1634943,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/_vendor/packaging/_compat.py",start:1634943,end:1635803,audio:0},{filename:"/lib/python3.7/site-packages/setuptools/extern/__init__.py",start:1635803,end:1638304,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/zip-safe",start:1638304,end:1638305,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/SOURCES.txt",start:1638305,end:1644909,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/entry_points.txt",start:1644909,end:1647899,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/top_level.txt",start:1647899,end:1647937,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/dependency_links.txt",start:1647937,end:1648176,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/requires.txt",start:1648176,end:1648251,audio:0},{filename:"/lib/python3.7/site-packages/setuptools-40.0.0-py3.7.egg-info/PKG-INFO",start:1648251,end:1651476,audio:0},{filename:"/bin/easy_install",start:1651476,end:1651920,audio:0},{filename:"/bin/easy_install-3.7",start:1651920,end:1652372,audio:0}],remote_package_size:1025053,package_uuid:"a2af9431-025f-40e2-b395-cb36e3b80c7a"})})();