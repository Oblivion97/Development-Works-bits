list = [
    {"category": "ctg1", "question_name": "q1"},
    {"category": "ctg1","question_name": "q2"},
    {"category": "ctg2", "question_name": "q3"}
];


var data = [];


for(var i = 0; i < list.length; i++) {
    var obj = list[i];
    data.push({name:obj.category, category:obj.question_name});
    console.log(data);
    //console.log(obj.category);
    //console.log(obj.question_name);
}







// category= [{
//         "name": "ctg1",
//         "questions" : [{"name": "q1"},{"name": "q2"}]
//     },
//     {
//         "name": "ctg2",
//         "questions" : [{"name": "q3"}]
//     }];