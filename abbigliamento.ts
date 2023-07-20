class Capi {
    constructor(
      public id: number,
      public codprod: number,
      public collezione: string,
      public capo: string,
      public modello: number,
      public quantita: number,
      public colore: string,
      public prezzoivaesclusa: number,
      public prezzoivainclusa: number,
      public disponibile: string,
      public saldo: number
    ) {}
    getSaldoCapo(): number {
      return this.saldo;
    }
    getAcquistoCapo(): number {
      return this.prezzoivainclusa;
    }
  }
  const arrayCapi: Capi[] = [];
  let url = "Abbigliamento.json";
  //fetch
  function procuroCapi() {
    const beginFetch = async function () {
      try {
        const first = await fetch(url);
        const data = await first.json();
        console.log(data);
        data.forEach((dress: any) => {
          arrayCapi.push(
            new Capi(
              dress.id,
              dress.codprod,
              dress.collezione,
              dress.capo,
              dress.modello,
              dress.quantita,
              dress.colore,
              dress.prezzoivaesclusa,
              dress.prezzoivainclusa,
              dress.disponibile,
              dress.saldo
            )
          );
        });
        console.log(arrayCapi);
      } catch (err) {
        console.log(err);
      }
    };
    beginFetch();
  }
  procuroCapi();