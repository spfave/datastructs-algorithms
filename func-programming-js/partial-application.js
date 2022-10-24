// Functional Programming: Partial Application
/**
 * Partial application occurs when a currying function has some but not all of its functions
 * applied. The main benefit of partial application is our ability to delay the evaluation of
 * a function while still supplying some of the arguments to be stored and reused throughout
 * our application.
 */

// Sample
import fetch from 'node-fetch';

const getFromAPI = (baseUrl) => (endpoint) => (cb) =>
  fetch(`${baseUrl}${endpoint}`)
    .then((res) => res.json())
    .then((data) => cb(data))
    .catch((error) => console.error(error.message));

// Demo
const getGitHub = getFromAPI('https://api.github.com');

const getGitHubUsers = getGitHub('/users');
const getGitHubRepos = getGitHub('/repositories');

getGitHubUsers((data) => {
  console.log(data.map((user) => user.login));
});
getGitHubUsers((data) => {
  console.log(data.map((user) => user.avatar_url));
});
