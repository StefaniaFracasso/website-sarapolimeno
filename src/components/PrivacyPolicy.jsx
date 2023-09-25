import { useEffect } from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Dr.ssa Sara Anna Polimeno</title>
        <meta
          name="description"
          content="Modalità di trattameno dei dati e privacy policy"
        />
      </Helmet>
      <div className="mt-6 md:mt-20 mx-10 md:mx-8 mb-10">
        <div className="text-center">
          <h2 className="mb-8 text-5xl font-marteni">Privacy Policy</h2>
        </div>
        <p className="mb-2">
          <em>Ultimo aggiornamento: Settembre 2023</em>
        </p>
        <p className="mb-4">
          La presente Informativa sulla privacy illustra come la Dott.ssa Sara
          Anna Polimeno (&quot;Noi&quot;, &quot;Il Titolare&quot; o
          &quot;Nutrizionista&quot;) raccoglie, utilizza e protegge le
          informazioni personali dei visitatori (&quot;Utenti&quot; o
          &quot;Voce&quot;) del sito web www.saraannapolimeno.it (&quot;Sito
          web&quot;). La tua privacy è di estrema importanza per noi, e ci
          impegniamo a proteggere le tue informazioni personali. Ti preghiamo di
          leggere attentamente questa Informativa sulla privacy per comprendere
          come trattiamo i tuoi dati personali.
        </p>
        <h3 className="mb-2 text-3xl font-agrandir-regular uppercase text-customGreen text-center">
          Informazioni raccolte
        </h3>
        <p className="mb-4">
          Raccogliamo le informazioni personali che fornisci volontariamente
          attraverso il modulo di contatto presente sul Sito web. Queste
          informazioni possono includere il tuo nome, il tuo cognome, indirizzo
          email, messaggio della richiesta.
        </p>
        <h3 className="mb-2 text-3xl font-agrandir-regular uppercase text-customGreen text-center">
          Finalità del trattamento
        </h3>
        <p className="mb-4">
          Utilizziamo le informazioni personali raccolte tramite il modulo di
          contatto per rispondere alle tue richieste, fornire informazioni sui
          nostri servizi e stabilire un contatto diretto con te.
        </p>
        <h3 className="mb-2 text-3xl font-agrandir-regular uppercase text-customGreen text-center">
          Conservazione dei dati
        </h3>
        <p className="mb-4">
          Conserviamo i dati personali raccolti tramite il modulo di contatto
          solo per il tempo strettamente necessario per adempiere agli scopi per
          i quali sono stati raccolti, a meno che tu non richieda diversamente o
          a meno che non sia richiesto dalla legge.
        </p>
        <h3 className="mb-2 text-3xl font-agrandir-regular uppercase text-customGreen text-center">
          Condivisione delle informazioni
        </h3>
        <p className="mb-4">
          Non condividiamo le tue informazioni personali con terze parti senza
          il tuo consenso, tranne nei casi in cui ciò sia richiesto dalla legge.
        </p>
        <h3 className="mb-2 text-3xl font-agrandir-regular uppercase text-customGreen text-center">
          Sicurezza
        </h3>
        <p className="mb-4">
          Adottiamo misure di sicurezza adeguate per proteggere le tue
          informazioni personali da accessi non autorizzati o divulgazioni.
        </p>
        <h3 className="mb-2 text-3xl font-agrandir-regular uppercase text-customGreen text-center">
          I tuoi diritti
        </h3>
        <p className="mb-4">
          Hai il diritto di accedere, rettificare, cancellare o limitare
          l&apos;elaborazione delle tue informazioni personali. Puoi esercitare
          questi diritti inviando una richiesta a [Inserire l&apos;indirizzo
          email del titolare del trattamento]. Inoltre, hai il diritto di
          revocare il tuo consenso in qualsiasi momento, se applicabile.
        </p>
        <h3 className="mb-2 text-3xl font-agrandir-regular uppercase text-customGreen text-center">
          Modifiche all&apos;informativa sulla privacy
        </h3>
        <p className="mb-4">
          Ci riserviamo il diritto di modificare questa Informativa sulla
          privacy in qualsiasi momento. Le modifiche saranno pubblicate sul Sito
          web e la data dell&apos;ultimo aggiornamento verrà aggiornata di
          conseguenza. Ti consigliamo di controllare periodicamente questa
          pagina per essere informato sulle modifiche.
        </p>
        <h3 className="mb-2 text-3xl font-agrandir-regular uppercase text-customGreen text-center">
          Contattaci
        </h3>
        <p className="mb-4">
          Se hai domande o preoccupazioni riguardo a questa Informativa sulla
          privacy o al trattamento dei tuoi dati personali, ti preghiamo di
          contattarci all&apos;indirizzo email polimenosaraanna@gmail.com.{" "}
          <br />
          Siamo impegnati a proteggere la tua privacy e a garantire che le tue
          informazioni personali siano trattate in modo sicuro e responsabile.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
