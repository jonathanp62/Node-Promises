/**
 * (#)promises.mjs  1.0.0   11/13/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

/**
 * The promises (introduction) class. Note that
 * setTimeout is used to simulate asynchronous
 * execution.
 */
class Promises {
    /**
     * The run method.
     */
    run() {
        this.justResolved();
        this.resolvedAndReject()
    }

    justResolved() {
        // This promise is good for one use

        const promise = this.getUsersAlwaysOK();

        promise.then(this.onResolved);

        // A more concise implementation

        this.getUsersAlwaysOK().then((users) => {
            console.log(users);
        });

        // Even more concise

        this.getUsersAlwaysOK().then(users => console.log(users));
    }

    resolvedAndReject() {
        // These two promises are good for one use

        const successfulPromise = this.getUsers(true);
        const failedPromise = this.getUsers(false);

        successfulPromise.then(this.onResolved, this.onRejected);
        failedPromise.then(this.onResolved, this.onRejected);

        // More concise

        this.getUsers(false).then(
            users => console.log(users),    // The resolved function
            error => console.log(error)     // The rejected function
        );

        // Just get the error
        // The catch() method invokes then(undefined, onRejected)

        this.getUsers(false).catch(error => console.log(error));

        this.getUsers(true).then(users => console.log(users))
            .catch(error => console.log(error))
            .finally(() => console.log('Success finally!'));

        this.getUsers(false).then(users => console.log(users))
            .catch(error => console.log(error))
            .finally(() => console.log('Failed finally!'));
    }

    getUsersAlwaysOK() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { username: 'john', email: 'john@alwaysok.com' },
                    { username: 'jane', email: 'jane@alwaysok.com' },
                ]);
            }, 250);
        });
    }

    getUsers(isSuccess) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (isSuccess) {
                    resolve([
                        {username: 'john', email: 'john@either.com'},
                        {username: 'jane', email: 'jane@either.com'},
                    ]);
                } else {
                    reject('Failed to get the users');
                }
            }, 250);
        });
    }

    onResolved(users) {
        console.log(users);
    }

    onRejected(error) {
        console.log(error);
    }
}

export { Promises };