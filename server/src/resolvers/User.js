module.exports.User = {
  id: ({id}) => id,
  firstName: ({firstName}) => firstName,
  lastName: ({lastName}) => lastName,
  email: ({email}) => email,
  age: ({age}) => age,
  city: ({city}) => city,
  state: ({state}) => state,
  phone: ({phone}) => phone,
  hostedEvents: ({hostedEvents}) => hostedEvents,
  participatedEvents: ({participatedEvents}) => participatedEvents,
  birthday: ({birthday}) => birthday,
  createAt: ({createAt}) => createAt,
};
