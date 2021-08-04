window.onload=function(){
                document.onkeydown=function(){
                    var e=window.event||arguments[0];
                        if(e.keyCode==123){
                            alert("请尊重作者QwQ");
                            return false;
                        }
                        else if((e.ctrlKey)&&(e.shiftKey)&&(e.keyCode==73)){
                        alert("请尊重作者QwQ");
                        return false;
                        }
                };
            }
//【第一种】 debugger
        setInterval(function () {
            check()
        }, 1000);
        var check = function () {
            function doCheck(a) {
                if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
                    (function () { }
                    ["constructor"]("debugger")())
                } else {
                    (function () { }
                    ["constructor"]("debugger")())
                }
                doCheck(++a)
            }
            try {
                doCheck(0)
            } catch (err) { }
        };
        check(); 
 
        // 【第二种】禁用右键 （防止右键查看源代码）  
        window.οncοntextmenu = function () { return false; };
 
        
 
 
        //【第四种】如果用户在工具栏调起开发者工具，那么判断浏览器的可视高度和可视宽度是否有改变，如有改变则关闭本页面  
        var h = window.innerHeight,
            w = window.innerWidth;
        window.onresize = function () {
            if (h != window.innerHeight || w != window.innerWidth) {
                window.close(); 
                window.location = "./404.html"; 
                alert("请尊重作者QwQ");
                
            }
        };
        
        if (window.addEventListener) {
            window.addEventListener("DOMCharacterDataModified", function () { window.location.reload(); }, true);
            window.addEventListener("DOMAttributeNameChanged", function () { window.location.reload(); }, true);
        }

 
       
