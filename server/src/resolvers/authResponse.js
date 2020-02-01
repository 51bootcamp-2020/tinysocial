module.exports.AuthResponse = {
  success: async (parent) => {
    return parent.success;
  },
  message: async (parent) => {
    return parent.message;
  },
  token: async (parent) => {
    return parent.token;
  },
  user: async (parent) => {
    return {id: parent.user};
  },
};

