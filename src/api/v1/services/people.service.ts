import CT_People from '../models/CT_People';

// GET PERSONAS LIST
export const getPeopleList = (id: string) => {
  try {
    if (id) {
      return CT_People.findOne({ _id: id });
    }
    return CT_People.find().populate({ path: 'Type', select: 'Name Description' }).populate({ path: 'Addresses.Type', select: 'Name' }).populate({ path: 'Phones.Type', select: 'Name' }).populate({ path: 'WebAddresses.Type', select: 'Name' });
  } catch (error) {
    return [{}];
  }
};
