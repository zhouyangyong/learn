const fs = require('fs');
const files = [];
function walk(path) {
    // 同步
    fs
        .readdirSync(path)
        .forEach(file => {
            // console.log(file,'+++++');
            const newPath = path + '/' + file;
            const stat = fs.statSync(newPath);
            if(stat.isFile()) {
                // 是js文件吗?
                // console.log('isFile');
                if(/\.js$/.test(file)) {
                    files.push(file);
                }
            } else if(stat.isDirectory()){
                // console.log('isDirectory');
                walk(newPath);
            }
        })
    // fs
    //     .readdir(path, function (error, files) { // 读取一个目录下的所有子元素
    //         if (error) {
    //             console.log(error);
    //             return;
    //         }
    //         console.log(files);
    //     });
}
walk('./src');
console.log(files);