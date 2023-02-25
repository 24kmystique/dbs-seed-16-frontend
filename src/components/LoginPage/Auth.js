import { createAuthProvider } from 'react-token-auth';

export const { useAuth, authFetch, login, logout } = createAuthProvider({
  getAccessToken: 'access_token',
  storage: localStorage,
  onUpdateToken: (token) =>
    fetch('/auth/refresh', {
      method: 'POST',
      body: token.refresh_token,
    }).then((r) => r.json()),
});

// get access_token using:
// const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
