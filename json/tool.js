const GLOBAL_NEWS = [
  {
    title:
      "Neurava receives a strategic investment from global epilepsy leaders UCB",
    date: "MONDAY, JAN 24, 2021",
    link: "https://www.ucb-usa.com/stories-media/UCB-U-S-News/detail/article/unleashing-power-digital-solutions-epilepsy-care",
  },
  {
    title: "Neurava raises $650,000 in Venture Capital",
    date: "MONDAY, JAN 24, 2021",
    link: "https://www.purdue.edu/newsroom/releases/2021/Q4/startup-developing-device-to-prevent-epilepsy-related-death-receives-funding.html",
  },
  {
    title:
      "Neurava wins the Southwest National Pediatric Device Consortium award at RBPC 21",
    date: "MONDAY, DEC 24, 2021",
    link: "https://rbpc.rice.edu/Results",
  },
  {
    title:
      "Neurava selected into the top 54 startups at the prestigious 2021 Rice Business Plan Competition",
    date: "MONDAY, DEC 24, 2021",
    link: "https://rbpc.rice.edu/2021-Competition/2021-startups",
  },
  {
    title: "A wearable device may help prevent unexpected death in epilepsy",
    date: "MONDAY, DEC 24, 2021",
    link: "https://www.purdue.edu/newsroom/releases/2020/Q2/a-wearable-device-may-help-prevent-unexpected-death-in-epilepsy.html",
  },
  {
    title: "Wearable Device to Prevent Sudden Death from Epilepsy",
    date: "MONDAY, DEC 24, 2021",
    link: "https://www.medgadget.com/2020/05/wearable-device-to-prevent-sudden-death-from-epilepsy.html",
  },
  {
    title: "Device Could Alert a Potential Deadly Epileptic Event Looms",
    date: "MONDAY, DEC 24, 2021",
    link: "https://www.insideindianabusiness.com/story/42703317/device-could-alert-a-potential-deadly-epileptic-event-looms",
  },
  {
    title: "Wearable Device to Prevent Sudden Death from Epilepsy",
    date: "MONDAY, DEC 24, 2021",
    link: "https://www.medgadget.com/2020/05/wearable-device-to-prevent-sudden-death-from-epilepsy.html",
  },
  {
    title:
      "Neurava wins the first annual Elevate Ventures Regional Competition",
    date: "MONDAY, DEC 24, 2021",
    link: "https://www.elevateventures.com/elevate-nexus-regional-pitch-competitions-winners-announced/",
  },
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
