import Contacts from "./Contacts";

const Visita = () => {
  return (
    <div className="mt-20 mb-10">
      <div className="text-center">
        <h5 className="text-m font-agrandir-GrandHeavy text-customGreen uppercase mb-2">
          conosciamoci
        </h5>
        <h2 className="mb-8 text-5xl font-marteni">La prima visita</h2>
      </div>
      <div className="container mx-4 md:mx-auto mt-12">
        <p className="mb-4">
          La visita nutrizionale consiste in un percorso,{" "}
          <strong>
            di durata variabile a seconda delle necessità del paziente
          </strong>
          , che mira a raggiungere qualsiasi obiettivo volto al miglioramento
          dello stato di salute sulla base di un approccio alimentare educativo.
        </p>
        <p className="mb-4">
          Seguire un percorso nutrizionale mirato al benessere fisico, non
          significa semplicemente trovare la forma fisica desiderata, ma
          soprattutto <strong>scoprire un nuovo modo di vivere</strong>.
        </p>
        <h3 className="text-xl text-center font-bold text-customGreen uppercase my-4">
          di cosa tratta
        </h3>
        <p className="mb-4">
          Si compone di una prima visita della durata di{" "}
          <strong>circa 1 ora</strong> dove il paziente verrà sottoposto ad un’
          <strong>
            anamnesi generale e intervista sullo stile di vita e alimentare
          </strong>
          , finalizzato alla conoscenza delle proprie abitudini; successivamente
          si effettua una valutazione corporea, antropometrica, plicometrica e
          bioimpedenziometrica tramite <strong>BIA AKERN 101</strong>, ossia uno
          dei migliori strumenti in commercio per l’analisi della composizione
          corporea (liquidi corporei intra ed extra cellulari, massa muscolare e
          massa grassa).
        </p>
        <p className="mb-4">
          Verrà poi elaborato un{" "}
          <strong>piano alimentare personalizzato</strong>, rispettando le
          esigenze personali, il fabbisogno calorico, l’intake adeguato di
          nutrienti giornaliero al fine di raggiungere l’obiettivo prefissato.
        </p>
        <p className="mb-4">
          L’alimentazione, infatti, abbraccia aspetti più ampi del “semplice
          nutrirsi”, in quanto è il risultato di <strong>determinanti sociali, culturali
          e psicologiche</strong>. <br />A tal proposito la corretta alimentazione non è solo
          frutto di uno studio qualitativo e quantitativo ma deve armonizzarsi
          con la sfera psicologica e di relazione della persona.
        </p>
        <p className="mb-4">
          La figura del nutrizionista ha proprio la funzione di aiutare e
          seguire il paziente in questo percorso di benessere.
        </p>
        <h3 className="text-xl text-center font-bold text-customGreen uppercase my-4">
          durata del trattamento
        </h3>
        <p className="mb-4">
          La prima visita dura circa <strong>1 ora</strong> e le successive visite di controllo
          durano 30 minuti. <br /> La durata del percorso nutrizionale è variabile a
          seconda delle esigenze di ogni singolo paziente.
        </p>
      </div>
      <Contacts/>
    </div>
  );
};

export default Visita;
