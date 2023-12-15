const timeout = 15000;
export const base = `http://localhost:8080`;

const http = {
  get: async ({ url }) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    return await fetch(base + url, {
      method: "get",
      headers: headers(),
      signal: controller.signal,
    })
      .then((e) => e.json())
      .finally(() => clearTimeout(timer));
  },
  post: async ({ url, body = {} }) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    return await fetch(base + url, {
      method: "post",
      body: JSON.stringify(body),
      headers: headers(),
      signal: controller.signal,
    })
      .then((e) => e.json())
      .finally(() => clearTimeout(timer));
  },
  delete: async ({ url }) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    return await fetch(base + url, {
      method: "delete",
      headers: headers(),
      signal: controller.signal,
    })
      .then((e) => e.json())
      .finally(() => clearTimeout(timer));
  },
  put: async ({ url, body = {} }) => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    return await fetch(base + url, {
      method: "put",
      body: JSON.stringify(body),
      headers: headers(),
      signal: controller.signal,
    })
      .then((e) => e.json())
      .finally(() => clearTimeout(timer));
  },
};

// rotas da api
const routes = {
  torneio: {

    list: () => http.get({ url: "/torneio/getAll" }), //
    create: (body ) => http({}).post({ url: '/torneio/criar', body: body }),
  },

  categoria: {
      list: (id) => http.get({ url: `/categoria/buscar/${id}` }), //
      create: (body ) => http({}).post({ url: '/categoria/inserir', body: body }),
  },

  // rotas da incricao aqui 

  user: {
    signIn: (body) => http.post({ url: `/usuario/signin`, body: body }),
  },
};

function headers() {
  const session = sessionStorage.getItem("session");
  console.warn(session);
  return {
    "Cache-Control": "no-cache",
    accept: "application/json",
    "content-type": "application/json",
    Authorization: "Bearer " + session,
  };
}

export default routes;