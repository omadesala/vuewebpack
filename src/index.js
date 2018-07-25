import _ from 'lodash';
import Vue from 'vue';


var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue！'
     }
 });

console.log("hello webpack1");

function component() {
  var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
      element.innerHTML = _.join(['Hello', 'webpack2'], ' ');

        return element;
}

document.body.appendChild(component());
