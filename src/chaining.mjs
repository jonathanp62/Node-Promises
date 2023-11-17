/**
 * (#)chaining.mjs  1.0.0   11/14/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

/**
 * The chaining promises class. Note that
 * setTimeout is used to simulate asynchronous
 * execution.
 *
 * See: https://www.javascripttutorial.net/es6/promise-chaining/
 */

class Chaining {
    /**
     * The run method.
     */
    run() {
        console.log('-- Chaining     --');

        this.basics();
        this.generatingNumbers();
        this.returnPromise();
    }

    basics() {
        // Function then() returns a promise

        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10);
            }, 250);
        });

        p.then(result => {          // result = 10
            console.log(result);
            return result * 2;
        }).then(result => {         // result = 20
            console.log(result);
            return result * 3;
        }).then(result => console.log(result)); // result = 60
    }

    generatingNumbers() {
        function generateNumber(num) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(num);
                }, 250);
            });
        }

        generateNumber(100)
            .then(result => {
                console.log(result);                        // 100
                return generateNumber(result * 2);
            })
            .then(result => {
                console.log(result);                        // 200
                return generateNumber(result * 3);
            })
            .then(result => console.log(result));           // 600
    }
    returnPromise() {
        function getUser(userId) {
            return new Promise((resolve, reject) => {
                console.log(`Getting user ${userId} from the database ...`);
                setTimeout(() => {
                    resolve({
                        userId: userId,
                        userName: 'admin'
                    });
                }, 250);
            });
        }

        function getServices(user) {
            return new Promise((resolve, reject) => {
                console.log(`Getting the services for user ${user.userName} from the API ...`);
                setTimeout(() => {
                    resolve(['Email', 'VPN', 'CDN']);
                }, 250);
            });
        }

        function getServicesCost(services) {
            return new Promise((resolve, reject) => {
                console.log(`Calculating the cost of services ${services} ...`);
                setTimeout(() => {
                    resolve(services.length * 100);
                }, 250);
            });
        }

        getUser(100)
            .then(getServices)  // Same as result => getServices(result)
            .then(getServicesCost)
            .then(console.log); // 300
    }
}

export { Chaining };