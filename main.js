function addStudent(){
    var name = document.getElementById('name').value;
    var number = parseInt(document.getElementById('matrnumber').value);
    var nc = parseFloat(document.getElementById('nc').value);

    var student = {
        "Name": name,
        "Matrikelnumber": number,
        "NC": nc
    };

    studenten.push(student);
    console.log(studenten)
}


function main(){
     
    let totalNC = 0;

    for(let i = 0; i < studenten.length; i++){
        var student = studenten[i]
        console.log(student);

        totalNC += student.nc;
    }

    let averageNC = (totalNC / studenten.length);
    console.log("Average Notes: " + averageNC);
   
}

let studenten = [
   
]
