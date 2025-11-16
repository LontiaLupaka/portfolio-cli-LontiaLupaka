const readline = require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

function showMenu() {
    console.log(`
        ==========================
            MY PORTFOLIO APP
        ==========================
        1. About Me
        2. Skills I want to Learn
        3. My Projects
        4. My Future Plans
        5. Exit    
        
         `);

}  

function aboutMe() {
    console.log(`
                 ---------------------------------------
                             ABOUT ME     
                 ---------------------------------------
                  * FULL NAME: Lontia Lupaka
                  * SCHOOL AND YEAR OF STUDY: SICT,
                    2nd year
                  * PROGRAMME: Computer Science
                  * BRIEF SELF-DESCRIPTION: I am a curious
                    creator who loves turning ideas into 
                    functional technology.
                 
                `);
}
function skillsToLearn() {
    console.log(`
                 -----------------------------------
                         SKILLS I WANT TO LEARN     
                 -----------------------------------
                 1.Advanced JavaScript Frameworks 
                 (e.g., React, Angular)
                 2.WEB DEVELOPMENT
                 3.UI/UX
                 4.CLOUD COMPUTING
             `)
}
function myProjects() {
    console.log(`
                 -----------------------------------
                         MY PROJECTS     
                 -----------------------------------
                 1.RECIPE APP
                 2.CALCULATOR APP
                 3.DIGITAL POETRY BOOK
                 4.WEATHER APP (STILL IN PROGRESS)
                 5.TO DO APP
                 6.CBU WAYFINDER (STILL IN PROGRESS)
                 7.ARDUINO TRAFFIC LIGHT SYSTEM
                `);
}     
function myFuturePlans() {
    console.log(`
                 ----------------------------------------
                           MY FUTURE PLANS
                 ----------------------------------------
                 1. I aim to deepen my technical skills,
                    especially in software development 
                    and UX/UI design.
                 2. Gain hands-on experience through
                    projects and internships    
                 3. I see myself contributing to 
                    impactful technology solutions,
                    continuing to learn, and preparing 
                    for leadership roles in tech while 
                    building a strong professional foundation.
                `);
function exitApp() {
    console.log('Exiting the application. Goodbye!');
    rl.close();
   }
}   
function handleChoice(choice) {
    switch(choice) {
        case '1':
            aboutMe();
            break;
        case '2':
            skillsToLearn();
            break;
        case '3':
            myProjects();
            break;
        case '4':
            myFuturePlans();
            break;
        case '5':
            console.log('Exiting the application. Goodbye!');
            rl.close();
            return;
        default:
            console.log("Invalid choice. kindly enter an option 1 to 5.");
    }
    askMenu();
}    
function askMenu() {
    showMenu();
    rl.question("kindly enter an option 1 to 5. ", handleChoice);
}
askMenu();