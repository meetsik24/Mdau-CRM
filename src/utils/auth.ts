// Mock user data
export const MOCK_USERS = [
  {
    email: 'demo@commhub.com',
    password: 'demo1234',
    name: 'Demo User',
    company: 'CommHub Demo'
  },
  {
    email: 'admin@commhub.com',
    password: 'admin1234',
    name: 'Admin User',
    company: 'CommHub Admin'
  }
];

export const validateCredentials = (email: string, password: string) => {
  return MOCK_USERS.find(
    user => user.email === email && user.password === password
  );
};