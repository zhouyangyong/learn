function generateHashtag(str) {
    // if(str.length > 140){
    //     return false;
    // }
    // if(str === ''){
    //     return false;
    // }
    // str = '#' + str;
    //     return str;
    function capitalize(w) {
        // console.log(w);
        return w.charAt(0).toUpperCase() + w.slice(1);
    }
    return (str.length > 140 || str === 'null') ? false : '#' + str.split(' ').map(capitalize).join(' ');
    
}


// #How Are You

console.log(generateHashtag('How are you'));