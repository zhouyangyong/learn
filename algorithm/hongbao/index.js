// let ran_num = Math.random();
// 函数表达式
const hongbao = (totle,num) => {
    const arr = []; //待分配金额数组
    // 定义计算量
    let restAmount = totle,
        restNum = num;
    for(let i = 0; i < num-1; i ++) {
        //前n-1发随机
        // 20*Math.random() 10
        // 10*Math.random() 5
        // 5*Math.random() 2.5
        // 怎么发， 随机 不公平
        // restAmount/restNum 平均值
        let amount = parseFloat(Math.random()*((restAmount/restNum)*2-0)).toFixed(2);
        restAmount -= amount;
        restNum --;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));
    return arr;
}

console.log(hongbao(20,47));