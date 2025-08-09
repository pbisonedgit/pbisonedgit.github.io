(function(){
  // 默认英文；若本地存储过语言则优先用本地值
  let lang = localStorage.getItem('lang') || 'en';

  const dict = {
    en: {
      'nav.research':'Publications','nav.projects':'Projects','nav.cv':'Curriculum Vitae',

      'index.title':'Hello, I\'m Zhen Peng.',
      'index.lead':'I am a PhD student at the Transport Risk Management Centre (TRMC), Imperial College London. I am seeking opportunities to deploy low-altitude transportation systems.',
      'btn.seeResearch':'Publications','btn.seeProjects':'Projects','btn.cv':'CV',
      
      'index.edu':'Education', 'index.edu.bachelor.title':'Bachelor',
      'index.edu.bachelor.meta':'B.Sc. in Civil Engineering, Tongji University, 2020-2024',
      'index.edu.bachelor.detail1':'Thesis: Analysis and Simulation of Human Behavior Models in Underground Space (Supervisor: Prof. Liu Fang)',
      'index.edu.bachelor.detail2':'GPA: 85.58%','index.edu.bachelor.detail3':'Awards: The Tongji University Undergraduate Excellence Scholarship (2022-2023)',

      'index.highlights':'Highlights','index.h1':'Paper / Award / Talk (YYYY).','index.h2':'Project / OSS contribution with a quick metric.',
      'index.h3':'Teaching / Volunteering / Competition result.','index.link':'link',
      'footer.rights':'All rights reserved.',
      'research.metaTitle':'Publications','research.title':'Publications','research.desc':'Brief description of your research areas and goals.',
      'research.recent':'Recent progress','research.p1':'Project / Paper title','research.p1desc':'short update (YYYY-MM).',
      'research.preprint':'preprint/code','research.p2':'Experiment / Dataset','research.p2desc':'what changed or improved (YYYY-MM).',
      'research.notes':'notes','research.p3':'Talk / Seminar','research.p3desc':'slides or video (YYYY-MM).','research.slides':'slides/video',
      'research.pubs':'Selected publications','research.paper':'Paper title.','research.pdf':'pdf','research.code':'code',
      'projects.metaTitle':'Projects','projects.title':'Projects','projects.desc':'A concise list of projects you participated in. Group by role or year if helpful.',
      'projects.a':'One‑liner about what it is, your role, and the impact or metric.',
      'projects.b':'Technologies: HTML/CSS/JS (or Python/…)',
      'projects.c':'Key achievements, users, downloads, or collaboration details.','projects.demo':'demo','projects.code':'code','projects.paper':'paper','projects.site':'website',
      'cv.metaTitle':'CV ','cv.title':'Curriculum Vitae','cv.desc':'Keep it short on the web page; link a downloadable PDF.','cv.edu':'Education','cv.eduItem':'Degree, University, Years — Thesis title (optional).','cv.exp':'Experience','cv.expItem':'Role, Organization, Years — brief description of responsibilities and outcomes.','cv.awards':'Selected awards','cv.awardsItem':'Award name, Year.','cv.download':'Download CV (PDF)'
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
      
      'index.highlights':'亮点',
      'index.h1':'论文 / 奖项 / 演讲（年份）。',
      'index.h2':'项目 / 开源贡献（附一个小指标）。',
      'index.h3':'教学 / 志愿 / 竞赛成绩。','index.link':'链接',
      'footer.rights':'保留所有权利。',
      'research.metaTitle':'研究进展','research.title':'研究进展','research.desc':'用一两句话概述你的研究方向与目标。',
      'research.recent':'最近进展','research.p1':'项目 / 论文标题','research.p1desc':'简短更新（YYYY-MM）。',
      'research.preprint':'预印本/代码','research.p2':'实验 / 数据集','research.p2desc':'做了哪些改进（YYYY-MM）。',
      'research.notes':'记录','research.p3':'报告 / 讲座','research.p3desc':'幻灯片或视频（YYYY-MM）。','research.slides':'幻灯片/视频',
      'research.pubs':'代表性论文','research.paper':'论文标题。','research.pdf':'PDF','research.code':'代码',
      'projects.metaTitle':'参与项目','projects.title':'参与项目','projects.desc':'简要列出你参与的项目；必要时按角色或年份分组。',
      'projects.a':'一句话说明项目、你的角色与影响/数据。',
      'projects.b':'技术栈示例：HTML/CSS/JS（或 Python/...）',
      'projects.c':'亮点、用户数、下载量或合作信息。','projects.demo':'演示','projects.code':'代码','projects.paper':'论文','projects.site':'网站',
      'cv.metaTitle':'个人简历','cv.title':'个人简历','cv.desc':'网页上保持简洁；可提供可下载的 PDF。','cv.edu':'教育经历','cv.eduItem':'学位，学校，年份 — 论文题目（可选）。','cv.exp':'工作/研究经历','cv.expItem':'职位，机构，年份 — 职责与结果的简述。','cv.awards':'所获奖项','cv.awardsItem':'奖项名称，年份。','cv.download':'下载简历（PDF）'
    }
  };

  function applyTranslations(){
    // 设置 <html lang>
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    // 替换所有带 data-i18n 的元素文本
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var t = (dict[lang] && dict[lang][key]) || null;
      if (t) {
        // 对于 <title> 这种节点，也用 textContent
        el.textContent = t;
      }
    });

    // 更新按钮文本与无障碍标签
    var btn = document.getElementById('langToggle');
    if (btn) {
      if (lang === 'en') { btn.textContent = '中文'; btn.setAttribute('aria-label','Switch to Chinese'); }
      else { btn.textContent = 'EN'; btn.setAttribute('aria-label','切换为英文'); }
    }
  }

  function toggleLang(){
    lang = (lang === 'en') ? 'zh' : 'en';
    try { localStorage.setItem('lang', lang); } catch(e){}
    applyTranslations();
  }

  // 首次加载 & 绑定事件
  document.addEventListener('DOMContentLoaded', function(){
    applyTranslations();
    var btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', toggleLang);
  });
})();