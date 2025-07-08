// "use client";

// import { useState } from "react";
// import emailjs from "emailjs-com";
// import { toast } from "react-hot-toast";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import assistantNeutral from "../assets/animations/assistant-neutral.json"; // ✅ use relative path

// const Contact = () => {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [showThankYou, setShowThankYou] = useState(false);

//   const handleSend = (data) => {
//     toast.loading("Sending...", { id: "send" });

//     emailjs
//       .send(
//         import.meta.env.VITE_EMAIL_SERVICE,
//         import.meta.env.VITE_EMAIL_TEMPLATE,
//         {
//           ...data,
//           title: "Contact from Portfolio",
//         },
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       )
//       .then(() => {
//         toast.success("Message sent!", { id: "send" });
//         setShowThankYou(true);
//         setStep(0);
//         setFormData({ name: "", email: "", message: "" });

//         setTimeout(() => {
//           setShowThankYou(false);
//         }, 3000);
//       })
//       .catch((err) => {
//         console.error("Email Error:", err);
//         toast.error("Something went wrong", { id: "send" });
//       });
//   };

//   const ChatBubble = ({ text, isUser }) => (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className={`chat ${isUser ? "chat-end" : "chat-start"} w-full`}
//     >
//       <div className="chat-image self-center">
//         <div
//           className={`w-10 h-10 rounded-full text-white font-bold text-sm flex items-center justify-center ${
//             isUser ? "bg-primary" : "bg-primary"
//           }`}
//         >
//           {isUser ? "YOU" : "PK"}
//         </div>
//       </div>

//       <div
//         className={`chat-bubble ${
//           isUser
//             ? "chat-bubble-primary text-white"
//             : "bg-base-300 text-base-content"
//         } max-w-[70%] min-h-[3rem] text-base leading-snug`}
//       >
//         {text}
//       </div>
//     </motion.div>
//   );

//   const InputBubble = ({ placeholder, name, onSubmit }) => {
//     const [value, setValue] = useState("");

//     return (
//       <motion.form
//         className="chat chat-end w-full"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         onSubmit={(e) => {
//           e.preventDefault();

//           const trimmed = value.trim();
//           if (!trimmed) return;

//           onSubmit(trimmed); // Send value up first (important!)
//           setValue(""); // Then clear input
//         }}
//       >
//         <div className="chat-image self-center">
//           <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
//             YOU
//           </div>
//         </div>

//         <div className="chat-bubble chat-bubble-primary text-white max-w-[70%] min-h-[3rem] px-4 py-2 flex items-center">
//           <input
//             type="text"
//             name={name}
//             placeholder={placeholder}
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//             className="bg-transparent border-none outline-none text-white w-full placeholder-white text-base"
//             required
//           />
//         </div>
//       </motion.form>
//     );
//   };

//   return (
//     <section id="contact" className="w-full py-20 px-6 bg-base-200">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start justify-between">
//         {/* LEFT: Chat Box Glassmorph */}
//         <div className="w-full md:w-[45%]">
//           <div className="rounded-xl p-6 bg-base-100/40 backdrop-blur-md border border-base-content/20 shadow-lg">
//             {!showThankYou && (
//               <h2 className="text-3xl font-bold text-base-content text-center mb-8">
//                 Let's Talk
//               </h2>
//             )}

//             <div className="flex flex-col gap-4">
//               {showThankYou ? (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   className="text-center text-3xl font-bold text-primary py-6"
//                 >
//                   Thank you for visiting!
//                 </motion.div>
//               ) : (
//                 <>
//                   {step >= 0 && (
//                     <ChatBubble
//                       text="Hey, nice to meet you! I'm Payal Kharb. What's your name?"
//                       isUser={false}
//                     />
//                   )}
//                   {step === 0 && (
//                     <InputBubble
//                       name="name"
//                       placeholder="Enter your name"
//                       onSubmit={(val) => {
//                         setFormData({ ...formData, name: val });
//                         setStep(1);
//                       }}
//                     />
//                   )}

//                   {step >= 1 && (
//                     <ChatBubble
//                       text="Drop your email so I can respond to you!"
//                       isUser={false}
//                     />
//                   )}
//                   {step === 1 && (
//                     <InputBubble
//                       name="email"
//                       placeholder="Enter your email"
//                       onSubmit={(val) => {
//                         setFormData({ ...formData, email: val });
//                         setStep(2);
//                       }}
//                     />
//                   )}

