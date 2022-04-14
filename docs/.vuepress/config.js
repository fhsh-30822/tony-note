module.exports = { 
  title: "tony's_note", 
  description: "Build from quickStart4Vuepress, made from CXPhoenix", 
  themeConfig: {
      logo: 'https://img.moegirl.org.cn/common/thumb/2/25/%E7%99%BD.png/420px-%E7%99%BD.png',
    },
    themeConfig: {
      // 可折叠的侧边栏
      sidebar: {
        '/note/': [
          {
            text: '建網頁前',
            collapsible: true,
            children: ['/note/', '/note/prework/'],
          },
          {
            text: '建立網頁',
            collapsible: true,
            children: ['/note/note2/', '/note/note2/note.md'],
          },
          {
            text: 'Github 及 Vercel 上架',
            collapsible: true,
            children: ['/note/note3/', '/note/note3/readme2.md'],
          },
          {
            text: 'html & css & js',
            collapsible: true,
            children: ['/note/note3-1/','/note/note3-1/readme2.md', '/note/note3-1/readme3.md','/note/note3-1/readme4.md'],
          },
          {
            text: '實作 profile card 筆記',
            collapsible: true,
            children: ['/note/note3-2/'],
          },
          {
            text: '最後的最後!',
            collapsible: true,
            children: ['/note/note4/'],
          },
        ],
        
      },
    },

}; 
