import { Link } from "react-router-dom";

const PresentationHome = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-3 m-10">
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <img
          src="/assets/img/foto-sara-2.jpg"
          alt="sara polimeno"
          className="rounded-lg w-3/4 translate-x-5"
        />
      </div>
      <div>
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h5 className="text-m font-agrandir-GrandHeavy text-customGreen uppercase mb-2">
            Chi sono
          </h5>
          <h2 className="mb-8 text-5xl font-marteni">Ti parlo di me</h2>
        </div>
        <div
          data-aos="fade"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <p className="my-3">
            Sono la Dott.ssa Sara Anna Polimeno, Biologo Nutrizionista con una
            formazione di eccellenza conseguita presso l&apos;<strong>Università Campus
            Bio Medico di Roma</strong>, dove ho ottenuto una votazione di 110/110 con
            lode. La mia abilitazione professionale è stata conferita nel 2014
            dall&apos;Università della Tuscia di Viterbo (Numero di
            registrazione: AA_072681).
          </p>
          <p className="my-3">
            <strong>La mia missione è andare oltre la semplice consulenza nutrizionale.</strong> <br />
            Sono guidata dall&apos;empatia e dalla profonda comprensione delle
            sfide che i miei pazienti affrontano. La mia esperienza mi ha
            insegnato che <strong>ogni individuo è unico</strong>, con esigenze e obiettivi
            specifici. <br />Attualmente, offro i miei servizi come <strong>Biologo
            Nutrizionista a Milano</strong> in tre studi. 
          </p>
          <p className="my-3">
            Fornisco un <strong>sostegno completo che va oltre la dieta</strong>, perché credo
            che il benessere dipenda dalla comprensione delle esigenze
            individuali e dalla creazione di percorsi personalizzati.
          </p>
          <p className="my-3">
            Sono qui per aiutarti a raggiungere i tuoi obiettivi di salute come
            Biologo Nutrizionista a Milano. Se stai cercando un professionista
            esperto per migliorare il tuo benessere attraverso l&apos;alimentazione,
            sono a disposizione per creare un <strong>percorso personalizzato su misura
            per te</strong>.
          </p>
          <Link to="/chisono">
            <button
              type="button"
              className="mt-3 rounded border-2 border-customGreen px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-customGreen transition duration-150 ease-in-out hover:bg-customGreen hover:text-neutral-50 shadow-md"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Leggi di più
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PresentationHome;
