export const selectCompany = ({ companies }, companyId) => {
  return companies[companyId] || {jobs:[]};
};

export const asArray = ({ companies }) => (
  Object.keys(companies).map(key => companies[key])
);
