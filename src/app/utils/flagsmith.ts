if (process.env.NODE_ENV === 'development') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0' 
}

import { Flagsmith } from 'flagsmith-nodejs';

const flagsmith = new Flagsmith ({
    environmentKey: process.env.FLAGSMITH_KEY as string, 
    requestTimeoutSeconds: 60
});
export default flagsmith;
