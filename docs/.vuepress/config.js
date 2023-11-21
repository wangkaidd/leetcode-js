module.exports = {
  title: "前端算法通关指南",
  description: "Know Your Game​​​",
  base: "/leetcode-js/",
  shouldPrefetch: () => false,
  theme: "@vuepress/theme-default",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    logo: "/images/logo.png",
    repo: "2xiao/leetcode-js",
    repoLabel: "Github",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "帮2xiao改善此页面",
    lastUpdated: "上次更新",
    subSidebar: "auto",
    smoothScroll: true,
    nav: [
      { text: "LeetCode", link: "/leetcode/" },
      { text: "React", link: "/react/" },
      // { text: "FE", link: "/fe/" },
      { text: "Blog", link: "/blog/" },
    ],
    sidebar: {
      "/leetcode/": genLeetCode(),
      "/react/": genReact(),
      // "/fe/": genFE(),
      "/blog/": genBlog(),
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "@vuepress/medium-zoom",
      {
        selector: "img:not(.nozoom)",
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16,
        },
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "upgrade",
        before: (info) => `<UpgradePath title="${info}">`,
        after: "</UpgradePath>",
      },
    ],
    ["vuepress-plugin-flowchart"],
    // https://github.com/lorisleiva/vuepress-plugin-seo
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: ($page) => $page.frontmatter.tags,
        // twitterCard: _ => 'summary_large_image',
        type: ($page) => "article",
        url: (_, $site, path) => ($site.themeConfig.domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          (($site.themeConfig.domain &&
            !$page.frontmatter.image.startsWith("http")) ||
            "") + $page.frontmatter.image,
        publishedAt: ($page) =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
  ],
  head: [
    // ico
    ["link", { rel: "icon", href: `/images/logo.png` }],
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "2xiao" }],
    ["meta", { name: "copyright", content: "2xiao" }],
    ["meta", { name: "subject", content: "前端算法通关指南 LeetCode-JS" }],
    ["meta", { name: "description", content: "前端算法通关指南 LeetCode-JS" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "LeetCode、LeetCode-JS通关指南、数据结构与算法精讲、1000+LeetCode题目详解、自己动手写React、React 源码、手写React库、肉身翻墙、如何更好地生活",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ],
};

