/**
 * (#)await-async.mjs   1.0.0   11/18/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

/**
 * Using promises with await and async. Note that
 * setTimeout is used to simulate asynchronous
 * execution.
 *
 * See: https://www.javascripttutorial.net/es-next/javascript-async-await/
 */

class AwaitAsync {
    /**
     * The run method.
     */
    run() {
        this.usingAsync();
        this.asyncClassMethod().then(console.log);
        this.usingAwait();
    }

    usingAsync() {
        async function sayHi(name) {
            return `Async: Hi ${name}!`;    // Can be retrieved with then()
        }

        sayHi('Jonathan').then(console.log);

        let sayBye = async function(name) {
            return Promise.resolve(`Async: Bye ${name}`);
        }

        sayBye('Jonathan').then(result => console.log(result));

        let sayOops = async function() {
            return Promise.reject('Async: Oops!');
        }

        sayOops().catch(console.log);
    }

    async asyncClassMethod(){
        return 'Async: I\'m an async class method';
    }

    fetchUser(userId) {
        return new Promise((resolve, reject) => {
            if (userId >= 100) {
                if (userId === 100)
                    resolve({
                        userId: userId,
                        userName: 'admin'
                    });
                else
                    resolve({
                        userId: userId,
                        userName: 'basic'
                    });
            } else {
                reject(`Invalid user ID: ${userId}`);
            }
        });
    }

    fetchServices(user) {
        return new Promise((resolve, reject) => {
            if (user.userName === 'admin')
                resolve(['Email', 'VPN', 'CDN']);
            else
                reject(`Invalid user name: ${user.userName}`);
        });
    }

    fetchServicesCost(services) {
        return new Promise((resolve, reject) => {
            resolve(services.length * 100);
        });
    }

    async calculateServiceCost(userId) {
        try {
            const user = await this.fetchUser(userId);
            const services = await this.fetchServices(user);
            const cost = await this.fetchServicesCost(services);

            console.log(`Async: The cost for services is $${cost}`);
        } catch (error) {
            await Promise.reject(error);
        }
    }

    usingAwait() {
        this.calculateServiceCost(100)
            .then(() => {});

        this.calculateServiceCost(101)
            .catch(error => {
                console.log(`Await: ${error}`);
            });

        this.calculateServiceCost(99)
            .then(() => {})
            .catch(error => {
                console.log(`Await: ${error}`);
            });
    }
}

export { AwaitAsync };
