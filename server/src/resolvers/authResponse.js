module.exports.AuthResponse = {
  success: async ({success}) => {
    return success;
  },
  message: async ({message}) => {
    return message;
  },
  token: async ({token}) => {
    return token;
  },
  user: async ({id}) => {
    return {id};
  },
};

