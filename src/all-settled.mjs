/**
 * (#)all-settled.mjs   1.0.0   11/18/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
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
