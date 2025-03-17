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

    let instanciaObjeto = this.objetos.get(objeto);
    let instanciaFerramenta = this.engine.mochila.pega(ferramenta);
    let usou = instanciaObjeto.usar(instanciaFerramenta);

    if (usou && instanciaFerramenta instanceof PocaoFlamejante) {
      instanciaFerramenta.atualizaQuantidadeDisponivel();

      if (instanciaFerramenta.quantidadeDisponivel === 0) {
        this.engine.perdeJogo("sem_ferramenta_necessaria");
      }
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

    let instanciaObjeto = this.objetos.get(objeto);
    let usou = instanciaObjeto.usar(this.engine.mochila.pega(ferramenta));

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

    let instanciaObjeto = this.objetos.get(objeto);
    let instanciaFerramenta = this.engine.mochila.pega(ferramenta);

    let usou = instanciaObjeto.usar(instanciaFerramenta);

    if (usou && instanciaFerramenta instanceof PocaoFlamejante) {
      instanciaFerramenta.atualizaQuantidadeDisponivel();

      if (instanciaFerramenta.quantidadeDisponivel === 0) {
        this.engine.perdeJogo("sem_ferramenta_necessaria");
      }
    }

    return usou;
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

    let instanciaObjeto = this.objetos.get(objeto);
    let usou = instanciaObjeto.usar(this.engine.mochila.pega(ferramenta));

    if (instanciaObjeto instanceof ArmarioBichoPapao && usou == true) {
      this.engine.perdeJogo("acao_proibida");
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

    let instanciaObjeto = this.objetos.get(objeto);
    let usou = instanciaObjeto.usar(this.engine.mochila.pega(ferramenta));

    if (instanciaObjeto instanceof Lareira && usou == true) {
      this.engine.venceJogo();
    }

    return usou;
  }
}
