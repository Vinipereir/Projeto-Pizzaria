import axios from 'axios';

// Usar a URL do backend em produção ou localhost em desenvolvimento
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

console.log('API URL configurada:', API_URL);

// Configurar timeout e interceptors
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  (config) => {
    console.log('Requisição:', config.method.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('Erro na requisição:', error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log('Resposta:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('Erro na resposta:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      url: error.config?.url
    });
    
    if (!error.response) {
      error.message = 'Erro de conexão. Verifique sua internet ou aguarde o servidor iniciar (~30s).';
    }
    
    return Promise.reject(error);
  }
);

// Configurar token nas requisições
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};

// Carregar token do localStorage ao iniciar
const token = localStorage.getItem('token');
if (token) {
  setAuthToken(token);
}

// Auth API
export const authAPI = {
  register: async (userData) => {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    if (response.data.token) {
      setAuthToken(response.data.token);
    }
    return response.data;
  },
  
  login: async (credentials) => {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    if (response.data.token) {
      setAuthToken(response.data.token);
    }
    return response.data;
  },
  
  logout: () => {
    setAuthToken(null);
    localStorage.removeItem('user');
  },
  
  getProfile: async () => {
    const response = await axios.get(`${API_URL}/auth/profile`);
    return response.data;
  },
  
  updateProfile: async (userData) => {
    const response = await axios.put(`${API_URL}/auth/profile`, userData);
    return response.data;
  }
};

// Pizzas API
export const pizzasAPI = {
  getAll: async () => {
    const response = await axios.get(`${API_URL}/pizzas`);
    return response.data;
  },
  
  getById: async (id) => {
    const response = await axios.get(`${API_URL}/pizzas/${id}`);
    return response.data;
  },
  
  create: async (pizza) => {
    const response = await axios.post(`${API_URL}/pizzas`, pizza);
    return response.data;
  },
  
  update: async (id, pizza) => {
    const response = await axios.put(`${API_URL}/pizzas/${id}`, pizza);
    return response.data;
  },
  
  delete: async (id) => {
    await axios.delete(`${API_URL}/pizzas/${id}`);
  }
};

// Pedidos API
export const pedidosAPI = {
  create: async (pedidoData) => {
    const response = await axios.post(`${API_URL}/pedidos`, pedidoData);
    return response.data;
  },
  
  createGuest: async (pedidoData) => {
    const response = await axios.post(`${API_URL}/pedidos/guest`, pedidoData);
    return response.data;
  },
  
  getMeusPedidos: async () => {
    const response = await axios.get(`${API_URL}/pedidos/meus-pedidos`);
    return response.data;
  },
  
  getAll: async () => {
    const response = await axios.get(`${API_URL}/pedidos`);
    return response.data;
  },
  
  getById: async (id) => {
    const response = await axios.get(`${API_URL}/pedidos/${id}`);
    return response.data;
  },
  
  updateStatus: async (id, status) => {
    const response = await axios.patch(`${API_URL}/pedidos/${id}/status`, { status });
    return response.data;
  }
};

export { setAuthToken };

// Mantendo exports antigos para compatibilidade
export const getAllPizzas = pizzasAPI.getAll;
export const getPizzaById = pizzasAPI.getById;
export const createPizza = pizzasAPI.create;
export const updatePizza = pizzasAPI.update;
export const deletePizza = pizzasAPI.delete;
