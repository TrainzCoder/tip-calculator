import React, { useState } from "react";

import Result from "./components/Result";
import InputBox from "./components/InputBox";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("");

  const handleChangeBill = (e) => {
    setBill(e.target.value);
  };

  const handleChangeTip = (e) => {
    setCustomTip("");
    setTip(e.target.value);
  };

  const handleChangeCustom = (e) => {
    setTip("");
    setCustomTip(e.target.value);
  };

  const handleChangePeople = (e) => {
    setPeople(e.target.value);
  };

  const handleClickReset = (e) => {
    setPeople("");
    setCustomTip("");
    setTip("");
    setBill("");
  };

  return (
    <div className="flex items-end lg:items-center w-full min-h-screen bg-[color:var(--lgc)] font-space">
      <main className="bg-[color:var(--white)] mx-auto p-7 rounded-2xl w-full flex lg:flex-row flex-col gap-8 lg:w-[850px]">
        <InputBox
          billValue={bill}
          billChange={handleChangeBill}
          personChange={handleChangePeople}
          personValue={people}
          tip={tip}
          customTip={customTip}
          handleClickTip={handleChangeTip}
          handleCustomTip={handleChangeCustom}
        />
        <Result
          bill={bill}
          people={people}
          customTip={customTip}
          tip={tip}
          handleClickReset={handleClickReset}
        />
      </main>
    </div>
  );
}

export default App;
