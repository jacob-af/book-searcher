import axios from "axios";
const API_KEY = "AIzaSyDWKDcvv-xwsjSCCWyfQJptrB5iznXYNJQ";
const API = {
  // Gets all posts
  searchBooks: function (query) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
    );
  },
  saveBook: function (data) {
    return axios.post("/api/books", data);
  },
  getBooks: function () {
    return axios.get("/api/books");
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }
};

export default API;
