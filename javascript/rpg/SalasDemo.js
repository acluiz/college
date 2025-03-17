import { validate } from "bycontract";

import { Sala, Engine } from "./Basicas.js";

import { Chave, OculosMagico, PocaoFlamejante } from "./FerramentasDemo.js";

import {
  ArmarioBichoPapao,
  Caldeirao,
  LivroPocoes,
  Lareira,
  Carta,
  Tocha,
} from "./ObjetosDemo.js";

export class SalaoPrincipal extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Salao_Principal", engine);

    let tocha = new Tocha();
    this.objetos.set(tocha.nome, tocha);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);

    if (!this.engine.mochila.tem(ferramenta)) {
      return false;
    }

    if (!this.objetos.has(objeto)) {
      return false;
    }

    let instancia_objeto = this.objetos.get(objeto);
    let instancia_ferramenta = this.engine.mochila.pega(ferramenta);
    let usou = instancia_objeto.usar(this.engine.mochila.pega(ferramenta));

    if (usou && instancia_ferramenta instanceof PocaoFlamejante) {
      this.engine.mochila.remove(instancia_ferramenta);

      let salaPocoes = this.engine.getSala("Sala_Pocoes");

      salaPocoes.ferramentas.set(
        instancia_ferramenta.nome,
        instancia_ferramenta
      );
    }

    return usou;
  }
}
// ---------------------------------------------
export class SalaHerbologia extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Sala_Herbologia", engine);

    let carta = new Carta();
    this.objetos.set(carta.nome, carta);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);

    if (!this.engine.mochila.tem(ferramenta)) {
      return false;
    }

    if (!this.objetos.has(objeto)) {
      return false;
    }

    let obj = this.objetos.get(objeto);
    let usou = obj.usar(this.engine.mochila.pega(ferramenta));

    return usou;
  }
}
// ---------------------------------------------
export class SalaProfessores extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Sala_Professores", engine);

    let chave = new Chave();
    this.ferramentas.set(chave.nome, chave);

    let oculosMagico = new OculosMagico();
    this.ferramentas.set(oculosMagico.nome, oculosMagico);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);
    return false;
  }
}
// ---------------------------------------------
export class SalaPocoes extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Sala_Pocoes", engine);

    let pocaoFlamejante = new PocaoFlamejante();
    this.ferramentas.set(pocaoFlamejante.nome, pocaoFlamejante);

    let caldeirao = new Caldeirao();
    this.objetos.set(caldeirao.nome, caldeirao);

    let livroPocoes = new LivroPocoes();
    this.objetos.set(livroPocoes.nome, livroPocoes);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);
    if (!this.engine.mochila.tem(ferramenta)) {
      return false;
    }

    if (!this.objetos.has(objeto)) {
      return false;
    }

    let obj = this.objetos.get(objeto);

    return obj.usar(this.engine.mochila.pega(ferramenta));
  }
}
// ---------------------------------------------
export class SalaDefesaArtesTrevas extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Sala_Defesa_Artes_Trevas", engine);

    let armario = new ArmarioBichoPapao();
    this.objetos.set(armario.nome, armario);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);

    if (!this.engine.mochila.tem(ferramenta)) {
      return false;
    }

    if (!this.objetos.has(objeto)) {
      return false;
    }

    let obj = this.objetos.get(objeto);
    let usou = obj.usar(this.engine.mochila.pega(ferramenta));

    if (obj instanceof ArmarioBichoPapao && usou == true) {
      this.engine.perdeJogo();
    }

    return usou;
  }
}
// ---------------------------------------------
export class SalaoComunal extends Sala {
  constructor(engine) {
    validate(engine, Engine);
    super("Salao_Comunal", engine);

    let lareira = new Lareira();
    this.objetos.set(lareira.nome, lareira);
  }

  usa(ferramenta, objeto) {
    validate(arguments, ["String", "String"]);

    if (!this.engine.mochila.tem(ferramenta)) {
      return false;
    }

    if (!this.objetos.has(objeto)) {
      return false;
    }

    let obj = this.objetos.get(objeto);
    let usou = obj.usar(this.engine.mochila.pega(ferramenta));

    if (obj instanceof Lareira && usou == true) {
      this.engine.venceJogo();
    }

    return usou;
  }
}
