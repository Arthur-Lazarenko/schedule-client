import axios from "axios";
import config from "../config";

const { protocol, url, port } = config.server;

const getGroups = () => {
  return axios.get(`${protocol}://${url}:${port}/api/groups`);
};
const getSchedule = (date, groupId) => {
  return axios.get(`${protocol}://${url}:${port}/api/schedule`, {
    params: { date, groupId }
  });
};

export { getGroups, getSchedule };
