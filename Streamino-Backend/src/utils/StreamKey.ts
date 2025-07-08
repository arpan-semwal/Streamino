import crypto from 'crypto';

export const generateStreamKey = () => {
  return crypto.randomBytes(12).toString('hex'); // 24-character key
};
