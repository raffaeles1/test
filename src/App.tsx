import { FC } from "react";
import { Board } from "./components/Board";
import { GlobalStyle } from "./style/GlobalStyle";
import "./App.css";

const App: FC = () => {  
  return (
    <>
   <GlobalStyle />
      <Board />
      <main style={{display:"flex", justifyContent:"center", marginTop:40}}>
      <section style={{height:200, width: 200, backgroundColor:"blue", position:"relative"}}>
        <div style={{position:"absolute", height:30, backgroundColor:"black", bottom:0, left: 0, right:0}}></div>
        <div style={{position:"absolute", height:30, backgroundColor:"black", bottom:60, left: 0, right:0, zIndex:1}}></div>
        <div style={{position:"absolute", height:30, backgroundColor:"black", bottom:120, left: 0, right:0, zIndex:1}}></div>
        <div style={{position:"absolute", height:30, backgroundColor:"black", bottom:180, left: 0, right:0}}></div>
        <img src="/assets/Inter.jpg" style={{position:"absolute", top: 70, left: 75, width:50, height:50,zIndex:2}}/>
      </section>
      </main>
      <div className="div1">
        <div className="div2">
          Io e Carlo, il mio compagno di banco, avevamo deciso da alcuni giorni
          di fare una passeggiata nelle vie del centro cittadino per distrarci e
          riposarci dopo le fatiche della scuola. L'appuntamento era per sabato
          pomeriggio di fronte a un negozio di abbigliamento che entrambi
          conoscevamo: di lì avremmo cominciato il nostro giro.
        </div>
        <div className="div2">
          Carlo arrivò per primo: lui è sempre puntuale. Io invece, per un
          motivo o per l'altro, arrivo sempre un po' tardi. Indossava una
          camicia e un paio di jeans, mentre io, come al solito, ero in giacca e
          cravatta. Non appena fui sceso dall'autobus, iniziai a fare grandi
          gesti verso di lui, per scusarmi. Lui rispose ai miei gesti con un
          sorriso; poi aggiunse: «L'ho sempre detto che non sei puntuale» L'appuntamento era per sabato
          pomeriggio di fronte a un negozio di abbigliamento che entrambi
          conoscevamo: di lì avremmo cominciato il nostro giro..
        </div>
        <div className="div2">
          Dopo i saluti passeggiammo parlando dei prossimi esami. Dopo una sosta
          nel negozio dei dischi e un giro per le vetrine, finimmo nella solita
          pizzeria a mangiare qualcosa.
        </div>
      </div>
      <div className="div2">      
          Carlo arrivò per primo: lui è sempre puntuale. Io invece, per un
          motivo o per l'altro, arrivo sempre un po' tardi. Indossava una
          camicia e un paio di jeans, mentre io, come al solito, ero in giacca e
          cravatta. Non appena fui sceso dall'autobus, iniziai a fare grandi
          gesti verso di lui, per scusarmi. Lui rispose ai miei gesti con un
          sorriso; poi aggiunse: «L'ho sempre detto che non sei puntuale» L'appuntamento era per sabato
          pomeriggio di fronte a un negozio di abbigliamento che entrambi
          conoscevamo: di lì avremmo cominciato il nostro giro..
      </div>
    </>
  );
};
export default App;
