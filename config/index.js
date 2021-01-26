const siteMetadata = {
  siteUrl: "https://books.buzzing.cc",
  author: `Buzzing.cc`,
  locale: "zh",
  title: "Buzzing 读书",
  shortTitle: "Buzzing读书",
  description: "用中文浏览读书，荐书相关的讨论",
  keywords: ["buzzing", "读书", "阅读", "书籍推荐"],
  telegram: "@buzzingcc",
  telegram_chat_id: "-1001406368978",
  menuLinks: [
    // {
    //   name: "每周精选",
    //   url: "/issues",
    // },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  subscriptions: [
    {
      name: "Twitter @buzzingcc",
      url: "https://twitter.com/buzzingcc",
      external: true,
    },
    {
      name: "Telegram @buzzingcc",
      url: "https://t.me/buzzingcc",
      external: true,
    },
    {
      name: "RSS",
      url: "/rss.xml",
      prefetch: false,
    },
  ],
  social: [
    {
      name: `Reddit Books`,
      url: `https://www.reddit.com/r/books/`,
      external: true,
    },
    {
      name: "Suggest Me A Book",
      url: "https://www.reddit.com/r/suggestmeabook/",
      external: true,
    },
    {
      name: `Buzzing`,
      url: `https://www.buzzing.cc/`,
      external: true,
    },
  ],
  localize: [
    {
      locale: "en",
      title: `Buzzing Books`,
      shortTitle: "BuzzBooks",
      description: `See what's buzzing on Books in your native language`,
      keywords: ["buzzing", "Books", "Books Suggestion"],
      menuLinks: [
        // {
        //   name: "Weekly Selection",
        //   url: "/en/issues",
        // },
        {
          name: "RSS",
          url: "/en/rss.xml",
          prefetch: false,
        },
      ],
    },
    {
      locale: "zh-Hant",
      title: "Buzzing 讀書",
      shortTitle: "Buzzing讀書",
      description: "用中文瀏覽讀書，薦書相關的討論",
      keywords: ["buzzing", "讀書", "閱讀", "書籍推薦"],
      menuLinks: [
        // {
        // name: "每週精選",
        // url: "/zh-Hant/issues",
        // },
        {
          name: "RSS",
          url: "/zh-Hant/rss.xml",
          prefetch: false,
        },
      ],
    },
  ],
};

module.exports = {
  siteMetadata,
};
