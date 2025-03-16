import { validate } from "bycontract";

import { Objeto, Ferramenta } from "./Basicas.js";
import { Chave, OculosMagico, PocaoFlamejante } from "./FerramentasDemo.js";

export class Tocha extends Objeto {
  constructor() {
    super("tocha", "A tocha está apagada", "A tocha está acesa");
  }

  usar(ferramenta) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof PocaoFlamejante) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
// ---------------------------------------------
export class Lareira extends Objeto {
  constructor() {
    super("lareira", "A lareira está apagada", "A lareira está acesa");
  }

  usar(ferramenta) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof PocaoFlamejante) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
// ---------------------------------------------
export class Carta extends Objeto {
  constructor() {
    super(
      "carta",
      "A carta está criptografada com magia, você não pode ler",
      "A carta é de um magizoologista famoso e ele fala sobre a mudança no comportamento dos animais durante o inverno que está acontecendo. Um trecho diz 'os animais estão buscando lugares para se proteger do frio'."
    );
  }

  usar(ferramenta) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof OculosMagico) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
// ---------------------------------------------
export class ArmarioBichoPapao extends Objeto {
  constructor() {
    super("armario", "O armário está fechado", "");
  }

  usar(ferramenta) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof Chave) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
// ---------------------------------------------
export class Caldeirao extends Objeto {
  constructor() {
    super(
      "caldeirao",
      "O caldeirão está vazio",
      "O caldeirão está pegando fogo, pronto para fazer poções e misturas incríveis!"
    );
  }

  usar(ferramenta) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof PocaoFlamejante) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
// ---------------------------------------------
export class LivroPocoes extends Objeto {
  constructor() {
    super(
      "livro_pocoes",
      "O livro está aberto mas você não enxerga os detalhes tão bem",
      "Você enxerga cada letra miúda no livro agora! Mas parece não ter nenhuma informação útil..."
    );
  }

  usar(ferramenta) {
    validate(ferramenta, Ferramenta);
    if (ferramenta instanceof OculosMagico) {
      this.acaoOk = true;
      return true;
    }
    return false;
  }
}
