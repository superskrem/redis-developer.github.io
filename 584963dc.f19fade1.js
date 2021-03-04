(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{129:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(126),i=n(135);n(127),n(55);t.a=function(e){var t=a.a.useState(!1),n=t[0],r=t[1];return a.a.createElement("div",{className:"ri-container"},a.a.createElement("div",{className:"ri-description-short"},a.a.createElement("div",{className:"ri-icon"},a.a.createElement("span",{className:"fe fe-zap"})),a.a.createElement("div",{className:"ri-detail"},a.a.createElement("div",{className:"ri-title"},a.a.createElement("a",{href:e.page},e.title)),a.a.createElement("div",{className:"ri-description"},e.description,a.a.Children.count(e.children)>0&&a.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return r(!n)}})))),n&&a.a.createElement("div",{className:"ri-description-long"},a.a.createElement(s.a,{components:i.a},e.children)))}},130:function(e,t,n){"use strict";var r=n(0),a=n(131);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},131:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},132:function(e,t,n){"use strict";var r=n(0),a=n.n(r),s=n(130),i=n(128),c=n(56),l=n.n(c),o=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,p=e.groupId,b=e.className,m=Object(s.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,O=Object(r.useState)(c),j=O[0],f=O[1],v=r.Children.toArray(e.children);if(null!=p){var k=h[p];null!=k&&k!==j&&u.some((function(e){return e.value===k}))&&f(k)}var E=function(e){f(e),null!=p&&g(p,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case d:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return E(t)},onClick:function(){E(t)}},n)}))),t?Object(r.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},133:function(e,t,n){"use strict";var r=n(3),a=n(0),s=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return s.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),s=(n(0),n(126)),i=(n(132),n(133),n(127),n(129),{id:"index-kubernetes",title:"Run Redis Enterprise using GKE",sidebar_label:"Kubernetes",slug:"/create/kubernetes/"}),c={unversionedId:"create/kubernetes/index-kubernetes",id:"create/kubernetes/index-kubernetes",isDocsHomePage:!1,title:"Run Redis Enterprise using GKE",description:"Pre-requisite",source:"@site/docs/create/kubernetes/index-kubernetes.mdx",slug:"/create/kubernetes/",permalink:"/create/kubernetes/",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/kubernetes/index-kubernetes.mdx",version:"current",sidebar_label:"Kubernetes",sidebar:"docs",previous:{title:"Install and Create Redis database from Source Code",permalink:"/create/from-source/"},next:{title:"Java and Redis",permalink:"/develop/java/"}},l=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Ensure that gcloud is installed on your local Linux system:",id:"ensure-that-gcloud-is-installed-on-your-local-linux-system",children:[]},{value:"Create a 5 Node GKE cluster:",id:"create-a-5-node-gke-cluster",children:[]},{value:"Create a new namespace",id:"create-a-new-namespace",children:[]},{value:"Switch context to the newly created namespace",id:"switch-context-to-the-newly-created-namespace",children:[]},{value:"Deploy the operator bundle",id:"deploy-the-operator-bundle",children:[]},{value:"Listing the deployment:",id:"listing-the-deployment",children:[]},{value:"Create a Redis Enterprise Cluster",id:"create-a-redis-enterprise-cluster",children:[]},{value:"Listing the RedisEnterpriseCluster",id:"listing-the-redisenterprisecluster",children:[{value:"Listing kubernetes resources",id:"listing-kubernetes-resources",children:[]},{value:"Listing the secrets",id:"listing-the-secrets",children:[]},{value:"Listing the password",id:"listing-the-password",children:[]}]}],o={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h3",{id:"pre-requisite"},"Pre-requisite"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A Linux system"),Object(s.b)("li",{parentName:"ul"},"curl, git, kubectl packages installed"),Object(s.b)("li",{parentName:"ul"},"A google account with Kubernetes Engine Admin role."),Object(s.b)("li",{parentName:"ul"},"Install the latest cloud SDK from ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.google.com/sdk/docs/quickstart#installing_the_latest_version"}),"Installing the latest Cloud SDK version (313.0.1)")),Object(s.b)("li",{parentName:"ul"},"Initializing the cloud SDK by ",Object(s.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.google.com/sdk/docs/quickstart#initializing_the"}),"gcloud init")," link")),Object(s.b)("h3",{id:"ensure-that-gcloud-is-installed-on-your-local-linux-system"},"Ensure that gcloud is installed on your local Linux system:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ gcloud -v\nGoogle Cloud SDK 320.0.0\nalpha 2020.12.04\napp-engine-go 1.9.71\napp-engine-java 1.9.84\napp-engine-python 1.9.91\napp-engine-python-extras 1.9.91\n")),Object(s.b)("h3",{id:"create-a-5-node-gke-cluster"},"Create a 5 Node GKE cluster:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ gcloud container clusters create testredis  --subnetwork default --num-nodes 5 --machine-type e2-standard-8 --enable-basic-auth --region us-east1\n")),Object(s.b)("h3",{id:"create-a-new-namespace"},"Create a new namespace"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"[node1 kubelabs]$ kubectl create namespace demo\nnamespace/demo created\n")),Object(s.b)("h3",{id:"switch-context-to-the-newly-created-namespace"},"Switch context to the newly created namespace"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),'$ kubectl config set-context --current --namespace=demo\nContext "kubernetes-admin@kubernetes" modified.\n')),Object(s.b)("h3",{id:"deploy-the-operator-bundle"},"Deploy the operator bundle"),Object(s.b)("p",null,"To deploy the default installation with kubectl, the following command will deploy a bundle of all the yaml declarations required for the operator. You can download the bndle YAML file via ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://raw.githubusercontent.com/RedisLabs/redis-enterprise-k8s-docs/master/bundle.yaml"}),"this")," link: "),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl apply -f bundle.yaml\nrole.rbac.authorization.k8s.io/redis-enterprise-operator created\nrolebinding.rbac.authorization.k8s.io/redis-enterprise-operator created\nserviceaccount/redis-enterprise-operator created\ncustomresourcedefinition.apiextensions.k8s.io/redisenterpriseclusters.app.redislabs.com created\ndeployment.apps/redis-enterprise-operator created\ncustomresourcedefinition.apiextensions.k8s.io/redisenterprisedatabases.app.redislabs.com created\n")),Object(s.b)("h3",{id:"listing-the-deployment"},"Listing the deployment:"),Object(s.b)("p",null,"Run the below command to verify redis-enterprise-operator deployment is running."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get deployment\nNAME                               READY   UP-TO-DATE   AVAILABLE   AGE\nredis-enterprise-operator          1/1     1            1           9m34s\n")),Object(s.b)("h3",{id:"create-a-redis-enterprise-cluster"},"Create a Redis Enterprise Cluster"),Object(s.b)("p",null,"Create a RedisEnterpriseCluster(REC) using the default configuration, which is suitable for development type deployments and works in typical scenarios:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl apply -f crds/app_v1_redisenterprisecluster_cr.yaml\n\nredisenterprisecluster.app.redislabs.com/redis-enterprise created\n")),Object(s.b)("h2",{id:"listing-the-redisenterprisecluster"},"Listing the RedisEnterpriseCluster"),Object(s.b)("p",null,"The rec is a shortcut for RedisEnterpriseCluster. The cluster takes around 5-10 minutes to come up.Run the below command to list the RedisEnterpriseCluster: "),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl get rec\nNAME               AGE\nredis-enterprise   14s\n[node1 redis-enterprise-k8s-docs]$\n")),Object(s.b)("h3",{id:"listing-kubernetes-resources"},"Listing kubernetes resources"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"$ kubectl get po,svc,deploy\nNAME                                                    READY   STATUS    RESTARTS   AGE\npod/redis-enterprise-0                                  2/2     Running   0          6m42s\npod/redis-enterprise-1                                  2/2     Running   0          4m34s\npod/redis-enterprise-2                                  2/2     Running   0          2m18s\npod/redis-enterprise-operator-58f8566fd7-5kcvz          1/1     Running   0          69m\npod/redis-enterprise-services-rigger-5849b86c65-lwql9   1/1     Running   0          6m42s\nNAME                          TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)                      AGE\nservice/kubernetes            ClusterIP      10.3.240.1     <none>          443/TCP                      71m\nservice/redis-enterprise      ClusterIP      None           <none>          9443/TCP,8001/TCP,8070/TCP   6m42s\nservice/redis-enterprise-ui   LoadBalancer   10.3.246.252   35.196.117.24   8443:31473/TCP               6m42s\nNAME                                               READY   UP-TO-DATE   AVAILABLE   AGE\ndeployment.apps/redis-enterprise-operator          1/1     1            1           69m\ndeployment.apps/redis-enterprise-services-rigger   1/1     1            1           6m44s\n")),Object(s.b)("h3",{id:"listing-the-secrets"},"Listing the secrets"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get secrets redis-enterprise -o yaml | grep password | awk '{print $2}'\nbXVLeHRpblY=\n")),Object(s.b)("h3",{id:"listing-the-password"},"Listing the password"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{}),"echo bXVLeHRpblY= | base64 -d\n")),Object(s.b)("p",null,"This command will display the password which you can use to access Redis Enterprise UI over the browser."))}d.isMDXComponent=!0}}]);