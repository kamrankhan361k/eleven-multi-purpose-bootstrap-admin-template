// an endpoint for getting projects data
export default (req, res) => {
  const offset = parseInt(req.query.offset || 0);

  if (offset >= 9) return setTimeout(() => res.json([]), 1000);

  const data = Array(3)
    .fill(0)
    .map((_, i) => {
      return {
        subject: [
          "launched a new application",
          "removed event from calendar",
          "has joined your mailing list",
          "created a new task list",
          "added event to calendar",
          "opened a new ticket",
          "closed a ticket",
          "paid pending invoice"
        ][Math.floor(Math.random() * 8)],
        user: [
          "Megan Hanson",
          "Jeffrey Freeman",
          "Amber McCoy",
          "Megan Gibson",
          "Melissa Sanders",
          "Danielle Perkins",
          "Roy Matthews",
          "Samantha West"
        ][Math.floor(Math.random() * 8)],
        avatar: `${process.env.baseUrl}images/face${Math.floor(
          Math.random() * 6
        ) + 1}.jpg`,
        id: i + offset
      };
    });

  setTimeout(() => res.json(data), 1000);
};
