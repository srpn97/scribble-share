import { handleAuth } from '@auth0/nextjs-auth0';

export const GET = handleAuth();

console.log('Auth0 Configuration:');
console.log('AUTH0_SECRET:', process.env.AUTH0_SECRET ? 'Set' : 'Not Set');
console.log('AUTH0_BASE_URL:', process.env.AUTH0_BASE_URL);
console.log('AUTH0_ISSUER_BASE_URL:', process.env.AUTH0_ISSUER_BASE_URL);
console.log('AUTH0_CLIENT_ID:', process.env.AUTH0_CLIENT_ID ? 'Set' : 'Not Set');
console.log('AUTH0_CLIENT_SECRET:', process.env.AUTH0_CLIENT_SECRET ? 'Set' : 'Not Set');
