import axiosInstance from "../utils/axiosInstance";
import axios from "axios";
import { API_PATHS, BASE_URL } from "../utils/apiPath";

const getAllQuizzes = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.QUIZZES.GET_ALL_QUIZZES);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch quizzes' };
  }
};

const getQuizzesForDocument = async (documentId) => {
  try {
    const response = await axiosInstance.get(
      API_PATHS.QUIZZES.GET_QUIZZES_FOR_DOC(documentId)
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch quizzes' };
  }
};

const getQuizById = async (quizId) => {
  try {
    const response = await axiosInstance.get(
      API_PATHS.QUIZZES.GET_QUIZ_BY_ID(quizId)
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch quiz' };
  }
};

const submitQuiz = async (quizId, answers) => {
  try {
    const response = await axiosInstance.post(
      API_PATHS.QUIZZES.SUBMIT_QUIZ(quizId),
      { answers }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to submit quiz' };
  }
};

const getQuizResults = async (quizId) => {
  try {
    const response = await axiosInstance.get(
      API_PATHS.QUIZZES.GET_QUIZ_RESULTS(quizId)
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch quiz results' };
  }
};

const deleteQuiz = async (quizId) => {
  try {
    const response = await axiosInstance.delete(
      API_PATHS.QUIZZES.DELETE_QUIZ(quizId)
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to delete quiz' };
  }
};

const toggleShareQuiz = async (quizId) => {
  try {
    const response = await axiosInstance.put(
      API_PATHS.QUIZZES.TOGGLE_SHARE_QUIZ(quizId)
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to toggle quiz visibility' };
  }
};

const getPublicQuizById = async (quizId) => {
  try {
    // using plain axios so it doesn't try to attach auth token
    const response = await axios.get(`${BASE_URL}${API_PATHS.QUIZZES.GET_PUBLIC_QUIZ(quizId)}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch public quiz' };
  }
};

const submitPublicQuiz = async (quizId, answers) => {
  try {
    const response = await axios.post(
      `${BASE_URL}${API_PATHS.QUIZZES.SUBMIT_PUBLIC_QUIZ(quizId)}`,
      { answers }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to submit public quiz' };
  }
};

const quizService = {
  getAllQuizzes,
  getQuizzesForDocument,
  getQuizById,
  submitQuiz,
  getQuizResults,
  deleteQuiz,
  toggleShareQuiz,
  getPublicQuizById,
  submitPublicQuiz,
};

export default quizService;