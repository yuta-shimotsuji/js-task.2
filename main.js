/*global $*/

 function clickbutton(target){
  let result = document.getElementById("result");
  let target_value = target.innerHTML;
  
  let attention_num = ["0","00"];
  let attention_symbol1 = ["+","-","*","/"];
  let attention_symbol2 = ["+","-","*","/","."];
  let attention_symbol3 = ["+0","-0","*0","/0",".0"];
  
  if ( target_value == "AC") {
   // リセット
   result.innerHTML = 0;
  } else if ( target_value != "=" && result.innerHTML == "0" ){
   
   // 初期値における不正入力の制御
   if ( target_value == "." ){
    result.innerHTML = "0.";
   } else if ( target_value == "00" ) {
    result.innerHTML = 0;
   } else if ( attention_symbol1.includes(target_value)){
    result.innerHTML = 0;
   } else {
    result.innerHTML = null;
    result.innerHTML += target_value;
   }
   
  } else if ( attention_symbol2.includes(target_value) && attention_symbol2.includes(result.innerHTML.slice(-1))){
   // 式途中の演算子,小数点の連続入力を回避
   target_value = null;
  } else if ( attention_symbol1.includes(result.innerHTML.slice(-1)) && target_value == "00") {
   // 演算子後の00の不正入力を回避
   target_value = null;
  } else if ( attention_symbol3.includes(result.innerHTML.slice(-2))){
   
   // 演算子後の0の不正入力の回避
   if ( attention_num.includes(target_value)){
    target_value = null;
   } else {
    result.innerHTML += target_value;
   }
   
  } else if ( target_value != "=" ){
   // 数字を追加
   result.innerHTML += target_value;
  } else if ( target_value == "=") {
   // 計算を実行
   result.innerHTML = eval(result.innerHTML);
  }
  
 }

