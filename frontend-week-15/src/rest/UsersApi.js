const USERS_ENDPOINT =
  "https://crudcrud.com/api/28c4d86662ef43e388bef4643d40d16b/users";

class UsersApi {
  get = async () => {
    try {
      const response = await fetch(USERS_ENDPOINT);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  delete = async (userId) => {
    console.log("userId: ", userId);
    try {
      const response = await fetch(`${USERS_ENDPOINT}/${userId}`, {
        method: "DELETE",
      });
      return response;
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  put = async (user) => {
    const userId = user._id;
    console.log("userId: ", userId);
    try {
      const response = await fetch(`${USERS_ENDPOINT}/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      return await response.json();
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  post = async (user) => {
    try {
      const response = await fetch(USERS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      return await response.json();
    } catch (error) {
      console.log("Error: ", error);
    }
  };
}

export const usersApi = new UsersApi();
