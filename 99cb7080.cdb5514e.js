(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(225)),s=n(230),c=n(231),l=(n(226),n(227),{id:"index-ruby",title:"Ruby and Redis",sidebar_label:"Ruby",slug:"/develop/ruby/"}),o={unversionedId:"develop/ruby/index-ruby",id:"develop/ruby/index-ruby",isDocsHomePage:!1,title:"Ruby and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Ruby.",source:"@site/docs/develop/ruby/index-ruby.mdx",slug:"/develop/ruby/",permalink:"/develop/ruby/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/ruby/index-ruby.mdx",version:"current",sidebar_label:"Ruby",sidebar:"docs",previous:{title:"Go and Redis",permalink:"/develop/golang/"},next:{title:"Php and Redis",permalink:"/develop/php/"}},b=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Step 1. Clone the repository",id:"step-1-clone-the-repository",children:[]},{value:"Step 2.  Install redis-rb:",id:"step-2--install-redis-rb",children:[]},{value:"Step 3. Use Gemfile",id:"step-3-use-gemfile",children:[]},{value:"Step 4. Execute",id:"step-4-execute",children:[]},{value:"Step 5. Verifying",id:"step-5-verifying",children:[]},{value:"Step 6. Opening a Connection to Redis Using redis-rb",id:"step-6-opening-a-connection-to-redis-using-redis-rb",children:[]},{value:"Step 7.  Verifying",id:"step-7--verifying",children:[]},{value:"Redis Marketplace",id:"redis-marketplace",children:[]},{value:"Further References",id:"further-references",children:[]}],d={toc:b};function u(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Ruby."),Object(a.b)("h3",{id:"getting-started"},"Getting Started"),Object(a.b)("p",null,"In order to use Redis with Ruby you will need a Ruby Redis client. In the following sections, we will demonstrate the use of redis-rb, a Ruby client library for Redis.\nAdditional Ruby clients for Redis can be found under the Ruby section of the Redis Clients page."),Object(a.b)(s.a,{defaultValue:"redis-rb",values:[{label:"Redis-rb",value:"redis-rb"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"redis-rb",mdxType:"TabItem"},Object(a.b)("h3",{id:"step-1-clone-the-repository"},"Step 1. Clone the repository"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/redis-developer/redis-ruby-getting-started\n")),Object(a.b)("h3",{id:"step-2--install-redis-rb"},"Step 2.  Install redis-rb:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ gem install redis\n")),Object(a.b)("p",null,"OR"),Object(a.b)("h3",{id:"step-3-use-gemfile"},"Step 3. Use Gemfile"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$cat Gemfile\ngem 'redis'\n")),Object(a.b)("h3",{id:"step-4-execute"},"Step 4. Execute"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ bundle install\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Resolving dependencies...\nUsing bundler 2.2.6\nUsing redis 4.2.5\nFollowing files may not be writable, so sudo is needed:\n  /Library/Ruby/Gems/2.6.0\n  /Library/Ruby/Gems/2.6.0/build_info\n  /Library/Ruby/Gems/2.6.0/cache\n  /Library/Ruby/Gems/2.6.0/doc\n  /Library/Ruby/Gems/2.6.0/extensions\n  /Library/Ruby/Gems/2.6.0/gems\n  /Library/Ruby/Gems/2.6.0/specifications\nBundle complete! 1 Gemfile dependency, 2 gems now installed.\nUse `bundle info [gemname]` to see where a bundled gem is installed.\n")),Object(a.b)("h3",{id:"step-5-verifying"},"Step 5. Verifying"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"bundle info redis\n  * redis (4.2.5)\n    Summary: A Ruby client library for Redis\n    Homepage: https://github.com/redis/redis-rb\n    Documentation: https://www.rubydoc.info/gems/redis/4.2.5\n    Source Code: https://github.com/redis/redis-rb/tree/v4.2.5\n    Changelog: https://github.com/redis/redis-rb/blob/master/CHANGELOG.md\n    Bug Tracker: https://github.com/redis/redis-rb/issues\n    Path: /Library/Ruby/Gems/2.6.0/gems/redis-4.2.5\n")),Object(a.b)("h3",{id:"step-6-opening-a-connection-to-redis-using-redis-rb"},"Step 6. Opening a Connection to Redis Using redis-rb"),Object(a.b)("p",null,"The following code creates a connection to Redis using redis-rb:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ruby"}),'require \'redis\'\nredis = Redis.new(host: "localhost", port: 6379, db: 11)\nredis.set("mykey", "hello world")\nredis.get("mykey")\n')),Object(a.b)("p",null,"To adapt this example to your code, make sure that you replace the following values with those of your database:"),Object(a.b)("p",null,"You can find connect.rb under this directory which you can directly use to test it."),Object(a.b)("p",null,"Just execute the below command:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"ruby connect.rb\n")),Object(a.b)("h3",{id:"step-7--verifying"},"Step 7.  Verifying"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'127.0.0.1:6379> monitor\nOK\n1614684665.728109 [0 [::1]:50918] "select" "11"\n1614684665.728294 [11 [::1]:50918] "set" "mykey" "hello world"\n1614684665.728435 [11 [::1]:50918] "get" "mykey"\n\n')),Object(a.b)("h3",{id:"redis-marketplace"},"Redis Marketplace"),Object(a.b)("p",null,"Redis Marketplace is like an \u201cApp Store\u201d for Redis sample apps. You can easily find apps for your preferred frameworks and languages.\nBelow are few of these apps. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://marketplace.redislabs.com"}),"Click here to access the complete lists of apps")),Object(a.b)("div",{class:"row text--center"},Object(a.b)("div",{class:"col "},Object(a.b)("div",{className:"ri-container"},Object(a.b)("h4",{id:"rate-limiting-app-in-ruby-on-rails"},"Rate-Limiting app in Ruby on Rails"),Object(a.b)("p",null,Object(a.b)("img",{alt:"marketplace",src:n(580).default})),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://marketplace.redislabs.com/?id=project%3Abasic-redis-rate-limiting-demo-ruby"}),"Rate Limiting app")," built in Ruby on Rails"))),Object(a.b)("div",{class:"col"},Object(a.b)("div",{className:"ri-container"},Object(a.b)("h4",{id:"leaderboard-app-in-ruby-on-rails"},"Leaderboard app in Ruby on Rails"),Object(a.b)("p",null,Object(a.b)("img",{alt:"marketplace",src:n(581).default})),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://marketplace.redislabs.com/?id=project%3Abasic-redis-leaderboard-demo-ruby"}),"How to implement leaderboard app")," in Ruby on Rails")))),Object(a.b)("h3",{id:"further-references"},"Further References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/redis/redis-rb/"}),"A Ruby client library for Redis")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/socketry/async-redis"}),"Async::Redis - An asynchronous client for Redis including TLS"))))))}u.isMDXComponent=!0},227:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(225),s=n(233);n(226),n(55);t.a=function(e){var t=i.a.useState(!1),n=t[0],r=t[1];return i.a.createElement("div",{className:"ri-container"},i.a.createElement("div",{className:"ri-description-short"},i.a.createElement("div",{className:"ri-icon"},i.a.createElement("span",{className:"fe fe-zap"})),i.a.createElement("div",{className:"ri-detail"},i.a.createElement("div",{className:"ri-title"},i.a.createElement("a",{href:e.page},e.title)),i.a.createElement("div",{className:"ri-description"},e.description,i.a.Children.count(e.children)>0&&i.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return r(!n)}})))),n&&i.a.createElement("div",{className:"ri-description-long"},i.a.createElement(a.a,{components:s.a},e.children)))}},228:function(e,t,n){"use strict";var r=n(0),i=n(229);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},229:function(e,t,n){"use strict";var r=n(0),i=Object(r.createContext)(void 0);t.a=i},230:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(228),s=n(232),c=n(56),l=n.n(c),o=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,d=e.values,u=e.groupId,p=e.className,m=Object(a.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,y=Object(r.useState)(c),O=y[0],j=y[1],g=r.Children.toArray(e.children);if(null!=u){var v=h[u];null!=v&&v!==O&&d.some((function(e){return e.value===v}))&&j(v)}var R=function(e){j(e),null!=u&&f(u,e)},w=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},p)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return R(t)},onClick:function(){R(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},231:function(e,t,n){"use strict";var r=n(3),i=n(0),a=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:i}),t)}},580:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ratelimitingruby-cfd4aeb20f0ba67a88485aca49b32f48.png"},581:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/leaderboardruby-043bd155740d573d2344798758216d77.png"}}]);