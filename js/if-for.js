'use sprict'

// let i = 2 ;

// if(i === 1){
//     console.log("真です");
// }

// let testscore = 80;

// if(testscore >= 80) {
//     document.write("合格です！おめでとうございます！");
// } else if(testscore >= 70) {
//     document.write("惜しい！あと少し！");
// } else {
//     document.write("不合格です！もう少し勉強しましょう");
// }

// const nameList = ["田中","山田","林","佐藤"];

// for (let i = 0; i < nameList.length; i++)
//     {console.log(`${i+1}.${nameList[i]}`);}

function scoreCheck() {
    let testscore = document.getElementById('score').value
    if(testscore >= 80)
    {document.write("合格です！おめでとうございます！");}
    else if(testscore >= 70)
    {document.write("惜しい！あと少し！");} 
    else {document.write("不合格です！もう少し勉強しましょう"); }
}