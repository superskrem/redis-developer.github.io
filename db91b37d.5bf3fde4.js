(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{1003:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"},1004:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},1005:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image1-bf17443d38f017aaea1d3a6faca57bda.png"},1006:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image2-9a1b7403d2c91877ffc9983f57a13c95.png"},1007:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image3-de7e8a991a7dc9ff006d34ad4c3e3fde.png"},282:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return o}));var i=a(3),s=a(7),r=(a(0),a(315)),n=(a(320),a(321),a(316),a(317),{id:"index-redisgears",title:"Write Your Serverless Redis function using RedisGears Browser Tool",sidebar_label:"Write Your Serverless Redis function using RedisGears Browser Tool",slug:"/explore/redisinsight/redisgears",authors:["ajeet"]}),l={unversionedId:"explore/redisinsight/redisgears/index-redisgears",id:"explore/redisinsight/redisgears/index-redisgears",isDocsHomePage:!1,title:"Write Your Serverless Redis function using RedisGears Browser Tool",description:"RedisInsight has built-in support for Redis Modules like RedisJSON, RediSearch, RedisGraph, Streams, RedisTimeSeries, and RedisGears. RedisGears enables reactive programming at the database level. It's like using lambda functions, but with a dramatically lower latency, and with much less encoding/decoding overhead.",source:"@site/docs/explore/redisinsight/redisgears/index-redisgears.mdx",slug:"/explore/redisinsight/redisgears",permalink:"/explore/redisinsight/redisgears",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/redisgears/index-redisgears.mdx",version:"current",sidebar_label:"Write Your Serverless Redis function using RedisGears Browser Tool",sidebar:"docs",previous:{title:"Query, Visualize and Manipulate Graphs using RedisGraph Browser Visualization Tool",permalink:"/explore/redisinsight/redisgraph"},next:{title:"Manage Redis time-series data using RedisTimeSeries Browser Tool",permalink:"/explore/redisinsight/redistimeseries"}},d=[{value:"Step 1. Create Redis database",id:"step-1-create-redis-database",children:[]},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",children:[]},{value:"Step 3.  Clone the repository",id:"step-3--clone-the-repository",children:[]},{value:"Step 4. Download the IMDB data",id:"step-4-download-the-imdb-data",children:[]},{value:"Step 5. Execute the script",id:"step-5-execute-the-script",children:[]},{value:"Step 6. Accessing RedisInsight",id:"step-6-accessing-redisinsight",children:[]},{value:"Step 7. Add the below script:",id:"step-7-add-the-below-script",children:[]},{value:"Additional References",id:"additional-references",children:[]}],c={toc:d};function o(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"RedisInsight has built-in support for Redis Modules like RedisJSON, RediSearch, RedisGraph, Streams, RedisTimeSeries, and RedisGears. RedisGears enables reactive programming at the database level. It's like using lambda functions, but with a dramatically lower latency, and with much less encoding/decoding overhead. "),Object(r.b)("p",null,"Support for ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://oss.redis.com/redisgears/"}),"RedisGears")," was first introduced in RedisInsight v1.5.0. RedisInsights allows you:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Explore the latest executed functions and analyze the results or errors. "),Object(r.b)("li",{parentName:"ul"},"Manage registered functions and get execution summary. "),Object(r.b)("li",{parentName:"ul"},"Code, build and execute functions.")),Object(r.b)("p",null,"RedisGears is a dynamic framework that enables developers to write and execute ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://oss.redis.com/redisgears/functions.html"}),"functions")," that implement data flows in Redis, while abstracting away the data\u2019s distribution and deployment. These capabilities enable efficient data processing using multiple models in Redis with infinite programmability, while remaining simple to use in any environment."),Object(r.b)("p",null,"Follow the below steps to get started with the RedisInsight browser tool for RedisGears."),Object(r.b)("h2",{id:"step-1-create-redis-database"},"Step 1. Create Redis database"),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/explore/redismod"}),"Follow this link to run Redis container with RedisGears modules enabled ")),Object(r.b)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),Object(r.b)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),Object(r.b)("p",null,Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"}),"Click this link ")," to access a form that allows you to select the operating system of your choice."),Object(r.b)("p",null,Object(r.b)("img",{alt:"My Image",src:a(1003).default})),Object(r.b)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),Object(r.b)("p",null,'Select "Connect to a Redis database"\n',Object(r.b)("img",{alt:"My Image",src:a(1004).default})),Object(r.b)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password.  Then click \u201cADD REDIS DATABASE\u201d."),Object(r.b)("h2",{id:"step-3--clone-the-repository"},"Step 3.  Clone the repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"$ git clone https://github.com/RedisGears/ImdbExample\n$ cd ImdbExample\n")),Object(r.b)("h2",{id:"step-4-download-the-imdb-data"},"Step 4. Download the IMDB data"),Object(r.b)("p",null,"Download the data from this link and extract it to the current directory: ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://datasets.imdbws.com/title.basics.tsv.gz"}),"https://datasets.imdbws.com/title.basics.tsv.gz")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"$ wget https://datasets.imdbws.com/title.basics.tsv.gz\n$ gunzip title.basics.tsv.gz\n")),Object(r.b)("h2",{id:"step-5-execute-the-script"},"Step 5. Execute the script"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"$ python3 UploadImdb.py -H localhost -P 6379\n\npython3 UploadImdb.py -H 192.168.1.9 -P 6379\n/Users/ajeetraina/projects/redis-datasets/redisgears/ImdbExample/UploadImdb.py:27: DeprecationWarning: Pipeline.hmset() is deprecated. Use Pipeline.hset() instead.\n  pipe.hmset(d['tconst'], d)\ndone\n")),Object(r.b)("h2",{id:"step-6-accessing-redisinsight"},"Step 6. Accessing RedisInsight"),Object(r.b)("p",null,"Choose \u201cRedisGears\u201d on the left menu."),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(1005).default,title:"image_tooltip"})),Object(r.b)("h2",{id:"step-7-add-the-below-script"},"Step 7. Add the below script:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"GB('KeysOnlyReader').map(lambda x: execute('hget', x, 'genres')).flatmap(lambda x: x.split(',')).countby().run()\n")),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(1006).default,title:"image_tooltip"})),Object(r.b)("p",null,Object(r.b)("img",{alt:"alt_text",src:a(1007).default,title:"image_tooltip"})),Object(r.b)("h2",{id:"additional-references"},"Additional References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://oss.redis.com/redisgears/"}),"RedisGears Project")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/howtos/redisgears"}),"RedisGears Tutorials")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/howtos/frauddetection"}),"How to build a Fraud Detection System using RedisGears and RedisBloom")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/howtos/nlp"}),"Building a Pipeline for Natural Language Processing using RedisGears"))),Object(r.b)("h2",{id:""}),Object(r.b)("div",null,Object(r.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(r.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}o.isMDXComponent=!0},317:function(e,t,a){"use strict";var i=a(0),s=a.n(i),r=a(315),n=a(322);a(316),a(59);t.a=function(e){var t=s.a.useState(!1),a=t[0],i=t[1];return s.a.createElement("div",{className:"ri-container"},s.a.createElement("div",{className:"ri-description-short"},s.a.createElement("div",{className:"ri-icon"},s.a.createElement("span",{className:"fe fe-zap"})),s.a.createElement("div",{className:"ri-detail"},s.a.createElement("div",{className:"ri-title"},s.a.createElement("a",{href:e.page},e.title)),s.a.createElement("div",{className:"ri-description"},e.description,s.a.Children.count(e.children)>0&&s.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return i(!a)}})))),a&&s.a.createElement("div",{className:"ri-description-long"},s.a.createElement(r.a,{components:n.a},e.children)))}},318:function(e,t,a){"use strict";var i=a(0),s=a(319);t.a=function(){var e=Object(i.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},319:function(e,t,a){"use strict";var i=a(0),s=Object(i.createContext)(void 0);t.a=s},320:function(e,t,a){"use strict";var i=a(0),s=a.n(i),r=a(318),n=a(323),l=a(60),d=a.n(l),c=37,o=39;t.a=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,u=e.values,b=e.groupId,p=e.className,m=Object(r.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(i.useState)(l),O=f[0],j=f[1],v=i.Children.toArray(e.children);if(null!=b){var w=h[b];null!=w&&w!==O&&u.some((function(e){return e.value===w}))&&j(w)}var R=function(e){j(e),null!=b&&g(b,e)},x=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(n.a)("tabs",{"tabs--block":a},p)},u.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(n.a)("tabs__item",d.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case o:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return R(t)},onClick:function(){R(t)}},a)}))),t?Object(i.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},321:function(e,t,a){"use strict";var i=a(3),s=a(0),r=a.n(s);t.a=function(e){var t=e.children,a=e.hidden,s=e.className;return r.a.createElement("div",Object(i.a)({role:"tabpanel"},{hidden:a,className:s}),t)}}}]);