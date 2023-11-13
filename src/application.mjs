/**
 * (#)application.mjs   1.0.0   11/13/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { Promises } from './promises.mjs';

/**
 * The application class.
 */
class Application {
    /**
     * The run method.
     */
    run() {
        new Promises().run();
    }
}

export { Application };