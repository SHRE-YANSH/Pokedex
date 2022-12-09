'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "222875eaff210a97cf0ef265a302ed8e",
".git/config": "006e12870ca77121a96d8e6de50db663",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2a9b048c03f161e60c8837b019bb206f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "35993b165e77d04e0a5921b882ac568d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2905655c8a3989f538338f376dd84437",
".git/logs/refs/heads/master": "2905655c8a3989f538338f376dd84437",
".git/logs/refs/remotes/origin/master": "b0bdfba5091ddea92e59c44a78c4cd51",
".git/objects/01/18cf6bceca00273eeb0bd94debc99cfa419432": "0bf6190ac571ad02c0ceacab0dbc5a1c",
".git/objects/01/e979af5b4f6c319ffef769e8e1aff065b21c8a": "8ddddfd9b43d84a3e7ba81f9aa81ddda",
".git/objects/02/05bb86cb17c6e72fe06c5e3ed4a9814f70fc96": "f9967baab951db73b950d2b669439151",
".git/objects/03/016717265906eb54b0656b7bb7d044698ae9a8": "1bdbc0bf554ebc73b50d8c41462785d6",
".git/objects/0e/b9d0714923fd0668b23e5a9175abdf44ed5300": "66c9ac2f81d376758ab12d17c67684c6",
".git/objects/11/3f028823aad2df5b2fac10daf26516aa4960e3": "e640a070ea6fe2f8f1306f4bbeeff9bc",
".git/objects/14/947a126cace4f45da4aa56e37f300cfe1ef051": "50e6856042ed29d3ecae5a98fbcd782a",
".git/objects/16/c1182c3747785aab301d6e801fba111ff759e2": "620187d87e6e5a3efbb7e40369f556d8",
".git/objects/17/e4f807fc74b940515f26b76cc1b0df9d2ef61e": "955c2142ad3e1baf24032c7d855056d2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1f/cdebb60aa35131281e7bac5b02d2b423fb1ed2": "81422d8a20f3a146d308db0f172cf625",
".git/objects/22/7e4d997908857d1690ffd6e086883bdf3174b5": "3e93b1d49bfd1032c3fc907964ee45db",
".git/objects/22/94193865563479d6245064d3b765c801c4b919": "028945e504d4747d71f13a446a512977",
".git/objects/24/dcf8386a962e76a5fbd1a0ac3969a718db35a9": "8d115a9204745176fd50598a027ee99d",
".git/objects/29/9b74d98d9d991355ea162760648a23ffd6ec25": "03ab18d2dd9c101a59b96f02499c81fd",
".git/objects/29/ac4395d32da37b2ebc1eb0dadafe023b43c31e": "4822f21e692ffc87f2dde07f27084270",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/70b36ed78932b36a88ea33db6eebeb4b1d727f": "08a5ac923e860e30f2ed0bc9ada0c86f",
".git/objects/2b/7b5e89a2b92a04673a89ac5db0bdc55e2931fb": "1de03993d5a03ee9d5c8a7d0bfcfb2da",
".git/objects/2b/e21151c7dd4be43e421b4d08079b70db4d642c": "7d967779aabbf1b4abd370a03fe3b8ee",
".git/objects/2c/ca0d38e2cd5e1047d1adc1ee426c0bacbcd9c0": "d12662badbb1cd6323e41513f990b873",
".git/objects/2e/8d72cded51202f2f70505f5003f8f9b10c83dc": "e2cc5d3baa0891894137010a136f38b1",
".git/objects/33/140cc089cdc11708a25d7cd8e3229cd223f8ad": "c1c4a0d30fbf1a30057ae0aca5dc7e52",
".git/objects/35/0d43cdc7454897742d5ce66ae4ae67e86f9da7": "f4c1c492cc7343a37a4ae14054ee252c",
".git/objects/38/40b6cc848a5331d40a3aa1003e3388b3eb5a16": "872cad26d6f21657605eeec4fa9385d7",
".git/objects/38/6571d5978690165f43ee139c50e274bcba6f60": "7615e8f98f0af769320c3efdbac4e3a4",
".git/objects/38/a3f71472ad690e059d67f0587da2c589681f5c": "2f4770ac8941defc611b263569b4208d",
".git/objects/3e/94444b04a26d2eaef17c796f3a06439afe4ca8": "e4ef7b4192b5831e0b765b0932035cfc",
".git/objects/3f/2a0b43ceedbc2066028105210852001badf331": "44135d5e4408317b7a1b3c693883098c",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/3cfbf664b9a1ddaf8e2c2590f888f6fd343bcd": "91c3c9a45cc6bc4a5e584fdaa7addd44",
".git/objects/42/6feb851225b8ace39ff77e86f7de3487eefb90": "15b0760a65b30bb4293e92b91bb94fe7",
".git/objects/44/06687944d912eebb1436425ab443bd31f24491": "5884dcdadb6589b27a5e0a22a4fb2271",
".git/objects/44/bbfa3b5a6a73a96e1bb684b1c58915da4d8479": "dc097b82d922bcdd220c78f14b4e24e9",
".git/objects/45/fdd93405edcb786831e2d48552d81c04015493": "a166b6c748674c1d93bf2bc9ecf704eb",
".git/objects/46/09316faeb18bdc0fac0aa2c93994c5716fc41c": "26a170c3cd62a7fbb218fd99a39b430e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/7b30424b258576e107add7cddbea0f19d98373": "800d813db6bbd045575943aed643e4b0",
".git/objects/4a/db2ce1fcbfdc50a3892de9693cd0a247484985": "cfbc5f3256bc457c88331aeb2841674a",
".git/objects/4b/495de1d3843115fa476ae43c1701fd789a37c4": "475e863ba2184078a0a893a7b7d56f78",
".git/objects/4b/695f3cee6af4ae10c313197e9f734b828142f7": "dad64f1ccb78fd1684b38ebec3e90e74",
".git/objects/4b/ef3fc677cc35807ae0cf8edcead117c01f6984": "1262c3db3f5437dced829192cb110bfd",
".git/objects/4c/279253c18e68f6eb61181c9c793c9e8192a3a8": "663139c6f9943857dd69cd697863d994",
".git/objects/4c/4fb9175e8eacfa83d4f64b47fdbb92cf09f902": "4d27406be6a86b81018c12b948a6ace2",
".git/objects/4d/2834190605d0010541a058e6ff51ea0200efe5": "b08486b1e23fee01eaaff6b5f20f83f8",
".git/objects/4e/81f5e0e176b816f84b072bd804919c0a855d91": "6512d1a4f686a093fabf69be7dd2e7d9",
".git/objects/4f/8faf7ccc63fe995e2872e0033b84d2df601a81": "2aa5f4cd7105993835596427d2502415",
".git/objects/4f/94a649a01a404aadbe3a708b79b6c21f017954": "acfa79fcec757fb874b95957e77bcb53",
".git/objects/50/ee94615acf233320f8da7a6b6838256b831a1b": "f1b9a8d478eca8e03e39c71972fdf7ac",
".git/objects/51/3c6c415f146360bb42d29842d18582e46a8b07": "9612279954978aa5fb070e3108be7c55",
".git/objects/51/9e3d03a5ce53ab6e7428a0d28032907cc05509": "14c6fcb80cef6c003e3ae7e8ff3cdb85",
".git/objects/52/93f3d29989dff8fcdd77fbeadc1b1da725bc04": "c1d5d6c09fb3b51bfebf1e499c54cf2b",
".git/objects/55/8b6c707252eb5112a499a222c17ce7d9e5e0ce": "8ea5da75586a53c828316de618a86bd4",
".git/objects/55/a2ea46beac4fe134a53b491abe0c0fa7cc4823": "e8bd3500f47508965f1935c30a7fa050",
".git/objects/59/3a9149c46b4f364b6b6f52efd6ba4ecd7d46d5": "77d5cb55330ae276889c82ceb574165a",
".git/objects/59/eab38e2c19463e1c73d11f68380a318826eba7": "7e4454afb9f360e9fbc9e286109f71d9",
".git/objects/5b/5401131ef9a0e14a99720088143c7503a8cf42": "66d0b2a569bef58f7017c178216a9ea0",
".git/objects/5b/cb018b40f0e5d02ecea267aafa231f4229fec2": "5ee23254fb43c584675a91ceddd0b050",
".git/objects/5d/7bba092700ed6d43277cd53c58bfc633ba368b": "47d4a0a226f7573381ec22fbf7c64fe9",
".git/objects/5d/8eefd098543bda3128406b6aa0fd2443a6a1dc": "2dd73b05253105b8633bfe02048f83f3",
".git/objects/5e/9780fb1680e46f687391ab1f1a4564e5024ca7": "937ae0c25a9fb2428b6325e714e72205",
".git/objects/60/b06dc7d0c74654b30ffe5ce81e80daec4dcc43": "d41bb848b942dcad3f8a8e4a170f9842",
".git/objects/61/92c9d8a766cd119ce8308767008cd7280c7318": "037e1c355cc7842039e3aedfe9ab8e86",
".git/objects/66/eff555211a67f875e8b446a3570557338732f2": "9e9a2064c063dc96bf66e85f7a489f2f",
".git/objects/67/48ae79e8f5780592c98df12d051045412f0163": "f7b3ac0a1151855083b112ceb9dcc280",
".git/objects/68/31cbd35913a7414a7d04dbf461ed37bd1d6a40": "f4d948c7b61c4968388b41b337a1c244",
".git/objects/69/6421d5d68c320c79905c77fc13b2a546775ca6": "1231d013319f08f9e07dee746ecaec6d",
".git/objects/6a/2121ef43b195717799bcd55e82c57b2e924191": "a0ebdd077e5714416626be3d3de1b612",
".git/objects/6b/91d79a29d140e3227afb5a9a1a77ba412b362c": "d0e3990830d734e09122df47896c5491",
".git/objects/6c/11b1ea42dbab455aa88047f80fb0cf5abc652c": "9075889bc9e3336bf75d89d97a7576e4",
".git/objects/6c/16bf1ec27aaea226338449a0bb80122a8f471c": "dc447c7d7d5813c0b42ec18320768a09",
".git/objects/6c/c7469a9208ff12be7a62117f9530ba3d7bfaec": "77cffc4856c7860a1936e4a13cd8c8a8",
".git/objects/6d/4afc64d4c9edd3e67b7bc20692c7611273cd4d": "77ae0d9b6394beb5dce5bed5afa753ae",
".git/objects/6d/c8041bd8fcca7bda57ea77aba60b68f3da9a20": "26a7a2c24801a8f8b19877c88b1f50de",
".git/objects/6e/ccb7440d000173ed68198510285054be7da6a5": "f9f40eb399fc0e0ac32c2330266a035d",
".git/objects/6e/e73d8232064ca465eef4dc3a17c44325ef88d8": "691e5a5304341d8fb271736469a2c7be",
".git/objects/70/13ce45a94c793adbf8ba8a48130d9b2807cd7d": "080146e8990475ef4eae87b1ee1d6d98",
".git/objects/73/25730d09484c8c5b4f68bdc54927e306fe5ded": "30bb9b04428420fde3f161ae520511a9",
".git/objects/73/2eaf5a2f7266c6d73a62c4b941578dedbe65f9": "3bbe285812fe22c5a0a54eb2ba484e42",
".git/objects/74/53e49804e6fc5503ff5675c639f1a385cd0489": "097d053efeaaa140fa395a7dd09ed4a6",
".git/objects/74/5c6f818c42ad880e833f2da07070379e0e6f74": "8ab1e083eb36a5a144f6038b44c5c442",
".git/objects/75/2c0333d20ed80c374fbaefbc86494dfa92618d": "7e6e5c097edd5721c87510b82ba50e86",
".git/objects/75/8d92acabcbce2e72a78f09bd15024eefa23860": "a264b7866c83bc9233ac041b3bf76443",
".git/objects/79/3a327cb4b7eb82b3aef9c23fc911d0595bf238": "3e0309e383d57e4c558568b251400fdf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/f9de8755f499e243869cba85eb3fdfbfeb6ee5": "48cad4399f2efa0a0c839351bf7f2bfe",
".git/objects/7c/43969e3b6ed0612b3d2c26546d67c526f5b8b5": "aab5a3e1f9d8caf398425aca67300a3f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/8f351a30fbe8b74c173f33d5c642c8f5f47bdc": "651b6a21ac466d3e3b9f1e9c335c0a0f",
".git/objects/80/d4d5bb0904c0e5958787c168bbd5960fdfc797": "74eceb26191a8f5007fe6ba0d9fd56e1",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/82/d8f0b6748ac80c02f225dc58f6af0f68a0879a": "182366b4a6d47b376a3f4a7c9d7b3a35",
".git/objects/83/32b67697d054eaa816623055c3a79f2768a6ca": "20bc3ff82fad3df378048d039fe813a2",
".git/objects/86/606fee8d9e2a2b2da95604c4c95ae65aff94d5": "58b65a80b413fee5ca8959d1783686f1",
".git/objects/87/258e332ea12d82dec51e044b9ae43f0c23e1c0": "c1754bbb9a2602418c0125ccdbf4bf10",
".git/objects/87/4fd0578d750c6051f12ed6f8f5442f4883f6f2": "7f97c3184b2ab773eab183ee6ebfa474",
".git/objects/88/3e1c7c1e0b5dd72a12bdf7bb0bf7f820609276": "93591a76c67b791e354f8b7f10f9785b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/d620cea24eef7622b5a25106fbca94b88c4141": "2f5284560fbdb3ef3238796b6463ba82",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f51519ca0e694ccd4e57a4e897784378103485": "52d790bad297f785d4e929e49108da80",
".git/objects/8e/654e0c47dded4d795adbb341f979420dcea84a": "f803093a31b7238e5ef6b298270a7f8e",
".git/objects/8f/a23606cbd1c6efdb76ab102c417394bedfcf93": "9a92a9d9f37b37bb8311ca92f56d69f5",
".git/objects/91/ed467ffb7544ecea1e621547236f7ce9f9da9b": "93dd6e310215f22a67cf498fe4f6578e",
".git/objects/92/8924ad93998c2e4e1c11478a4451cd52331486": "70c7197d6f74d6cb8dd094d9448f1894",
".git/objects/92/d1c554b6a673078e16f3a6f9b82580c7cd98a4": "8ec8855c3c842532bfeb81567e700c87",
".git/objects/94/fc4d50c1ab017dac564f3f5f78d8ba98cee8bc": "b45c7523bc7697c15be060103ca2ed30",
".git/objects/95/be62ddc9b26039821966323e2e277fc9e1af5b": "c9e9d95114d63804d5dc3c8889c165c7",
".git/objects/96/9dae826a15fe2cf11fe9e0f9681d0b78b20fc2": "4a6d47c481287d5c64dbb2ede09ca91c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/d030488089dc845189d4f71618e4de435bb27f": "bbb3ebd5e3aca42f050177a5bbd0daf6",
".git/objects/9c/5e9bf5bcaa279a3f474c0fbbab328804928703": "ce1877b88b4cc3b2a293438d5e5cb2ac",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/034bc81122fa769b2aea02588eb8ab4fdeed8d": "a946b5bac1129a623952253da4b787ff",
".git/objects/aa/627225cd1235965a7cd8c47180d0ff3ff661f1": "6c61564c1eab9cefa0bfa7cbf1a7c55b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/73eb890b73bc5ef85c9ce96bf7883006ea6055": "970343b5c0580e95774d912d1d726197",
".git/objects/ab/d74870e90747374e1c9b56d5e3f71f999635bd": "c7dc55578267aae03611c19df9ed9c62",
".git/objects/ac/8d37b8f34e958211a20b0efb4e83147955eb0d": "6fcaf71ac1a6f9c6c181dbea03303fdd",
".git/objects/ac/c4b65ebcd7c7dee9e3b8de8afaaf93d670b59c": "d8eb06b11e3cbdfb1335ae58f28f6830",
".git/objects/ac/e1270b12419b1d738fa02a9ea754f0d8ab289c": "ff32cf21c32924ef65ad8c1911828384",
".git/objects/ad/79a4249d46c6f19095d6eb4b971ed8bb8d8991": "3784e9dca75601831dc311717e6fb509",
".git/objects/ae/c31e6eea420c10b29946c0166f1ba3238959f5": "bc7f688539554954940bc079770c8887",
".git/objects/af/375adf7e69f92d89bade8de33364b99098f489": "bd7db69d48e6e768eadfe0e9585e8333",
".git/objects/b0/bb7b4d4eac427380b29a37d8d9d06fdd4156fb": "c3139db59997248239d74c1dad64a98a",
".git/objects/b1/451740e0eae2b727969cd97b7c943e5c020d89": "0a6958bfe85258410bb560051832289e",
".git/objects/b1/c5a30971a2133f503467e0ca7f300ae3f40621": "888ea90925e8c47b194275d1ba29fdda",
".git/objects/b3/5ca181c43ef239bffbf1c8249b1b7357ee2c61": "96e60f3c77d3230fcec70f94b4d692cb",
".git/objects/b3/ffa323760b86d016930e2ccf8df90a22b59158": "348f7f24603d9163f58021d8cb70e7be",
".git/objects/b4/09750b0477f7b7768034c478f9bb7f4fea94ec": "007dc73a5ed2934e6626f5362a4a90b3",
".git/objects/b4/2c56542042c4557af8d5ad49ed284647e39ee8": "fe8bd6042d68a20ee7be141e20a5fe51",
".git/objects/b5/90a3fb0dc59c8f4fa9f401fa699b4d9e2c9d7e": "a591dc2e2af8db3c08f8792f32cddf52",
".git/objects/b6/e9e4316b55af4fc180230c4fbbea25df4c3fdf": "f623d704d0d7a80f617e35fc4dace00e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/76790770033cb4cc37bcf40d5a1a37456e9c18": "1d7aa331c6281ba458c090c788c77811",
".git/objects/b7/902ececa96a974d4ea3ccba4f037e72b918fbc": "8c112a4e59678affd624ec95967f9e9a",
".git/objects/b8/5ed5841a03e816081829b19d8f1f2d4e111ef8": "e19765d0e424b842fe8b0f6e1c0ead5b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a9b71dc52ec35e2f79342a99b2b42cbf7d63e2": "2264c6b9a0e6149e2702dfcffeaef5ad",
".git/objects/ba/b075ed4ab35f739285dcdf87fd522a6bff2746": "b138ae8264668a28f043bd715d4821c1",
".git/objects/bc/59ae7f05f5d91d5fbe97ac4a2c74bb75f4a2e3": "e590c36c3688458a22cbb58154f7b5c0",
".git/objects/c3/7bd2e6379fa14432db518d05d6fc888970af42": "265947a47e5869a69547d608b25ecc64",
".git/objects/c7/ae6f2cc9e335fe94b3fe68c3215f957fd991fa": "3909f692221b0da0124bdd6ed3a36cb8",
".git/objects/cb/2d769a96cb49ce9b57958bcca208ac1028c15a": "6e34f3edd05b0a5e1c282207404bab8a",
".git/objects/cb/4a923dc76b6b1bd09fe6f62f1080bc97939a01": "162497b064af8c1b2abaebc45d2f6952",
".git/objects/cb/f1fb9bb7f9fc729a61c3248976dc6f7781dd51": "5025e21de0d6633f357caf4bbf7254e4",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/ec88c061e4eedb43efa30ff0a4628337051dcc": "8f99d99c020fa1b71fcf2c905282b012",
".git/objects/ce/89c88d58520b5e2f75a225c688583bb3aefe49": "8eef3eaed6377d0ec450a0859186ebf8",
".git/objects/cf/66fc889c7840a18335f4638341acce8a46bc4a": "3e45fac3ad0c89f21e5511d3979931c1",
".git/objects/d0/51c44f3927e31f5d4c764dc9c34b64db6f54a2": "20f2b22e5860f02924e28accea3a6b01",
".git/objects/d1/3b2184bc9443dbc845542ed681524262cca629": "09bbdfcb4b262debdc77b62d84bc21c2",
".git/objects/d4/6a630e498198dd1517ffeb6ed8041056a34c61": "75b33bea03bfb5e927efe0c131edfc68",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/df60f856eddb34cc13aff7e800467cae690d32": "93954a06984c3fb0a30706296445b408",
".git/objects/d8/a96864af0b5a8eae990778a01e13c501610c75": "dfa1c6952b27cd4adfc028987211453d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/4d060e2aef1e469b14191ea79f0c549d871934": "0ab1e417a94397f5452fa2649c647dc5",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/27e2669dcddb98ebac1668ea7511efccae772c": "0e56d2926bf1bffec6a715eb42244b79",
".git/objects/e3/0c8f5afc6d0e6e739cc9f5f14d477ab6f23e40": "ad2dc81938dc459a014230f3aa93d758",
".git/objects/e3/ae6c0233e26f78243fa8c0d85c3b71e6eb6894": "211187a3a7fbe188a9ed157d94361713",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/7ed3bd98bad96e560cae61015cabab881f229d": "6df3c235717ca1f1dabd7be896c8d457",
".git/objects/e9/b96ca607370bc0f6d5026d582e62fc24165211": "0231ee5e3771315b9dbc5cefee0d56d2",
".git/objects/ea/0dfeaf0332dfc840dfdd04815f712bdd080bd8": "5f90ff085db08109feea05ad79731c6d",
".git/objects/ea/a41902cfacfe45fc3583756d02d2f246d61eb4": "fc28bb9e5e856b63b6c6b0c580081337",
".git/objects/eb/2b09b1ea161f1bf8b7d263700671b6f2f580e0": "2547b5f2db155622a5bcd374df619b4e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/e52b79596d02eb575bccca2340c5903b7cb5ff": "368649be53649707329a3227f14bc129",
".git/objects/ed/9b580e6cc050fcc0b562dd705fbbaa2d39f5f0": "60049ae69f8de4b7c46fae6448045702",
".git/objects/ef/c69db4ff0f9bfa195018dc75d446e96d390df8": "35b5a8074946d8dccc09b36bc189c621",
".git/objects/f1/2b0f57fe86a1e1cb4bc2e7e86f318fa78c9b4d": "f7ad841b9f46e3ac61f03290ba199e01",
".git/objects/f2/26485ca051e9dd6c8c2ebf3272ed7ee388a71b": "7eb6dd33c2541ccd9fbc208f135ca9e6",
".git/objects/f5/5a4da185b0f7aed95fd13f6af6f1506c15afb9": "63f18e98b1dc07f5f6bef5031f3ac2b5",
".git/objects/f6/d6b9a2e9bec460af7d725a6db236b8382298fb": "f4e2517bac369e36cfc441946cf43a2a",
".git/objects/f7/1f7a5a682e9e4abc5dac573ef5c7bd41087f01": "48f4349e5795e15027fabb76a3e809b1",
".git/objects/f7/48e547f06feb9d036e83042765cef02845faa4": "41d21578100f0233b4cb7844183688a3",
".git/objects/f9/33d1c2e4f05b4a5fd0f1a1b73de0353f3cec41": "028c3eb51bc595af8c65eba031a8a820",
".git/objects/f9/5fa6fc5312fb210cc19a45cf6e25d73304fa61": "64837b808f7806717747b2bb2955f89c",
".git/objects/fb/33cd843460db4cadc370b259a8374c687c71d6": "df7e2a2687ae796123e784f8a8bf63cc",
".git/objects/fb/7ecf77703d9d2d67e6d7c486fe126679b8d230": "ce97cc0920db29161252082574845630",
".git/objects/fc/06599d74a4b0386629f625f29a7f0a91870206": "d66a1097c833495605a8ae6bda1bccfd",
".git/objects/fc/3e8137b222575f03383e1a820b16a9dfe45c1f": "68315e2d76f9797346bca75641cfdee2",
".git/objects/fd/e985f4d157c2e4da3c400d842b5074cfa6beb0": "33c910a71a617eefdbeeec72a3d41d7a",
".git/objects/ff/6d4166fa19c07bf374ffbac90695528bf4444d": "33f2daa720980d872d78274eccf6c4b1",
".git/refs/heads/master": "a5e3d99a71e957341fe00d87a2bd5f45",
".git/refs/remotes/origin/master": "b0a1558e8b1492e1b9674a963790e481",
"assets/AssetManifest.json": "1280fb80f1aa7db28d1503028229dab5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/1.png": "9ba4d684e64c19af7c99148ac36af46b",
"assets/images/10.png": "799de73ed9a4d32ad6c08e7dc8fcfc50",
"assets/images/100.png": "028f6bd806ae14844a778a944c2435a8",
"assets/images/101.png": "c8abfb856da2fb4a3fd5f771018dac4c",
"assets/images/102.png": "cd4d13f4b37d9772a6f3f560cc574a5b",
"assets/images/103.png": "7b70047162d7031484cca88794d97195",
"assets/images/104.png": "799e0e87dae2c7a9985990b2424a5b82",
"assets/images/105.png": "f16f37aba434c99c46675e041e8447d0",
"assets/images/106.png": "0fabb4e0eb95aa1c9e129ef79e380e02",
"assets/images/107.png": "8fb72d6ec729d3029eddde4ed1a3b2c9",
"assets/images/108.png": "df1ee9be9e884858698fe55a297c3eb8",
"assets/images/109.png": "9773bf20bfa2d64e04b5367c4171f7fb",
"assets/images/11.png": "5bc90ea068bdd1162f0bf10a64326fe2",
"assets/images/110.png": "c30088fc328818b6888550be1f1fc36f",
"assets/images/111.png": "81dd809541ff661c5d75f928354d5382",
"assets/images/112.png": "58abe48f497dbff64dcdb39c2d42d207",
"assets/images/113.png": "e2e42b57979d1c86dd0deb9b4bf5ecd5",
"assets/images/114.png": "ce22d1c75349cc44fc8b6392f7b5d2b8",
"assets/images/115.png": "a33dca666e6aa7a1f4f3963b0097d461",
"assets/images/116.png": "a69ccfde7b7be6a0f85ae4cfb6a2af36",
"assets/images/117.png": "4e643b87406dd9264e7e0e21352abaf2",
"assets/images/118.png": "e7271a2a85d55b3e7aa46ed0a05a070f",
"assets/images/119.png": "a56ed3e40e6a592824f12b26dc844d55",
"assets/images/12.png": "eb6566a45da0d7770ac2e01025b657bd",
"assets/images/120.png": "bed11b75b421a7a4222770606a7acf1a",
"assets/images/121.png": "60bb4d45cf34b3be8b3e5f02a93720d4",
"assets/images/122.png": "ee3250d4532dbf48b84ac537a774b592",
"assets/images/123.png": "a1aca2ec6703b2dbedd4158c8d7f5931",
"assets/images/124.png": "a6b627161126139aa65b82f4d9eac8e8",
"assets/images/125.png": "c62be78fed3312f7adca8c79b0b6613f",
"assets/images/126.png": "f0509a75aa98389d22eb9011f54d9465",
"assets/images/127.png": "c93c75e1afa25fc5da06e767e7ca3720",
"assets/images/128.png": "837881a436eabbd8bdb308f825bd6df5",
"assets/images/129.png": "dbc8364834950405f52eb2cb24887023",
"assets/images/13.png": "a36e71da6ec97bf184a71883476152b0",
"assets/images/130.png": "55afe49b42cd5f780ba9cc707cde8264",
"assets/images/131.png": "f26ee6048a5f85e804cdc9c0a2e12e06",
"assets/images/132.png": "c42a37de31627293cc79ef00f34fffa5",
"assets/images/133.png": "c157545ab985be295c9566b427102231",
"assets/images/134.png": "57d04bfe5867fc0a8e2b55000e7e5ee4",
"assets/images/135.png": "e0737bed91857347aa412c9a0fde3a22",
"assets/images/136.png": "6a60d22641e7452be7bcc4461a3a6e5f",
"assets/images/137.png": "b4871fb5081babaaf682d548a7218065",
"assets/images/138.png": "bea5ba6c71117de971d9fad5a084aa7d",
"assets/images/139.png": "188ec81e1eda42517e1171f0136f9941",
"assets/images/14.png": "06d3055f204c544a79f3ce6e9103a4dc",
"assets/images/140.png": "c2fa95eb186566e2ee20c07bdf60a7a2",
"assets/images/141.png": "09084f207ff41bdfb5984fbd57752361",
"assets/images/142.png": "c647ffc193cae72d653464cf49400987",
"assets/images/143.png": "7c3efbfeea61505167b89cac5640a3c3",
"assets/images/144.png": "b02b6fb0a4e42619e6c7290d111a4cb9",
"assets/images/145.png": "39effe4839775eb7f586078a03bc2aa3",
"assets/images/146.png": "7e64338e570d1ee01674ec61d66b1663",
"assets/images/147.png": "c19cc8010f6d040d7fc4a076a9504733",
"assets/images/148.png": "bde38f317d9bd8512ef74d27629d0895",
"assets/images/149.png": "d6330a9d746c7a66f2eb27cec182ea43",
"assets/images/15.png": "7fc54db4c58e2e51f4999ce66c12448a",
"assets/images/150.png": "0c7aa137c662e4a53500eefd342f8968",
"assets/images/16.png": "15ca3e1cc06bcdbc380662f2432008ee",
"assets/images/17.png": "f1972cf117fbc7544f798e0fec399414",
"assets/images/18.png": "b33fccccc3c38657fbf66bda12a7ca90",
"assets/images/19.png": "d21d04d8488e11ee9a04a9d8b3e6573a",
"assets/images/2.png": "28cc8e884bbbf08ac3b44b4013a3d5db",
"assets/images/20.png": "5a34e7eeebc70b99bd4d5f7694edb452",
"assets/images/21.png": "f993baa8707a5cc7638c8434b3d8f9e4",
"assets/images/22.png": "2640107a291d1d0b1700a42273c467f8",
"assets/images/23.png": "bd66b4f62115f19d42302758677525b8",
"assets/images/24.png": "44ab0aecdfa80c2df6060ff82a6d067b",
"assets/images/25.png": "53dbfd304766b5858ee6e139646713c7",
"assets/images/26.png": "f3e7b764831b656de7bdb1be1445e766",
"assets/images/27.png": "2c4cebbd67505ea15634b3a81a291b1c",
"assets/images/28.png": "e4e761082a8714e94d3f077f68789712",
"assets/images/29.png": "52f72fbcca315b01a0a8ad447a45b719",
"assets/images/3.png": "8c37e2ae54a20df159b6706ef5663ff9",
"assets/images/30.png": "9445ac8fb36bd9ceea8359d9fe1f2a50",
"assets/images/31.png": "f1daccbfc13564b867137042466f8d49",
"assets/images/32.png": "f7af82c96ad43f4ea9dc0fedb945a6fd",
"assets/images/33.png": "8ed9ee720a67b8e8254662b0d6f2638a",
"assets/images/34.png": "9f683fa0a3c6bfd182cea5d44a142d20",
"assets/images/35.png": "619637a67aa9ed96927ac7f637e6da29",
"assets/images/36.png": "57be8deeb5c0ce45b69415b0a333f5aa",
"assets/images/37.png": "486cbfa6a683a20b33de46403b220d64",
"assets/images/38.png": "4e358ab74348b29e931c36756d9fe5c4",
"assets/images/39.png": "4f8fa587026cd74989c10629fdbb1cd1",
"assets/images/4.png": "9be8f2a81b006e2f8897f1889107d0f7",
"assets/images/40.png": "be829108ec350dca18453fec91f7f85f",
"assets/images/41.png": "04bad30757cc64a63f352077c1c38e98",
"assets/images/42.png": "eace8e96fc0edf4fe3f48e80b20e08e3",
"assets/images/43.png": "86123ef18e1f6c91fd15d92fe000e679",
"assets/images/44.png": "558b0d33be00f6fbd605191427d5b632",
"assets/images/45.png": "409c6f4963b8731bce34411d14595421",
"assets/images/46.png": "2a48e7e33f03146e7a4aef9884b63dcd",
"assets/images/47.png": "0874103da2816f92bdc29a4c36939b90",
"assets/images/48.png": "1ccce677bb4980ce2c3e48830120aa69",
"assets/images/49.png": "15dab15b58aa9922321379fa00bd2b3f",
"assets/images/5.png": "4e83c7dbbb912257f06b13cc1468f76f",
"assets/images/50.png": "b40049947859e633e0467c7c0cfe9f92",
"assets/images/51.png": "579886eaef7bfcfd21add70d3bd04bc2",
"assets/images/52.png": "9a42388be590ee046cc5cd0e57f9aa46",
"assets/images/53.png": "04b6fcae171eeddec445c20f30e51d05",
"assets/images/54.png": "7146ce8a6a916650e3a8b0e8d0e4b9c6",
"assets/images/55.png": "fade82558a72615ae6ff1b617fec91f5",
"assets/images/56.png": "42682daef44bc439c3464dec5eafa673",
"assets/images/57.png": "61e7ab0512af6a444c8413c20eccfc85",
"assets/images/58.png": "2b7a20d6b3d7e5688c6034e0401ead59",
"assets/images/59.png": "d0a8bc53afc614433949f7ee24f7cd00",
"assets/images/6.png": "2d32cf3c3042861de658c96052673408",
"assets/images/60.png": "aca3182e4777a94bba85e4a477dc79ad",
"assets/images/61.png": "46121bfde76640535a7ebc4b6d828815",
"assets/images/62.png": "4ca6f0c317d81a76599b884ee844a9f6",
"assets/images/63.png": "0e98362fd2b0a6bcd579b0918c160c68",
"assets/images/64.png": "fbc1ef4fed7b60445004d25f93ac5878",
"assets/images/65.png": "e1411a251f8b763c4161a924c79c026c",
"assets/images/66.png": "793aacf3d223746732373b145bb803e4",
"assets/images/67.png": "c561388bf7d7f6c4312a85edde46323b",
"assets/images/68.png": "77f1134854221805101f4caf12f81f62",
"assets/images/69.png": "953f6e72014ac744e54815991075b5e3",
"assets/images/7.png": "7b9ddf692c6df64d86bbe4e96ef46a83",
"assets/images/70.png": "8b080e5620605a08d19b3506c4121dff",
"assets/images/71.png": "3d883ce072ae49f3dcaad96ac1032fdb",
"assets/images/72.png": "ce9fd51f046cae707f95a2614f873028",
"assets/images/73.png": "5e3c3ef7382339f1e41a69513b41ba73",
"assets/images/74.png": "e29b28dba4748a0c4a448bf51bfdd91d",
"assets/images/75.png": "930d2143ea662bc6f8808fab76265d76",
"assets/images/76.png": "8663515eec70748e291f7f60a5f27fac",
"assets/images/77.png": "68f56a019e897f1514ca7ef17e191b38",
"assets/images/78.png": "333ba14a7324fe83e8db4d864f26a7c3",
"assets/images/79.png": "5bd4b88f3d184bfe81e793870f87b7a5",
"assets/images/8.png": "04cfac8634923b57a079cc4381035686",
"assets/images/80.png": "2c164a7f6efa6214e0ca2c9c06d32d6b",
"assets/images/81.png": "18e3d1efa4d60d6e853a7ccad9a6d5f5",
"assets/images/82.png": "69c97d23845bacd4df5585badf337718",
"assets/images/83.png": "092b05f340e628fad04495edd691923a",
"assets/images/84.png": "ca4490e0f73f2c5e011013ba82e5d998",
"assets/images/85.png": "102284a9735e8a04624565a6336aded1",
"assets/images/86.png": "f677130996bc20f061388f985cd72117",
"assets/images/87.png": "ed7636bcb364608428ef281aabc82f6b",
"assets/images/88.png": "07e555e711e2d26e9d55719c3b54b3a2",
"assets/images/89.png": "e5033856e70724dbda5a11303b908abd",
"assets/images/9.png": "14aba60b06ced6ea846ad63b6611f524",
"assets/images/90.png": "221c435f654b9580227ed8f1c1b89f6e",
"assets/images/91.png": "cbc8e5256e8b2205e1e8940c6c940cb1",
"assets/images/92.png": "0d5af8ce19ba2617f00148668746f6da",
"assets/images/93.png": "b93f8448e088707daaa6647976baa9c8",
"assets/images/94.png": "8a2c3ce0cfd5c38bb0ebd086f3a48741",
"assets/images/95.png": "781e3c879c64d8fcaa42254c14e90601",
"assets/images/96.png": "b0ea7aa75d764ac22d0f8d0acff33d1d",
"assets/images/97.png": "3dc48878b556cf8a1f882a4dbf4a2d26",
"assets/images/98.png": "4923be70a6a7a8a1fe0e45926e60157f",
"assets/images/99.png": "0797b23782d8c26eb1c642f2c1cdeb61",
"assets/NOTICES": "8f2b7ab052dfcf4ace9901a3769cab3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "78a9f935cb08ad6c2e916f8a400363ea",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "416551fbb8068f87656a1d9f3de23e4e",
"/": "416551fbb8068f87656a1d9f3de23e4e",
"main.dart.js": "a586c4979c8f04a586a0c637cc5292a1",
"manifest.json": "b49eb4db89c2e203099fc09d30fb06f7",
"version.json": "0860c149387a12adb67531442b5eb75e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
