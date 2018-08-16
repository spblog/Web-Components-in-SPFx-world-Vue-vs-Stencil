## Web Components in SPFx world: Vue vs Stencil
Blog post - [Web Components in SPFx world: Vue vs Stencil](http://spblog.net/post/2018/08/15/Web-Components-in-SPFx-world-Vue-vs-Stencil)


### How to run samples: 

in stencil folder:
1. npm install
2. npm run build
3. npm link

in vue folder:
1. npm install
2. npx vue-cli-service build --target wc --name vue-toggle src/components/Toggle.vue

in spfx folder: 
1. npm install
2. npm link stencil-toggle
3. gulp serve
4. add hello world web part in browser