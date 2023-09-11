const express = require('express')
const app = express()
const port = 3000

const today = new Date()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

app.get('/api', (req, res) => {

    if (!req.query.slack_name) return res.status(400).json({ error: 'Slack name is required' });
    if (!req.query.track) return res.status(400).json({ error: 'Track is required' });

    const response = {
        slack_name: req.query.slack_name,
        current_day: days[today.getDay()],
        utc_time: today.toISOString(),
        track: req.query.track,
        github_file_url: "https://github.com/Michael-August/hng10task1/blob/main/app.js",
        github_repo_url: "https://github.com/Michael-August/hng10task1",
    }
    res.status(200).json(response)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
