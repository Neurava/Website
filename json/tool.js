const GLOBAL_NEWS = [
  {
    title:
      "Neurava awarded Innovation of the Year 2021",
    date: "FRIDAY, APR 23, 2022",
    link: "https://techpoint.org/2022/04/neurava-wins-innovation-of-the-year-mira-award/"
  },
  {
    title:
      "Neurava receives a strategic investment from global epilepsy leaders UCB",
    date: "FRIDAY, DEC 03, 2021",
    link: "https://www.ucb-usa.com/stories-media/UCB-U-S-News/detail/article/unleashing-power-digital-solutions-epilepsy-care",
  },
  {
    title: "Neurava raises $650,000 in Venture Capital",
    date: "MONDAY, NOV 1, 2021",
    link: "https://www.purdue.edu/newsroom/releases/2021/Q4/startup-developing-device-to-prevent-epilepsy-related-death-receives-funding.html",
  },
  {
    title:
      "Neurava wins the Southwest National Pediatric Device Consortium award at RBPC 21",
    date: "FRIDAY, APR 09, 2021",
    link: "https://houston.innovationmap.com/2021-rice-business-plan-competition-winners-2652291624.html",
  },
  {
    title:
      "Neurava selected into the top 54 startups at the prestigious 2021 Rice Business Plan Competition",
    date: "FRIDAY, APR 02, 2021",
    link: "https://rbpc.rice.edu/2021-Competition/2021-startups",
  },
  {
    title: "A wearable device may help prevent unexpected death in epilepsy",
    date: "FRIDAY, MAY 12, 2021",
    link: "https://www.purdue.edu/newsroom/releases/2020/Q2/a-wearable-device-may-help-prevent-unexpected-death-in-epilepsy.html",
  },
  {
    title: "Device Could Alert a Potential Deadly Epileptic Event Looms",
    date: "WEDNESDAY, SEP 30, 2020",
    link: "https://www.insideindianabusiness.com/story/42703317/device-could-alert-a-potential-deadly-epileptic-event-looms",
  },
  {
    title:
      "Neurava wins second place at the Purdue University Business Model Competition",
    date: "THURSDAY, MAY 07, 2020",
    link: "https://www.insideindianabusiness.com/articles/purdue-student-startups-awarded-dollar100k",
  }
];

const news_div = document.getElementById("newsDiv");

GLOBAL_NEWS.forEach((news) => {
  news_div.innerHTML += ` 
  <a class="post" target="_blank"href="${news.link}"> 
    <h4>
     ${news.title}
    </h4>
    <div class="info">
      <h4>${news.date}</h4>
      <h5>Read More <span class="material-icons-outlined"> &#xe5cc </span> </h5>
    </div>
  </a>`;
});
