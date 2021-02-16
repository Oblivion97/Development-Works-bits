    let js = 'amazing';
    res = 40 + 8 + 23 - 10;

    console.log("Jonas");
    console.log('23');

    let first_name1="Jonas";
    let last_name="Curt";

    console.log(first_name1, last_name);

    let booleanvalue= true;
    console.log(booleanvalue);

    console.log(typeof true);

    console.log(typeof first_name1);

    let year1=2021;

    console.log(typeof year);

    const Mark_mass=78;
    const Mark_height=1.69;
    const John_mass=92;
    const John_height=1.95;

    Mark_BMI=Mark_mass/(Mark_height*Mark_height);
    John_BMI=Mark_mass/(John_height*John_height);
    
    const MarkhigherBMI=Mark_BMI>John_BMI;

    




    console.log(John_BMI, Mark_BMI, MarkhigherBMI);

const first_name= 'Mahmudul';
const job='student';
const Birth_year='2010';
var now = new Date();
var year=now.getFullYear();
console.log(year);

const introduction="I'm " + first_name + ', a ' + (year-Birth_year) + " old " + job;
console.log(introduction);

const MahmudulHasan = `I am ${first_name}, a ${year-Birth_year} years old ${job}`;
console.log(MahmudulHasan);

const drivingAge=18;
const MAge = year-Birth_year;


if (MAge>=drivingAge) {
    console.log(`is eligible for driving for ${MAge-drivingAge} years`)
}else{
    console.log(`will be eligible for driving in ${18-MAge}`);
}


const Mark_BMIc2 = 28.3;
const John_BMIc2 = 23.9;

if (Mark_BMIc2>John_BMIc2) {
    console.log("Mark's BMI is higher than John's!");
}else{
    console.log("John's BMI is higher than Mark's!");
}

const totalscoreDolphins = 96+108+89;
console.log(`Dolphins Total: ${totalscoreDolphins}`);
const totalscoreKoalas = 88+91+110;
console.log(`Koalas Total: ${totalscoreKoalas}`);

const AvgScoreDolphins = totalscoreDolphins/3;
const AvgScoreKoalas = totalscoreKoalas/3;

console.log(AvgScoreDolphins);
console.log(AvgScoreKoalas);

if (AvgScoreDolphins>AvgScoreKoalas) {
    console.log("Result: Dolphin Wins");
}else if (AvgScoreDolphins==AvgScoreKoalas) {
    console.log("Result: Draw");
}else{
    console.log("Result: Koalas Wins");
}

