(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1008:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image1-d4d2661bc67be076efaad05ee55482d3.png"},1009:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"},1010:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},1011:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image2-87fd2049639d7f68eba9da60adf50dc9.png"},1012:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image3-eb5bed7afe340fcae07bbde310500612.png"},1013:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image4-8eae12b9bf9867c1e3ba0cd13c244e85.png"},1014:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image5-f7779b0f13bbdadc313bab919d0c8d83.png"},1015:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image6-acec39bd7e5791a93a2414a7aa25f142.png"},1016:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image7-3c9c0dd2dfee8ff1112b850ed0dec91b.png"},252:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return l}));var n=a(3),s=a(7),i=(a(0),a(393)),r=(a(398),a(399),a(394),a(395),{id:"index-profiler",title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",sidebar_label:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",slug:"/explore/redisinsight/profiler",authors:["ajeet"]}),o={unversionedId:"explore/redisinsight/profiler/index-profiler",id:"explore/redisinsight/profiler/index-profiler",isDocsHomePage:!1,title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",description:"RedisInsight profiler analyzes your Redis commands that are being run on the Redis server in real-time. The tool provides you detailed  information about the number of commands processed, commands/second and number of connected clients. It also gives information about top prefixes, top keys and top commands.",source:"@site/docs/explore/redisinsight/profiler/index-profiler.mdx",slug:"/explore/redisinsight/profiler",permalink:"/explore/redisinsight/profiler",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/profiler/index-profiler.mdx",version:"current",lastUpdatedAt:1651753311,sidebar_label:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",sidebar:"docs",previous:{title:"Use Redis Streams Consumer Groups with RedisInsight",permalink:"/explore/redisinsight/streams"},next:{title:"Query, Visualize and Manipulate Graphs using RedisGraph Browser Visualization Tool",permalink:"/explore/redisinsight/redisgraph"}},d=[{value:"Step 1.  Create Redis database with RedisTimeSeries module enabled",id:"step-1--create-redis-database-with-redistimeseries-module-enabled",children:[]},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",children:[]},{value:"Step 3. Cloning the GITHUB repo",id:"step-3-cloning-the-github-repo",children:[]},{value:"Step 4: Execute the sensor script",id:"step-4-execute-the-sensor-script",children:[]},{value:"Step 5: Accessing the RedisTimeSeries Keys",id:"step-5-accessing-the-redistimeseries-keys",children:[]},{value:"Step 6: Running RedisTimeSeries specific queries**",id:"step-6-running-redistimeseries-specific-queries",children:[]},{value:"Step 7. Initiate the Profiler",id:"step-7-initiate-the-profiler",children:[]},{value:"Additional Links",id:"additional-links",children:[]}],c={toc:d};function l(e){var t=e.components,r=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"RedisInsight profiler analyzes your Redis commands that are being run on the Redis server in real-time. The tool provides you detailed  information about the number of commands processed, commands/second and number of connected clients. It also gives information about top prefixes, top keys and top commands. "),Object(i.b)("p",null,"It basically runs the Redis MONITOR command and generates a summarized view. MONITOR is a debugging command that streams back every command processed by the Redis server. It can help in understanding what is happening to the database. This command can both be used via ",Object(i.b)("inlineCode",{parentName:"p"},"redis-cli")," and via ",Object(i.b)("inlineCode",{parentName:"p"},"telnet"),".All the commands sent to the redis instance are monitored for the duration of the profiling. The ability to see all the requests processed by the server is useful in order to spot bugs in an application both when using Redis as a database and as a distributed caching system."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Because MONITOR streams back all commands, its use comes at a cost.Running monitor command is dangerous to the performance of your production server, hence the profiler is run for a maximum time of 5 minutes, if the user has not stopped it in between. This is to avoid overload on the Redis server."))),Object(i.b)("p",null,"Follow the below instructions to test drive RedisInsight profiler tool:"),Object(i.b)("h2",{id:"step-1--create-redis-database-with-redistimeseries-module-enabled"},"Step 1.  Create Redis database with RedisTimeSeries module enabled"),Object(i.b)("p",null,"Visit ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.redis.com/create/rediscloud"}),"https://developer.redis.com/create/rediscloud")," and create a Redis database. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.redis.com/howtos/redistimeseries"}),"Follow these steps to enable RedisTimeSeries module "),"on Redis Enterprise Cloud"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1008).default})),Object(i.b)("p",null,"You can use Redis CLI to connect to the remote Redis Enterprise cloud database. You can check memory usage with the Redis ",Object(i.b)("inlineCode",{parentName:"p"},"INFO")," command."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"TIP")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"RedisInsight allows you to add a Redis Sentinel database too. Refer to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.redis.com/latest/ri/using-redisinsight/add-instance/#add-a-redis-sentinel-database"}),"documentation")," to learn more."))),Object(i.b)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"TIP")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"RedisInsight v2.0 is an open source visual tool that lets you do both GUI- and CLI-based interactions with your Redis database.\nIt is an open source visual tool that lets you do both GUI- and CLI-based interactions with your Redis database . It is a desktop manager that provides an intuitive and efficient GUI for Redis, allowing you to interact with your databases, monitor, and manage your data."),Object(i.b)("p",{parentName:"div"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/explore/redisinsightv2/"}),"Refer to these tutorials")," to learn more about this latest release."))),Object(i.b)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"}),"Click this link")," to access a form that allows you to select the operating system of your choice."),Object(i.b)("p",null,Object(i.b)("img",{alt:"My Image",src:a(1009).default})),Object(i.b)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),Object(i.b)("p",null,'Select "Connect to a Redis database"\n',Object(i.b)("img",{alt:"My Image",src:a(1010).default})),Object(i.b)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password.  Then click \u201cADD REDIS DATABASE\u201d."),Object(i.b)("h2",{id:"step-3-cloning-the-github-repo"},"Step 3. Cloning the GITHUB repo"),Object(i.b)("p",null,"We will be using a python script to fetch sensor data from one of the IoT Edge sensor devices (such as  BME680 sensors) and then push the sensor values to the Redis Cloud database."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ git clone https://github.com/redis-developer/redis-datasets/tree/master/redistimeseries\ncd redistimeseries/realtime-sensor-jetson\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'import bme680\nimport time\nimport datetime\nimport csv\nimport argparse\nimport redis\n\n\nprint("""read-sensor.py - Displays temperature, pressure, humidity, and gas.\nPress Ctrl+C to exit!\n""")\n\ntry:\n    sensor = bme680.BME680(bme680.I2C_ADDR_PRIMARY)\nexcept IOError:\n    sensor = bme680.BME680(bme680.I2C_ADDR_SECONDARY)\n\n# These calibration data can safely be commented\n# out, if desired.\n\nprint(\'Calibration data:\')\nfor name in dir(sensor.calibration_data):\n\n    if not name.startswith(\'_\'):\n        value = getattr(sensor.calibration_data, name)\n\n        if isinstance(value, int):\n            print(\'{}: {}\'.format(name, value))\n\n# These oversampling settings can be tweaked to\n# change the balance between accuracy and noise in\n# the data.\n\nsensor.set_humidity_oversample(bme680.OS_2X)\nsensor.set_pressure_oversample(bme680.OS_4X)\nsensor.set_temperature_oversample(bme680.OS_8X)\nsensor.set_filter(bme680.FILTER_SIZE_3)\nsensor.set_gas_status(bme680.ENABLE_GAS_MEAS)\n\nprint(\'\\n\\nInitial reading:\')\nfor name in dir(sensor.data):\n    value = getattr(sensor.data, name)\n\n    if not name.startswith(\'_\'):\n        print(\'{}: {}\'.format(name, value))\n\nsensor.set_gas_heater_temperature(320)\nsensor.set_gas_heater_duration(150)\nsensor.select_gas_heater_profile(0)\n\n# Up to 10 heater profiles can be configured, each\n# with their own temperature and duration.\n# sensor.set_gas_heater_profile(200, 150, nb_profile=1)\n# sensor.select_gas_heater_profile(1)\n\n\nparser = argparse.ArgumentParser()\nparser.add_argument("--port", type=int,\n                    help="redis instance port", default=6379)\nparser.add_argument(\n    "--password", type=int, help="redis instance password", default=None\n)\nparser.add_argument(\n    "--verbose", help="enable verbose output", action="store_true")\nparser.add_argument("--host", type=str,\n                    help="redis instance host", default="127.0.0.1")\n\n\nargs = parser.parse_args()\n\n# redis setup\nredis_obj = redis.Redis(host=args.host, port=args.port, password=args.password)\ntemperature_key = "ts:temperature"\npressure_key = "ts:pressure"\nhumidity_key = "ts:humidity"\n\nprint(\'\\n\\nPolling:\')\ntry:\n    while True:\n        if not sensor.get_sensor_data():\n            print(\'Can not access sensor data\')\n            continue\n\n        output = \'{0:.2f} C,{1:.2f} hPa,{2:.2f} %RH\'.format(\n            sensor.data.temperature,\n            sensor.data.pressure,\n            sensor.data.humidity)\n\n        if not sensor.data.heat_stable:\n            print(\'Heat unstable: \' + output)\n            continue\n\n        print(\'{0},{1} Ohms\'.format(\n            output,\n            sensor.data.gas_resistance))\n\n        date = datetime.datetime.now()\n        timestamp = int(date.timestamp() * 1000)\n\n        # Create pipeline\n        pipe = redis_obj.pipeline()\n\n        pipe.execute_command(\n            "ts.add", temperature_key, timestamp, sensor.data.temperature\n        )\n\n        pipe.execute_command(\n            "ts.add", pressure_key, timestamp, sensor.data.pressure\n        )\n\n        pipe.execute_command("ts.add", humidity_key,\n                             timestamp, sensor.data.humidity)\n\n        # Execute pipeline\n        pipe.execute()\n\n        time.sleep(1)\n\nexcept KeyboardInterrupt:\n    pass\n\n')),Object(i.b)("p",null,"The complete walkthrough of this python script is explained ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"}),"here"),"."),Object(i.b)("h2",{id:"step-4-execute-the-sensor-script"},"Step 4: Execute the sensor script"),Object(i.b)("p",null,"Let us execute the script using the command line: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ sudo python3 sensorloader2.py --host Endpoint_of_Redis_enterprise_Cloud --port port\n")),Object(i.b)("p",null,"Run the monitor command to verify if sensor values are being fetched or not.(Don\u2019t run this command in the production environment)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'redis-17316.c251.east-us-mz.azure.cloud.redislabs.com:17316> monitor\nOK\n1622212328.833139 [0 122.171.186.213:59471] "monitor"\n1622212329.865158 [0 70.167.220.160:50378] "MULTI"\n1622212329.865158 [0 70.167.220.160:50378] "ts.add" "ts:temperature" "1622212329847" "35.67"\n1622212329.865158 [0 70.167.220.160:50378] "ts.add" "ts:pressure" "1622212329847" "957.52"\n1622212329.865158 [0 70.167.220.160:50378] "ts.add" "ts:humidity" "1622212329847" "11.111"\n1622212329.865158 [0 70.167.220.160:50378] "EXEC"\n1622212330.941178 [0 70.167.220.160:50378] "MULTI"\n1622212330.941178 [0 70.167.220.160:50378] "ts.add" "ts:temperature" "1622212330920" "35.68"\n1622212330.941178 [0 70.167.220.160:50378] "ts.add" "ts:pressure" "1622212330920" "957.51"\n1622212330.941178 [0 70.167.220.160:50378] "ts.add" "ts:humidity" "1622212330920" "11.111"\n1622212330.941178 [0 70.167.220.160:50378] "EXEC"\n\n')),Object(i.b)("h2",{id:"step-5-accessing-the-redistimeseries-keys"},"Step 5: Accessing the RedisTimeSeries Keys"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.redis.com/explore/redisinsight/getting-started"}),"Follow these steps to connect to the database")," using RedisInsight. Once you are connected to RedisInsight GUI, you can verify the 3 RedisTimeSeries keys:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ts:temperature"),Object(i.b)("li",{parentName:"ul"},"ts:pressure"),Object(i.b)("li",{parentName:"ul"},"ts:humidity")),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1011).default})),Object(i.b)("h2",{id:"step-6-running-redistimeseries-specific-queries"},"Step 6: Running RedisTimeSeries specific queries**"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1012).default})),Object(i.b)("p",null,"Please note that In RedisTimeSeries, only ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://oss.redis.com/redistimeseries/commands/#tsrangetsrevrange"}),"TS.RANGE "),"and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://oss.redis.com/redistimeseries/commands/#tsmrangetsmrevrange"}),"TS.MRANGE")," are supported as of the current release. In the next release, TS.REVRANGE and TS.MREVRANGE will be supported too."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1013).default})),Object(i.b)("h2",{id:"step-7-initiate-the-profiler"},"Step 7. Initiate the Profiler"),Object(i.b)("p",null,"Click \u201cStart Profiler\u201d while sensor data is continuously being pushed to Redis database."),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1014).default})),Object(i.b)("p",null,"Let the profiler tool run for next 1-2 minutes. "),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1015).default})),Object(i.b)("p",null,"Stop the profiler to see the results as shown below:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"alt_text",src:a(1016).default})),Object(i.b)("p",null,"Hence, the profiler provides the below statistical details:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"How many commands were processed"),Object(i.b)("li",{parentName:"ul"},"Number of connected clients"),Object(i.b)("li",{parentName:"ul"},"Rate at which the commands were executed"),Object(i.b)("li",{parentName:"ul"},"Top key patterns (key patterns followed by number of commands)"),Object(i.b)("li",{parentName:"ul"},"Top Keys"),Object(i.b)("li",{parentName:"ul"},"Top Commands & their frequency")),Object(i.b)("h2",{id:"additional-links"},"Additional Links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/browser"}),"Explore Redis keys using RedisInsight browser tool")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/memoryanalyzer"}),"Memory Usage and Analysis using RedisInsight")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/explore/redisinsight/streams"}),"Using Redis Streams with RedisInsight")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.redis.com/latest/ri/release-notes/"}),"RedisInsight Release Notes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.redis.com/explore/redisinsight/slowlog"}),"Debug Redis using RedisInsight Slow log Debugging Tool"))),Object(i.b)("h2",{id:""}),Object(i.b)("div",null,Object(i.b)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"}," ",Object(i.b)("img",{src:"/img/launchpad.png",className:"thumb",loading:"lazy",alt:"Redis Launchpad"}))))}l.isMDXComponent=!0},395:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(393),r=a(400);a(394),a(59);t.a=function(e){var t=s.a.useState(!1),a=t[0],n=t[1];return s.a.createElement("div",{className:"ri-container"},s.a.createElement("div",{className:"ri-description-short"},s.a.createElement("div",{className:"ri-icon"},s.a.createElement("span",{className:"fe fe-zap"})),s.a.createElement("div",{className:"ri-detail"},s.a.createElement("div",{className:"ri-title"},s.a.createElement("a",{href:e.page},e.title)),s.a.createElement("div",{className:"ri-description"},e.description,s.a.Children.count(e.children)>0&&s.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return n(!a)}})))),a&&s.a.createElement("div",{className:"ri-description-long"},s.a.createElement(i.a,{components:r.a},e.children)))}},396:function(e,t,a){"use strict";var n=a(0),s=a(397);t.a=function(){var e=Object(n.useContext)(s.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},397:function(e,t,a){"use strict";var n=a(0),s=Object(n.createContext)(void 0);t.a=s},398:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(396),r=a(402),o=a(60),d=a.n(o),c=37,l=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,m=e.groupId,b=e.className,u=Object(i.a)(),h=u.tabGroupChoices,f=u.setTabGroupChoices,g=Object(n.useState)(o),O=g[0],j=g[1],v=n.Children.toArray(e.children);if(null!=m){var N=h[m];null!=N&&N!==O&&p.some((function(e){return e.value===N}))&&j(N)}var y=function(e){j(e),null!=m&&f(m,e)},R=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},b)},p.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(r.a)("tabs__item",d.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return R.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case l:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(R,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):s.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},399:function(e,t,a){"use strict";var n=a(3),s=a(0),i=a.n(s);t.a=function(e){var t=e.children,a=e.hidden,s=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:s}),t)}}}]);