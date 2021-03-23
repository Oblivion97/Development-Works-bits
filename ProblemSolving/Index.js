list = [
    {"category": "ctg1", "question_name": "q1"},
    {"category": "ctg1","question_name": "q2"},
    {"category": "ctg2", "question_name": "q3"}
];



// category= [{
//         "name": "ctg1",
//         "questions" : [{"name": "q1"},{"name": "q2"}]
//     },
//     {
//         "name": "ctg2",
//         "questions" : [{"name": "q3"}]
//     }];


var data = [];


for(var i = 0; i < list.length; i++) {
    var obj = list[i];


    
    
    var ctg = {};
    ctg.name = obj.category;//category name
    ctg.questions = [];

    var question = {};
    question.name = obj.question_name;
    
    var result = catchecker(ctg.name);

    //ctg.questions.push(question);

    if (result != undefined) {
        data[result].questions.push(question);
    }else{
        ctg.questions.push(question);//question
        data.push(ctg);
    }
console.log(data);
   //console.log(ctg);
   //data.push(ctg);
    //data.push({Category: ctg},{Question: qname});


    
    //data.push({name:obj.category, category:obj.question_name});
    
}
//console.log(data);
function catchecker(catcheck) {
    var result = undefined;
    // if (data == undefined) {
    //     return 0;
    // }
    //console.log(data.length);
    
    for (let j = 0; j < data.length; j++) {
        var obj = data[j];
        //console.log(obj);
            if (obj.name == catcheck) {
                result = j;
                break;
        //     }else{
        //         result = 0;
        //         break
         }
        
    }
    return result
}





// // var data = [];
// // for(var i = 0; i < list.length; i++) {
// //     var obj = list[i];
// // 	var ctg = {};
// //         ctg.name = obj.category;
// // 	ctg.questions = [];

// //     data.push(ctg);
// //     console.log(data);
// //     //console.log(obj.category);
// //     //console.log(obj.question_name);
// // }




// const array = [
//     { "id": "ctg1", "name": "Central Microscopy"},
//     { "id": "ctg1", "name": "Crystallography Facility"},
//     { "id": "ctg2", "name": "Central Microscopy"}
    
//   ];
// const result = [];

// const map = new Map();
// for (const item of array) {
//     if(!map.has(item.id)){
//         map.set(item.id, true);    // set any value to Map
//         result.push({
//             id: item.id,
//         });
//     }
//     result.push({name: item.name});
// }
// console.log(result)


