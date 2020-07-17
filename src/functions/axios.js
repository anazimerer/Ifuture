import axios from "axios";

const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA";

export const login = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, body);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};

export const signup = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, body);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};

export const addAddress = async (body) => {
  const axiosConfig = {
    headers: {
      auth: JSON.parse(localStorage.getItem("labefood")).token,
    },
  };
  try {
    const response = await axios.put(`${baseUrl}/address`, body, axiosConfig);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};

export const getFullAddress = async () => {
  const axiosConfig = {
    headers: {
      auth: JSON.parse(localStorage.getItem("labefood")).token,
    },
  };
  try {
    const response = await axios.get(`${baseUrl}/profile/address`, axiosConfig);
    return response.data.address;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};

export const getProfile = async () => {
  const axiosConfig = {
    headers: {
      auth: JSON.parse(localStorage.getItem("labefood")).token,
    },
  };
  try {
    const response = await axios.get(`${baseUrl}/profile`, axiosConfig);
    return response.data.user;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};

export const updateProfile = async (body) => {
  const axiosConfig = {
    headers: {
      auth: JSON.parse(localStorage.getItem("labefood")).token,
    },
  };
  try {
    const response = await axios.put(`${baseUrl}/profile`, body, axiosConfig);
    return response.data.user;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};

export const getRestaurants = async () => {
  const axiosConfig = {
    headers: {
      auth: JSON.parse(localStorage.getItem("labefood")).token,
    },
  };
  try {
    const response = await axios.get(`${baseUrl}/restaurants`, axiosConfig);
    return response.data.restaurants;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};

export const getRestaurantDetail = async (restaurantId) => {
  const axiosConfig = {
    headers: {
      auth: JSON.parse(localStorage.getItem("labefood")).token,
    },
  };
  try {
    const response = await axios.get(
      `${baseUrl}/restaurants/${restaurantId}`,
      axiosConfig
    );
    return response.data.restaurant;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};

export const placeOrder = async (restaurantId, body) => {
  const axiosConfig = {
    headers: {
      auth: JSON.parse(localStorage.getItem("labefood")).token,
    },
  };
  try {
    const response = await axios.post(
      `${baseUrl}/restaurants/${restaurantId}/order`,
      body,
      axiosConfig
    );
    return response.data.order;
  } catch (error) {
    console.log(error.response.data.message);
    return false;
  }
};

export const getActiveOrder = async () => {
  const axiosConfig = {
    headers: {
      auth: JSON.parse(localStorage.getItem("labefood")).token,
    },
  };
  try {
    const response = await axios.get(`${baseUrl}/active-order`, axiosConfig);
    return response.data.order;
  } catch (error) {
    console.log(error.response.data.message);
    return null;
  }
};

export const getOrdersHistory = async () => {
  const axiosConfig = {
    headers: {
      auth: JSON.parse(localStorage.getItem("labefood")).token,
    },
  };
  try {
    const response = await axios.get(`${baseUrl}/orders/history`, axiosConfig);
    return response.data.orders;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data;
  }
};
