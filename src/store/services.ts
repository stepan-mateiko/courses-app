// services.ts

import axios from "axios";

const baseURL = "http://localhost:4000";

export const userAPI = {
  login: (credentials) =>
    axios.post(`${baseURL}/login`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};

export const coursesAPI = {
  getAllCourses: async () => {
    try {
      const response = await axios.get(`${baseURL}/courses/all`);
      return response.data.result;
    } catch (error) {
      console.error("Error fetching courses:", error.message);
      throw error;
    }
  },
};

export const authorsAPI = {
  getAllAuthors: () => axios.get(`${baseURL}/authors/all`),
};
