/**
 * (#)application.mjs   1.0.0   11/13/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { All } from './all.mjs';
import { AllSettled } from './all-settled.mjs';
import { Any } from './any.mjs';
import { AwaitAsync } from './await-async.mjs';
import { Chaining } from './chaining.mjs';
import { ErrorHandling } from './error-handling.mjs';
import { Finally } from './finally.mjs';
import { Promises } from './promises.mjs';
import { Race } from './race.mjs';

/**
 * The application class.
 */
class Application {
    /**
     * The run method.
     */
    run() {
        new Promises().run();
        new Chaining().run();
        new All().run();
        new Race().run();
        new Any().run();
        new AllSettled().run();
        new Finally().run();
        new ErrorHandling().run();
        new AwaitAsync().run();
    }
}

export { Application };