// leetCode
function genLeetCode() {
  return [
    {
      title: "第一章 序章",
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/leetcode/",
        "/leetcode/outline/table",
        "/leetcode/outline/complexity",
        "/leetcode/outline/solution_list",
        "/leetcode/outline/study_plan",
        "/leetcode/outline/tag_list",
      ],
    },
    {
      title: "第二章 数据结构专题",
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/leetcode/ds/array",
        "/leetcode/ds/linked_list",
        "/leetcode/ds/stack",
        "/leetcode/ds/queue",
        "/leetcode/ds/hash_table",
        "/leetcode/ds/tree",
        "/leetcode/ds/heap",
        "/leetcode/ds/graph",
        "/leetcode/ds/string",
      ],
    },
    {
      title: "第三章 算法专题",
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "/leetcode/algorithm/enumeration",
        "/leetcode/algorithm/recursion",
        "/leetcode/algorithm/divide_conquer",
        "/leetcode/algorithm/backtracking",
        "/leetcode/algorithm/greed",
        "/leetcode/algorithm/dynamic_programming",
        "/leetcode/algorithm/bit",
        "/leetcode/algorithm/sort",
        "/leetcode/algorithm/binary_search",
        "/leetcode/algorithm/two_pointer",
        "/leetcode/algorithm/slide_window",
      ],
    },
    {
      title: "第四章 LeetCode 题解",
      collapsable: true,
      sidebarDepth: 0,
      children: [
        // AUTO_GEN_CONFIG_START
        {
          title: "0001-0099",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/0001-0099.md",
            "/leetcode/problem/0001.md",
            "/leetcode/problem/0002.md",
            "/leetcode/problem/0003.md",
            "/leetcode/problem/0004.md",
            "/leetcode/problem/0006.md",
            "/leetcode/problem/0007.md",
            "/leetcode/problem/0008.md",
            "/leetcode/problem/0009.md",
            "/leetcode/problem/0011.md",
            "/leetcode/problem/0012.md",
            "/leetcode/problem/0013.md",
            "/leetcode/problem/0015.md",
            "/leetcode/problem/0016.md",
            "/leetcode/problem/0018.md",
            "/leetcode/problem/0019.md",
            "/leetcode/problem/0020.md",
            "/leetcode/problem/0021.md",
            "/leetcode/problem/0023.md",
            "/leetcode/problem/0024.md",
            "/leetcode/problem/0025.md",
            "/leetcode/problem/0026.md",
            "/leetcode/problem/0027.md",
            "/leetcode/problem/0033.md",
            "/leetcode/problem/0036.md",
            "/leetcode/problem/0041.md",
            "/leetcode/problem/0048.md",
            "/leetcode/problem/0054.md",
            "/leetcode/problem/0059.md",
            "/leetcode/problem/0061.md",
            "/leetcode/problem/0062.md",
            "/leetcode/problem/0063.md",
            "/leetcode/problem/0066.md",
            "/leetcode/problem/0070.md",
            "/leetcode/problem/0073.md",
            "/leetcode/problem/0080.md",
            "/leetcode/problem/0082.md",
            "/leetcode/problem/0083.md",
            "/leetcode/problem/0086.md",
            "/leetcode/problem/0092.md",
          ],
        },
        {
          title: "0100-0199",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/0100-0199.md",
            "/leetcode/problem/0120.md",
            "/leetcode/problem/0125.md",
            "/leetcode/problem/0128.md",
            "/leetcode/problem/0136.md",
            "/leetcode/problem/0141.md",
            "/leetcode/problem/0143.md",
            "/leetcode/problem/0146.md",
            "/leetcode/problem/0152.md",
            "/leetcode/problem/0155.md",
            "/leetcode/problem/0167.md",
            "/leetcode/problem/0189.md",
          ],
        },
        {
          title: "0200-0299",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/0200-0299.md",
            "/leetcode/problem/0203.md",
            "/leetcode/problem/0206.md",
            "/leetcode/problem/0217.md",
            "/leetcode/problem/0219.md",
            "/leetcode/problem/0224.md",
            "/leetcode/problem/0225.md",
            "/leetcode/problem/0232.md",
            "/leetcode/problem/0234.md",
            "/leetcode/problem/0238.md",
            "/leetcode/problem/0259.md",
            "/leetcode/problem/0279.md",
            "/leetcode/problem/0283.md",
          ],
        },
        {
          title: "0300-0399",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/0300-0399.md",
            "/leetcode/problem/0328.md",
            "/leetcode/problem/0344.md",
            "/leetcode/problem/0345.md",
            "/leetcode/problem/0394.md",
          ],
        },
        {
          title: "0400-0499",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/0400-0499.md",
            "/leetcode/problem/0445.md",
            "/leetcode/problem/0485.md",
            "/leetcode/problem/0496.md",
            "/leetcode/problem/0498.md",
          ],
        },
        {
          title: "0500-0599",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/0500-0599.md",
            "/leetcode/problem/0503.md",
            "/leetcode/problem/0509.md",
          ],
        },
        {
          title: "0600-0699",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/0600-0699.md",
            "/leetcode/problem/0611.md",
            "/leetcode/problem/0622.md",
            "/leetcode/problem/0678.md",
            "/leetcode/problem/0682.md",
          ],
        },
        {
          title: "0700-0799",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/0700-0799.md",
            "/leetcode/problem/0705.md",
            "/leetcode/problem/0706.md",
            "/leetcode/problem/0707.md",
            "/leetcode/problem/0724.md",
            "/leetcode/problem/0739.md",
          ],
        },
        {
          title: "0800-0899",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/0800-0899.md",
            "/leetcode/problem/0844.md",
            "/leetcode/problem/0876.md",
            "/leetcode/problem/0880.md",
          ],
        },
        {
          title: "1000-1099",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/1000-1099.md",
            "/leetcode/problem/1021.md",
            "/leetcode/problem/1047.md",
          ],
        },
        {
          title: "1100-1199",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/1100-1199.md",
            "/leetcode/problem/1190.md",
          ],
        },
        {
          title: "1400-1499",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/1400-1499.md",
            "/leetcode/problem/1441.md",
            "/leetcode/problem/1472.md",
            "/leetcode/problem/1475.md",
          ],
        },
        {
          title: "面试题",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/Interviews.md",
            "/leetcode/problem/i_16.25.md",
          ],
        },
        {
          title: "剑指 Offer",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/Offer.md",
            "/leetcode/problem/jz_offer_03_1.md",
            "/leetcode/problem/jz_offer_04_1.md",
            "/leetcode/problem/jz_offer_09_1.md",
            "/leetcode/problem/jz_offer_22_1.md",
          ],
        },
        {
          title: "剑指 Offer II",
          collapsable: true,
          sidebarDepth: 0,
          children: [
            "/leetcode/solution/Offer-II.md",
            "/leetcode/problem/jz_offer_II_031.md",
          ],
        }, // AUTO_GEN_CONFIG_END
      ],
    },
  ];
}

// react
function genReact() {
  return [
    {
      title: "自己动手写 React",
      collapsable: true,
      sidebarDepth: 0,
      children: ["/react/", "/react/1.1", "/react/2.1"],
    },
  ];
}

// fe
function genFE() {
  return [
    {
      title: "重学前端",
      collapsable: true,
      sidebarDepth: 0,
      children: ["/fe/basic/1"],
    },
    {
      title: "JavaScript核心原理",
      collapsable: true,
      sidebarDepth: 0,
      children: [
        // '/fe/js/01',
        // '/fe/js/02',
        // '/fe/js/03',
        // '/fe/js/04',
        // '/fe/js/05',
        // '/fe/js/06',
        // '/fe/js/07',
        // '/fe/js/08',
        // '/fe/js/09',
        // '/fe/js/10',
        // '/fe/js/11',
        // '/fe/js/12',
        // '/fe/js/13',
        // '/fe/js/14',
        // '/fe/js/15',
        // '/fe/js/16',
        // '/fe/js/17',
        // '/fe/js/18',
        // '/fe/js/19',
        // '/fe/js/20',
        // '/fe/js/21',
        // '/fe/js/22',
      ],
    },
    {
      title: "玩转webpack",
      collapsable: true,
      sidebarDepth: 0,
      children: [],
    },
    {
      title: "Node.js开发",
      collapsable: true,
      sidebarDepth: 0,
      children: [],
    },
    {
      title: "浏览器工作原理",
      collapsable: true,
      sidebarDepth: 0,
      children: [],
    },
  ];
}

// blog
function genBlog() {
  return [
    {
      title: "在美国",
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "/blog/where_to_go",
        "/blog/live_in_us",
        "/blog/run_europe",
        "/blog/digital_nomad",
        "/blog/neighbor",
        "/blog/indian",
        "/blog/mississippi",
        "/blog/travel",
        "/blog/10043",
      ],
    },
    {
      title: "在北京",
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "/blog/miss_bj",
        "/blog/new_year",
        "/blog/grandma",
        "/blog/before_quit",
        "/blog/go_home",
        "/blog/money",
        "/blog/principle",
        "/blog/three_years_plan",
        "/blog/work_overtime",
      ],
    },
  ];
}
