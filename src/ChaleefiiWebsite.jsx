import React, { useState, useEffect } from 'react';

const ChaleefiiWebsite = () => {
  const [nftData, setNftData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 模拟NFT数据获取
  useEffect(() => {
    // 这里后续会连接OpenSea API
    const mockData = [
      {
        name: "chaleefi.eth",
        image: "/api/placeholder/300/300",
        collection: "ENS: Ethereum Name Service",
        price: "0.10 ETH"
      }
    ];
    setTimeout(() => {
      setNftData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              chaleefi.eth
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">首页</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">关于</a>
              <a href="#nfts" className="hover:text-blue-400 transition-colors">NFT收藏</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">项目</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">联系</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 relative overflow-hidden">
        {/* 动态背景元素 */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-purple-400/30 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-pink-400/30 rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          {/* 主头像区域 */}
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-1 mx-auto animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center relative overflow-hidden">
                {/* 日式面具风格头像 */}
                <div className="text-6xl relative z-10">🎭</div>
                {/* 霓虹光效 */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"></div>
              </div>
            </div>
            {/* 在线状态指示器 */}
            <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-green-400 to-cyan-400 w-12 h-12 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-green-400/50">
              <span className="text-lg">⚡</span>
            </div>
            {/* ENS验证徽章 */}
            <div className="absolute -top-2 -left-2 bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg shadow-blue-400/50">
              <span className="text-sm">✓</span>
            </div>
          </div>
          
          {/* 主标题 */}
          <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            chaleefi.eth
          </h1>
          
          {/* 副标题 */}
          <div className="text-2xl text-gray-300 mb-4 font-light">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Web3 Pioneer</span> | 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> NFT Curator</span> | 
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"> Digital Nomad</span>
          </div>
          
          {/* 个人简介 */}
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            探索去中心化世界的无限可能，发现下一个改变世界的Web3项目。
            在数字艺术的海洋中寻找珍宝，用代码和创意构建未来。
          </p>
          
          {/* 行动按钮 */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
              <span className="flex items-center justify-center gap-2">
                探索我的世界 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <button className="group border-2 border-cyan-400 hover:bg-cyan-400/10 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <span className="flex items-center justify-center gap-2">
                🔗 连接钱包
                <span className="group-hover:animate-spin">⚡</span>
              </span>
            </button>
          </div>

          {/* 增强版统计数据 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                15
              </div>
              <div className="text-gray-400 font-medium">NFT 收藏</div>
              <div className="text-xs text-blue-400 mt-1">+3 本月</div>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                8
              </div>
              <div className="text-gray-400 font-medium">Web3 项目</div>
              <div className="text-xs text-purple-400 mt-1">活跃参与</div>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-red-500/10 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                3.2K
              </div>
              <div className="text-gray-400 font-medium">社区关注</div>
              <div className="text-xs text-pink-400 mt-1">持续增长</div>
            </div>
            <div className="group text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                1
              </div>
              <div className="text-gray-400 font-medium">ENS 域名</div>
              <div className="text-xs text-green-400 mt-1">已认证</div>
            </div>
          </div>

          {/* 滚动提示 */}
          <div className="mt-16 animate-bounce">
            <div className="text-gray-500 text-sm mb-2">向下探索更多</div>
            <div className="text-2xl">↓</div>
          </div>
        </div>
      </section>

      {/* 简化版的其他sections */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            关于我
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            作为Web3领域的早期探索者，我致力于发现和参与最具创新性的去中心化项目。
            从NFT收藏到DeFi协议，从社区建设到技术开发，我在Web3生态系统中留下了自己的足迹。
          </p>
        </div>
      </section>

      <section id="nfts" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            NFT 收藏
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            精心策划的数字艺术收藏，每一件都代表着Web3文化的独特片段。
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-white/10 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎨</span>
                </div>
                <h3 className="text-lg font-bold mb-2">收藏品 #{item}</h3>
                <p className="text-gray-400 text-sm">独特的数字艺术作品</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            项目展示
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-400/20">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-xl font-bold mb-4">OpenSea 活跃交易者</h3>
              <p className="text-gray-300">在全球最大的NFT市场上积极参与交易和收藏。</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border border-green-400/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">ENS 早期采用者</h3>
              <p className="text-gray-300">拥有chaleefi.eth域名，建立Web3数字身份。</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            联系我
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-400/20">
              <div className="text-3xl mb-4">🐦</div>
              <h3 className="text-lg font-bold mb-2">Twitter</h3>
              <p className="text-gray-400">@chaleefi</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-400/20">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-bold mb-2">Discord</h3>
              <p className="text-gray-400">chaleefi#1337</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-2xl p-6 border border-green-400/20">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2">ENS</h3>
              <p className="text-gray-400">chaleefi.eth</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-400/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">发送 ETH 或 NFT</h3>
            <div className="bg-gray-800/80 rounded-lg p-4 font-mono text-center border border-cyan-400/30">
              <div className="text-xl font-bold text-white">chaleefi.eth</div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              支持所有主流代币和NFT转账
            </p>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            chaleefi.eth
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 chaleefi.eth. 运行在IPFS上的去中心化网站
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>网站状态: 在线</span>
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
              <span>🌐</span>
              <span>IPFS托管</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChaleefiiWebsite;