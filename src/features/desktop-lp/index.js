import React from 'react';
import './index.css';
import '../../tailwind.css';
import 'react-phone-number-input/style.css'
import LpHeader from './components/LpHeader';
import InviteOptions from './components/InviteOptions';
import DownloadButtons from './components/DownloadButtons';

function DesktopLP() {
  return (
    <div className="DesktopLp">
      <div className="flex flex-col w-6/12 p-10">
        <LpHeader/>
        <InviteOptions/>
        <DownloadButtons/>
        <div className="LearnMore">Learn more about Spaces by Wix</div>
      </div>
    </div>
  );
}

export default DesktopLP;