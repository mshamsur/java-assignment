//feet To mile converter

function feetTomile(feet){

    const mile = feet/5280;

    return mile;
}

    // const resultMile = feetTomile(520800);
    // console.log(resultMile, "Mile");


    //woodCalculator

    function woodCalculator(chair, table, bed){

                var chairWood = chair * 1;
                var tableWood = table * 3;
                var bedWood   = bed   * 5;

                var totalWood = chairWood + tableWood + bedWood;
                return totalWood;
    }     
            
    // var woodResult = woodCalculator(5, 10, 10);
    // console.log(woodResult, "CFT");


//tinyFriend


           function tinyFriend(name){
           
            var shortestWord = name[0].length;

            for (var i = 0; i <name.length; i++ ){

                var prsentName = name[i].length
                if(prsentName.length< shortestWord){

                    shortestWord = prsentName;
                }
                }

                    return shortestWord;
                }
                    
                // var output = tinyFriend(['Jamal','Borshanur','Sabrina','Onu']);
                // console.log(output);

                