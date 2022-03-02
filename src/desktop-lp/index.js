import React, {useState} from 'react';
import './index.css';
import '../tailwind.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function DesktopLP() {
  return (
    <div className="DesktopLp">
      <div className="flex flex-col w-6/12 p-10">
        <Header/>
        <InviteOptions/>
        <DownloadButtons/>
        <div className="LearnMore">Learn more about Spaces by Wix</div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-col mb-10">
      <div className="w-28 h-6 mb-20 bg-cover bg-center bg-[url('./desktop-lp/assets/fit_logo.png')]"/>
      <div className="mb-8">
        <MultilinesText className="text-4xl font-bold" text={"Download the Spaces\nby Wix App"}/>
      </div>
      <MultilinesText text={"Join ‘Mimi’s World’ on the app to stay updated with the latest news, chat with other members, share posts and never miss a thing."}/>
    </div>
  )
}

function InviteOptions() {
  return (
    <div className="w-full h-28 mb-16 flex flex-row">
      <InviteBySMS/>
      <BarcodeJoin/>
    </div>
  )
}

function DownloadButtons() {
  return (
    <div className="w-full h-16 mb-16 flex flex-row">
      <DownloadAppButton/>
      <GetAppButton/>
    </div>
  )
}

function InviteBySMS() {
  return (
    <div className="w-2/3 h-full">
      <div className="text-sm mb-2 font-bold">Enter your phone number to get a link</div>



      <div className="w-full h-20 flex flex-row">

        <div className="w-3/4 flex items-center mr-5">
          <div className="w-full">
            <PhoneInputField/>
          </div>
        </div>

        <div className="w-1/4 h-full flex items-center">
          <div className="w-full h-10 flex rounded-full items-center bg-green-800">
              <div className="w-full text-xs text-center text-white">Send</div>
          </div>
        </div>

      </div>



    </div>
  )
}

function PhoneInputField() {
  const [value, setValue] = useState();
  return (
    <PhoneInput
      placeholder="Enter phone number"
      defaultCountry="US"
      value={value}
      onChange={setValue}/>
  )
}

function BarcodeJoin() {
  return (
    <div className="w-1/3 h-full flex flex-col items-center">
      <div className="text-sm mb-2 font-bold">Or Scan the QR Code</div>
      <div className="w-20 h-20 ml-2 mr-2 bg-cover bg-[url('./desktop-lp/assets/barcode.png')]"/>
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

function MultilinesText(props) {
  const text = props.text;
  const className = props.className;
  return text.split('\n').map(string => <p className={className}>{string}</p>);
}

export default DesktopLP;
