import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import Modal from "./Modal";

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
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
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
            <div className="flex flex-wrap -mx-3 mb-4">
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
                <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500">
                  <span className="text-xl inline-block mr-5 align-middle">
                    <i className="fas fa-bell" />
                  </span>
                  <span className="inline-block align-middle mr-8">
                    Email inviata correttamente!
                  </span>
                  <button
                    className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                    onClick={() => closeModal()}
                  >
                    <span>×</span>
                  </button>
                </div>
              ) : (
                <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500">
                  <span className="text-xl inline-block mr-5 align-middle">
                    <i className="fas fa-bell" />
                  </span>
                  <span className="inline-block align-middle mr-8">
                    Errore nell&apos;invio della richiesta
                  </span>
                  <button
                    className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                    onClick={() => closeModal()}
                  >
                    <span>×</span>
                  </button>
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

