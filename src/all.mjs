/**
 * (#)all.mjs   1.0.0   11/17/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

/**
 * The promise class' all() static method. Note
 * that setTimeout is used to simulate asynchronous
 * execution.
 *
 * See: https://www.javascripttutorial.net/es6/javascript-promise-all/
 */

class All {
    /**
     * The run method.
     */
    run() {
        console.log('-- All          --');

        this.resolved();
        this.rejected();
    }

    resolved() {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The first promise has resolved to 10');
                resolve(10);
            }, 1 * 150);
        });

        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The second promise has resolved to 20');
                resolve(20);
            }, 2 * 150);
        });

        const p3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The third promise has resolved to 30');
                resolve(30);
            }, 3 * 150);
        });

        Promise.all([p1, p2, p3]).then((results) => {
            const total = results.reduce((p, c) => p + c);

            console.log(`Results: ${results}`); // 10,20,30
            console.log(`Total  : ${total}`);     // 60
        });
    }

    rejected() {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The first promise has resolved to 11');
                resolve(11);
            }, 1 * 150);
        });

        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The second promise has rejected');
                reject('Failed');
            }, 2 * 150);
        });

        const p3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('The third promise has resolved to 33');
                resolve(33);
            }, 3 * 150);
        });

        Promise.all([p1, p2, p3])
            .then(console.log)  // Never executes
            .catch(console.log) // Failed
    }
}

export { All };
