(function(){
  // --- 语言字典（在你原版基础上 + contact.*） ---
  const dict = {
    en: {
      'nav.research':'Publications','nav.projects':'Projects','nav.cv':'Curriculum Vitae',

      'index.title':"Hello, I\'m Zhen Peng.",
      'index.lead':'I am a PhD student at the Transport Risk Management Centre (TRMC), Imperial College London. I am seeking opportunities to deploy low-altitude transportation systems.',
      'btn.seeResearch':'Publications','btn.seeProjects':'Projects','btn.cv':'CV',
      
      'index.edu':'Education', 'index.edu.bachelor.title':'Bachelor',
      'index.edu.bachelor.meta':'B.Sc. in Civil Engineering, Tongji University, 2020-2024',
      'index.edu.bachelor.detail1':'Thesis: Analysis and Simulation of Human Behavior Models in Underground Space (Supervisor: Prof. Liu Fang)',
      'index.edu.bachelor.detail2':'GPA: 85.58%','index.edu.bachelor.detail3':'Awards: The Tongji University Undergraduate Excellence Scholarship (2022-2023)',

      'index.edu.master.title':'Master',
      'index.edu.master.meta':'M.Sc. in Scientific and Data Intensive Computing, University College London, 2024-2025',
      'index.edu.master.detail1':'Thesis: Multimodal Modular Chain-of-Thought for Vision-Language Models in Automated Energy Performance Certificate Assessment  (Supervisor: Prof. Peter J. Bentley)',
      'index.edu.master.detail2':'GPA: ','index.edu.master.detail3':'Awards: ',

      'index.edu.doctor.title':'Doctor',
      'index.edu.doctor.meta':'Civil and Environmental Engineering Research (Ph.D.), Imperial College London, 2025-2029',
      'index.edu.doctor.detail1':'Research Topic:',
      'index.edu.doctor.detail2':'Supervisor: Prof. Arnab Majumdar',
      'index.edu.doctor.detail3':'Sponsorship: China Scholarship Council (CSC) Scholarship',

      'index.news':'News',
      'index.n1':'May 2023: My first SCI-indexed paper, introducing a new structural health monitoring method, was accepted by Applied Science!',
      'index.n2':'May 2025: I was awarded a scholarship from the China Scholarship Council (CSC) to support my PhD studies!',
      'index.n3':"October 2025: Invention patent was granted, awaiting license: A Method for Detecting Structural Damage in High-Rise Buildings Based on Ambient Seismic Noise. (Application No. 202211386898.1)",
      'index.n4':"November 2025: My new paper, 'Microscopic modelling of strolling pedestrians in underground transportation hubs with exhibitions', has been submitted to Frontiers of Structural and Civil Engineering for consideration.",

      'contact.title':'Contact','contact.email':'E-mail',

      'footer.rights':'All rights reserved.',
      'research.metaTitle':'Publications','research.title':'Publications','research.desc':'My research interests lie in multimodal algorithms, with a focus on applications in transportation risk management.',
      'research.pubs':'Academic articles', 'research.patents':'Patents',

      'projects.metaTitle':'Projects','projects.title':'Projects','projects.desc':'Here are the projects that I have participated in',
      'projectsa.title':'Leading, Research on Seismic Response Characteristics of high-rise buildings based on seismic ambient noise, (X2021441), 2021-2022, 4150 RMB.',
      'projects.a':'I served as team leader for this research group. We explored the response characteristics of buildings and developed a structural health monitoring method.',
      'projectsb.title':'Participating in, Establishment of Intelligent Operation Platform for Critical Municipal Urban Infrastructure, (2020YFB2103300), National Key Research and Development Program.',
      'projects.b':'I served as a data collector and programmer on this project. We explored the mechanisms of human behavior in underground stations and proposed an operations optimization methodology.',
      'projects.demo':'demo','projects.code':'code','projects.paper':'paper','projects.site':'website', 'projects.utilitypatent':'Utility patent', 'projects.inventionpatent':'Invention patent 1'
    },
    zh: {
      'nav.research':'研究进展','nav.projects':'参与项目','nav.cv':'个人简历',

      'index.title':'你好，我是彭桢。',
      'index.lead':'我目前是帝国理工学院交通风险管理中心在读博士生。我致力于将低空交通系统在现实社会中落地，欢迎合作交流！',
      'btn.seeResearch':'查看研究','btn.seeProjects':'查看项目','btn.cv':'下载简历','index.about':'关于',

      'index.edu':'教育经历', 'index.edu.bachelor.title':'本科教育',
      'index.edu.bachelor.meta':'土木工程学士，同济大学，2020-2024',
      'index.edu.bachelor.detail1':'学位论文：地下步行空间的驻留行为与模拟研究（导师：刘芳教授）',
      'index.edu.bachelor.detail2':'GPA: 85.58%','index.edu.bachelor.detail3':'奖励及荣誉：同济大学优秀本科生奖学金（2022-2023）',

      'index.edu.master.title':'硕士教育',
      'index.edu.master.meta':'科学与数据密集型计算硕士，伦敦大学学院，2024-2025',
      'index.edu.master.detail1':'学位论文：用于基于视觉语言模型进行自动化能源效率证书测量的多模态模块化思维链（导师：Peter J. Bentley教授）',
      'index.edu.master.detail2':'GPA: ','index.edu.master.detail3':'奖励与荣誉: ',
      
      'index.edu.doctor.title':'博士教育',
      'index.edu.doctor.meta':'土木与环境工程博士，伦敦帝国理工学院，2025-2029',
      'index.edu.doctor.detail1':'研究主题：',
      'index.edu.doctor.detail2':'导师：Arnab Majumdar教授',
      'index.edu.doctor.detail3':'奖学金：中国国家公派留学（CSC）奖学金',

      'index.news':'最新消息',
      'index.n1':'2023年5月：我的第一篇SCI论文被Applied Science接收！',
      'index.n2':'2025年5月：我成功被录取为中国公派留学生（CSC202508060267）',
      'index.n3':'2025年10月：发明专利授权，等待证书：基于地震背景噪音有效监测高层建筑损伤的监测方法（专利申请标识号：202211386898.1）',
      'index.n4':"2025年11月：我的新论文'Microscopic modelling of strolling pedestrians in underground transportation hubs with exhibitions'已提交至Frontiers of Structural and Civil Engineering以供审阅.",

      'contact.title':'联系方式','contact.email':'电子邮箱',

      'footer.rights':'保留所有权利。',
      'research.metaTitle':'研究进展','research.title':'研究进展','research.desc':'我的研究兴趣主要在用于交通风险管理的多模态算法。',
      'research.pubs':'已发表论文', 'research.patents':'发布专利',

      'projects.metaTitle':'Projects','projects.title':'参与项目','projects.desc':'以下为参与了且完成结题的国内外项目',
      'projectsa.title':'领导，基于地震背景噪音观测的超高建筑地震响应特征研究，（X2021441），2021-2022，4150元。',
      'projects.a':'我作为项目负责人，带领团队探索了建筑物的地震响应特征，并基于所提取到的特征模式开发出一种无损结构健康监测技术。',
      'projectsb.title':'参与，城市重大市政设施智能化运维与管控平台构建及应用示范，(2020YFB2103300)，国家重点研发计划。',
      'projects.b':'我作为数据采样员和程序员参与了刘芳教授的项目团队。我们探索了在地铁站中的行人行为模式，并基于此开发出考虑人因的基础设施管理优化方法。',
      'projects.demo':'demo','projects.code':'开源代码','projects.paper':'发表论文','projects.site':'项目网站', 'projects.utilitypatent':'实用新型专利', 'projects.inventionpatent':'发明专利'
    }
  };

  // --- 语言归一化：'zh'、'zh-CN' 都归到 'zh' ---
  function normalizeLang(l){
    const s = String(l || '').toLowerCase();
    if (s.startsWith('zh')) return 'zh';
    return 'en';
  }

  // 默认语言：优先 localStorage，其次浏览器偏好
  let lang = (function(){
    const fromLS = localStorage.getItem('lang');
    if (fromLS) return normalizeLang(fromLS);
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    return normalizeLang(nav);
  })();

  function setHtmlLang(){
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
  }

  function translateElement(el){
    const key = (el.getAttribute('data-i18n') || '').trim();
    if (!key) return;
    const pack = dict[lang] || {};
    const t = pack[key];
    if (typeof t === 'string') {
      if (el.hasAttribute('data-i18n-html')) el.innerHTML = t;
      else el.textContent = t;
    } else {
      console.warn('[i18n] missing:', lang, key);
    }
  }

  function applyTranslations(root = document){
    setHtmlLang();
    root.querySelectorAll('[data-i18n]').forEach(translateElement);

    // 切换按钮文案 & 无障碍标签
    var btn = document.getElementById('langToggle');
    if (btn) {
      if (lang === 'en') { btn.textContent = '中文'; btn.setAttribute('aria-label','Switch to Chinese'); }
      else { btn.textContent = 'EN'; btn.setAttribute('aria-label','切换为英文'); }
    }
  }

  function setLang(newLang){
    const n = normalizeLang(newLang);
    if (n !== 'en' && n !== 'zh') return;
    lang = n;
    try { localStorage.setItem('lang', lang); } catch(e){}
    applyTranslations();
  }

  function toggleLang(){
    setLang(lang === 'en' ? 'zh' : 'en');
  }

  // 监听后续插入节点，避免漏翻
  const mo = new MutationObserver((mutations)=>{
    mutations.forEach(m=>{
      (m.addedNodes || []).forEach(node=>{
        if (node.nodeType !== 1) return;
        if (node.hasAttribute && node.hasAttribute('data-i18n')) translateElement(node);
        if (node.querySelectorAll) node.querySelectorAll('[data-i18n]').forEach(translateElement);
      });
    });
  });

  // 首次加载 & 绑定事件
  document.addEventListener('DOMContentLoaded', function(){
    applyTranslations();
    var btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', toggleLang);
    mo.observe(document.body, { childList: true, subtree: true });
  });
})();