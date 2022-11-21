import axios  from "@/axios.js";

export function getUserList() {
   return axios.get(`/user`);
}