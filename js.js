( function () {
    'use strict';


    function getWord(){

        let  massifAll = [].slice.call(arguments);
        let arrText = massifAll.splice(-1).join('').split(' ');
        let longMassifNoText = massifAll.length;
        let i = 0;
        let j = 1;
        let time = Number(massifAll[0] + '000');

        if( arrText.length < longMassifNoText){
            let difference = longMassifNoText - arrText.length;
            massifAll.splice(-difference)
        }

        setTimeout(function run(){
            time = Number(massifAll[j] + '000');
            console.log(arrText[i]);
            i++;
            j++;
            if(longMassifNoText > arrText.length && i === massifAll.length){
               return
            }
            if(arrText.length > massifAll.length && i >= massifAll.length - 1){
                time = Number(massifAll[massifAll.length - 1] + '000')
            }
            if(i === arrText.length){
                return
            }
            setTimeout(run,time)
        },time)

    }
    getWord(0,1,2,1,1,2,0,'Мы люди не гордые: нету хлеба, подавай пироги .');


}());
