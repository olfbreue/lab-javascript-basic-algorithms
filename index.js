// Iteration 1: Names and Input


const hacker1 = "Simon";
console.log (`The driver´s name is: ${hacker1}`)

const hacker2 = "Simon";
console.log (`The navigator´s name is: ${hacker2}`)

// Iteration 2: Conditionals

let charCnt1 = hacker1.length;
let charCnt2 = hacker2.length;

    if (charCnt1 > charCnt2) 
        {
         console.log(`The driver has the longest name, it has ${charCnt1} characters.`);
        }

    else if(charCnt1 < charCnt2) 
        {
        console.log(`It seems that the navigator has the longest name, it has ${charCnt2} characters.`);
        }

    else if(charCnt1 === charCnt2) 
        {
        console.log(`Wow, you both have equally long names, ${charCnt2} characters!`);
        }

// Iteration 3: Loops

let position = 0;
let hacker1upper = hacker1.toUpperCase();
let hackerSpaceCapital = "";

    do 
    { 
    hackerSpaceCapital = hackerSpaceCapital + (hacker1upper.charAt(position)) + " ";
    position ++;
    } 
    while (position < charCnt1);

console.log(hackerSpaceCapital);

let hackerreverse = "";
position = charCnt1;


do 
{ 
    hackerreverse = hackerreverse + (hacker1.charAt(position));
    position --;
} 
while (position > -1);

console.log(hackerreverse);

//var array = [hacker1,hacker2];
//console.log(array.sort());

if (hacker2>hacker1) {
    console.log("The driver's name goes first.");
    }
else if (hacker1>hacker2) {
    console.log("Yo, the navigator goes first, definitely.");

    }
else (
    console.log("What?! You both have the same name?")
)

const longstring = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt orci a lorem accumsan vestibulum. Proin luctus sem ut ante eleifend faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id bibendum ligula. Ut rutrum arcu non ullamcorper ornare. Mauris lacinia massa sit amet arcu pellentesque rutrum. Quisque sed vehicula nisi. Proin nec dui lorem. Nulla in auctor lorem. Curabitur scelerisque odio ut fermentum euismod. Nullam interdum felis non ex pellentesque, in tristique sem semper. Donec vulputate erat ut ornare maximus. Ut ut massa non purus tempus tincidunt nec at magna. Sed pulvinar laoreet ipsum vitae accumsan.

Maecenas vel nulla ac ante lacinia fringilla in ac velit. In hac habitasse platea dictumst. Maecenas aliquam massa sit amet libero malesuada, tempor rutrum velit pellentesque. Etiam pulvinar rutrum velit. Integer ut malesuada elit. Proin nisi magna, suscipit vitae ullamcorper et, interdum vel quam. Maecenas ut ullamcorper sapien, at efficitur augue. Proin erat augue, dignissim non imperdiet a, porttitor id arcu. Nam consequat eu libero a consequat. Donec sed porta sapien. Aenean tempor sit amet dolor sit amet rhoncus. Morbi vitae aliquet nisi. Pellentesque sem lorem, condimentum vitae ornare at, tincidunt vitae libero. Donec consectetur mauris risus, vel posuere magna vulputate nec. Nulla sed molestie augue. Nam vel neque a justo semper finibus.

Sed justo nisl, porta vitae blandit non, gravida nec sem. Nullam sapien ipsum, volutpat consectetur rutrum et, volutpat in metus. Maecenas eu leo gravida, hendrerit diam sed, pretium diam. Proin vel libero sit amet elit blandit feugiat. Suspendisse potenti. Sed sem ligula, vehicula eu elit nec, posuere congue justo. Cras id orci ac dui ullamcorper blandit in a lacus. Mauris sem purus, ultrices ut pharetra ac, tincidunt non arcu. Vestibulum eu tortor vel turpis ullamcorper interdum. Vestibulum nec tincidunt sapien. Curabitur arcu urna, auctor vitae vehicula non, dapibus et odio. `

function wordcounter(longstring);{
 let totalsofar = 0;
    for(let i = 0; i<longstring.length; i++)
        if (structuredClone(i) === " ")
            {
            totalsofar +=1;
            }
            totalsofar +=1;
}