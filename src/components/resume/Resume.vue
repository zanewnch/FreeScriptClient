<script setup lang="ts">
// 創騰策略  實習
</script>
<template>
  <div class="a4 md:flex md:full md:h-screen md:justify-center md:items-start">
    <div class="md:flex md:h-full">
      <!-- left -->
      <div
        class="left-container md:w-1/5 md:h-full md:flex md:flex-col md:justify-start md:items-center"
      >
        <div class="md:flex md:justify-center md:items-center md:mt-8">
          <img
            src="../../../public/resume-profile.jpg"
            alt="resume-profile"
            class="resume-profile"
          />
        </div>
        <div class="md:mt-4">
          <div class="chinese-name">王君豪</div>
          <div class="english-name md:mt-1">Zane Wang</div>
        </div>

        <div class="blank md:mt-2 md:w-4/5"></div>

        <div class="md:mt-2 md:flex md:justify-center md:items-center md:flex-col md:w-4/5">
          <ul>
            <li class="text title chinese-font">學歷</li>
            <li class="text content chinese-font">學士:</li>
            <li class="text content chinese-font">國立中山大學 企業管理學系</li>
            <li class="text content chinese-font">2019/09~2023/06</li>
          </ul>

          <ul>
            <li class="text content chinese-font">學士:</li>
            <li class="text content chinese-font">國立中山大學 劇場藝術學系</li>
            <li class="text content chinese-font">2018/09~2019/06</li>
          </ul>

          <ul>
            <li class="text content chinese-font">學士:</li>
            <li class="text content chinese-font">私立輔仁大學 圖書資訊學系</li>
            <li class="text content chinese-font">2017/09~2018/06</li>
          </ul>
        </div>

        <!-- 聯絡資訊 -->
        <div class="md:mt-2 md:flex md:justify-center md:items-center md:flex-col md:w-4/5">
          <ul class="md:w-full">
            <li class="text title chinese-font">聯絡資訊</li>
            <li class="text content chinese-font md:mt-2"><strong>E-mail :</strong></li>
            <li class="text content chinese-font md:mt-1">zanewnch@gmail.com</li>
            <li class="text content chinese-font md:mt-2"><strong>gitHub :</strong></li>
            <li class="md:mt-1">
              <a
                href="https://github.com/zanewnch"
                class="text content chinese-font"
                style="white-space: normal; word-wrap: break-word; word-break: break-all"
              >
                https://github.com/zanewnch
              </a>
            </li>
            <li class="md:mt-1">
              <a
                href="https://github.com/zanewnch/FreeScriptClient"
                class="text content chinese-font"
                style="white-space: normal; word-wrap: break-word; word-break: break-all"
              >
                前端作品連結
              </a>
            </li>
            <li class="md:mt-1">
              <a
                href="https://github.com/zanewnch/FreeScriptServer"
                class="text content chinese-font"
                style="white-space: normal; word-wrap: break-word; word-break: break-all"
              >
                後端作品連結
              </a>
            </li>
          </ul>
        </div>
        <!-- 自我介紹 -->
        <div class="md:mt-2 md:flex md:justify-center md:items-center md:flex-col md:w-4/5">
          <ul class="md:w-full">
            <li class="text title chinese-font">自我介紹</li>
            <li
              class="text content chinese-font md:mt-2"
              style="word-wrap: break-word; word-break: break-all"
            >
              我是畢業於國立中山大學企業管理學系的王君豪
              Zane，我從應屆考上輔仁後，透過重考至中山戲劇系，再轉系至企管系的過程中，表現出我是一個為了達成目標可以努力不懈，也具備跨領域的學習能力的人。<br />在企管系期間，除了參與多次商業競賽之外，自從接觸過程式設計之後，就透過自學的方式學習過R,python,javascript,typescript,java等語言，表現出我對於程式語言的熱忱與足夠的自學能力。
            </li>
          </ul>
        </div>
      </div>

      <!-- right -->
      <div class="right-container md:w-4/5 md:flex md:flex-col">
        <!-- experience -->
        <div class="md:mt-2 md:flex md:justify-center md:items-center ">
          <div class="md:w-11/12">
            <div class="md:flex md:justify-left md:w-11/12">
              <div class="text chinese-font md:w-full" style="font-size: 24px; color: black">
                相關技能
              </div>
            </div>
            <hr class="md:mt-2" style="border-top: 1px solid black" />
          </div>
        </div>
        <!-- experience content -->
        <div class="md:w-full md:h-auto md:flex md:justify-center md:items-center md:mt-2" style="">
          <div class="md:w-11/12 md:flex md:justify-center md:items-start">
            <!-- row -->
            <div class="md:w-1/3">
              <div class="chinese-font md:text-center" style="font-size: 16px; line-height: 24px">
                Front-end
              </div>

              <div class="md:w-full md:p-4">
                <div class="chinese-font" style="font-size: 12px; font-weight: 600">
                  <ul class="">
                    <li
                      class="chinese-font"
                      style="font-weight: 600; font-size: 12px; line-height: 20px"
                    >
                      <strong>基本技能:</strong> 熟悉 HTML、CSS、JavaScript，主要使用 TypeScript
                      進行開發。
                    </li>
                    <li
                      class="chinese-font"
                      style="font-weight: 600; font-size: 12px; line-height: 20px"
                    >
                      <strong>模板引擎:</strong> 使用過 PUG, EJS。
                    </li>
                    <li
                      class="chinese-font"
                      style="font-weight: 600; font-size: 12px; line-height: 20px"
                    >
                      <strong>CSS 預處理器:</strong> 使用過 SCSS。
                    </li>

                    <li
                      class="chinese-font"
                      style="font-weight: 600; font-size: 12px; line-height: 20px"
                    >
                      <strong>UI 框架與庫:</strong>
                      <ul>
                        <li
                          class="chinese-font"
                          style="font-weight: 600; font-size: 12px; line-height: 20px"
                        >
                          熟悉使用 Tailwind CSS, 使用過 Bootstrap 和 Vue Element Plus。
                        </li>
                      </ul>
                    </li>
                    <li
                      class="chinese-font"
                      style="font-weight: 600; font-size: 12px; line-height: 20px"
                    >
                      <strong>前端框架:</strong>
                      <ul>
                        <li
                          class="chinese-font"
                          style="font-weight: 600; font-size: 12px; line-height: 20px"
                        >
                          主要使用 Vue 完成 side-project。
                        </li>
                        <li
                          class="chinese-font"
                          style="font-weight: 600; font-size: 12px; line-height: 20px"
                        >
                          基本了解 React and Next.js，並接觸過 Redux 和 State Hook 的基礎概念。
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- row -->
            <div class="md:w-1/3 md:h-full md:flex md:flex-col md:items-start">
              <div
                class="chinese-font md:text-center md:w-full"
                style="font-size: 16px; line-height: 24px"
              >
                Back-end
              </div>

              <div class="md:w-full md:p-4">
                <div class="chinese-font" style="font-size: 12px">
                  <ul class="" style="font-weight: 600">
                    <li
                      class="chinese-font"
                      style="font-weight: 600; font-size: 12px; line-height: 20px"
                    >
                      <strong>基本技能:</strong>
                      熟悉python, javascript, typescript,
                      java等語法的基礎概念，主要使用Typescript進行開發。
                    </li>
                    <li
                      class="chinese-font"
                      style="font-weight: 600; font-size: 12px; line-height: 20px"
                    >
                      <strong>資料庫:</strong> 使用過 MySQL 和 MongoDB，熟悉 SQL 和 NoSQL
                      的資料格式。
                    </li>
                    <li
                      class="chinese-font"
                      style="font-weight: 600; font-size: 12px; line-height: 20px"
                    >
                      <strong>後端框架:</strong>
                      <ul>
                        <li
                          class="chinese-font"
                          style="font-weight: 600; font-size: 12px; line-height: 20px"
                        >
                          Python-Django
                        </li>
                        <li
                          class="chinese-font"
                          style="font-weight: 600; font-size: 12px; line-height: 20px"
                        >
                          Java-Spring Boot with MyBatis and JWT
                        </li>
                        <li
                          class="chinese-font"
                          style="font-weight: 600; font-size: 12px; line-height: 20px"
                        >
                          主要使用 TypeScript-Express.js with MVC and OOP model
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- row -->
            <div class="md:w-1/3 md:h-full md:flex md:flex-col md:items-start">
              <div
                class="chinese-font md:text-center md:w-full"
                style="font-size: 16px; line-height: 24px"
              >
                Others
              </div>
              <div class="md:w-full md:p-4">
                <div class="chinese-font" style="font-size: 12px; font-weight: 600">
                  <ul class="">
                    <li
                      class="chinese-font"
                      style="font-weight: 600; font-size: 12px; line-height: 20px"
                    >
                      <strong>R: </strong>使用過 R 進行大數據分析專題，<br />使用過的工具包括 dplyr
                      和 ggplot2。
                    </li>
                    <li
                      class="chinese-font"
                      style="font-weight: 600; font-size: 12px; line-height: 20px"
                    >
                      <strong>python: </strong>使用過 Python 進行爬蟲和大數據分析專題，<br />使用過的工具包括
                      Selenium<br />BeautifulSoup<br />Pandas <br />和 Scikit-learn。
                    </li>
                    <li
                      class="chinese-font"
                      style="font-weight: 600; font-size: 12px; line-height: 20px"
                    >
                      <strong>TOEIC: </strong>805分
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- experience -->
        <div class="md:flex md:justify-center md:items-center " style="">
          <div class="md:w-11/12">
            <div class="md:flex md:justify-left md:w-11/12">
              <div class="text chinese-font md:w-full  " style="font-size: 24px; color: black">
                學習經歷
              </div>
            </div>

            <hr class="md:mt-2" style="border-top: 1px solid black" />
          </div>
        </div>
        <!-- experience content -->
        <div
          class="md:w-full md:h-auto md:flex md:justify-center md:flex-col md:items-center md:mt-2"
        >
          <!-- row -->
          <div class="md:w-11/12">
            <!--  line travel, shopee 商業競賽 -->
            <div class="chinese-font" style="font-size: 16px; line-height: 24px">
              智在家鄉, Line Travel, Shopee Ultimate case challenge 商業競賽
            </div>
            <div
              class="chinese-font md:mt-1"
              style="font-size: 12px; font-weight: 600; line-height: 20px"
            >
              內容:產業分析、商業模式設計、使用者體驗設計、行銷策略設計

              <br />

              成就：智在家鄉獲得潛力獎，shopee商業競賽獲得優等
              <br />
              收穫：(1) 培養基礎提案能力 (2) 跨領域團隊協作 (3) 實際瞭解商業模式與情境分析
            </div>
          </div>

          <!-- row -->
          <div class="md:w-11/12 md:mt-2">
            <div class="chinese-font" style="font-size: 16px; line-height: 24px">
              畢業專題 - Amazon 全球開店 商家媒合
            </div>
            <div
              class="chinese-font md:mt-1"
              style="font-size: 12px; font-weight: 600; line-height: 20px"
            >
              內容:消費者行為分析、市場分析、競品分析、產品特色與形象塑造、行銷策略設計、品牌形象塑造
              <br />

              成就：此提案被業主採納，並提供3000元獎金<br />
              收穫：(1) 具體為一系列產品做行銷規劃 (2) 瞭解跨境電商的domain knowledge (3) 瞭解Data
              Driven 的實際概念與流程，以及量化資訊的操作與應用
              (4)瞭解Amazon平台的競爭優勢，以及追求極致UI,UX的理念
            </div>
          </div>
          <!-- row -->
          <div class="md:w-11/12 md:mt-2">
            <div class="chinese-font" style="font-size: 16px; line-height: 24px">
              資管碩 R程式語言、機率統計與商業實務 - 期末報告 優等
            </div>
            <div
              class="chinese-font md:mt-1"
              style="font-size: 12px; font-weight: 600; line-height: 20px"
            >
              內容：針對資料集設計基礎機器學習進行RFM顧客管理系統
              <br />
              成就：期末報告獲選為優等
              <br />
              收穫：(1) 瞭解如何透過數據來進行商業決策 (2) 更為深入的商業情境分析邏輯 (3)
              瞭解數據分析與行銷策劃如何進行結合
            </div>
          </div>
          <!-- row -->
          <div class="md:w-11/12 md:mt-2">
            <div class="chinese-font" style="font-size: 16px; line-height: 24px">
              創騰策略顧問股份有限公司 - 實習
            </div>
            <div
              class="chinese-font md:mt-1"
              style="font-size: 12px; font-weight: 600; line-height: 20px"
            >
              入職時間: 2023/06~2023/12
              <br />
              擔任職位：策略顧問 - 實習
              <br />
              內容：
              產出產業與市場分析報告，競品分析，可行性分析，對外提供綜合性的商業營運建議，並協助相關產業的政府補助申請。
              <br />
              收穫：(1) 產出完整的商業企劃提案 (2) 與客戶meeting協商對洽，了解客戶需求
            </div>
          </div>

          <!-- row -->
          <div class="md:w-11/12 md:mt-2">
            <div class="chinese-font" style="font-size: 16px; line-height: 24px">
              Side-project: FreeScript
            </div>
            <div
              class="chinese-font md:mt-1"
              style="font-size: 12px; font-weight: 600; line-height: 20px;color:black;"
            >
            專案名稱: FreeScript <br>Github link:https://github.com/zanewnch/FreeScriptServer  <br>
            <strong>專案簡介:</strong> 以medium網站為靈感而自行design的side project<br>
            技術內容: <br>
            <strong>Front-end:</strong> 主要使用Vue3 with pinia store and ts, UI相關使用 tailwind and vue-element-plus，RWD-design。<br>
            <strong>Back-end:</strong> 主要使用express.js with ts, 並使用類似MVC and OOP model進行設計；資料庫同時使用MYSQL and MongoDB。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200..900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

@media (min-width: 768px) {
  .ul-point {
    list-style-type: disc; /* 確保使用黑色圓點 */
  }
  .a4 {
    width: 794px; /* 210mm */
    height: 1123px; /* 297mm */

    margin: 0 auto; /* center the page */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* optional: add a shadow for a paper-like effect */
  }

  .chinese-font {
    font-family: 'Noto Serif TC', serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
  }
  .resume-profile {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
  }

  .chinese-name {
    font-size: 24px;
    color: #ffffff;
    text-align: center;

    font-family: 'Noto Serif TC', serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
  }

  .english-font {
    font-family: 'Playfair Display', serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }
  .english-name {
    font-size: 16px;
    color: #ffffff;
    text-align: center;

    font-family: 'Playfair Display', serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }

  .left-container {
    background-color: #051f39;
  }

  .blank {
    background-color: #ffffff;
    height: 1px;
  }

  .text {
    color: #ffffff;
  }

  .title {
    font-size: 20px;
    font-weight: 900;
  }

  .content {
    font-size: 12px;
    font-weight: 400;
  }
}
</style>
