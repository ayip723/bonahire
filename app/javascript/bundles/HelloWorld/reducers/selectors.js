export const selectCompany = ( companies , companyId) => {
  return companies[companyId] || {jobIds:[]};
};

export const selectJobsForCompany = ({ companies, jobs}, company) => {
  console.log('------------');
  console.log(jobs);
  console.log(companies);
  return company.jobIds.map(jobId => jobs[jobId]);
};

export const selectJob = ({ companies }, companyId, jobId) => {
  return companies[companyId][jobId] || {name: null, description: null};
};

export const asArray = (companies) => (
  Object.keys(companies).map(key => companies[key])
);
