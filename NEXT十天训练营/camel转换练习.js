/*
 * 实现函数 convertToCamelCase 功能，其会转换传入的字符串参数 string 为驼峰格式。具体要求如下：
 * 1、参数 string 是以中划线（-）连接单词的字符串，需将第二个起的非空单词首字母转为大写,
 * 如 -webkit-border-radius 转换后的结果为 webkitBorderRadius。
 * 2、返回转换后的字符串
 */

function convertToCamelCase(str){
    var strs=str.split("-");
    // console.log(strs);
    var count=0;
    for(var i=0;i<strs.length;i++){
        if (strs[i]!=""){
            count++;
            if(count<2) continue;
            var s1=strs[i].substring(0,1);
            // console.log(s1);
            var s2=strs[i].substring(1);
            // console.log(s2);
            s1=s1.toLocaleUpperCase();
            strs[i]=s1+s2;
        }
    }
    return strs.join("");
}

// background-image 转换后结果为 backgroundImage 
var str1 = convertToCamelCase('background-image'); 
console.log(str1);
// -webkit-border-radius 转换后结果为 webkitBorderRadius 
var str2 = convertToCamelCase('-webkit-border-radius');
console.log(str2);