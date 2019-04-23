// 年终奖问题
// ali 14.6 2.6
// meituan 16 4
// 51信用卡 17 5
// S 5
// A 3
// B 2
// C 1
// D

// level key 计算函数？
let stratigies = {
    'S': function(salary) {
        return salary * 5;
    },
    'A': function(salary) {
        return salary * 3;
    },
    'B': function(salary) {
        return salary * 2;
    },
    'C': function(salary) {
        return salary * 1;
    }
}
function calculate(level, salary) {
    return stratigies[level](salary);
    // if (level === 'S') {
    //     return salary * 5;
    // }
    // switch (level) {
    //     case 'S': return 5 * salary; break;
    //     case 'A': return 3 * salary; break;
    //     case 'B': return 2 * salary; break;
    //     case 'C': return 1 * salary; break;
    // }
    // const arr = {
    //     'S': 5,
    //     'A': 3,
    //     'B': 2,
    //     'C': 1,
    //     'D': 0
    // }
    // return arr[level] * salary;
}

console.log(calculate('S', 10000));