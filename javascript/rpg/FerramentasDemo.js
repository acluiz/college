import { Ferramenta } from "./Basicas.js";

// ---------------------------------------------
export class Chave extends Ferramenta {
  constructor() {
    super("chave");
  }
}
// ---------------------------------------------
export class OculosMagico extends Ferramenta {
  constructor() {
    super("oculos_magico");
  }
}
// ---------------------------------------------
export class PocaoFlamejante extends Ferramenta {
  static #quantidadeDisponivel = 2;

  constructor() {
    super("pocao_flamejante");
  }

  get quantidadeDisponivel() {
    return PocaoFlamejante.#quantidadeDisponivel;
  }

  atualizaQuantidadeDisponivel() {
    PocaoFlamejante.#quantidadeDisponivel -= 1;
  }
}
