// src/features/Services/authService.tsx
import http from './httpService';

export const login = async (payload: { email: string; password: string }) => {
  // 🔄 Replace email → username if needed by backend
  const response = await http.post('/Authorization/Login', {
    userName: payload.email,
    password: payload.password,
  });
  //console.log('Login response:', response.data); // Debugging log
  return response.data;
};
