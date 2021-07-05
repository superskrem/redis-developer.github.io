(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return l}));var n=o(3),a=o(7),r=(o(0),o(204)),i=(o(206),{id:"index-herokupython",title:"Python based application on Heroku using Redis",sidebar_label:"How to build Python based application on Heroku using Redis",slug:"/howtos/herokupython"}),s={unversionedId:"howtos/herokupython/index-herokupython",id:"howtos/herokupython/index-herokupython",isDocsHomePage:!1,title:"Python based application on Heroku using Redis",description:"Step 1. Create Redis Enterprise Cloud",source:"@site/docs/howtos/herokupython/index-herokupython.mdx",slug:"/howtos/herokupython",permalink:"/howtos/herokupython",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/herokupython/index-herokupython.mdx",version:"current",sidebar_label:"How to build Python based application on Heroku using Redis",sidebar:"docs",previous:{title:"NodeJS based application on Heroku using Redis",permalink:"/howtos/herokunodejs"},next:{title:"Java based application on Heroku using Redis",permalink:"/howtos/herokujava"}},c=[{value:"Step 1. Create Redis Enterprise Cloud",id:"step-1-create-redis-enterprise-cloud",children:[]},{value:"Step 2. Create a Heroku account",id:"step-2-create-a-heroku-account",children:[]},{value:"Step 3. Install Heroku CLI on your system",id:"step-3-install-heroku-cli-on-your-system",children:[]},{value:"Step 4. Login to Heroku",id:"step-4-login-to-heroku",children:[]},{value:"Step 5. Connect your application to Redis Enterprise Cloud",id:"step-5-connect-your-application-to-redis-enterprise-cloud",children:[]},{value:"Step 6. Setting up Environmental variable",id:"step-6-setting-up-environmental-variable",children:[]},{value:"Step 7. Deploy your code",id:"step-7-deploy-your-code",children:[]},{value:"Step 8. Accessing the application",id:"step-8-accessing-the-application",children:[]},{value:"Next Step",id:"next-step",children:[]}],p={toc:c};function l(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"step-1-create-redis-enterprise-cloud"},"Step 1. Create Redis Enterprise Cloud"),Object(r.b)("p",null,"Create your free Redis Enterprise Cloud account. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/create/rediscloud"}),"Follow this link to create Redis Enterprise Cloud")," subscription and database as shown below:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:o(402).default})),Object(r.b)("p",null,"Save the database endpoint URL and password for future reference."),Object(r.b)("h3",{id:"step-2-create-a-heroku-account"},"Step 2. Create a Heroku account"),Object(r.b)("p",null,"If you are using Heroku for the first time, create your new Heroku account ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://signup.heroku.com/login"}),"through this link")),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:o(403).default})),Object(r.b)("h3",{id:"step-3-install-heroku-cli-on-your-system"},"Step 3. Install Heroku CLI on your system"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-macos"})," brew install heroku\n")),Object(r.b)("h3",{id:"step-4-login-to-heroku"},"Step 4. Login to Heroku"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," heroku login\n heroku: Press any key to open up the browser to login or q to exit:\n Opening browser to https://cli-auth.heroku.com/auth/cli/browser/XXXXXXXXXXA\n Logging in... done\n Logged in as your_email_address\n")),Object(r.b)("h3",{id:"step-5-connect-your-application-to-redis-enterprise-cloud"},"Step 5. Connect your application to Redis Enterprise Cloud"),Object(r.b)("p",null,"For this demonstration, we will be using a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/redis-developer/basic-rate-limiting-demo-python"}),"Sample Rate Limiting application")),Object(r.b)("h4",{id:"clone-the-repository"},"Clone the repository"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/redis-developer/basic-rate-limiting-demo-python\n")),Object(r.b)("p",null,"Run the below CLI to have a functioning Git repository that contains a simple application as well as a package.json file."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"$ heroku create\nCreating app... done, \u2b22 fast-reef-76278\nhttps://fast-reef-76278.herokuapp.com/ | https://git.heroku.com/fast-reef-76278.git\n")),Object(r.b)("h3",{id:"step-6-setting-up-environmental-variable"},"Step 6. Setting up Environmental variable"),Object(r.b)("p",null,'Go to Heroku dashboard, click "Settings" and set REDIS_ENDPOINT_URI and REDIS_PASSWORD under the Config Vars.\nRefer to Step 1 for the reference.'),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:o(404).default})),Object(r.b)("h3",{id:"step-7-deploy-your-code"},"Step 7. Deploy your code"),Object(r.b)("p",null,"Heroku generates a random name (in this case fast-reef-76278) for your app, or you can pass a parameter to specify your own app name.\nNow deploy your code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"$ git push heroku                        \nEnumerating objects: 512, done.\nCounting objects: 100% (512/512), done.\nDelta compression using up to 12 threads\nCompressing objects: 100% (256/256), done.\nWriting objects: 100% (512/512), 1.52 MiB | 660.00 KiB/s, done.\nTotal 512 (delta 244), reused 512 (delta 244)\nremote: Compressing source files... done.\nremote: Building source:\nremote: \nremote: -----\x3e Building on the Heroku-20 stack\nremote: -----\x3e Determining which buildpack to use for this app\nremote: -----\x3e Python app detected\n\u2026\n\nemote: -----\x3e Compressing...\nremote:        Done: 59.3M\nremote: -----\x3e Launching...\nremote:        Released v5\nremote:        https://fast-reef-76278.herokuapp.com/ deployed to Heroku\nremote: \nremote: Verifying deploy... done.\nTo https://git.heroku.com/fast-reef-76278.git\n * [new branch]      master -> master\n")),Object(r.b)("h3",{id:"step-8-accessing-the-application"},"Step 8. Accessing the application"),Object(r.b)("p",null,"Open ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://fast-reef-76278.herokuapp.com/"}),"https://fast-reef-76278.herokuapp.com/")," to see your application"),Object(r.b)("p",null,Object(r.b)("img",{alt:"heroku",src:o(405).default})),Object(r.b)("h3",{id:"next-step"},"Next Step"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/"}),"Connecting to the database using RedisInsight")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/howtos/moviesdatabase/getting-started/"}),"How to list & search Movies database using Redisearch"))))}l.isMDXComponent=!0},206:function(e,t,o){"use strict";var n=o(0),a=o.n(n),r=o(204),i=o(212);o(205),o(55);t.a=function(e){var t=a.a.useState(!1),o=t[0],n=t[1];return a.a.createElement("div",{className:"ri-container"},a.a.createElement("div",{className:"ri-description-short"},a.a.createElement("div",{className:"ri-icon"},a.a.createElement("span",{className:"fe fe-zap"})),a.a.createElement("div",{className:"ri-detail"},a.a.createElement("div",{className:"ri-title"},a.a.createElement("a",{href:e.page},e.title)),a.a.createElement("div",{className:"ri-description"},e.description,a.a.Children.count(e.children)>0&&a.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!o)}})))),o&&a.a.createElement("div",{className:"ri-description-long"},a.a.createElement(r.a,{components:i.a},e.children)))}},402:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/rediscloud-d61184b5afea31c7297d7eeba25a71ec.png"},403:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/create_heroku-adefbcbc7fe61ec48d1a65a3172f9f58.png"},404:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/heroku_app1_env-8d491cfd2c8859db457a5821eb59f94a.png"},405:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/heroku_ratelimiter-536e63f33448af8ad5c84987300831e4.png"}}]);