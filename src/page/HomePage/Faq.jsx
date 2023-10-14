import React, { useEffect } from "react";

const Faq = () => {


    useEffect(()=>{
        window.scroll(0, 0)
      },[])

    const faqData = [
        {
          question: "How do I sign up for an account?",
          answer: "To create an account, click on the 'Sign Up' button on the top-right corner of the homepage. Fill in the required information, including your email and a secure password, then click 'Submit.'"
        },
        {
          question: "What types of yoga classes do you offer?",
          answer: "We offer a wide range of classes suitable for all levels, including Hatha, Vinyasa, Kundalini, and more. You can explore different styles to find the one that best suits your preferences and needs."
        },
        {
          question: "Can I access classes on mobile devices?",
          answer: "Yes, our platform is fully responsive, allowing you to access classes on your mobile phone or tablet. Simply log in to your account and start practicing wherever you are."
        },
        {
          question: "Is there a free trial available?",
          answer: "Yes, we offer a 7-day free trial for new users. This allows you to explore our platform and try out different classes before committing to a subscription."
        },
        {
          question: "How can I cancel my subscription?",
          answer: "To cancel your subscription, go to your account settings and click on the 'Cancel Subscription' button. Follow the prompts to confirm the cancellation."
        },
        {
          question: "Are there live classes available, or are they pre-recorded?",
          answer: "Currently, all our classes are pre-recorded, which allows you to practice at your own pace and convenience. We may introduce live classes in the future."
        },
        {
          question: "Can I download classes for offline viewing?",
          answer: "At the moment, we don't offer the option to download classes for offline viewing. However, you can access them anytime as long as you have an internet connection."
        },
        {
          question: "How often do you add new content?",
          answer: "We regularly update our library with new classes and content. You can expect fresh material to be added on a weekly basis, ensuring a diverse and engaging experience for our users."
        },
        {
          question: "Is there a community forum for users to connect and share experiences?",
          answer: "Yes, we have a community forum where you can connect with fellow practitioners, ask questions, and share your experiences. It's a great way to engage with like-minded individuals on their yoga journey."
        },
        {
          question: "How can I contact customer support if I encounter any issues?",
          answer: "If you have any questions or encounter technical difficulties, you can reach our customer support team through the 'Contact Us' page or by emailing support@yourwebsite.com."
        }
      ]


  return (
    <div className="container mx-auto p-5 mt-20">
        {faqData.map((qa, index)=> <div
        key={index}
        tabIndex={0}
        style={{ borderEndEndRadius: 0, borderTopLeftRadius:0, border: "1px solid #95afc0" }}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-[2rem] my-4"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-2xl font-medium">
         {qa?.question}
        </div>
        <div className="collapse-content">
          <p className="text-xl">
           {qa?.answer}
          </p>
        </div>
      </div>)}
      
   
    </div>
  );
};

export default Faq;
