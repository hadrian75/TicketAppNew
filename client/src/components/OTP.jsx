import OtpInput from "react-otp-input";
import { useState, useEffect } from "react";

const Otp = () => {
  const [code, setCode] = useState("");
  const [send, setSend] = useState(false)
  const handleChange = (code) => setCode(code);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Verification Verified ${code} ${send}`)
  }

  return (
    <form action="" className="mt-8 flex flex-col gap-y-5" onSubmit={handleSubmit}>
      <OtpInput
        value={code}
        onChange={handleChange}
        numInputs={5}
        className="mr-[51px]"
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          border: "1px solid white",
          borderRadius: "8px",
          width: "70px",
          height: "75px",
          fontSize: "18px",
          color: "#fff",
          fontWeight: "600",
          caretColor: "white",
          backgroundColor: "rgb(23 33 84)"
        }}
        focusStyle={{
          border: "2px solid #fff",
          outline: "none"
        }}
      />
      <h1 className="mt-5 text-[16px]">Didn't get any otp code? <a href="" onClick={() => setSend(true)} className="font-bold text-primary" >Resend It</a></h1>
      <button type="submit" className="py-4  bg-primary w-full rounded-lg text-[16px] mt-5">Continue</button>
    </form >
  );
}
export default Otp
