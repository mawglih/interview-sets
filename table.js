// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// need index.html file with table to work with

function solution(today, limit) {
    // write your code in JavaScript (Node.js 8.9.4)
    today = new Date(today);
    let table = document.querySelector('table');
    let count = 0;
    let rowCount = table.rows.length;
    console.log(rowCount)
    for(let i = 0; i < rowCount; i++) {
        let row = table.rows[i];
        let rowColorStyle = row.style.backgroundColor;
        let returned = table.rows[i].cells[2];
        if(returned.innerHTML) {
            if(rowColorStyle==='red') {
                count++;
                console.log('++++++++++++++++++++++++')
                console.log(count)
                console.log('returned but red, index: ', i);
                console.log('++++++++++++++++++++++++')
            }

        } else {
            let returnDate = addDays(table.rows[i].cells[1].innerHTML, limit);
            if(today > returnDate && !(rowColorStyle==='red')) {
                count++;
                console.log('++++++++++++++++++++++++')
                console.log(count)
                console.log('not returned but red, index: ', i);
                console.log('++++++++++++++++++++++++')
            }
        }
    }
    return count;
}


function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}