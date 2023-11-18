/**
 * (#)finally.mjs   1.0.0   11/18/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

/**
 * The promise class' finally() method.
 *
 * See: https://www.javascripttutorial.net/es6/javascript-promise-finally/
 */

class Connection {
    constructor() {
        console.log('Connection: Opened the connection');
    }

    execute(query) {
        if (query !== 'Insert' && query !== 'Update' && query !== 'Delete') {
            throw new Error(`Connection: The ${query} is not supported`);
        }

        console.log(`Connection: Executed the ${query}`);

        return this;
    }

    close() {
        console.log('Connection: Closed the connection');
    }
}

class Finally {
    /**
     * The run method.
     */
    run() {
        function connect(status) {
            return new Promise((resolve, reject) => {
                if (status)
                    resolve(new Connection());
                else
                    reject('Could not open the connection');
            });
        }

        let myConnection;

        connect(true)
            .then(connection => {
                myConnection = connection;

                return myConnection.execute('Insert');
            })
            .then(connection => {
                return myConnection.execute('Delete')
            })
            .then(connection => {
                return myConnection.execute('Select')
            })
            .catch(error => console.log(error))
            .finally(() => {
                if (myConnection)
                    myConnection.close();
            });
    }
}

export { Finally };
