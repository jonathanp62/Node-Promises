/**
 * (#)error-handling.mjs    1.0.0   11/18/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

/**
 * Error handling with promises. While not demonstrated, a promise
 * that does not catch() errors thrown or rejected will cause a
 * runtime error and terminate the program.
 *
 * See: https://www.javascripttutorial.net/es6/promise-error-handling/
 */

class ErrorHandling {
    /**
     * The run method.
     */
    run() {
        this.errorOutsideOfPromise();
        this.errorsInsidePromises();
        this.errorsRejected();
    }

    errorOutsideOfPromise() {
        function getUserById(id) {
            if (typeof id !== 'number' || id <= 0) {
                throw new Error(`Invalid id argument: ${id}`);
            }

            return new Promise((resolve, reject) => {
                resolve({
                    id: id,
                    username: 'admin'
                });
            });
        }

        try {
            getUserById('a')
                .then(user => console.log(`ErrorHandling: ${user.username}`))
                .catch(error => console.log(`ErrorHandling: Caught by .catch: ${error}`));  // Unreachable
        } catch (error) {
            console.log(`ErrorHandling: Caught by try/catch: ${error}`)
        }
    }

    errorsInsidePromises() {
        function getUserById(id) {
            return new Promise((resolve, reject) => {
                if (typeof id !== 'number' || id <= 0) {
                    throw new Error(`Invalid id argument: ${id}`);
                }

                resolve({
                    id: id,
                    username: 'admin'
                });
            });
        }

        getUserById('b')
            .then(user => console.log(`ErrorHandling: ${user.username}`))
            .catch(error => console.log(`ErrorHandling: Caught by .catch: ${error}`));
    }

    errorsRejected() {
        function getUserById(id) {
            return new Promise((resolve, reject) => {
                if (typeof id !== 'number' || id <= 0) {
                    reject(`Invalid id argument: ${id}`);
                }

                resolve({
                    id: id,
                    username: 'admin'
                });
            });
        }

        getUserById('c')
            .then(user => console.log(`ErrorHandling: ${user.username}`))
            .catch(error => console.log(`ErrorHandling: Caught by .catch: ${error}`));
    }
}

export { ErrorHandling };
