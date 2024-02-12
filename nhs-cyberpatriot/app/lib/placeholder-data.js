const users = [
  {
    username: "Cyber Admin",
    name: "Webmaster",
    email: "nhsjrotccyber@gmail.com",
    password: "nh$jR07(",
    permissions: ["ADMINISTRATOR"],
    title: "Webmaster - Not affiliated with cyberpatriot",
  },
  {
    username: "Test Member",
    name: "Test Member 1",
    email: "fake@member.com",
    password: "1234567",
    permissions: ["USER"],
    title: "Test Account - Not affiliated with cyberpatriot",
  },
];

const whitelist = [
  {email: 'ebelcher143@gmail.com'},
]

const study_materials = [
  {
    category: "win",
    title: "Study guide #1",
    url: "https://www.uscyberpatriot.org/competition/training-materials",
  },
  {
    category: "linux",
    title: "Study guide #1",
    url: "https://www.uscyberpatriot.org/competition/training-materials",
  },
  {
    category: "cisco",
    title: "Study guide #1",
    url: "https://www.uscyberpatriot.org/competition/training-materials",
  },
];

const checklists = [
  {
    category: "win",
    title: "Ponkio / Cyberpatriot on GitHub",
    url: "https://github.com/ponkio/CyberPatriot",
    date: "2-9-2024",
  },
  {
    category: "linux",
    title: "Ponkio / Cyberpatriot on GitHub",
    url: "https://github.com/ponkio/CyberPatriot",
    date: "2-9-2024",
  },
  {
    category: "cisco",
    title: "Cyberpatriot official Cisco training",
    url: "https://www.uscyberpatriot.org/competition/training-materials/cisco",
    date: "2-9-2024",
  },
]

module.exports = {
  users,
  study_materials,
  checklists,
  whitelist
};
