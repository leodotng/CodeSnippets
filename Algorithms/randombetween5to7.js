function rand5() {
    return 1 + Math.random() * 4;
}

function rand7(){
    return 5 + rand5() / 5 * 2;
}

/* Question
If you have a function that generate random number 
beteween 1 to 5 how could you generate random number 
1 to 7 by using that function?

*/

rand7()