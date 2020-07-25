
// feettoMile
function feetToMile(feet){
    var mile = feet * 0.000189394;
    return mile;
}
var getMile = feetToMile(1000);
console.log(getMile);


// woodCalculator
function woodCalculator(chair, table, bed){
    var needWoodForChair = chair * 1;
    var needWoodForTable = table * 3;
    var needWoodForBed = bed * 5;

    var needTotalWood = needWoodForChair + needWoodForTable + needWoodForBed;
    return needTotalWood;
}
    var woodResult = woodCalculator(14, 5, 12);
    console.log(woodResult);

    // brickCalculator

    function brickCalculator(firstApartment, secondApartment, heigherApartment){
        var buisnessFloor = firstApartment * 15000;
        var economyFloor = secondApartment * 12000;
        var luxuryFloor = heigherApartment * 10000;
        var needBrickForBuilding = buisnessFloor + economyFloor + luxuryFloor;
        return needBrickForBuilding;
    }
    var totalBrick = brickCalculator(10, 10, 5);
    console.log(totalBrick); 



    // tinyFriend

function tinyFriend(name){
    var lgth = 0;
    var longest;
    
    for(var i=0; i < name.length; i++){
        if(name[i].length > lgth){
            var lgth = name[i].length;
            longest = name[i];
        }      
    } 
    return longest;
}
var fatName = tinyFriend(['first', 'second', 'longish', 'kalam', 'kolimuddin', 'balam', 'billi']);
console.log(fatName);
