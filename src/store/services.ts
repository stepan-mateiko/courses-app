// services.ts

import axios from "axios";

import { CourseType } from "./courses/types.ts";
import { AuthorsType } from "./authors/types.ts";

const baseURL = "http://localhost:4000";

export const userAPI = {
  login: (credentials) =>
    axios.post(`${baseURL}/login`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
  getUser: (token: string) =>
    axios.get(`${baseURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }),
  logOut: (token: string) =>
    axios.delete(`${baseURL}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }),
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
      axios.delete(`${baseURL}/courses/${id}`, {
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
      axios.post(`${baseURL}/courses/add`, courseData, {
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
      axios.put(`${baseURL}/courses/${id}`, courseData, {
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
