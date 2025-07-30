import React, { useState, useEffect } from 'react';

const ChaleefiiWebsite = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const skills = [
    { name: 'React', level: 95, category: '前端框架' },
    { name: 'Vue', level: 90, category: '前端框架' },
    { name: 'TypeScript', level: 90, category: '编程语言' },
    { name: 'Next.js', level: 85, category: '前端框架' },
    { name: 'Web3/Ethers', level: 85, category: 'Web3' },
    { name: 'Node.js', level: 80, category: '后端' },
    { name: 'Tailwind CSS', level: 90, category: '样式' },
    { name: 'AWS/阿里云', level: 75, category: '云服务' }
  ];

  const experiences = [
    {
      company: 'Aladdin AI Inc.',
      position: 'Web3开发工程师',
      period: '2024.06 - 至今',
      type: '远程',
      description: '参与Aladdin区块链项目的核心架构设计与开发，负责智能代理(Agent)的雇佣管理机制、任务(Job)创建与智能分配系统，以及基于智能合约的质押功能模块。',
      tech: ['Next.js', 'TypeScript', 'Ethers.js', 'Wagmi', 'TypeChain', 'NestJS']
    },
    {
      company: '广州大事件科技有限公司',
      position: 'Web前端开发',
      period: '2021.09 - 2024.03',
      type: '云事业部',
      description: '负责公司前端业务开发，深度参与内部OA系统开发，具备全栈开发能力。主导制定前端开发规范，参与微服务项目基础架构搭建。',
      tech: ['Vue3', 'React', 'QiankunJS', 'TaroJS', 'ElementUI', 'MidwayJS']
    },
    {
      company: '恩鼎专科门诊',
      position: 'Web前端开发',
      period: '2020.10 - 2021.08',
      type: '网络部',
      description: '主导开发公司挂号系统的H5页面和微信小程序，负责前端业务逻辑实现与技术框架搭建。',
      tech: ['Vue', '微信小程序', 'H5开发']
    },
    {
      company: '广州利他网络科技有限公司',
      position: 'Web前端开发',
      period: '2018.03 - 2020.09',
      type: '技术部',
      description: '主导开发K12教育平台的课程管理系统，负责设计并实现H5和微信小程序端的课程播放、用户评论等核心功能模块。',
      tech: ['Vue', '微信小程序', 'H5开发', '直播SDK集成']
    }
  ];

  const projects = [
    {
      name: 'Aladdin Web3平台',
      description: '综合性DeFi平台，集成数字资产管理、智能代理服务和DAO治理',
      tech: ['Next.js', 'TypeScript', 'Ethers.js', 'Wagmi', 'TailwindCSS', 'NestJS'],
      highlights: ['多钱包管理系统', '智能合约交互', '数据可视化界面'],
      status: '进行中'
    },
    {
      name: '贪吃商城',
      description: '覆盖全国本地生活服务的综合性平台，商家优惠券和活动管理系统',
      tech: ['TaroJS', 'Vue3', 'QiankunJS', 'ElementUI', 'Webpack'],
      highlights: ['微前端架构', '多端统一开发', '性能优化'],
      status: '已完成'
    },
    {
      name: '大事件OA小助手',
      description: '内部OA管理系统，实现多部门协同办公的数字化转型',
      tech: ['QiankunJS', 'Vue', 'React', 'MidwayJS', 'Kubernetes'],
      highlights: ['微服务架构', 'CI/CD自动化', '容器化部署'],
      status: '已完成'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              @chalee_x
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">首页</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">关于</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">技能</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">经历</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">项目</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">联系</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                正在找工作
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-cyan-400/30 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-green-400/30 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl">👨‍💻</div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full"></div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-green-400 to-cyan-400 w-12 h-12 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-green-400/50">
              <span className="text-lg">⚡</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            @chalee_x
          </h1>
          
          <div className="text-2xl text-gray-300 mb-4 font-light">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">前端开发</span> | 
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent"> Web3</span> | 
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> 全栈开发</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            6年前端开发经验，专注于现代化Web应用开发和Web3技术。
            熟悉React、Vue生态，具备全栈开发能力，致力于构建高质量的用户体验。
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a href="#contact" className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
              <span className="flex items-center justify-center gap-2">
                联系我 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a href="#projects" className="group border-2 border-cyan-400 hover:bg-cyan-400/10 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              查看项目
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                6+
              </div>
              <div className="text-gray-400 font-medium">年开发经验</div>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-green-500/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                10+
              </div>
              <div className="text-gray-400 font-medium">完成项目</div>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                4
              </div>
              <div className="text-gray-400 font-medium">公司经历</div>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                Web3
              </div>
              <div className="text-gray-400 font-medium">技术专长</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            关于我
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">专业背景</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                拥有6年前端开发经验，从传统Web开发到现代化Web3应用，见证并参与了前端技术的快速发展。
                在多家公司担任核心开发角色，具备从需求分析到产品上线的全流程开发经验。
              </p>
              <p className="text-gray-300 leading-relaxed">
                目前专注于Web3技术栈，参与区块链项目开发，熟悉智能合约交互、DeFi协议集成等前沿技术。
                同时具备全栈开发能力，能够独立完成从前端到后端的完整项目开发。
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">技术理念</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▶</span>
                  <div>
                    <span className="text-white font-semibold">工程化优先：</span>
                    <span className="text-gray-300">推动团队工程化落地，提升开发效率和代码质量</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▶</span>
                  <div>
                    <span className="text-white font-semibold">架构思考：</span>
                    <span className="text-gray-300">结合函数式编程与SOLID原则进行系统设计</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▶</span>
                  <div>
                    <span className="text-white font-semibold">性能优化：</span>
                    <span className="text-gray-300">关注用户体验，持续优化应用性能和加载速度</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">▶</span>
                  <div>
                    <span className="text-white font-semibold">技术创新：</span>
                    <span className="text-gray-300">探索AI提效工具，实现开发流程自动化</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            技术栈
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-6 border border-gray-600/30">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className="text-cyan-400 text-sm">{skill.category}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-400 mt-1">{skill.level}%</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-400/20">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-xl font-bold mb-2 text-blue-400">前端框架</h3>
                <p className="text-gray-300 text-sm">React、Vue、Svelte、Solid</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-xl border border-cyan-400/20">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-xl font-bold mb-2 text-cyan-400">Web3技术</h3>
                <p className="text-gray-300 text-sm">Ethers、Wagmi、TypeChain、Solidity</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl border border-green-400/20">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-2 text-green-400">云服务</h3>
                <p className="text-gray-300 text-sm">AWS、阿里云、Vercel、Cloudflare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            工作经历
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-6 relative z-10">
                    {index < experiences.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-cyan-500 to-green-500"></div>
                    )}
                  </div>
                  <div className="flex-grow bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl p-6 border border-gray-600/30">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <p className="text-cyan-400">{exp.company} · {exp.type}</p>
                      </div>
                      <span className="text-green-400 text-sm bg-green-500/10 px-3 py-1 rounded-full border border-green-500/30 mt-2 md:mt-0 self-start">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            项目展示
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-xl overflow-hidden border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      project.status === '进行中' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">核心亮点</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-gray-400 text-sm flex items-center gap-2">
                          <span className="text-green-400">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            联系我
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            我正在寻找新的职业机会，如果你有合适的前端开发、Web3或全栈开发职位，欢迎联系我！
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-400/20">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-lg font-bold mb-2">邮箱</h3>
              <p className="text-gray-400">chaleeinhongkong@gmail.com</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-2xl p-6 border border-cyan-400/20">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-lg font-bold mb-2">位置</h3>
              <p className="text-gray-400">深圳</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-400/20">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-lg font-bold mb-2">求职意向</h3>
              <p className="text-gray-400">前端开发、Web3、全栈开发</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-400/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">教育背景</h3>
            <div className="space-y-4">
              <div className="text-left">
                <div className="font-semibold text-white">华南农业大学</div>
                <div className="text-cyan-400">机械设计制造及其自动化 本科</div>
                <div className="text-gray-400 text-sm">2019.03 - 2021.12</div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">华南农业大学</div>
                <div className="text-cyan-400">计算机网络技术 大专</div>
                <div className="text-gray-400 text-sm">2016.03 - 2018.12</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            @chalee_x
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 chaleeinhongkong@gmail.com. 专业前端开发工程师
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>开放工作机会</span>
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
              <span>🚀</span>
              <span>React + Web3 专家</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChaleefiiWebsite;