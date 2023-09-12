import { useEffect } from "react";

const ChiSono = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
  
  return (
    <div className="mt-6 md:mt-20">
      <div className="text-center">
        <h5 className="text-m font-agrandir-GrandHeavy text-customGreen uppercase mb-2">
          Dottoressa
        </h5>
        <h2 className="mb-8 text-5xl font-marteni">Sara Anna Polimeno</h2>
      </div>
      <div className="container grid md:grid-cols-2 gap-2 justify-center items-center mx-auto my-10">
        <div
          // data-aos="fade-right"
          // data-aos-offset="200"
          // data-aos-easing="ease-in-sine"
        >
          <img
            src="/assets/img/foto-sara-1.jpg"
            alt="dr.ssa Sara Anna Polimeno"
            className="rounded-lg w-3/4 mx-auto"
          />
        </div>
        <div className="mx-4">
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <p className="my-2">
              <strong>Mi chiamo Sara Anna Polimeno</strong> e sono un{" "}
              <strong>Biologo Nutrizionista a Milano</strong>. Ho conseguito la
              laurea in Nutrizione Clinica presso la Facoltà di Medicina e
              Chirurgia dell&apos;Università Campus Bio Medico di Roma con una
              votazione di <strong>110/110 e lode</strong>. Nel 2014, ho
              ottenuto l&apos;abilitazione per l&apos;esercizio della
              professione di Biologo Nutrizionista presso l&apos;Università
              della Tuscia di Viterbo con il numero di registrazione{" "}
              <strong>AA_072681</strong>.
            </p>

            <p className="my-2">
              Durante il mio percorso universitario, ho concentrato i miei studi
              e tirocini in vari complessi ospedalieri della regione Lazio e in
              studi di nutrizione privati. In particolare, ho approfondito le
              tematiche legate alle <strong>malattie metaboliche</strong> come
              il <strong>diabete, l&apos;ipertensione e le dislipidemie</strong>
              , oltre alle <strong>malattie oncologiche</strong>. Ho compreso
              l&apos;importanza della nutrizione come strumento potente nella
              prevenzione e come supporto terapeutico per le persone già affette
              da tali patologie.
            </p>

            <p className="my-2">
              Al di là delle malattie, ho anche lavorato per guidare i pazienti
              verso una corretta <strong>educazione alimentare</strong>. Il mio
              obiettivo non è solo aiutare a raggiungere i risultati desiderati,
              ma anche correggere gli errori comuni commessi a tavola, al fine
              di prevenire problemi futuri.
            </p>

            <p className="my-2">
              Sono attivamente coinvolta in corsi di formazione
              sull&apos;educazione alimentare sia nell&apos;ambito scolastico
              che privato. La mia esperienza sul campo ha rivelato quanto
              l&apos;alimentazione sia strettamente legata al{" "}
              <strong>benessere psicologico</strong> e all&apos;
              <strong>equilibrio generale del corpo</strong>.
            </p>

            <p className="my-2">
              Inoltre, sono una delle cofondatrici del progetto &quot;
              <strong>Corpo e Mente</strong>&quot;, che prevede una stretta
              collaborazione tra due figure professionali, ovvero uno
              Psicoterapeuta e un Nutrizionista. Insieme, lavoriamo per
              affrontare le problematiche legate ai disturbi del comportamento
              alimentare, fornendo un supporto completo per il{" "}
              <strong>benessere psicofisico</strong> dei nostri pazienti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiSono;
