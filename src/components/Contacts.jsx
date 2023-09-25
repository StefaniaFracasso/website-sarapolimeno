import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import Modal from "./Modal";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        openModal();
        e.target.reset();
      })
      .catch((error) => {
        console.error("Errore nell'invio dell'email:", error);
        setEmailSent(false);
        openModal();
      });
  };

  return (
    <>
      <Helmet>
        <title>Contatti | Dr.ssa Sara Anna Polimeno</title>
        <meta
          name="description"
          content="Compila il form di contatto e richiedi una consulenza per un piano alimentare personalizzato"
        />
      </Helmet>
      <div className="flex flex-col items-center align-center mt-6 md:mt-20 mx-4 h-screen">
        <div>
          <div className="text-center">
            <h2 className="mb-4 text-5xl font-marteni">Contatti</h2>
            <p className="text-xl mb-4">
              Compila il form per richiedere maggiori informazioni!
            </p>
          </div>
          <form className="w-full max-w-lg" onSubmit={sendEmail}>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Nome
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  name="name"
                  type="text"
                  placeholder="Nome"
                  required
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
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="user_email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Messaggio
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  name="message"
                  placeholder="Scrivi qui la tua richiesta"
                  required
                ></textarea>
              </div>
            </div>
            {/* <div className="flex flex-wrap -mx-3 mb-4">
              <input type="checkbox" id="privacy" required/>
              <label htmlFor="privacy">Accetta l&apos;<Link to={"/privacypolicy"} target="_blank" className="hover:text-customPeach cursor-pointer">informativa sulla privacy</Link></label>
            </div> */}
            <div className="flex flex-wrap -mx-3 mb-4 items-center">
  <div className="w-full px-3">
    <input
      type="checkbox"
      id="privacy"
      required
      className="mr-2 h-5 w-5 text-customGreen focus:ring-customGreen border-gray-300 rounded"
    />
    <label
      htmlFor="privacy"
      className="text-gray-700 text-sm font-medium"
    >
      Accetta l&apos;
      <Link
        to="/privacypolicy"
        target="_blank"
        className="text-underline hover:text-customPeach cursor-pointer"
      >
        <em>informativa sulla privacy</em>
      </Link>
    </label>
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
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              {emailSent ? (
                <div className="relative w-auto my-6 mx-4 md:mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Mail inviata correttamente!</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setIsModalOpen(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        Grazie per avermi contattato, riceverai una risposta il prima possibile!
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-customGreen text-white active:bg-customGreen font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Chiudi
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-auto my-6 mx-4 md:mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold text-red-600">Errore nell&apos;invio della richiesta</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setIsModalOpen(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      Sembra che ci sia stato un problema nell&apos;invio della tua mail. Per favore, controlla la tua connessione e assicurati che tutti i campi siano compilati correttamente. Se il problema persiste, ti invitiamo a riprovare più tardi o a contattarci per assistenza.
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-customGreen text-white active:bg-customGreen font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Chiudi
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default Contacts;
