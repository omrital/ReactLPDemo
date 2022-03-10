import {GetInviteParams} from "../types";
import {http} from "./http";
import {CONFIG} from "../config";

export async function get({businessId, inviteCode, inviteId}: GetInviteParams) {

  // const param = `code=${inviteCode}`;
  // const url = `${CONFIG.api.getInviteDetails}?${param}`;
  // return http.get(url);



  return http.get(`http://localhost:8080/inviteDetails/${inviteCode}`);
  // return http.get(`https://ea00-84-111-43-175.ngrok.io/inviteDetails/${inviteCode}`);
}

export const inviteDetails = {
  get
};
