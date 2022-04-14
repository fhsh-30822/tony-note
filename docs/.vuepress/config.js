module.exports = { 
  title: "Elenora_.z", 
  description: "Build from quickStart4Vuepress, made from CXPhoenix", 
  themeConfig: {
      logo: 'https://imglf6.lf127.net/img/SGhwMFNNWmJHaGJhWVkrcld5OW9lM1BhZUU4cEp5Qlk5L3FMd0JveXo2Z1RIVnpIQ2UvdFl3PT0.gif?imageView&thumbnail=1000x0&tostatic=0',
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
