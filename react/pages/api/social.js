import fetch from "isomorphic-unfetch";

export default async (req, res) => {
  const contacts = await fetch(`${process.env.baseUrl}api/contacts`)
    .then(resp => resp.json())
    .then(data => {
      return data;
    });

  const activity = await fetch(`${process.env.baseUrl}api/activity`)
    .then(resp => resp.json())
    .then(data => {
      return data;
    });

  setTimeout(() => {
    res.json({ contacts, activity });
  }, 2000);
};
