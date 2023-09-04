import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2uj6qhk",
        "template_7s0zznk",
        e.target,
        "l5KLudr_sut4Hw_lm"
      )
      .then((response) => {
        console.log("Email inviata con successo:", response);
        setEmailSent(true);
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Errore nell'invio dell'email:", error);
        setEmailSent(false);
        setErrorMessage("C'è stato un errore, riprova.");
      });
  };

  return (
    <div className="flex flex-col items-center align-center mt-20 h-screen">
      <div>
        <h2 className="mb-4 text-5xl font-marteni">Contatti</h2>
        <p className="text-xl mb-8">
          Compila il form per richiedere maggiori informazioni!
        </p>
        <form className="w-full max-w-lg" onSubmit={sendEmail}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Nome
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="name"
                type="text"
                placeholder="Nome"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Cognome
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="surname"
                type="text"
                placeholder="Cognome"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="user_email"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Messaggio
              </label>
              <textarea
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                name="message"
                placeholder="Scrivi qui la tua richiesta"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center justify-center">
            <button
              type="submit"
              className="mb-10 rounded border-2 border-customGreen px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-customGreen transition duration-150 ease-in-out hover:bg-customGreen hover:text-neutral-50 shadow-md"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Invia
            </button>
          </div>
        </form>
        {emailSent && (
          <p className="px-6 py-4 bg-customGreen text-white text-md rounded-md">
            La tua richiesta è stata inviata correttamente.
          </p>
        )}
        {errorMessage && (
          <p className="px-6 py-4 bg-red-500 text-white text-md rounded-md">
            {errorMessage}
          </p>
        )}
      </div>
      {/* <div>
        <h2 className="mb-4 text-5xl font-marteni">Dove ricevo</h2>
        <div className="flex flex-col md:flex-row">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11191.162932755891!2d9.147369!3d45.4740193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1bde2a1e99f%3A0x3cf348d97e87659b!2sDr.ssa%20Sara%20Anna%20Polimeno%20-%20Biologa%20Nutrizionista%20Milano!5e0!3m2!1sit!2sit!4v1693491115839!5m2!1sit!2sit"
            width="400"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
                    <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11191.162932755891!2d9.147369!3d45.4740193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1bde2a1e99f%3A0x3cf348d97e87659b!2sDr.ssa%20Sara%20Anna%20Polimeno%20-%20Biologa%20Nutrizionista%20Milano!5e0!3m2!1sit!2sit!4v1693491115839!5m2!1sit!2sit"
            width="400"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
                    <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11191.162932755891!2d9.147369!3d45.4740193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1bde2a1e99f%3A0x3cf348d97e87659b!2sDr.ssa%20Sara%20Anna%20Polimeno%20-%20Biologa%20Nutrizionista%20Milano!5e0!3m2!1sit!2sit!4v1693491115839!5m2!1sit!2sit"
            width="400"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div> */}
    </div>
  );
};

export default Contacts;
