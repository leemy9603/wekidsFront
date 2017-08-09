//在全局定义验证码      
var code;

//产生验证码     
window.onload = function() {  
    createCode();  
}  
 
//产生验证码的函数 
function createCode() {  
    code = "";  
    var codeLength = 5; //验证码的长度     
    var checkCode = document.getElementById("checkCode");  
    var random = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R',  
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'p', 'r', 's', 't', 'w', 'x', 'y'); //随机数     
    for(var i = 0; i < codeLength; i++) { //循环操作     
        var charIndex = Math.floor(Math.random() * 52); //取得随机数的索引     
        code += random[charIndex]; //根据索引取得随机数加到code上     
    }  
    checkCode.value = code; //把code值赋给验证码     
} 