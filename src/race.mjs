/**
 * (#)race.mjs  1.0.0   11/17/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
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
        this.winner();
    }

    winner() {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Race: The first promise has resolved and wins the race');
                resolve('Winner - the race is over');
            }, 350);
        });

        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Race: The second promise has resolved and loses the race');
                resolve('Loser - the race is over');    // Never printed by a then() handler
            }, 450);
        });


        Promise.race([p1, p2])
            .then(value => console.log(`Race: Resolved: ${value}`))
            .catch(reason => console.log(`Race: Rejected: ${reason}`));
    }
}

export { Race };
