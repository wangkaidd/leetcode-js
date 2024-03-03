import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/leetcode/": [
    "",
    {
      text: "第一章 序章",
      prefix: "outline/",
      children: [
        "intro",
        "complexity",
        "solution_list",
        {
          text: "1.4 学习计划",
          link: "plan/README.md",
          activeMatch: "^/leetcode/outline/plan",
        },
        {
          text: "1.5 题解标签",
          link: "tag/README.md",
          activeMatch: "^/leetcode/outline/tag",
        },
      ],
      collapsible: true,
    },
    {
      text: "第二章 数据结构",
      prefix: "ds/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "第三章 算法",
      prefix: "algorithm/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "第四章 LeetCode 题解",
      prefix: "problem/",
      children: [
        // AUTO_GEN_CONFIG_START
        {
          text: "0001-0099",
          collapsible: true,
          children: [
            "0001",
            "0002",
            "0003",
            "0004",
            "0005",
            "0006",
            "0007",
            "0008",
            "0009",
            "0010",
            "0011",
            "0012",
            "0013",
            "0014",
            "0015",
            "0016",
            "0017",
            "0018",
            "0019",
            "0020",
            "0021",
            "0022",
            "0023",
            "0024",
            "0025",
            "0026",
            "0027",
            "0033",
            "0034",
            "0035",
            "0036",
            "0039",
            "0040",
            "0041",
            "0042",
            "0044",
            "0046",
            "0047",
            "0048",
            "0050",
            "0051",
            "0052",
            "0053",
            "0054",
            "0058",
            "0059",
            "0061",
            "0062",
            "0063",
            "0064",
            "0066",
            "0070",
            "0071",
            "0072",
            "0073",
            "0074",
            "0076",
            "0077",
            "0078",
            "0079",
            "0080",
            "0081",
            "0082",
            "0083",
            "0086",
            "0088",
            "0090",
            "0092",
            "0093",
            "0094",
            "0095",
            "0096",
            "0098",
            "0099"
          ],
        },
        {
          text: "0100-0199",
          collapsible: true,
          children: [
            "0100",
            "0101",
            "0102",
            "0103",
            "0104",
            "0105",
            "0106",
            "0107",
            "0108",
            "0109",
            "0110",
            "0111",
            "0112",
            "0113",
            "0114",
            "0116",
            "0117",
            "0120",
            "0121",
            "0122",
            "0123",
            "0125",
            "0128",
            "0129",
            "0131",
            "0133",
            "0136",
            "0138",
            "0139",
            "0141",
            "0142",
            "0143",
            "0144",
            "0145",
            "0146",
            "0147",
            "0148",
            "0150",
            "0151",
            "0152",
            "0153",
            "0154",
            "0155",
            "0156",
            "0160",
            "0162",
            "0167",
            "0169",
            "0173",
            "0174",
            "0188",
            "0189",
            "0191",
            "0198",
            "0199"
          ],
        },
        {
          text: "0200-0299",
          collapsible: true,
          children: [
            "0202",
            "0203",
            "0206",
            "0215",
            "0216",
            "0217",
            "0219",
            "0221",
            "0222",
            "0224",
            "0225",
            "0226",
            "0230",
            "0232",
            "0234",
            "0235",
            "0236",
            "0237",
            "0238",
            "0240",
            "0242",
            "0257",
            "0259",
            "0268",
            "0278",
            "0279",
            "0283",
            "0290",
            "0297"
          ],
        },
        {
          text: "0300-0399",
          collapsible: true,
          children: [
            "0300",
            "0303",
            "0307",
            "0309",
            "0316",
            "0322",
            "0328",
            "0343",
            "0344",
            "0345",
            "0346",
            "0347",
            "0354",
            "0355",
            "0366",
            "0369",
            "0373",
            "0374",
            "0375",
            "0378",
            "0379",
            "0380",
            "0382",
            "0383",
            "0392",
            "0394"
          ],
        },
        {
          text: "0400-0499",
          collapsible: true,
          children: [
            "0416",
            "0426",
            "0430",
            "0442",
            "0445",
            "0450",
            "0451",
            "0474",
            "0485",
            "0494",
            "0496",
            "0498"
          ],
        },
        {
          text: "0500-0599",
          collapsible: true,
          children: [
            "0503",
            "0506",
            "0509",
            "0514",
            "0516",
            "0518",
            "0530",
            "0543",
            "0559",
            "0572",
            "0583",
            "0589",
            "0590"
          ],
        },
        {
          text: "0600-0699",
          collapsible: true,
          children: [
            "0611",
            "0617",
            "0622",
            "0637",
            "0654",
            "0678",
            "0682"
          ],
        },
        {
          text: "0700-0799",
          collapsible: true,
          children: [
            "0700",
            "0701",
            "0703",
            "0704",
            "0705",
            "0706",
            "0707",
            "0712",
            "0714",
            "0724",
            "0739",
            "0783"
          ],
        },
        {
          text: "0800-0899",
          collapsible: true,
          children: [
            "0844",
            "0876",
            "0880",
            "0889"
          ],
        },
        {
          text: "0900-0999",
          collapsible: true,
          children: [
            "0931",
            "0946",
            "0958",
            "0973"
          ],
        },
        {
          text: "1000-1099",
          collapsible: true,
          children: [
            "1008",
            "1021",
            "1047",
            "1049",
            "1081"
          ],
        },
        {
          text: "1100-1199",
          collapsible: true,
          children: [
            "1137",
            "1143",
            "1190"
          ],
        },
        {
          text: "1300-1399",
          collapsible: true,
          children: [
            "1312"
          ],
        },
        {
          text: "1400-1499",
          collapsible: true,
          children: [
            "1441",
            "1472",
            "1475"
          ],
        },
        {
          text: "1500-1599",
          collapsible: true,
          children: [
            "1522"
          ],
        },
        {
          text: "2100-2199",
          collapsible: true,
          children: [
            "2196"
          ],
        },
        {
          text: "面试题",
          collapsible: true,
          children: [
            "i_16.25"
          ],
        },
        {
          text: "剑指 Offer",
          collapsible: true,
          children: [
            "jz_offer_03_1",
            "jz_offer_04_1",
            "jz_offer_05_1",
            "jz_offer_06_1",
            "jz_offer_07_1",
            "jz_offer_09_1",
            "jz_offer_10_1",
            "jz_offer_10_2",
            "jz_offer_11_1",
            "jz_offer_12_1",
            "jz_offer_13_1",
            "jz_offer_14_1",
            "jz_offer_14_2",
            "jz_offer_15_1",
            "jz_offer_16_1",
            "jz_offer_17_1",
            "jz_offer_18_1",
            "jz_offer_19_1",
            "jz_offer_21_1",
            "jz_offer_22_1",
            "jz_offer_24_1",
            "jz_offer_25_1",
            "jz_offer_26_1",
            "jz_offer_27_1",
            "jz_offer_28_1",
            "jz_offer_29_1",
            "jz_offer_30_1",
            "jz_offer_31_1",
            "jz_offer_32_1",
            "jz_offer_32_2",
            "jz_offer_32_3",
            "jz_offer_33_1",
            "jz_offer_34_1",
            "jz_offer_35_1",
            "jz_offer_36_1",
            "jz_offer_37_1",
            "jz_offer_38_1",
            "jz_offer_39_1",
            "jz_offer_42_1",
            "jz_offer_47_1",
            "jz_offer_50_1",
            "jz_offer_52_1",
            "jz_offer_53_1",
            "jz_offer_53_2",
            "jz_offer_54_1",
            "jz_offer_55_1",
            "jz_offer_58_1",
            "jz_offer_61_1",
            "jz_offer_63_1"
          ],
        },
        {
          text: "剑指 Offer II",
          collapsible: true,
          children: [
            "jz_offer_II_031",
            "jz_offer_II_101"
          ],
        },// AUTO_GEN_CONFIG_END
      ],
      collapsible: true,
    },
  ],
  "/react/": "structure",
});