//                   {step >= 2 && (
//                     <ChatBubble
//                       text="Is there any message for me?"
//                       isUser={false}
//                     />
//                   )}
//                   {step === 2 && (
//                     <InputBubble
//                       name="message"
//                       placeholder="Type your message"
//                       onSubmit={(val) => {
//                         const updated = { ...formData, message: val };
//                         setFormData(updated); // Save message
//                         setStep(3); // Proceed
//                         setShowThankYou(true); // Show thanks
//                         handleSend(updated); // Send email
//                       }}
//                     />
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT: Empty for Animation */}
//         {/* RIGHT: Animated Assistant */}
//         <div className="hidden md:flex md:w-[50%] h-[400px] items-center justify-center">
//           <Lottie
//             animationData={assistantNeutral}
//             loop
//             autoplay
//             className="w-[500px] h-[500px]"
//             style={{
//               filter: document.documentElement.classList.contains("dark")
//                 ? "brightness(0.85) saturate(0.8)"
//                 : "none",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSend = (data) => {
    toast.loading("Sending...", { id: "send" });

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        {
          ...data,
          title: "Contact from Portfolio",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent!", { id: "send" });
        setShowThankYou(true);
        setStep(0);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setShowThankYou(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Email Error:", err);
        toast.error("Something went wrong", { id: "send" });
      });
  };

  const ChatBubble = ({ text, isUser }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`chat ${isUser ? "chat-end" : "chat-start"} w-full`}
    >
      <div className="chat-image self-center">
        <div
          className={`w-10 h-10 rounded-full text-white font-bold text-sm flex items-center justify-center ${
            isUser ? "bg-primary" : "bg-primary"
          }`}
        >
          {isUser ? "YOU" : "PK"}
        </div>
      </div>

      <div
        className={`chat-bubble ${
          isUser
            ? "chat-bubble-primary text-white"
            : "bg-base-300 text-base-content"
        } max-w-[70%] min-h-[3rem] text-base leading-snug`}
      >
        {text}
      </div>
    </motion.div>
  );

  const InputBubble = ({ placeholder, name, onSubmit }) => {
    const [value, setValue] = useState("");

    return (
      <motion.form
        className="chat chat-end w-full"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={(e) => {
          e.preventDefault();

          const trimmed = value.trim();
          if (!trimmed) return;

          onSubmit(trimmed);
          setValue("");
        }}
      >
        <div className="chat-image self-center">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
            YOU
          </div>
        </div>

        <div className="chat-bubble chat-bubble-primary text-white max-w-[70%] min-h-[3rem] px-4 py-2 flex items-center">
          <input
            type="text"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="bg-transparent border-none outline-none text-white w-full placeholder-white text-base"
            required
          />
        </div>
      </motion.form>
    );
  };

  return (
    <section id="contact" className="w-full py-20 px-6 bg-base-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start justify-between">
        {/* LEFT: Chat Box Glassmorph */}
        <div className="w-full md:w-[45%]">
          <div className="rounded-xl p-6 bg-base-100/40 backdrop-blur-md border border-base-content/20 shadow-lg">
            {!showThankYou && (
              <h2 className="text-3xl font-bold text-base-content text-center mb-8">
                Let's Talk
              </h2>
            )}

            <div className="flex flex-col gap-4">
              {showThankYou ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center text-3xl font-bold text-primary py-6"
                >
                  Thank you for visiting!
                </motion.div>
              ) : (
                <>
                  {step >= 0 && (
                    <ChatBubble
                      text="Hey, nice to meet you! I'm Payal Kharb. What's your name?"
                      isUser={false}
                    />
                  )}
                  {step === 0 && (
                    <InputBubble
                      name="name"
                      placeholder="Enter your name"
                      onSubmit={(val) => {
                        setFormData({ ...formData, name: val });
                        setStep(1);
                      }}
                    />
                  )}

                  {step >= 1 && (
                    <ChatBubble
                      text="Drop your email so I can respond to you!"
                      isUser={false}
                    />
                  )}
                  {step === 1 && (
                    <InputBubble
                      name="email"
                      placeholder="Enter your email"
                      onSubmit={(val) => {
                        setFormData({ ...formData, email: val });
                        setStep(2);
                      }}
                    />
                  )}

                  {step >= 2 && (
                    <ChatBubble
                      text="Is there any message for me?"
                      isUser={false}
                    />
                  )}
                  {step === 2 && (
                    <InputBubble
                      name="message"
                      placeholder="Type your message"
                      onSubmit={(val) => {
                        const updated = { ...formData, message: val };
                        setFormData(updated);
                        setStep(3);
                        setShowThankYou(true);
                        handleSend(updated);
                      }}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: Motivational Text */}
        <div className="hidden md:flex md:w-[50%] h-full items-center justify-center">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-4xl font-bold text-primary">
              Let&apos;s{" "}
              <span className="whitespace-nowrap">Build Together</span>
            </h2>
            <p className="text-lg text-base-content max-w-md mx-auto">
              Whether it&apos;s a stunning web experience or a powerful digital{" "}
              <span className="whitespace-nowrap">product — I bring</span>{" "}
              <span className="whitespace-nowrap">your vision to life.</span>
            </p>
            <p className="text-lg text-base-content max-w-md italic mx-auto">
              <span className="whitespace-nowrap">"Creativity meets code</span>{" "}
              —{" "}
              <span className="whitespace-nowrap">
                and ideas turn into impact."
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
