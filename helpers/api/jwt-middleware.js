import { expressjwt } from 'express-jwt';
import util from 'util';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

export { jwtMiddleware };

function jwtMiddleware(req, res) {
    const middleware = expressjwt({ secret: serverRuntimeConfig.secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/users/register',
            '/api/users/authenticate',
            '/api/persons',
            { url: /^\/api\/activities\/*/, methods: ['GET', 'PUT','POST','DELETE'] },
            { url: /^\/api\/persons\/*/, methods: ['GET', 'PUT','POST','DELETE'] }

        ]
    });

    return util.promisify(middleware)(req, res);
}