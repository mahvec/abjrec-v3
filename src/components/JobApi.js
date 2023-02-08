export const fetchJobApi = async () => {
  return await fetch(
    "https://zen-spence.52-41-168-181.plesk.page/api/v1/jobs"
  ).then((data) => data.json());
};
