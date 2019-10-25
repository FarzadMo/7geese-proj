import axios from "axios";

// Export an object containing methods we'll use for accessing the github API

export default {
  getRepoList: function() {
    return axios.get("https://api.github.com/users/7Geese/repos");
  }
};

//do we need to define the getBaseReposList() for the ./pages/Search.js ???

//do we need to define a function in here to sort the results descending for Discover.js file?
//I meant for the list, or we better use a filter inside the Discover.js (instead of the map function we already have)
