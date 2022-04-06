//原生数据类型
var a="Hello world!";
var b=false;
var c=null;
var d=undefined;
var e=0;
var f=1.1;
var g=1.1e3;
var h=1.1e-3;
var i=1.1e+3;
console.log(a,b,c,d,e,f,g,h,i)

//对象数据类型
var container={};
container.name="container";
container.age=18;

var container2={
    name:"container2",
    age:18,
    getName:function(){
        return this.name;
    }

}
console.log(container2.getName());
console.log(container2.name);
//读入

var container3=JSON.parse(JSON.stringify(container2));
console.log(container3.getName());
console.log(container,container2)

var container3=new Object();
container3.name="container3";
container3.age=18;
