#!/bin/bash

echo "🚀 开始多平台部署 chaleefi.eth 网站..."

# 构建项目
echo "📦 构建项目..."
npm run build

# 部署到 Vercel
echo "🔵 部署到 Vercel..."
vercel --prod --confirm

# 部署到 Netlify
echo "🟢 部署到 Netlify..."
netlify deploy --prod --dir=dist

# 部署到 GitHub Pages
echo "⚫ 推送到 GitHub Pages..."
git add .
git commit -m "📦 Deploy to multiple platforms"
git push origin main

# 部署到 IPFS via Fleek
echo "🌐 部署到 IPFS..."
echo "请访问 https://fleek.co 手动触发部署"

# 部署到 Cloudflare Pages
echo "🧡 部署到 Cloudflare Pages..."
wrangler pages publish dist

echo "✅ 多平台部署完成！"
echo ""
echo "🌐 访问地址："
echo "• Vercel: https://chaleefi-website.vercel.app"
echo "• Netlify: https://chaleefi-website.netlify.app" 
echo "• GitHub Pages: https://prettyking.github.io/chaleefi-website"
echo "• ENS: https://chaleefi.eth"
echo "• IPFS: https://chaleefi.eth.link"