module.exports.Event = {
  id: ({id}) => id,
  host: ({host}) => host,
  createdAt: ({createdAt}) => createdAt,
  updatedAt: ({updatedAt}) => updatedAt,
  schedule: ({schedule}) => schedule,
  title: ({title}) => title,
  description: ({description}) => description,
  price: ({price}) => price,
  maxParticipants: ({maxParticipants}) => maxParticipants,
  tags: ({tags}) => tags,
  participants: ({participants}) => participants,
};