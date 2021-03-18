import axios from "axios";
// return a new version of axios with useful settings applied
export default axios.create({
    baseURL: "https://restful.training/api/ping-pong",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer 15|6XYtGu3nnxCNwTiwPbttCwNB6UdQq7glnC8HBN4N",
},
});