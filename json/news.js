const GLOBAL_NEWS = [
  {
    title: 
      "Neurava receives $25,0000 non-dilutive award as a finalist of the 2023 MedTech Innovator",
    date: "Oct 11, 2023",
    link: "https://finance.yahoo.com/news/medtech-innovator-names-strokedx-2023-150000569.html"
  },
  {
    title:
    "Neurava selected among top 5 early stage MedTech Startups at 2023 MedTech Innovator",
    date: "Sept 28, 2023",
    link: "https://medtechinnovator.org/medtech-innovator-announces-2023-grand-prize-finalists/"
  },
  {
    title: "Neurava selected into cohort of leading early stage MedTech startups at 2023 MedTech Innovator",
    date: "July 10, 2023",
    link: "https://www.insideindianabusiness.com/articles/med-tech-startup-getting-boost-from-global-accelerator"

  },
  {
    title:
      "Neurava awarded Innovation of the Year 2022",
    date: "April 23, 2022",
    link: "https://techpoint.org/2022/04/neurava-wins-innovation-of-the-year-mira-award/"
  },
  {
    title:
      "Neurava receives a strategic investment from global epilepsy leaders UCB",
    date: "Dec 03, 2021",
    link: "https://www.ucb-usa.com/stories-media/UCB-U-S-News/detail/article/unleashing-power-digital-solutions-epilepsy-care",
  },
  {
    title: "Neurava raises $650,000 in Venture Capital",
    date: "Nov 1, 2021",
    link: "https://www.purdue.edu/newsroom/releases/2021/Q4/startup-developing-device-to-prevent-epilepsy-related-death-receives-funding.html",
  },
  {
    title:
      "Neurava wins the Southwest National Pediatric Device Consortium award at RBPC 21",
    date: "April 09, 2021",
    link: "https://houston.innovationmap.com/2021-rice-business-plan-competition-winners-2652291624.html",
  },
  {
    title:
      "Neurava selected into the top 54 startups at the prestigious 2021 Rice Business Plan Competition",
    date: "April 02, 2021",
    link: "https://rbpc.rice.edu/2021-Competition/2021-startups",
  },
  {
    title: "A wearable device may help prevent unexpected death in epilepsy",
    date: "May 12, 2021",
    link: "https://www.purdue.edu/newsroom/releases/2020/Q2/a-wearable-device-may-help-prevent-unexpected-death-in-epilepsy.html",
  },
  {
    title: "Device Could Alert a Potential Deadly Epileptic Event Looms",
    date: "Sept 30, 2020",
    link: "https://www.insideindianabusiness.com/story/42703317/device-could-alert-a-potential-deadly-epileptic-event-looms",
  },
  {
    title:
      "Neurava wins second place at the Purdue University Business Model Competition",
    date: "May, 2020",
    link: "https://www.insideindianabusiness.com/articles/purdue-student-startups-awarded-dollar100k",
  }
];

const news_page_div = document.getElementById("newsDiv");
const news_glide_cards_div = document.getElementById("newsGlideCardsDiv");

console.log("newsDiv", news_page_div);
console.log("newsGlideCardsDiv", news_glide_cards_div);

GLOBAL_NEWS.forEach((news) => {
  if (news_page_div) {
    news_page_div.innerHTML += ` 
    <a class="post" target="_blank"href="${news.link}"> 
      <h4>
      ${news.title}
      </h4>
      <div class="info">
        <h4>${news.date}</h4>
        <h5>Read More <span class="material-icons-outlined"> &#xe5cc </span> </h5>
      </div>
    </a>`;
    console.log("good news page")
  }
  
  if (news_glide_cards_div) {
    news_glide_cards_div.innerHTML += `
      <div class="glide__slide">
        <h4>
          ${news.title}
        </h4>
        <div class="cardInfo">
          <h4>${news.date}</h4>
          <a target="_blank" href="${news.link}">
            Read More
            <span class="material-icons-outlined"> &#xe5cc </span>
          </a>
        </div>
      </div>`;
      console.log("good card", news.date, news.title, news.link)
  }

  console.log(news);
});


