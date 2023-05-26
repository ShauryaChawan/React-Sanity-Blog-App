import client from "@sanity/client"

export default client({
  projectId: "lklzde0v",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-26",
})