function triple(a,b) {
    document.writeln(a === b);
}
function double(a,b){
    document.writeln(a == b);
}

function myMap(array){    
    array = array.map(x => x+=1);
    document.writeln(array);
}

function myFilter(array){
    array = array.filter(word => word.length > 10);
    document.writeln(array);
}

function myReduce(array){
    sum = array.reduce((previousValue, currentValue) => previousValue + currentValue);
    document.writeln(sum);
}

function myFind(ages){
    found = ages.find(age => age > 18);
    document.writeln(found);
}

function mySome(ages){
    rs = ages.some((age) => age >18);
    document.writeln(rs);
}

function endString(array, last){
    array.push(last);
    document.writeln(array);
}

function startString(array,value){
    array.unshift(value);
    document.writeln(array);
}
spliced = arr.splice(1, 1);

function removeString(array,index_at,num){
    splice = array.splice(index_at,num);
    document.writeln(array);
}

function bt1(x,y){
    if (x ===  y){
        return (x+y)*3;
    }
    return x+y;
}

function bt2(x){
    if (x > 19){
        return (x-19)*3
    }
    return 19-x;
}

function bt3(x){
    let rs = [];
    for (let i=0;i<10;i++){
        let num = x.replace('*',i);
        if (parseInt(num,10) % 3 == 0){
            rs.push(num);
        }
    }
    return rs;
}

function bt4(x){
    let rs = [];
    for (let i=0;i<10;i++){
        let num = x.replace('*',i);
        if (parseInt(num,10) % 6 === 0){
            rs.push(num);
        }
    }
    if (rs.length>0) return rs;
    return '[]';
}