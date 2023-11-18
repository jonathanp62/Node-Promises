/**
 * (#)all-settled.mjs   1.0.0   11/18/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

/**
 * The promise class' allSettled() static method. Note
 * that setTimeout is used to simulate asynchronous
 * execution.
 *
 * See: https://www.javascripttutorial.net/es6/javascript-promise-allsettled/
 */

class AllSettled {
    /**
     * The run method.
     */
    run() {
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('AllSettled: The first promise has resolved');
                resolve(10);
            }, 350);

        });

        const p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('AllSettled: The second promise has rejected');
                reject(20);
            }, 550);
        });

        Promise.allSettled([p1, p2])
            .then((result) => {
                console.log('AllSettled: ', result);
            });
    }
}

export { AllSettled };
