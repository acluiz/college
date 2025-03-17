import { Engine } from "./Basicas.js";

import {
  SalaDefesaArtesTrevas,
  SalaHerbologia,
  SalaoComunal,
  SalaoPrincipal,
  SalaPocoes,
  SalaProfessores,
} from "./SalasDemo.js";

export class JogoDemo extends Engine {
  constructor() {
    super();
  }

  criaCenario() {
    // Define as salas que compõem o mapa

    let salaoPrincipal = new SalaoPrincipal(this);
    let salaHerbologia = new SalaHerbologia(this);
    let salaProfessores = new SalaProfessores(this);
    let salaPocoes = new SalaPocoes(this);
    let salaoComunal = new SalaoComunal(this);
    let salaDefesaArtesTrevas = new SalaDefesaArtesTrevas(this);

    // this.salas = new Map([
    //   ["Salao_Principal", salaoPrincipal],
    //   ["Sala_Herbologia", salaHerbologia],
    //   ["Sala_Professores", salaProfessores],
    //   ["Sala_Pocoes", salaPocoes],
    //   ["Salao_Comunal", salaoComunal],
    //   ["Sala_Defesa_Artes_Trevas", salaDefesaArtesTrevas],
    // ]);

    // Encadeia as salas através das portas
    salaoPrincipal.portas.set(salaHerbologia.nome, salaHerbologia);
    salaoPrincipal.portas.set(salaProfessores.nome, salaProfessores);
    salaoPrincipal.portas.set(salaPocoes.nome, salaPocoes);
    salaoPrincipal.portas.set(salaoComunal.nome, salaoComunal);
    salaoPrincipal.portas.set(
      salaDefesaArtesTrevas.nome,
      salaDefesaArtesTrevas
    );

    salaHerbologia.portas.set(salaoPrincipal.nome, salaoPrincipal);
    salaProfessores.portas.set(salaoPrincipal.nome, salaoPrincipal);
    salaPocoes.portas.set(salaoPrincipal.nome, salaoPrincipal);
    salaoComunal.portas.set(salaoPrincipal.nome, salaoPrincipal);
    salaDefesaArtesTrevas.portas.set(salaoPrincipal.nome, salaoPrincipal);

    // Define a sala inicial
    this.salaCorrente = salaoPrincipal;
  }
}
