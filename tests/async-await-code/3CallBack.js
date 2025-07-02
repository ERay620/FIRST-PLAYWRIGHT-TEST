
function getSalary(userId) {
    console.log(`Getting salary for ${userId}`)
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve(10000);
        }, 1000);
    });
}

function getName(userId) {
    console.log(`Getting name for ${userId}`)
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve('Cool John');
        }, 1000);
    });
}

const userId = 5;
// print user name and salary:
getName(userId).then(name =>{ // name is a Promise, so we need to wait for it to resolve 
    getSalary(userId).then(salary =>{  // salary is also a Promise, so we need to wait for it to resolve
        // Now we can safely log the name and salary
        console.log(`${name} has a salary of ${salary}`)
    })
})