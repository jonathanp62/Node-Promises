/**
 * (#)any.mjs   1.0.0   11/17/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

/**
 * The promise class' any() static method. Note
 * that setTimeout is used to simulate asynchronous
 * execution.
 *
 * See: https://www.javascripttutorial.net/es6/javascript-promise-any/
 */

class Any {
    run() {
        this.allResolved();
        this.oneResolved();
        this.allRejected();
    }

    allResolved() {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Any: Promise 1 fulfilled');
                resolve(1);
            }, 175);
        });

        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Any: Promise 2 fulfilled');
                resolve(2);
            }, 275);
        });

        const p = Promise.any([p1, p2]);

        p.then((value) => {
            console.log(`Any: Returned promise: ${value}`);  // Will be promise 1 since it is fulfilled first
        });
    }

    oneResolved() {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Any: Promise 3 rejected');
                reject('error');
            }, 185);
        });

        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Any: Promise 4 fulfilled');
                resolve(2);
            }, 370);
        });

        const p = Promise.any([p1, p2]);

        p.then((value) => {
            console.log(`Any: Returned Promise: ${value}`);  // Will be promise 4 since promise 1 was rejected
        });
    }

    allRejected() {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Any: Promise 5 rejected');
                reject('error5');
            }, 1000);
        });

        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Any: Promise 6 rejected');
                reject('error6');
            }, 2000);
        });

        const p = Promise.any([p1, p2]);

        p.catch((e) => {
            console.log(`Any: Returned Promise: ${e}, ${e.errors}`);
        });
    }
}

export { Any };
