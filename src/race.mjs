/**
 * (#)race.mjs  1.0.0   11/17/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

/**
 * The promise class' race() static method. Note
 * that setTimeout is used to simulate asynchronous
 * execution.
 *
 * See: https://www.javascripttutorial.net/es6/javascript-promise-race/
 */

class Race {
    /**
     * The run method.
     */
    run() {
        console.log('-- Race         --');

        this.winner();
    }

    winner() {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The first promise has resolved and wins the race');
                resolve('Winner - the race is over');
            }, 350);
        });

        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The second promise has resolved and loses the race');
                resolve('Loser - the race is over');    // Never printed by a then() handler
            }, 450);
        });


        Promise.race([p1, p2])
            .then(value => console.log(`Resolved: ${value}`))
            .catch(reason => console.log(`Rejected: ${reason}`));
    }
}

export { Race };
