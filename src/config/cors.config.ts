const localOrigin = [/localhost/];
const remoteOrigin = [/https:\/\/my-remote-domain\.com/];

export const CORS = {
  origin: process.env.NODE_ENV == 'development' ? localOrigin : remoteOrigin,
};
