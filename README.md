# OnePage Transformer
A  WordPress Plugin that allows you to transform your site to an OnePage Style on the fly.
Just select a couple of pages, order them how they will display and that's it !
## Requirements for developers

if you want contribute or extands the Plugin : 

Install the  module bundler Webpack v4+ , webpack-cli  ***globally***.
```
npm install -g webpack
npm install -g webpack-cli
```

## Installation
1. Clone the repository to the Plugins directory of your WordPress installation: / wp-content / plugins / .

2.  Install the dependencies :
```
  $ npm install
```
3. run webpack  () :
```
  $ webpack
```
** and that's all ! **  you will have a new directory at the root of your plugin: `dist` which contains the compiled javascript file.
now you can create your JSX components, and when you're ready, rerun ``` $ webpack```.
