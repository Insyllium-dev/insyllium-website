'use client'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
    
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        'service_1ehh4zw',
        'template_gmzxoyd',
        form.current,
        'JhuSDoJgfjfd9mFvW'
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-[20rem] py-[100px]">
        <div className="flex flex-col gap-6 md:gap-10">
            <h1 className="text-white font-poppins font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Hi there! <br/> You got a project in mind?</h1>
            <p className="text-white font-poppins font-medium text-lg md:text-xl">Please get in touch with our team. You can send a message to <a href="mailto:insyllium@gmail.com" className="text-[#00b2d1] underline">insyllium@gmail.com</a></p>
            <form 
            onSubmit={sendEmail}
            ref={form}>
            <div className="flex flex-wrap gap-6">
                <div className="flex flex-col gap-1 w-full sm:w-[30%] md:flex-1">
                <p className="font-poppins font-normal text-gray-400 text-base">Name</p>
                <input type="text" className="border-b focus:border-b-[#00b2d1] bg-transparent text-white font-medium font-poppins text-lg outline-none" name="user__name"/>
                </div>
                <div className="flex flex-col gap-1 w-full sm:w-[30%] md:flex-1">
                <p className="font-poppins font-normal text-gray-400 text-base">E-mail</p>
                <input type="text" className="border-b focus:border-b-[#00b2d1]  bg-transparent text-white font-medium font-poppins text-lg outline-none" name="user__email"/>
                </div>
                <div className="flex flex-col gap-1 w-full sm:w-[30%] md:flex-1">
                <p className="font-poppins font-normal text-gray-400 text-base">Phone</p>
                <input type="text" className="border-b focus:border-b-[#00b2d1]  bg-transparent text-white font-medium font-poppins text-lg outline-none" name="user__phone"/>
                </div>
                <div className="flex flex-col gap-1 w-full">
                <p className="font-poppins font-normal text-gray-400 text-base">Message</p>
                <textarea type="text" className="border-b focus:border-b-[#00b2d1]  bg-transparent text-white font-medium font-poppins text-lg outline-none resize-none" rows={2} name="user__message"/>
                </div>
            </div>
            <div className="flex justify-between items-baseline w-full">
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="accent-[#00b2d1] h-4 w-4 cursor-pointer rounded-xl" name="" id="" onChange={()=>setAccepted(!accepted)}/>
                    <p className="text-base font-normal text-gray-300 max-w-3xl mt-5">By submitting this form and making your data available, you expressly consent to its treatment to manage future contacts and responding to requests sent. </p>
                </div>
                    {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
                    <button disabled={!accepted} className="font-poppins font-medium text-gray-200 text-lg border-b hover:text-[#00b2d1] hover:border-b-[#00b2d1] transition-colors duration-300" type="submit">Send</button>
            </div>
            </form>

        </div>
    </div>
  )
}

export default Contact