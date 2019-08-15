export const selectCompany = ({ companies }, companyId) => {
  return companies[companyId] || {jobs:[]};
};

export const selectJob = ({ companies }, companyId, jobId) => {
  console.log('here............');
  return companies[companyId][jobId] || {name: null, description: null};
};

export const asArray = ({ companies }) => (
  Object.keys(companies).map(key => companies[key])
);
