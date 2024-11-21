import { REQUEST_LOG_TYPE } from "./requests";

export const logType = {
  PROFILE_DIFF_APPROVED: "PROFILE_DIFF_APPROVED",
  PROFILE_DIFF_REJECTED: "PROFILE_DIFF_REJECTED",
  CLOUDFLARE_CACHE_PURGED: "CLOUDFLARE_CACHE_PURGED",
  APPLICATION_UPDATED: "USER_APPLICATION_UPDATED",
  EVENTS_REMOVE_PEER: "EVENTS_REMOVE_PEER",
  APPLICATION_ADDED: "USER_APPLICATION_ADDED",
  TASKS_MISSED_UPDATES_ERRORS: "TASKS_MISSED_UPDATES_ERRORS",
  DISCORD_INVITES: "DISCORD_INVITES",
  EXTERNAL_SERVICE: "EXTERNAL_SERVICE",
  EXTENSION_REQUESTS: "extensionRequests",
  TASK: "task",
  TASK_REQUESTS: "taskRequests",
  USER_DETAILS_UPDATED: "USER_DETAILS_UPDATED", 
  ...REQUEST_LOG_TYPE,
};

export const ALL_LOGS_FETCHED_SUCCESSFULLY = "All Logs fetched successfully";
export const LOGS_FETCHED_SUCCESSFULLY = "Logs fetched successfully";
export const ERROR_WHILE_FETCHING_LOGS = "Error while fetching logs";
