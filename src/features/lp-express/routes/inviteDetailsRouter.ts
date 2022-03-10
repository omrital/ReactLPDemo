import {NextFunction, Request, Response} from 'express-serve-static-core';
import express from 'express';
import {GetInviteParams, InviteDetails} from "../../../types";
import {CONFIG} from "../../../config";
import {http} from "../../../services/http";

const router = express.Router();

// http://localhost:8080/inviteDetails/YYY
// const mockInviteDetailsResponse = (req: Request, res: Response) => {
//   res.status(200)
//     .json({
//       "metaSiteId": "d36c6847-423d-46c9-b5b8-eece3118a6d9",
//       "target": {
//         "uri": "",
//         "mediaId": "WixApp",
//         "properties": {}
//       },
//       "url": "http://wix.to/AcBrAY4",
//       "code": "YVDKFT",
//       "title": "Tal group Inc",
//       "imageUrl": "https://static.wixstatic.com/media/437e98_cdb3b18c8f3048c09be0584a14cf4f13~mv2_d_1836_3264_s_2.jpg",
//       "owner": {
//         "name": "omri tal",
//         "profileImageUrl": "https://lh3.googleusercontent.com/a-/AOh14GiSF3Z32k7H2lJdxpgXDWEj7wiHYkaDXlBU7iDK%3Ds96-c"
//       },
//       "joinInformation": {
//         "siteMembersInstanceId": "d329e79c-4c30-4b09-b42e-f2e6e29712e2",
//         "joinPermissions": "Approval",
//       },
//       "primaryColor": "#F52A2A",
//       "coverImageUrl": "https://static.wixstatic.com/media/437e98_8a268a80fa9f4886ae9d654d5a64c921~mv2_d_1960_4032_s_2.jpg",
//       "linkId": "dafb13fd-9cbf-4dec-946d-af34ad1611c9",
//       "preferredApp": "WixOneApp"
//     })
// };
//
//
// router.get('/inviteDetails/:inviteCode', mockInviteDetailsResponse);

export async function getInviteDetails({businessId, inviteCode, inviteId}: GetInviteParams): Promise<InviteDetails | undefined> {
  if (inviteId) {
    return getInviteDetailsById(inviteId);
  } else if (inviteCode) {
    return getInviteDetailsByCode(inviteCode);
  } else if (businessId) {
    return getInviteDetailsByBusinessId(businessId);
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

function getInviteDetailsByBusinessId(businessId: string): Promise<InviteDetails> {
  const url = CONFIG.api.getPlacesJoinDetails;
  const body = {businessIds: [businessId]};
  return http.post(url, {}, body);
}

router.get('/inviteDetails/:inviteCode', (req: Request, res: Response, next: NextFunction) => {
  const inviteCode = req.params.inviteCode;

  // const param = `code=${inviteCode}`;
  // const url = `${CONFIG.api.getInviteDetails}?${param}`;
  // http.get(url)

  getInviteDetails({inviteCode})
    .then((data) => {
    res.status(200).json(data);
  }).catch((error) => {
    // console.error('OMRI', error);
    // res.status(666).json({aaa: "bbb"})
    // throw new Error('BROKEN')
    next(error);
  });
});

export const inviteDetailsRouter = router;
