const tournamentsAPI = [
  {
    tor_nr_id: 1,
    tor_tx_name: "Brasil Torneio",
  },
  {
    tor_nr_id: 2,
    tor_tx_name: "Torneio entre Municipios",
  },
];

const inscriptionsAPI = [
  {
    ins_nr_id: 1,
    cat_nr_id: 1,
    usu_nr_id1: 1,
    usu_nr_id2: 2,
  },
  {
    ins_nr_id: 2,
    cat_nr_id: 3,
    usu_nr_id1: 3,
    usu_nr_id2: 4,
  },
];

const categoriesAPI = [
  {
    cat_nr_id: 1,
    cat_tx_nome: "Luta Livre",
    tor_nr_id: 1,
  },
  {
    cat_nr_id: 2,
    cat_tx_nome: "Boliche",
    tor_nr_id: 2,
  },
  {
    cat_nr_id: 3,
    cat_tx_nome: "Vôlei",
    tor_nr_id: 2,
  },
];

const usersAPI = [
  {
    usu_nr_id: 1,
    usu_tx_nome: "Leticia",
    usu_tx_login: "lele1",
    usu_tx_senha: 123,
    usu_dt_cadastro: new Date(),
  },
  {
    usu_nr_id: 2,
    usu_tx_nome: "Lele",
    usu_tx_login: "lele2",
    usu_tx_senha: 123,
    usu_dt_cadastro: new Date(),
  },
  {
    usu_nr_id: 3,
    usu_tx_nome: "Let",
    usu_tx_login: "lele3",
    usu_tx_senha: 123,
    usu_dt_cadastro: new Date(),
  },
  {
    usu_nr_id: 4,
    usu_tx_nome: "Le",
    usu_tx_login: "lele4",
    usu_tx_senha: 123,
    usu_dt_cadastro: new Date(),
  },
];

export { tournamentsAPI, inscriptionsAPI, categoriesAPI, usersAPI };
