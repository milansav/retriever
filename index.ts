export type Options = Omit<RequestInit, "method"> & {
  body: BodyInit | any;
};
export type UseBearerOptions = RequestInit & {
  headers?: {
    ["Authorization"]: string;
  };
};

export const useFetch = <Res = any>(
  input: RequestInfo | URL,
  options?: RequestInit
) => {
  return fetch(input, options).then((res) => res.json() as Res);
};

const useBearer = (token: string, options: UseBearerOptions): RequestInit => {
  if (options["headers"]) {
    options["headers"]["Authorization"] = `Bearer ${token}`;
  } else {
    options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      ...options,
    };
  }

  return options;
};

export const Get = <Res = any>(url: RequestInfo | URL, options?: Options) => {
  return useFetch<Res>(url, { method: "GET", ...options });
};

export const Post = <Res = any>(url: RequestInfo | URL, options?: Options) => {
  return useFetch<Res>(url, { method: "POST", ...options });
};

export const Put = <Res = any>(url: RequestInfo | URL, options?: Options) => {
  return useFetch<Res>(url, { method: "PUT", ...options });
};

export const Delete = <Res = any>(
  url: RequestInfo | URL,
  options?: Options
) => {
  return useFetch<Res>(url, { method: "DELETE", ...options });
};
