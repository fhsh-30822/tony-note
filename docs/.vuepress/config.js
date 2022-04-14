module.exports = { 
  title: "tony's_note", 
  description: "Build from quickStart4Vuepress, made from CXPhoenix", 
  themeConfig: {
      logo: 'https://img.moegirl.org.cn/common/thumb/2/25/%E7%99%BD.png/420px-%E7%99%BD.png',
    },
    themeConfig: {
      // 可折叠的侧边栏
      sidebar: {
        '/note/note1/': [
          {
            text: 'Github 及 Vercel 筆記',
            collapsible: true,
            children: ['/note/note1/', '/note/note1/readme2.md/'],
          },
          {
            text: 'html 及 css 及 js 筆記',
            collapsible: true,
            children: ['/note/note2/', '/note/note2/readme2.md/','/note/note2/readme3.md/','/note/note2/readme4.md/'],
          },
        ],
        
      },
    },

}; 
