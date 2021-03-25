(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{164:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(162),o=a(171);a(163),a(55);t.a=function(e){var t=r.a.useState(!1),a=t[0],n=t[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(i.a,{components:o.a},e.children)))}},166:function(e,t,a){"use strict";var n=a(0),r=a(167);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},167:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},168:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(166),o=a(165),s=a(56),c=a.n(s),l=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,u=e.values,b=e.groupId,p=e.className,h=Object(i.a)(),m=h.tabGroupChoices,g=h.setTabGroupChoices,O=Object(n.useState)(s),j=O[0],k=O[1],f=n.Children.toArray(e.children);if(null!=b){var v=m[b];null!=v&&v!==j&&u.some((function(e){return e.value===v}))&&k(v)}var w=function(e){k(e),null!=b&&g(b,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},p)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(n.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},169:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},213:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heroku_selectrecloud-107ae173b1c2374d6ba4ca291166cebf.png"},214:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heroku_recloud-9bd5ed6ae1d27e440f43424de905756d.png"},249:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rediscloud-d61184b5afea31c7297d7eeba25a71ec.png"},250:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},251:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/ratelimiting-0a76b60e4b3861e1190062d5029b86d9.png"},252:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/heroku2-5d4f3caa06b31871040fee73e25e8aef.png"},253:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pricing-637a46081da2880eb5b4efb264fb8343.png"},254:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/orderform-0121a4b62387ee0c69e328665cca831a.png"},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(162)),o=a(168),s=a(169),c=(a(163),a(164),{id:"index-heroku",title:"Create Redis database on Heroku",sidebar_label:"Redis on Heroku",slug:"/create/heroku"}),l={unversionedId:"create/heroku/index-heroku",id:"create/heroku/index-heroku",isDocsHomePage:!1,title:"Create Redis database on Heroku",description:"Heroku is a cloud Platform as a Service (PaaS) supporting multiple programming languages that is used as a web application deployment model.Heroku lets the developer build, run and scale applications in a similar manner across all the languages(Java, Node.js, Scala, Clojure, Python, PHP, Ruby and Go).",source:"@site/docs/create/heroku/index-heroku.mdx",slug:"/create/heroku",permalink:"/create/heroku",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/heroku/index-heroku.mdx",version:"current",sidebar_label:"Redis on Heroku"},d=[{value:"Using Redis Enterprise Cloud directly",id:"using-redis-enterprise-cloud-directly",children:[{value:"Step 1. Create Redis Enterprise Cloud",id:"step-1-create-redis-enterprise-cloud",children:[]},{value:"Step 2. Connect your application to Redis Enterprise Cloud",id:"step-2-connect-your-application-to-redis-enterprise-cloud",children:[]},{value:"Step 3. Create a Heroku account",id:"step-3-create-a-heroku-account",children:[]},{value:"Step 4. Create a Heroku app",id:"step-4-create-a-heroku-app",children:[]},{value:"Step 5. Pushing the code to Git",id:"step-5-pushing-the-code-to-git",children:[]},{value:"Step 6. Accessing the rate limiting application",id:"step-6-accessing-the-rate-limiting-application",children:[]}]},{value:"Using CLI",id:"using-cli",children:[{value:"Step 1: Install Heroku on MacOS",id:"step-1-install-heroku-on-macos",children:[]},{value:"Step 2: Installing Redis Enterprise Cloud Add-on",id:"step-2-installing-redis-enterprise-cloud-add-on",children:[]},{value:"Step 3: Accessing the database",id:"step-3-accessing-the-database",children:[]}]},{value:"Using Heroku Dashboard",id:"using-heroku-dashboard",children:[{value:"Step 1: Sign-in to Heroku",id:"step-1-sign-in-to-heroku",children:[]},{value:"Step 2: Install Redis Enterprise Cloud",id:"step-2-install-redis-enterprise-cloud",children:[]},{value:"Step 3: Select Free Plan",id:"step-3-select-free-plan",children:[]},{value:"Step 4: Fill up Online Order Form",id:"step-4-fill-up-online-order-form",children:[]},{value:"Step 5. Provision Redis Enterprise Cloud database",id:"step-5-provision-redis-enterprise-cloud-database",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],u={toc:d};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Heroku is a cloud Platform as a Service (PaaS) supporting multiple programming languages that is used as a web application deployment model.Heroku lets the developer build, run and scale applications in a similar manner across all the languages(Java, Node.js, Scala, Clojure, Python, PHP, Ruby and Go). "),Object(i.b)(o.a,{defaultValue:"direct",values:[{label:"Direct via Redis Enterprise Cloud",value:"direct"},{label:"Addons using Heroku CLI",value:"CLI"},{label:"Addons using Heroku Dashboard",value:"dashboardui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"direct",mdxType:"TabItem"},Object(i.b)("h2",{id:"using-redis-enterprise-cloud-directly"},"Using Redis Enterprise Cloud directly"),Object(i.b)("p",null,"You can quickly and easily get your apps up and running with Redis Enterprise Cloud directly. Follow the below steps:"),Object(i.b)("h3",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),Object(i.b)("p",null,"Create your free Redis Enterprise Cloud account. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/create/rediscloud"}),"Follow this link to create Redis Enterprise Cloud")," subscription and database as shown below:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(249).default})),Object(i.b)("p",null,"Save the database endpoint URL and password for future reference."),Object(i.b)("h3",{id:"step-2-connect-your-application-to-redis-enterprise-cloud"},"Step 2. Connect your application to Redis Enterprise Cloud"),Object(i.b)("p",null,"For this demonstration, we will be using a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redis-developer/basic-rate-limiting-demo-python"}),"Sample Rate Limiting application")),Object(i.b)("h4",{id:"cloning-the-repository"},"Cloning the repository"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ git clone https://github.com/redis-developer/basic-rate-limiting-demo-python\n")),Object(i.b)("p",null,"Next, we will be setting environmental variable.\nChange directory to server/configuration, copy .env.example to create .env and provide the values for environment variables as shown below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"REDIS_HOST: redis-18104.c56.east-us.azure.cloud.redislabs.com"),Object(i.b)("li",{parentName:"ul"},"REDIS_PORT: 18104"),Object(i.b)("li",{parentName:"ul"},"REDIS_PASSWORD: type_password")),Object(i.b)("h3",{id:"step-3-create-a-heroku-account"},"Step 3. Create a Heroku account"),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(250).default})),Object(i.b)("h3",{id:"step-4-create-a-heroku-app"},"Step 4. Create a Heroku app"),Object(i.b)("p",null,"Login to Heroku"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),Object(i.b)("p",null,"Run the below CLI to have a functioning Git repository that contains a simple application as well as a package.json file."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ heroku create\n Creating app... done, \u2b22 salty-harbor-93142\n https://salty-harbor-93142.herokuapp.com/ | https://git.heroku.com/salty-harbor-93142.git\n")),Object(i.b)("h3",{id:"step-5-pushing-the-code-to-git"},"Step 5. Pushing the code to Git"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ git push heroku\n Enumerating objects: 512, done.\n Counting objects: 100% (512/512), done.\n Delta compression using up to 12 threads\n Compressing objects: 100% (256/256), done.\n Writing objects: 100% (512/512), 1.52 MiB | 511.00   Downloading h11-0.12.0-py3-none-any.whl (54 kB)\n remote:        Collecting immutables>=0.9\n 7.4.3 urllib3-1.26.2 uvicorn-0.13.2 uvloop-0.14.0\n remote: -----\x3e $ python server/manage.py collectstatic --noinput\n remote:        137 static files copied to '/tmp/build_3e723f51/server/static_root'.\n remote:\n remote: -----\x3e Discovering process types\n remote:        Procfile declares types -> web\n remote:\n remote: -----\x3e Compressing...\n remote:        Done: 59.4M\n remote: -----\x3e Launching...\n remote:        Released v5\n remote:        https://salty-harbor-93142.herokuapp.com/ deployed to Heroku\n remote:\n remote: Verifying deploy... done.\n To https://git.heroku.com/salty-harbor-93142.git\n * [new branch]      master -> master\n")),Object(i.b)("h3",{id:"step-6-accessing-the-rate-limiting-application"},"Step 6. Accessing the rate limiting application"),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(251).default}))),Object(i.b)(s.a,{value:"CLI",mdxType:"TabItem"},Object(i.b)("h2",{id:"using-cli"},"Using CLI"),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please note that this method won't allow you to choose Redis Modules while creating Redis database. Also, it doesn't provide you with the flexibility to choose Cloud platform of your choice. It is recommended to use Redis Enterprise Cloud directly. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/create/rediscloud"}),"Click here to learn more"),"."))),Object(i.b)("p",null,"Under this section, we will be creating Heroku account, use Heroku CLI to login and add Redis Enterprise Cloud as an add-on."),Object(i.b)("h3",{id:"step-1-install-heroku-on-macos"},"Step 1: Install Heroku on MacOS"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ brew tap heroku/brew && brew install heroku\n")),Object(i.b)("p",null,"Assuming that you already have Heroku account created, run the below command to login into Heroku via command prompt:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/4788f936-3557-439f-ab37-95338b735cf2?requestor=XXXXXXXXXXXA.vhF7XtVTtsp9xliwwrHG5ytuirrmn9EfT6Ef3WuzXFE\n Logging in... done\n Logged in as your_email_address\n")),Object(i.b)("h3",{id:"step-2-installing-redis-enterprise-cloud-add-on"},"Step 2: Installing Redis Enterprise Cloud Add-on"),Object(i.b)("p",null,"Create a Heroku app"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," heroku apps:create kickstartredis\n Creating \u2b22 kickstartredis... done\n https://kickstartredis.herokuapp.com/ | https://git.heroku.com/kickstartredis.git\n")),Object(i.b)("p",null,"Ensure that you don\u2019t have existing add-ons added in your account."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ heroku addons:create rediscloud -a kickstartredis\n Creating rediscloud on \u2b22 kickstartredis... free\n Created rediscloud-cylindrical-24439 as REDISCLOUD_URL\n Use heroku addons:docs rediscloud to view documentation\n")),Object(i.b)("p",null,"Once Redis Cloud has been added, you will notice a REDISCLOUD_URL config vars in your heroku config containing the username, password, hostname and port of your first Redis Cloud database."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ heroku config:get REDISCLOUD_URL -a kickstartredis\n redis://default:password@redis-11324.c82.us-east-1-2.ec2.cloud.redislabs.com:11324\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ heroku addons:info rediscloud\n === rediscloud-cylindrical-24439\n Attachments:  kickstartredis::REDISCLOUD\n Installed at: Fri Mar 19 2021 17:16:18 GMT+0530 (India Standard Time)\n Owning app:   kickstartredis\n Plan:         rediscloud:30\n Price:        free\n State:        created\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ heroku config -a kickstartredis\n === kickstartredis Config Vars\n REDISCLOUD_URL: redis://default:password@redis-15951.c232.us-east-1-2.ec2.cloud.redislabs.com:15951\n")),Object(i.b)("h3",{id:"step-3-accessing-the-database"},"Step 3: Accessing the database"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," $ redis-cli -h redis-11324.c82.us-east-1-2.ec2.cloud.redislabs.com -p 11324\n redis-11324.c82.us-east-1-2.ec2.cloud.redislabs.com:11324> auth default showspassword\n OK\n redis-11324.c82.us-east-1-2.ec2.cloud.redislabs.com:11324>\n")),Object(i.b)("p",null,"You can even browse it through Heroku Dashboard:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(213).default})),Object(i.b)("p",null,"Click on \u201cRedis Enterprise Cloud\u201d and it will be redirected over Redis Enterprise Cloud Dashboard"),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(214).default})),Object(i.b)("p",null,'As shown above, a database called "redis-kickstartredis-XXX" gets created over Redis Enterprise Cloud dashboard.')),Object(i.b)(s.a,{value:"dashboardui",mdxType:"TabItem"},Object(i.b)("h2",{id:"using-heroku-dashboard"},"Using Heroku Dashboard"),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Please note that this method won't allow you to choose Redis Modules while creating Redis database. Also, it doesn't provide you with the flexibility to choose Cloud platform of your choice. It is recommended to use Redis Enterprise Cloud directly. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/create/rediscloud"}),"Click here to learn more"),"."))),Object(i.b)("h3",{id:"step-1-sign-in-to-heroku"},"Step 1: Sign-in to Heroku"),Object(i.b)("p",null,"Open  ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://dashboard.heroku.com/apps"}),"https://dashboard.heroku.com/apps")," and create a new sample application. For this demo, I have deployed an application with the name \u201ckickstartredis\u201d."),Object(i.b)("h3",{id:"step-2-install-redis-enterprise-cloud"},"Step 2: Install Redis Enterprise Cloud"),Object(i.b)("p",null,"Open ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://elements.heroku.com/addons/rediscloud"}),"https://elements.heroku.com/addons/rediscloud")," and click on \u201cInstall Redis Enterprise Cloud\u201d to sign up with Heroku."),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(252).default})),Object(i.b)("h3",{id:"step-3-select-free-plan"},"Step 3: Select Free Plan"),Object(i.b)("p",null,"For this demonstration, we will select a 30MB Free plan(see Plans and Pricing below)."),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(253).default})),Object(i.b)("h3",{id:"step-4-fill-up-online-order-form"},"Step 4: Fill up Online Order Form"),Object(i.b)("p",null,"Once you sign in, you will see \u201cOnline Order Form\u201d as shown below:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(254).default})),Object(i.b)("h3",{id:"step-5-provision-redis-enterprise-cloud-database"},"Step 5. Provision Redis Enterprise Cloud database"),Object(i.b)("p",null,"Provision Redis Enterprise Cloud on your personal application(which in the above case is \u201ckickstartredis\u201d."),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(213).default})),Object(i.b)("p",null,"Click on \u201cRedis Enterprise Cloud\u201d and it will be redirected over Redis Enterprise Cloud Dashboard"),Object(i.b)("p",null,Object(i.b)("img",{alt:"heroku",src:a(214).default})),Object(i.b)("p",null,'As shown above, a database called "redis-kickstartredis-XXX" gets created over Redis Enterprise Cloud dashboard.'))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/herokujava"}),"How to build Java based Rate Limiting application on Heroku using Redis")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/herokunodejs"}),"How to build NodeJS based Rate Limiting application on Heroku using Redis"))))}b.isMDXComponent=!0}}]);