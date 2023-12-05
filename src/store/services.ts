// services.ts

import axios from "axios";

import { UserType } from "./user/types.ts";
import { CourseType } from "./courses/types.ts";
import { AuthorsType } from "./authors/types.ts";

const baseURL = "http://localhost:4000";

export const userAPI = {
  login: async (credentials: UserType) => {
    try {
      return axios.post(`${baseURL}/login`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Login error:", error.message);
      throw error;
    }
  },

  getUser: async (token: string) => {
    try {
      return axios.get(`${baseURL}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Error getting user info:", error.message);
      throw error;
    }
  },
  logOut: async (token: string) => {
    try {
      return axios.delete(`${baseURL}/logout`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Logout error:", error.message);
      throw error;
    }
  },
};

export const coursesAPI = {
  fetchAllCourses: async () => {
    try {
      const response = await axios.get(`${baseURL}/courses/all`);
      return response.data.result;
    } catch (error) {
      console.error("Error fetching courses:", error.message);
      throw error;
    }
  },
  deleteCourseFromServer: async (token: string, id: string) => {
    try {
      return axios.delete(`${baseURL}/courses/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Error deleting course:", error.message);
      throw error;
    }
  },
  addCourseToServer: async (token: string, courseData: CourseType) => {
    try {
      return axios.post(`${baseURL}/courses/add`, courseData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Error adding course:", error.message);
      throw error;
    }
  },
  updateCourseOnServer: async (
    token: string,
    id: string,
    courseData: CourseType
  ) => {
    try {
      return axios.put(`${baseURL}/courses/${id}`, courseData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Error updating course:", error.message);
      throw error;
    }
  },
};

export const authorsAPI = {
  fetchAllAuthors: async () => {
    try {
      const response = await axios.get(`${baseURL}/authors/all`);
      return response.data.result;
    } catch (error) {
      console.error("Error fetching authors:", error.message);
      throw error;
    }
  },
  addAuthorToServer: async (token: string, authorData: AuthorsType) => {
    try {
      axios.post(`${baseURL}/authors/add`, authorData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
    } catch (error) {
      console.error("Error adding author:", error.message);
      throw error;
    }
  },
};
