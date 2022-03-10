import React, {useEffect} from 'react';
import './index.css';
import '../../tailwind.css';
import 'react-phone-number-input/style.css'
import LpHeader from './components/LpHeader';
import InviteOptions from './components/InviteOptions';
import DownloadButtons from './components/DownloadButtons';
import {inviteDetails} from "../../services/inviteDetails";

function DesktopLP() {

  useEffect(() => {
    inviteDetails.get({inviteCode: "YVDKFT"})
      .then((data) => {
        alert(JSON.stringify(data));
        console.log('Get invite Details', 'success', JSON.stringify(data));
      }).catch((error) => {
      console.log('Get invite Details', 'error', JSON.stringify(error));
    });
  });

  return (
    <div className={"DesktopLp"}>
      <div className={"flex flex-col w-6/12 p-10"}>
        <LpHeader/>
        <InviteOptions/>
        <DownloadButtons/>
        <div className={"LearnMore"}>Learn more about Spaces by Wix</div>
      </div>
    </div>
  );
}

export default DesktopLP;
