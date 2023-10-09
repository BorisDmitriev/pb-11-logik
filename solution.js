//1a
const isDogBetter = true;
const isCatBetter = false;
console.log(`Q1a: ${isDogBetter && isCatBetter}`);
//1b
console.log(`Q1b: ${isDogBetter || isCatBetter}`);

//1c
console.log(`Q1c: ${!(isDogBetter && isCatBetter)} `);

//2a
const atoms = 15;
const sandGrains = 10;
const starsInSky = 2;

//3a
console.log(`Q3a: ${ (atoms > starsInSky) && (atoms > sandGrains) } `);
//3b
console.log(`Q3b: ${!(atoms === sandGrains)} `);
//3c
console.log(`Q3c: ${(starsInSky<sandGrains) || (starsInSky>atoms)} `);
//3d
console.log(`Q3d: ${(atoms === starsInSky) || (atoms !== sandGrains)} `);
//3e
console.log(`Q3e: ${(atoms >= 10) || (sandGrains <= 10)} `);
//console.log(`Q3e: ${ ( (atoms > 10) || (atoms ===10) ) && ( (sandGrains < 10) || (sandGrains === 10) )} `)
//3f
console.log(`Q3f: ${((atoms * starsInSky) < 100) || (atoms * sandGrains > 100)} `);
