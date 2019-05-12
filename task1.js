let money = +prompt("How much is your budget for a month?");
let time = prompt("Enter date in format YYYY-MM_DD");

let appData = {
    budget: money,
    express: {},
    optionalExpress: {},
    income: [],
    timeData: time,
    savings: false
};



for (let i = 0; i<2; i++){
let a = prompt('Enter expense item this month'),
    b = +prompt('How much will it cost?');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50){
        console.log('done');
        appData.express[a] = b;
    } else {
        console.log('My else');
        appData.income.push(a,b);
    }
};

appData.monePerDay = appData.budget / 30;

alert('Everyday budget is ' + appData.monePerDay);

if (appData.monePerDay < 100){
    console.log('Minimum level of wealth');
} else if (appData.monePerDay > 100 && appData.monePerDay < 200){
    console.log('Average level of wealth');
} else if (appData.monePerDay > 200){
    console.log('High level of wealth');
} else {
    console.log('Something happened')
}