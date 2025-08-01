 let display=document.querySelector("#display")

        function press(a){
            display.value += a;
        }

        function equal(){
            let res= eval(display.value);
            display.value=res;
        }

        function clr(){
            display.value=" ";

        }