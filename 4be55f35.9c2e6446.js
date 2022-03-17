(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var i=a(3),n=a(7),s=(a(0),a(361)),r={id:"index-windows",title:"How to run RedisInsight on Windows",sidebar_label:"How to run RedisInsight on Windows",slug:"/explore/redisinsightv2/windows",authors:["ajeet"]},o={unversionedId:"explore/redisinsightv2/windows/index-windows",id:"explore/redisinsightv2/windows/index-windows",isDocsHomePage:!1,title:"How to run RedisInsight on Windows",description:"RedisInsight is a visual tool that provides capabilities to design, develop and optimize your Redis application. It is a 100% free Redis GUI that allows developers like you to interact with your databases and manage your data.",source:"@site/docs/explore/redisinsightv2/windows/index-windows.mdx",slug:"/explore/redisinsightv2/windows",permalink:"/explore/redisinsightv2/windows",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsightv2/windows/index-windows.mdx",version:"current",lastUpdatedAt:1647259316,sidebar_label:"How to run RedisInsight on Windows",sidebar:"docs",previous:{title:"Getting Started with RedisInsight",permalink:"/explore/redisinsightv2/getting-started"},next:{title:"Visualize Redis Database keys using the RedisInsight Browser Tool",permalink:"/explore/redisinsightv2/browser"}},l=[{value:"RedisInsight Windows Installer",id:"redisinsight-windows-installer",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Step 1. Set up a free Redis Enterprise Cloud account",id:"step-1-set-up-a-free-redis-enterprise-cloud-account",children:[]},{value:"Step 2. Download and Install RedisInsight",id:"step-2-download-and-install-redisinsight",children:[]},{value:"Step 3. Connect to a Redis Database",id:"step-3-connect-to-a-redis-database",children:[]},{value:"Step 4. Use &quot;Browser Tool&quot;",id:"step-4-use-browser-tool",children:[]},{value:"Step 5. Overview of User database keys",id:"step-5-overview-of-user-database-keys",children:[]},{value:"Step 6. Clone the repository",id:"step-6-clone-the-repository",children:[]},{value:"Step 7. Import the user database keys",id:"step-7-import-the-user-database-keys",children:[]},{value:"Step 8. Modify a key",id:"step-8-modify-a-key",children:[]},{value:"Step 9. Cleaning up",id:"step-9-cleaning-up",children:[]}]},{value:"Further References",id:"further-references",children:[]}],d={toc:l};function c(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"RedisInsight is a visual tool that provides capabilities to design, develop and optimize your Redis application. It is a 100% free Redis GUI that allows developers like you to interact with your databases and manage your data."),Object(s.b)("p",null,"RedisInsight v2.0 incorporates a completely new tech stack based on the popular Electron and Elastic UI frameworks. You can run the application locally along with your favorite IDE, and it remains cross-platform, supported on Linux, Windows, and MacOS. RedisInsight Browser lets you explore keys in your Redis server. You can add, edit and delete a key. You can even update the key expiry and copy the key name to be used in different parts of the application."),Object(s.b)("h2",{id:"redisinsight-windows-installer"},"RedisInsight Windows Installer"),Object(s.b)("p",null,"The RedisInsight desktop client installer for Windows is just 70 MB in size. It allows you to download and use the RedisInsight GUI locally. The desktop client is supported on Windows operating systems and works with all variants of Redis. RedisInsight should install and run on a fresh Windows system."),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"INFO")),Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"There is no need to install the .NET framework in order to install RedisInsight on Windows."))),Object(s.b)("h2",{id:"getting-started"},"Getting Started"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Step 1. Setup a free Redis Enterprise Cloud account"),Object(s.b)("li",{parentName:"ul"},"Step 2. Download and Install RedisInsight"),Object(s.b)("li",{parentName:"ul"},"Step 3. Connect to Redis database"),Object(s.b)("li",{parentName:"ul"},"Step 4. Use Browser Tool"),Object(s.b)("li",{parentName:"ul"},"Step 5. Overview of User database"),Object(s.b)("li",{parentName:"ul"},"Step 6. Clone the repository"),Object(s.b)("li",{parentName:"ul"},"Step 7. Import user database keys"),Object(s.b)("li",{parentName:"ul"},"Step 8. Modify a Redis key"),Object(s.b)("li",{parentName:"ul"},"Step 9. Cleaning up")),Object(s.b)("h3",{id:"step-1-set-up-a-free-redis-enterprise-cloud-account"},"Step 1. Set up a free Redis Enterprise Cloud account"),Object(s.b)("p",null,"Visit ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"/create/rediscloud/"}),"developer.redis.com/create/rediscloud/")," and create ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/try-free/"}),"a free Redis Enterprise Cloud account"),". Once you complete this tutorial, you will be provided with the database endpoint URL and password. Save it for future reference."),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"TIP")),Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"For a limited time, use ",Object(s.b)("strong",{parentName:"p"},"TIGER200")," to get ",Object(s.b)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),Object(s.b)("p",{parentName:"div"},"\ud83c\udf89 ",Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/try-free"}),"Click here to sign up")))),Object(s.b)("p",null,Object(s.b)("img",{alt:"endpoint of redis enterprise cloud",src:a(742).default,title:"image_tooltip"})),Object(s.b)("h3",{id:"step-2-download-and-install-redisinsight"},"Step 2. Download and Install RedisInsight"),Object(s.b)("p",null,"To use RedisInsight on a local Windows, you can download the software directly from the Redis official website:"),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"}),"Click this link")," to access a form that allows you to select the operating system of your choice(in our case, it's Microsoft Windows)."),Object(s.b)("p",null,Object(s.b)("img",{alt:"form to fill to download RedisInsight",src:a(743).default})),Object(s.b)("p",null,"Fill out the rest of the form and click \u201cDownload\u201d.  "),Object(s.b)("h4",{id:"install-redisinsight"},"Install RedisInsight"),Object(s.b)("p",null,"Click on the RedisInsight executable (.exe file) and install it in your system."),Object(s.b)("p",null,Object(s.b)("img",{alt:"setup redisinsight",src:a(744).default})),Object(s.b)("p",null,"Once the RedisInsight software is installed, click on its icon to open the RedisInsight application. It will display the End-User License Agreement and Privacy Settings. Enable Analytics and Encrypt sensitive information as per your preference."),Object(s.b)("p",null,Object(s.b)("img",{alt:"accept redisinsight licence",src:a(745).default})),Object(s.b)("h3",{id:"step-3-connect-to-a-redis-database"},"Step 3. Connect to a Redis Database"),Object(s.b)("p",null,'Enter the requested details, including Host (endpoint), Port, and Alias in the form, as shown below. You can use "default" as the username for now. Then click \u201cADD REDIS DATABASE\u201d.'),Object(s.b)("p",null,Object(s.b)("img",{alt:"adding redis database",src:a(746).default})),Object(s.b)("p",null,"Once added, you will see the database name listed as shown below:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"listing the redis database",src:a(747).default})),Object(s.b)("h3",{id:"step-4-use-browser-tool"},'Step 4. Use "Browser Tool"'),Object(s.b)("p",null,'Click on the "Key" icon on the left sidebar to open up the browser tool.'),Object(s.b)("p",null,Object(s.b)("img",{alt:"redis database with no keys",src:a(748).default,title:"image_tooltip"})),Object(s.b)("h3",{id:"step-5-overview-of-user-database-keys"},"Step 5. Overview of User database keys"),Object(s.b)("p",null,"Let us import a user database (6k keys). This dataset contains users stored as Redis Hashes."),Object(s.b)("h3",{id:""}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Users")),Object(s.b)("p",null,"The user hashes contain the following fields:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"user:id")," : The key of the hash."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"first_name")," : First Name."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"last_name")," : Last name."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"email")," : email address."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"gender")," : Gender (male/female)."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"ip_address")," : IP address."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"country")," : Country Name."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"country_code")," : Country Code."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"city")," : City of the user."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"longitude")," : Longitude of the user."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"latitude")," : Latitude of the user."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"last_login")," : Epoch time of the last login.")),Object(s.b)("h3",{id:"step-6-clone-the-repository"},"Step 6. Clone the repository"),Object(s.b)("p",null,"Open up the CLI terminal and run the following commands:"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/redis-datasets\n cd redis-datasets/user-database\n")),Object(s.b)("h3",{id:"step-7-import-the-user-database-keys"},"Step 7. Import the user database keys"),Object(s.b)("p",null,"Open up the CLI terminal and run the following command."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"NOTE")),Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"You will need a hostname, port and password to run this for a cloud database."))),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"})," redis-cli -h redis-15411.c264.ap-south-1-1.ec2.cloud.redislabs.com -p 15411 -a <enter your password> < ./import_users.redis\n")),Object(s.b)("p",null,"Refresh the keys view by clicking as shown below:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"listing the keys",src:a(749).default,title:"image_tooltip"})),Object(s.b)("p",null,"You can get a real-time view of the data in your Redis database as shown below:"),Object(s.b)("p",null,"Select any key in the keys view and the key's value gets displayed in the right hand side that includes fields and values."),Object(s.b)("p",null,Object(s.b)("img",{alt:"hash keys listed",src:a(750).default})),Object(s.b)("h3",{id:"step-8-modify-a-key"},"Step 8. Modify a key"),Object(s.b)("p",null,"The RedisInsight browser tool allows you to modify the data instantly.\nSelect any key and change the values as shown in the following screenshot"),Object(s.b)("p",null,Object(s.b)("img",{alt:"modify the redis keys",src:a(751).default})),Object(s.b)("h3",{id:"step-9-cleaning-up"},"Step 9. Cleaning up"),Object(s.b)("p",null,"Run the following command to clean up all the Redis keys:"),Object(s.b)("p",null,Object(s.b)("img",{alt:"flushing the database",src:a(752).default})),Object(s.b)("h2",{id:"further-references"},"Further References"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/create/windows"}),"How to Install Redis on Windows")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/slowlog"}),"Slowlog Configuration using RedisInsight")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Explore Redis keys using RedisInsight browser tool")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"/explore/redisinsight/memoryanalyzer"}),"Memory Analysis using RedisInsight"))),Object(s.b)("div",null,Object(s.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(s.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}c.isMDXComponent=!0},361:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var i=a(0),n=a.n(i);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),c=function(e){var t=n.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=c(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=c(a),u=i,h=b["".concat(r,".").concat(u)]||b[u]||p[u]||s;return a?n.a.createElement(h,o(o({ref:t},d),{},{components:a})):n.a.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=a[d];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},742:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rediscloud_endpoint-d37c6b43be735f9f5796da9228e9ce81.png"},743:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight-form-1b2d6c928f2b5af1bd4b7ff9e4462a62.png"},744:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight-setup-89df9d0df5d26d019541ce98cbf667b1.png"},745:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight-eula-190c7f97696dddeeb1751d1097a2e770.png"},746:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight-add-database-9ba0b98bfcbdcfb81668c0cca3c8c47a.png"},747:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight-db-added-420e5c0a26f22ffe1733fb63cec314cd.png"},748:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight-no-keys-5e94db93b94823d78d5e328e31048aa6.png"},749:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight-keys-added-4c5923014355f0671246a07e78b791ef.png"},750:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight_hashes-7145ef0db340d5b429cf7eb3407ba745.png"},751:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight_modify_keys-21b25056d955ad0516ced9ccc831ed1c.png"},752:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight_flushdb-cd2b4e4acff3a8a2664e9f7bd584609f.png"}}]);