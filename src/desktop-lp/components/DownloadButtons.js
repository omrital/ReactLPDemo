import React from 'react';
import '../../index.css';
import '../../tailwind.css';
import 'react-phone-number-input/style.css'

function DownloadButtons() {
  return (
    <div className="w-full h-16 mb-16 flex flex-row">
      <DownloadAppButton/>
      <GetAppButton/>
    </div>
  )
}

function DownloadAppButton() {
  return (
    <div className="w-44 h-full p-2 mr-4 bg-black flex flex-row items-center rounded-lg">
      <div className="w-10 h-10 ml-2 mr-2 bg-cover bg-[url('./desktop-lp/assets/download_app.png')]"/>
      <div>
        <div className="text-xs text-white">Download on the</div>
        <div className="text-sm text-white">App Jungle</div>
      </div>
    </div>
  )
}

function GetAppButton() {
  return (
    <div className="w-44 h-full p-2 mr-4 bg-black flex flex-row items-center rounded-lg">
      <div className="w-10 h-10 ml-2 mr-2 bg-cover bg-[url('./desktop-lp/assets/get_app.png')]"/>
      <div>
        <div className="text-xs text-white">Get it on the</div>
        <div className="text-sm text-white">App Garden</div>
      </div>
    </div>
  )
}

export default DownloadButtons;
