export const selectCompany = ( companies , companyId) => {
  return companies[companyId] || {jobIds:[]};
};

export const selectJobsForCompany = ({ companies, jobs}, company) => {
  return company.jobIds.map(jobId => jobs[jobId]);
};

export const selectJob = ( jobs, jobId) => {
  return jobs[jobId] || {name: null, description: null};
};

export const asArray = (entities) => (
  Object.keys(entities).map(key => entities[key])
);
