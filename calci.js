
function display(str1){
            if(str1 == '.' && document.getElementById('second').value.length == 0){
                document.getElementById('second').value = '0.';
            }else{
            document.getElementById('second').value += str1;
        }
    }

        
            function addSign(str1) {
                var scn = document.getElementById('second').value;
                if(scn != ''){
                document.getElementById('sign').value = str1;
                document.getElementById('first').value = scn
                document.getElementById('second').value = '';
            }
        }

            function solve(){
                var fst = document.getElementById('first').value;
                var scn = document.getElementById('second').value;
                var sig = document.getElementById('sign').value;
                if(fst != '' && scn != '' && sig != ''){
                var res = fst + sig + scn;
                document.getElementById('first').value = eval(res);
                document.getElementById('second').value = '';
                document.getElementById('sign').value = '';
            }
        }

            function clear1(){
                res = document.getElementById('second').value;
                document.getElementById('second').value = res.slice(0, res.length - 1);
            }


            function allClear(){
                document.getElementById('first').value = '';
                document.getElementById('second').value = '';
                document.getElementById('sign').value = '';
            }
            function disp2(){
                document.getElementById('first').value = '';
            }