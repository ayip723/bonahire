export const selectCompany = ( companies , companyId) => {
  return companies[companyId] || {jobIds:[]};
};

export const selectJobsForCompany = ({ jobs }, company) => {
  return company.jobIds.map(jobId => jobs[jobId]);
};

export const selectJob = ( jobs, jobId) => {
  return jobs[jobId] || { name: null, description: null, applicationIds: [] };
};

export const selectApplication = ( applications, applicationId) => {
  return applications[applicationId] || { stages: {}, movings: {} };
};

export const asArray = (entities) => (
  Object.keys(entities).map(key => entities[key])
);

export const sortBy = (entities, field) => (
  entities.sort((entity1, entity2) => (entity1[field] - entity2[field]))
);

export const selectApplications = (applications, job) => (job.applicationIds.map(applicationId => applications[applicationId]));
