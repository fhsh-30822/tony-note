# 上架

## 從本地端上傳GitHub

沒有帳戶的要先註冊 https://github.com/ (已經註冊的請無視我ww

點擊 Creat repository 創建，或是找到 Your repositories 按右上角的 ＋

完成 Name 和 Description 輸入後，回到 Code 介面

接著新增終端機 > git init > git add . > git commit -m "輸入做的事情(like:init project" 

做到這邊如果沒有輸入過名子和信箱的話，要先聽從指令輸入一下

然後再輸入 git commit -m "輸入做的事情(like:init project" 就可以

再來輸入 git remote add origin 網址(就是剛剛創建的，要是HTTPS

就差幾步了 git branch -m main > git status > git push(如果是第一次，要遵照規則複製貼上他給的指令

緊接著是驗證，然後就完成上船遠端的動作了!!

## 正式上架Vercel

首先要進入 Vercel 並連接 GitHub

按下右上角的 ＋ New Project ，選擇之前上傳到 GitHub 的資料夾

修改 PROJECT NAME 

點開 Build and Output Settings

在 BUILD COMMAND 的地方輸入 npm run build:docs 並開啟右邊按鈕

在 OUTPUT DIRECTORY 的地方輸入 docs/.vuepress/dist/ 並開啟右邊按鈕

關掉 INSTALL COMMAND 右邊的按鈕

接著按下 Deploy 等待……

出現 Congratulations! 就代表上傳成功啦!!!✧*｡٩(ˊᗜˋ*)و✧*｡




