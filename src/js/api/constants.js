// Use Postman, or JavaScript to get your API key
// In Workflow we will learn how to secure this information
export const API_KEY = 'b29ee457-b896-4a9d-9561-a4679c73693c';

export const API_BASE = "https://v2.api.noroff.dev";

export const API_AUTH = `${API_BASE}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUTH_KEY = `${API_AUTH}/create-api-key`;

export const API_SOCIAL = `${API_BASE}/social`;

export const API_SOCIAL_POSTS = `${API_SOCIAL}/posts`;

export const API_SOCIAL_PROFILES = `${API_SOCIAL}/profiles`;




const options = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibm9vcjgwNyIsImVtYWlsIjoibm9vcjgwN0Bub3JvZmYubm8iLCJpYXQiOjE3MzA1MDIyNjd9.HPvVZ7ZoG35eZGwkDPoEdQ7TtbHOQKOspvmD4da7np4',
      'X-Noroff-API-Key': 'b29ee457-b896-4a9d-9561-a4679c73693c'
    }
  };



// const BASE_API_URL = 'https://v2.api.noroff.dev' 

// export const REGISTER_API_ENDPOINT = `${BASE_API_URL}/auth/register`;
// export const LOGIN_API_ENDPOINT = `${BASE_API_URL}/auth/login`;
// export const social_blogs_API_ENDPOINT = `${BASE_API_URL}/blog/posts`;
