import '../../../index.css';
import '../../../tailwind.css';
import React, {useState} from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import QRCode from 'react-qr-code';

function InviteOptions() {
  return (
    <div className={"w-full h-28 mb-16 flex flex-row"}>
      <InviteBySMS/>
      <BarcodeJoin/>
    </div>
  )
}

function InviteBySMS() {
  return (
    <div className={"w-2/3 h-full"}>
      <div className={"text-sm mb-2 font-bold"}>Enter your phone number to get a link</div>
      <div className={"w-full h-20 flex flex-row"}>
        <PhoneInputField/>
        <SendButton/>
      </div>
    </div>
  )
}

function PhoneInputField() {
  const [value, setValue] = useState();
  return (
    <div className={"w-3/4 flex items-center mr-5"}>
      <div className={"w-full"}>
        <PhoneInput
          placeholder="Enter phone number"
          defaultCountry="US"
          value={value}
          // @ts-ignore
          onChange={setValue}/>
      </div>
    </div>
  )
}

function SendButton() {
  return (
    <div className={"w-1/4 h-full flex items-center"}>
      <div className={"w-full h-10 flex rounded-full items-center bg-green-800"}>
        <div className={"w-full text-xs text-center text-white"}>Send</div>
      </div>
    </div>
  )
}

function BarcodeJoin() {
  return (
    <div className={"w-1/3 h-full flex flex-col items-center"}>
      <QRCode value="http://www.wix.com/omri.tal13" size={91}/>
    </div>
  )
}

export default InviteOptions;
