import React from 'react';
import '../../index.css';
import '../../tailwind.css';
import 'react-phone-number-input/style.css'

function LpHeader() {
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

function MultilinesText(props) {
  const text = props.text;
  const className = props.className;
  return text.split('\n').map(string => <p className={className}>{string}</p>);
}

export default LpHeader;
