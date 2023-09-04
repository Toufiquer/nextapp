import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
type Id = string | number;
// How to use in component query and mutation
const Component = () => {
  // Access the client for invalidation
  const queryClient = useQueryClient();

  //   * * * Query Get
  //   the query Function
  const getUsers = () => {};
  // Queries
  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  //   * * * Mutation
  //   post user
  const postUser = (data: {}) => {
    return fetch("", data);
  };
  // Mutations
  const {
    isSuccess,
    isError,
    error: mutateError, // mutateError.message
    mutate, // mutate({ id: 1, title: 'Laundry' })
  } = useMutation({
    mutationFn: (data: {}) => postUser(data),
    onSuccess: (data, variables, context) => {
      // I will fire first

      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error, variables, context) => {
      // I will fire first
    },
    onSettled: (data, error, variables, context) => {
      // I will fire first
    },
  });
};

// axios instance
// const myAxios = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com",
//   timeout: 5000,
//   headers: {
//     "Content-Type": "application/json",
//     AccessToken: "Berar token",
//   },
// });
const myAxios = axios.create({
  baseURL: "http://localhost:5000/api/v1/user",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    AccessToken: "Berar token",
  },
});

// get all data
const getAllData = async () => {
  try {
    const response = myAxios.get("/todos");
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
// get one data by id
const getDataById = async ({ id }: { id: Id }) => {
  try {
    const response = myAxios.get(`/todos/${id}`);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
// post
const postUser = async ({ id, data }: { id: Id; data: {} }) => {
  try {
    const response = myAxios.post(`/todos/${id}`, { ...data });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
// update
const updateUser = async ({ id, data }: { id: Id; data: {} }) => {
  try {
    // try put or patch
    const response = myAxios.put(
      `/${id}`,
      { ...data },
      {
        headers: {
          "Content-Type": "application/json",
          AccessToken: "Berar token",
        },
      }
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
// delete
const deleteUser = async ({ id }: { id: Id }) => {
  try {
    const response = myAxios.delete(`/todos/${id}`);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const handleInvoke = async () => {
  const data: { name: string } = { name: "Name of Person" };
  // const response = getAllData();
  // const response = getDataById({ id: 8 });
  // const response = postUser({ id: 8, data });
  const response = updateUser({ id: 8, data });
  // const response = deleteUser({ id: 8 });
  console.log(response);
};
