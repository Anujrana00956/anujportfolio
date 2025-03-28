'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d627a7617673d6fc4664c673d465a7ea",
"version.json": "a29e8b22a08aa0274b027931eec216c4",
"index.html": "ce320affe294954a147504329fa1c543",
"/": "ce320affe294954a147504329fa1c543",
"main.dart.js": "df67e92700d807ed416aececd7044c41",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"README.md": "2c68e326957b25793f93441b3b882286",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/stylish-letter-ar-logo-design-free-vector-removebg-preview.png": "31188ceb91c5f7177ad736922821bd04",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "4abc8099e0defc2e822657543982fec3",
"playstore.png": "f0130734ca92a3304d73b6f895c7e4f3",
".git/ORIG_HEAD": "903703a1c6de539960ca009f4eb48aed",
".git/config": "b4d14feab2483862f89dc125da9d50b2",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/95/faf566e007cd635933219c77b0ed1bc51ce638": "9f709056e651ffe0788c3934c626026b",
".git/objects/95/72aa5ceb889b73756747d923d6e660f1a51893": "922e74907223c3fe0718e9c42958f907",
".git/objects/59/62a92b6dbfe10031152c56f8d6e95ef6fefd9c": "0d7225ccf0016f64fb950dbcb3f0f645",
".git/objects/57/6f3378e532c6249a53a91df460fe0bbf5112f0": "5a230287b1ee6cf0914febebc8165340",
".git/objects/9b/5941805c5d21f75ab914524caef20d9a627af9": "7cc306bee5050ad0cbda03b292d1cfbf",
".git/objects/32/f2c22e210f7e9465c2493f4b933812590cac5c": "6bf12d24feaa392987640ae11162c4e8",
".git/objects/35/1de962d5396746f31c377a27cf5efb53c36a1e": "f994c590c7e96990f9e35b3a92b8250a",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/3d/fbb86c288fd325f306d6e6a91949a4d9819fbd": "cd636ca2905a745f93516c2ac3c070bc",
".git/objects/67/211f146723f1f010b516a2440694f5b73d9e1d": "02009d6cf70e7902e79323c47507113d",
".git/objects/0b/626076d7c46c4e8f97d15d88099b9ff52e4d41": "3db5a4e5f3b08fe9e3c3370f16ff5eee",
".git/objects/0b/5b6899544ee98daa373afafe2e8ea061f0ead2": "db6bb19c2968463e8f11d012966786e4",
".git/objects/0e/47221b6d4dfebf2208ec0725f3bf0a72d7ee61": "5f1a7d95e0646b72cabe325e95805764",
".git/objects/0e/6f6680e95a9b9c6d3aa233022969d0adb6ea62": "b431e34a2da94fe688cab17f8640d8d2",
".git/objects/0e/74a2a0f4c1208af0becf01bcc5cabf10f98040": "5309b76b501230849b6ad57d14484f6e",
".git/objects/34/6dbbea6bcb06ec37df5dec5c4b364d9fd4978e": "fc330277dcd553d4b0672df129ba204a",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/5f/3c846b460ef0adde34816133fd1715dedbb934": "198678e71d3f8336787649a857e9389a",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d9/72ee0226ecfe751d8b592ea73a9ed5624a4c57": "f2827ea6ca8177bb6f6ff84e7a9d15d5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/7c0953657a828c33882cc5d1991cd8a8333128": "1d6c15865dfbd4566573ac94c3b35bb8",
".git/objects/ad/66817b7cd83d783e205d080b0f7cb01d9cacd8": "e6de1ccd2589ed33f8440a4110e8f964",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/df/bbc622b1c88e25d3b27d607075fe2febaebe02": "7308a3ddc117c67b9cea3283e42ccc54",
".git/objects/da/01c020f9f55da6dbed90f55c50283877288097": "aac0b1f2dde41e099ecc985506005271",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/bd/0f4d4f28b996a0a56d3e99cacf11ddea5efbab": "f6a9c665763c26885b1bfe04fb7d305d",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/e2/ea63f177cf471a3a0e6ca3a0bded3cda95538d": "096f6cabcdebdcb55edba3650c7c6302",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/171f5c00a0c9097c9ae2dcb55d44bfeecd3a2d": "af90e1fa3614110475bb8665ad565095",
".git/objects/c0/d44a7cd7a69d948c8cfb3fc900a9971464892d": "ce9378939bdd551410962d1b1e4bb06d",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/fc/045a86045f191073ce7a79198344b26788b7fc": "fb1d077e8dbf2330df0a76842e9de504",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/944f16afd27a02c2c42c0a8cce69997edeb807": "3860e1bc8a7753699b49d340b1ab1cf6",
".git/objects/f5/1348c6157f3ac02c86fe20d2e55393d318c279": "2daf1784b21d8cb03d87d91a65d2b627",
".git/objects/f5/494e93f41dbf1032084ea774c8835e319f08a0": "715e37cad7f7bb420745672490258d07",
".git/objects/cf/b0e4cc433952556d9c5d9374115fd843a0661e": "7c9f29cf8007eeaa983c951b1652dc0a",
".git/objects/fe/51cab764a1e28c6ada0d60af81ee1e2489fe62": "c4fcfe9527d9c0d760bdc523e78ef281",
".git/objects/fe/a752f539a6e5d31a5be5d35bc0d05239e9c907": "272bc6245be968318e0f4738e46dded4",
".git/objects/c1/ce9ccd32becb72762ee400852b9c9f952b97ca": "e36dde343dedc940a6ea2417aa1f2a63",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/27/57fba8d15f082a437085842e29790fe7a3b03a": "11aa6c1cdfddb550cc8114f5188c4449",
".git/objects/27/7a82fe5fb31a783ff215df99eabd658391af61": "b1c80c070060412ac78ea63205666d61",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7d/9f254b3cd6fb04d42d9c13c6a198588ce1405f": "82b000f2061c4f4aa2b49babad20bcc0",
".git/objects/16/8bfc889384744e74eaba961680f16944f19a8e": "6b0726e28b67699f3b595c58d6147395",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/89/7f552304a52e67105f05b336b057e16ced51b4": "076528f89824fe6509e3ccf2f7b3c2c5",
".git/objects/89/ff915ee546e023e5ca1b105f2ba8791d79a5e1": "980b8af813011331a81652fe6b11ee13",
".git/objects/73/7a067d4fbe6cac5bb9ffabc90982bbd6323248": "48724c4e3951027dbe4be7efe71e441c",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/74/815fbd8cc466f3f1880aece9382d447d4304fc": "8a6965fa6530e085a2c3b6c8533e5929",
".git/objects/28/ed37d90c99eb684521dcd5f640920ed7d86211": "f62d72f9affe3c13fb3e51c688f1c671",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/17/9f44e634c15ca00de11a350be1fcd02d8312dc": "ce8a7bfdcba572ba1374c46edce12d26",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/17/6b7b910d56631b9a2f5751a0a8ca4a2df15403": "034ee3ce6d6d878bc649686be177dad7",
".git/objects/7e/cbd9f645dbd186bbde77ad886b087b88632e72": "95a8da9e85b5c262195b9cf8894506f7",
".git/objects/19/d549ebe76ef9871eb1b5afb51474b1d684bf49": "b5ee7f53a81a524fa6aef0831517db2c",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/75/b59fee567390a2176cdc95d397ab15b8b7e558": "640d04acdb2b72c1ba95e4a9acb42e35",
".git/objects/86/167891fb67942b57ac78270bccea384a8f3e1c": "bb62512a514da33f647e1c5816572d4e",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/2a/272aac1652d668239b5dec2e1e294117f48572": "7879da05483c0d26e72cd0ea24a15fe4",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2a/a833018d33d9591f2fc8aede0a3b4a0e2fb311": "4d32366e7137a7e647e41a144598a92c",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/2f/e279f1192d5390f61744513ae0b306cbff0e7a": "8b3cad0e72a87c8e1d2385fb0c87b6f1",
".git/objects/6b/a6b108cbcc9d989798dd5c8265851e6550180d": "f70b46c18b84cb4323c4f97aea128185",
".git/objects/07/11b65dc532f8effb0a432a311626e4f8716a97": "2e476d8244a8d298b26725a327ca307e",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/31/c25456478b395701699f15e63b67414f8bd44e": "775585c475c1729ac8c2729d1daf7da3",
".git/objects/65/ca8cac5688008713a1a5a6d2258d70574caec6": "9810c2e8e0c4fda6d714ee64aef8cf4e",
".git/objects/96/cdddb2d530ade7ecc0399b55101359b4e1981f": "3710a33fbbd281f0310d9dd79a7ca5d0",
".git/objects/54/a0ff73de861dabd78da55aa48004cadc6ae893": "53189cf8cc173c50ce9b752a33d2c6a9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/4576394b52767a9ad17467ec02c3e6863473f5": "f2eec4471df52baf9fe19d99b7be94cf",
".git/objects/5b/9c57b9e97a4ff414acfe7eca5ca46b65130f53": "780d5174d8044cd16ba57a65444b8b38",
".git/objects/37/00761c19bd7cd81787e8e5a11b10f3ba81d400": "7d6220630f9ad9008ffa0a93278f0e70",
".git/objects/37/2241a2d551f60f0d265b752e00e44e1ffe841b": "2b4e84df5726a5cb1fa6544a8dcdb1f8",
".git/objects/08/0324469364bcec55808b55f2c6c2ff493b0ae8": "1ef027f57f0c6d8c0ee2cd87af709407",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/01/be045edf7052df737c7627f8e261346efd29dd": "73ecbee3a8c2fc7f1db1b060e0d688e4",
".git/objects/06/12f4cecc1962d2400f726f5ac09602ea35e764": "89e5163475d6f66715e44c20f608ac76",
".git/objects/39/7e59bab3885b0e6bbf6fe07225bd20f35f99bd": "ebda8201318ba6e5c398b5ce9328b72f",
".git/objects/55/ea51fcc2b2042135b22fc082b94d5479cef0d2": "6a8b2e7d8438dec6bc5845d667678750",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/b2324f9485128901367cc99891dd65e900b60b": "ac5c26b1d385ce4b77b852442c4796ab",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0f/d5c2b5b51cacdd563f342e0952e970d2eefde5": "5efc0969262782e287324e5a6747d2fb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/ba/50c828254e73c225377b30de8f6be700a35916": "87328c8715b1cdbdf29836385def957b",
".git/objects/a7/80b314966dc2ce5246d87d364de0ae7cf9231c": "b74721a8570df41dc8be74c1990cda91",
".git/objects/b8/1a4c8c711a0ee9ade521b7d3bf8e185e71784c": "1c8827c859779b5d3e99e70420c5dd02",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/93d34b9ffb2e5a1031198089973a4ba25b562a": "11aeb08d94c9b2aa637d6821496f414f",
".git/objects/dc/30fe3efc9cdc7804198dcda721b9be71832104": "5c516997c8bacd300e75e6cb8d93ae77",
".git/objects/a9/2e81f0e76cd2b5482f6eb71903b39083f32209": "a64bea2b3e7a62a07735fc027d51bfa9",
".git/objects/a9/f4f20ad110cc84c1aeeb262b0dd725101473a9": "fb185e7bf11cff44f5d0fa7e8f9ad372",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/a9/43b803cd32a834aa8c87abadeee048a5010212": "1acf934009917b179baa1fafe97aa5ac",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d5/f89a71e54ab9d3c1a5798ecfa35e037f99e139": "a8570a49c33f4f547415358a802312d2",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/d2/0c858fd27436ae0ab4c256cc3bdf0e97c44c51": "544b50567d2f7d00a8dc326081e3f96a",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/f1a6279dc57d5fb822b18bb3becbeb30bd36d5": "45db5f71f9f7c093023ea2a9f2819646",
".git/objects/db/4dee9acbe764701b0436238be5af038ced236c": "17f939595e4998de32b6f1d549d77fa5",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/db/e449be3cef6aa139aa0676ed6b04a6dff033f5": "31a3de3557ad608212d9ffe3c2ca2ca3",
".git/objects/de/40a2722930ed523d909824850b882dfbcd7c60": "fe59dfc5e16f886364cd56c267ec960c",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/a1/0724cc610c2312eb3adbf776ecebcf5200bc82": "7ce243f3b69cf1eb6aa6d7d339b3264e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/4aa722106fcb58430323927d1d0c7fa29cfe6e": "1722e4cf27464779e4aaa2b2c2e4d2f5",
".git/objects/ea/2553d377af3d7a2b135d746cc9690f2c473bc8": "4f854e8b33801112c7a9bcf667e107f4",
".git/objects/cd/12e3353065de27bd0dda269f641fe79fb058e9": "7b198ecabdf242a0d045a6eea763a82e",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/9b0470cd0596cad540643373b899e9cca3a62a": "40436a88feaf9e16da348ff04cee9b8d",
".git/objects/cc/76003aad294a13d856ef681748a198b906c57b": "4c0fbb6dee9c9ba1c0f17930b258f111",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/fa/68ccf18a3102f6aa9dc77a5b4993929b558d26": "5f0eacd1fb9acfbb9e6de1fad7e1a7e4",
".git/objects/c5/cc4fb1ae3fb231dad944fc45de4912786618bf": "abb96367410615d9123ac00c34db70fe",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/f1/23e604a00c1dc6350f676ced203f7872948880": "f98c6585d0cb2f140f4dbe4b5eba1329",
".git/objects/cb/45a933f0f696a2e24a4ec38c7e306cf3863600": "33ecae219c13ac2d8f28a2610c38de88",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/1b/83558fb81a4f37c5e691ac427bd5e49aebb18d": "35d4a6f172d0cc65b6be17d1a56cd2f2",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/77/6f18ec43aecd2af7a7a029903dc4f9254a412a": "1468d1ffa0f350ec55ee346231b8a551",
".git/objects/1e/0923e42eea9be7bf401235c18a56ed2ee411fd": "4a619718e4885e51ec208ec355b248af",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4a/8526c06af296ae4d1bbf0de481de4aade0b04a": "02a9eb90687cb942f424ca3a5b4b310a",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/4f/7135e10229f4c45b4fcf6131ddfb4cd627cab0": "e1a3403d0f5e0e3e47ca150ea11dd4f5",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/f8a7251a287fd5af2a91fa8c3d5deafa11be95": "54a5d6b37768675ef485ccb1a73a8c18",
".git/objects/15/7af70093b58a1a19f49a5a1806e3c93014adb8": "d5e32774334bf23ae8f19d58ed53f387",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/71/3ca11c620296e49a7d0c2f5d06d07c2503b378": "c61d552e40165ecd03e24ae85d103526",
".git/objects/71/707cdbf9bd66630a3ad2fb6330de60e4bb27df": "525e6285c07139fc281b600d9491c90f",
".git/objects/76/9f429d8432df4d2b9199867e5f177e5b70fac0": "ab4737048052bc366fa02ba129065d17",
".git/objects/76/73de2a06634952a86f08db2ad65e5d362d544f": "efdab2cafa04361154f9db3049fca0dd",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/82/cdbd06d05a2d568222644575888c9c064894f3": "7f2d494e205e1948f28531edb14d68ba",
".git/objects/82/107fad95d19f0a8e08247d51cc77908ed3497d": "b15fa920d6f0359de425900a83483f17",
".git/objects/49/f7fbf534608f38d42a844180850ba102801f69": "dff2804fc000aeaba231e560f26ffcf8",
".git/objects/40/804c0f3f9676c0d4ec12c07b576a06b1b2c76d": "55dec5b740ef55a2b74f16b07da63150",
".git/objects/40/55861e1ceac96b14f777d48b949f25dfa9297e": "3794c5fbca8f5cd062caa49fc9d85c89",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/2b/11a599ac714bc356d3ca0f453afa3d5d5af20c": "bec4394ef47cf55e95e8729db442278d",
".git/objects/47/95541a6364c537c4dbb96f2445260d62aff500": "859f9dd4574ed1e6ab5b015c95e20894",
".git/objects/78/800fcc6cb6d7477da3fdf8ce65a37f2dd79de4": "749bf037efec095c648aef070d397b45",
".git/objects/78/d885ddcba5ca03d42a68683fd7a85db2c92a99": "9cf45e52cbbf93841b8f9542c9a982f6",
".git/objects/78/f41be656b499d2cb855b99eb0a27ee999adf7f": "0104d094858959fe4e7fb6f424ac2c31",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/8b/0b1db870afeb65c72f19ae9c70520f74bab388": "24710a46a3faba6b4e97d01d45be0356",
".git/objects/7f/4f565d29ea459166be8e7bcbbe93979fdbcffd": "d21c372218901dc0ae386bf389c89825",
".git/objects/7a/4bfe19dd34e5cad5c9975aed16476b7cd30e41": "035c87cc4e4fec110182e6fcdc46a153",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/14/d77a9c2f87c62ea2c37d158c4ef00e5347ec59": "04ece9a8dad293f1e5119178d6c50271",
".git/objects/8e/5947920952a40d3a2d6892ab17236cfbf3683d": "bd3766d2d3263e55db669c342b355609",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/22/e8f2643b0721ff22997fe04cb21ae88d55ff4e": "5dae35cb9f95d71d2863ea8c7df6b953",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "71a287b2887f600e219d5ca2e62414b6",
".git/logs/refs/heads/main": "373d85ae871712540f411b54a94d34dc",
".git/logs/refs/remotes/origin/main": "352674e76966a4a535b1b0dac514e9ce",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4aae98daef0b283aa0f572eecbf4314d",
".git/refs/remotes/origin/main": "4aae98daef0b283aa0f572eecbf4314d",
".git/index": "8553e770ffd20d010529df8d9c03a8f2",
".git/COMMIT_EDITMSG": "a543b9622f7bf1a340a8a6682d09ad17",
".git/FETCH_HEAD": "f834f7822153ea78a9d0eae7f4a4cd7c",
"assets/AssetManifest.json": "cfdf8492f7b24d62ec137ac907523d59",
"assets/NOTICES": "22764d8cda5cee31268c617ce44fd08a",
"assets/data.json": "49da9a71b391b2716bfebca9d8b73fdd",
"assets/FontManifest.json": "eb13a0d169d41e78994c5d6eb9075409",
"assets/AssetManifest.bin.json": "8aa6c6e7c57c5b2c0c1a1df9288ca259",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "08a79af8e4ca832c0229ca368389dda5",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "0bee8b8f98c505367f7ccd0763b35833",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/anuj.png": "ec4552cd574448fa2955b395b96e8672",
"assets/assets/app/1024.png": "5b912dc3a2fcb99be953c94e6b6a2a46",
"assets/assets/1141.jpg": "e3e10c50e113ebd393c56b1531e9bac7",
"assets/assets/Technical-Skills_How-to-Them-Master-in-2022.jpg.optimal-removebg-preview.png": "970a9b9f2df4b05fff4c9bc54aedfb97",
"assets/assets/1fa53026-664f-427c-a53b-874eae130c45.JPEG": "1e35c27f6b5cce4aa7ff74a5ff4790c1",
"assets/assets/projects/9ce5c853-d297-4bbc-8b3d-06cbf1d398e6.png": "584185a1d7740c2d8f9835888ab93735",
"assets/assets/projects/d557c16d-ecc7-4f2c-9415-fc06860ecd59.png": "7c589b8023941ec15b5e6fef492420e1",
"assets/assets/projects/trugroser.png": "b18249d804a10a49769c5e1ad6897a97",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/9d300f38-15a3-4f09-b13f-71eac8238ce3.png": "d3f522fbe4aa1d13e72529f212ce221d",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/2ece6fb7-20e1-4119-a662-63e4711129d8.png": "7a4c03292002a390bdc00edbb5537873",
"assets/assets/projects/vent.png": "80cedfc619fe11138dbb9594ea085c3e",
"assets/assets/projects/medical.png": "bfa8c12ec91520b12712f05307b77236",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/quran.png": "55e8a0c928bc192f682ca0e61cb61ce3",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/amity.png": "d4bc9725c3883efaac7ab4e52516a734",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/airmymd.png": "039e14ad7b0e81879d261d33045e0c94",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/quranB.png": "3cf070457b64cf93d11ad2073bff88e2",
"assets/assets/projects/snackbar.png": "426d7d3320b4207468e1dec6322b3b08",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/Untitled%2520design-4.png": "6b7dd07a68cbe91deb270edcbd462d7a",
"assets/assets/Technical-Skills_How-to-Them-Master-in-2022-768x511.webp": "0a851531d77c91992d8942111a118408",
"assets/assets/fd742e76-5bd0-4991-823c-35f400ee45ae-Photoroom%2520(1).jpg": "ba2c890ee5872922e195c9b52d395b36",
"assets/assets/Untitled%2520design-2.jpg": "6dc44e1a589ca9f980d2c0a6aa538136",
"assets/assets/tech.gif": "3f83ff76d2a4e678627b15efd4793d79",
"assets/assets/black_and_white_image.png": "e2c04f7d01f058f18e4df2f7e4375848",
"assets/assets/Untitled%2520design.png": "a3c729fe8d6c19e60baad176653fafbe",
"assets/assets/Untitled%2520design.jpg": "d2ef8a5c09d8aabc6d9a007ab5777a04",
"assets/assets/work/flutter.png": "5c030bca1741485521cc112f47bdedc9",
"assets/assets/work/st.png": "0957bd1682c5a518247a1844656c0f7e",
"assets/assets/work/widget.gif": "c995cb98eeeadf7c5dc220f9fb3db190",
"assets/assets/work/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/work/develop.mp4": "909b8964f0e5e11075ab4fa3b5d20a7d",
"assets/assets/work/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/work/ios1.png": "54aa8f9521ff6cbd94fe6aaaee8a2f89",
"assets/assets/work/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/work/logo.png": "13ab4820a14afb9c0b848cbc841b62a8",
"assets/assets/work/mobile.png": "cb5cae3434d04ff0957389faf7d2eded",
"assets/assets/work/ios.png": "4588beb25252a64a6ced7b07b851246c",
"assets/assets/laptop.png": "e279fb12f002ed7c1394451000155720",
"assets/assets/about_desktop.jpg": "8427b0f0919f473d354bdd0a342b60ce",
"assets/assets/Technical-Skills_How-to-Them-Master-in-2022-768x511.png": "d555324fea6d005ebdcf3c4072c3e3c9",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/colored.png": "968671063715cb94339f2bd9bbefbaac",
"assets/assets/photos/black-white.png": "78d49bb1d6ba051d64f67c019f97786a",
"assets/assets/photos/mobile.png": "b73399d02fceb26b510b6abe92894d80",
"assets/assets/1fa53026-664f-427c-a53b-874eae130c45-Photoroom.jpg": "3375a30afafdf6d76f5f37a1f686f9ad",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
