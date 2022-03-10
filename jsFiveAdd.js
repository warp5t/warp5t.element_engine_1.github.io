// function test() {
// //     if(controle === true) {
// //         controle = false;
// //     }
// //     else controle = true;
// //     console.log('test');
// //    console.log('controle : ', controle);

//    rightCheck === "false 000";
    
// }

let swtch = false;
function test_1() {
    if (swtch === false) {
        swtch = true;
    } else {
        swtch = false;
    }
    countY();
    console.log('swtch: ', swtch);
}


function countY_invert() {
  //  count++;
console.log('arrY_invert.length : ', arrY_invert.length);
    levelInvert = 0;
    for (let i = 0; arrY_invert.length > i; i++) {
        if (arrY_invert[i] <= radPurple + purpleY) {
            levelInvert++;
            //console.log(levelInvert);
        }
    }

}

let controle = false;
function checkY_invert() {
    //console.log('checkY_invert');
    //console.log(arrY_invert[levelInvert]);
    if (purpleY + radPurple >= arrY_invert[levelInvert]) {
      
        purpleY = arrY_invert[levelInvert] - radPurple;
      // count = 100;
       if(forceCooficent != FC && pltfrm === true){
            forceCooficent = FC;
       }
        // count++;
        //console.log(' checkY_invert  levelInvert : ', levelInvert);
    }

}



function fall() {
    forceCooficent = forceCooficent + 0.3;
    forceCooficent = (((Math.round(forceCooficent * 10))) / 10);
    if (forceCooficent > FC) {
        forceCooficent = FC;
    }
    purpleY = purpleY + forceCooficent;
   
}

function raise() {
       forceCooficent = forceCooficent - 0.2;
       forceCooficent = (((Math.round(forceCooficent * 10))) / 10);
       purpleY = purpleY - forceCooficent;
       purpleY = (((Math.round(purpleY * 10))) / 10);     
}


let initCount = 0;
function initPositionY() {
   // console.log("initPositionY");
   
    for(let i = 0; arrY_invert.length > i; i++ ){
        if(purpleY > arrY_invert[i]){
            initCount++;
        }
       // console.log(initCount);
    }
    levelInvert = initCount;
}