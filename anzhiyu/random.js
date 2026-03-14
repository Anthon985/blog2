var posts=["2026/03/13/个人博客部署-静态网站-Hexo-Github-pages/","2026/03/12/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };