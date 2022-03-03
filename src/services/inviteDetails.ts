import {GetInviteParams, InviteDetails} from "../types";
import {CONFIG} from "../config";
import {http} from "./http";

export async function get({businessId, inviteCode, inviteId}: GetInviteParams): Promise<InviteDetails | undefined> {
  if (inviteId) {
    return getInviteDetailsById(inviteId);
  } else if (inviteCode) {
    return getInviteDetailsByCode(inviteCode);
  } else if (businessId) {
    return getInviteByBusinessId(businessId);
  }
  return undefined;
}

function getInviteDetailsById(inviteId: string): Promise<InviteDetails> {
  const param = `link_id=${inviteId}`;
  const url = `${CONFIG.api.getInviteDetails}?${param}`;
  return http.get(url);
}

function getInviteDetailsByCode(inviteCode: string): Promise<InviteDetails> {
  const param = `code=${inviteCode}`;
  const url = `${CONFIG.api.getInviteDetails}?${param}`;
  return http.get(url);
}

function getInviteByBusinessId(businessId: string): Promise<InviteDetails> {
  const url = CONFIG.api.getPlacesJoinDetails;
  const body = {businessIds: [businessId]};
  return http.post(url, {}, body);
}

export const inviteDetails = {
  get
};
