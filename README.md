![dark](https://github.com/Hell-Study/Final-Project/assets/39702832/549f0fb2-8fcc-4f2e-8fc3-7b8a73649f91)

## 목차
1. [**프로젝트 소개**](#1)
2. [**기술 스택**](#2)
3. [**주요 기능**](#3)
4. [**아키텍처**](#4)
5. [**최적화**](#5)
6. [**팀 소개**](#6)
7. [**폴더 구조**](#7)

<div id="1"></div>

## 📌 프로젝트 소개
**KIMPRO**는 김치프리미엄과 가상화폐 시세 변동을 실시간으로 제공하는 서비스입니다. 국내 거래소 **업비트**, **빗썸**과 해외 거래소 **바이낸스**의 암호화폐 시세를 비교하여, 여러 수치들을 차트, 테이블 등으로 시각화하였습니다.

'김치 프리미엄'의 'KIMP'와 '프로페셔널'의 'PRO'를 조합하여 **KIMPRO**를 저희 서비스 이름으로 정하였으며, 이름에 걸맞게 김치 프리미엄을 유저들에게 프로페셔널하게 제공하고자 합니다.

[**🔗 서비스 바로가기 Click !**](https://kimpro.site/) 👈

> **김치 프리미엄(Kimchi premium)**, 김프는 한국에서 거래되는 암호화폐의 시세가 해외 거래소 시세와 비교해 얼마나 높은가를 뜻하는 단어입니다. 해외 거래소보다 높을 경우 '김치 프리미엄이 끼어 있다.' 비슷한 정도로 낮아질 경우 '김치 프리미엄이 빠졌다.'라고 표현합니다.

<div id="2"></div>

## 📌 기술 스택

### Environment

<div style="display: flex;">
  <img src="https://img.shields.io/badge/VSC-007ACC?style=for-the-badge&logo=visual studio&logoColor=white" />
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
</div>

### FrontEnd

<div style="display: flex;">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/react-%2320232a?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
  <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white">
  <img src="https://img.shields.io/badge/Recoil-oran?style=for-the-badge&logo=Recoil" />
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/websocket-FFFF64.svg?&style=for-the-badge&logo=rsocket&logoColor=black">
    <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</div>

### BackEnd

<div style="display: flex;">
  <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
</div>

### Others

<div style="display: flex;">
  <img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jira&logoColor=white" />
  <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white" />
  <img src="https://img.shields.io/badge/figma-%23F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
    <img src="https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white" />
</div>

<div id="3"></div>

## 📌 주요 기능
| 기능                                          | 내용                           |
| :------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| 김프 차트    ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ               | 사용자가 원하는 차트를 셀렉트박스로 선택할 수 있으며, 업비트/빗썸 김치프리미엄과 바이낸스 비트코인 차트를 실시간으로 보여줍니다. |
| 코인 차트               | 코인 테이블에서 선택한 코인 정보와 시세 차트를 실시간으로 보여줍니다.            |
| 코인 테이블 | 사용자가 원하는 거래소를 셀렉트박스로 선택할 수 있으며, 업비트/빗썸 코인의 이름, 현재가, 전일대비, 고가/저가대비, 거래량, 그리고 각각 코인마다 바이낸스와의 김치프리미엄을 실시간으로 보여줍니다. 또한 각 카테고리별 오름/내림차순 정렬과 코인 검색 기능을 지원합니다.       |
| 위젯 | S&P 500, NASDAQ, KOSPI, KOSDAQ, 금 선물 시세, 전일대비를 수치 및 차트로 보여주며, 캐러셀 형태로 구현하였습니다.                  |
| 채팅 | 사이트 이용자들과 실시간 채팅을 할 수 있으며, 로컬스토리지로 부여받은 닉네임으로 소통할 수 있습니다. (로그인 x)                  |
| 다크/라이트 모드 | 토글 버튼을 통해 서비스 전체의 색상을 다크 또는 라이트로 설정할 수 있으며, 상태를 로컬스토리지로 저장합니다.                 |
| 헤더 | 환율(USD/KRW), 암호화폐/거래소 개수, 전체 시가총액, 24시간 거래량, BTC 점유율, 즉 암호화폐 시장과 관련된 전체적인 수치를 보여줍니다.                  |

<div id="4"></div>

## 📌 아키텍처
|                                   아키텍처(Architecture)                                   |
| :----------------------------------------------------------------------------------------: |
| <img src="https://github.com/KDT1-FE/Y_FE_JAVASCRIPT_PICTURE/assets/39702832/3083396c-73ea-4c93-b89d-105884885333" /> |

<div id="5"></div>

## 📌 최적화
|                                              Lighthouse BEFORE                                              |                                     Lighthouse AFTER                                      |
| :---------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/ssafy-mate/ssafy-mate_front-end/assets/39702832/d393f883-cebf-4ecb-b673-0b345ffc2df3" alt="웹 성능 최적화 전 분석 이미지" width="500px"/> | <img src="https://github.com/KDT1-FE/Y_FE_JAVASCRIPT_PICTURE/assets/39702832/3d173220-0ef0-4bff-8fc5-e82ad7563ac8" alt="웹 성능 최적화 전 분석 이미지" width="500px"/> |

|           항목           | 웹 성능 최적화 전 | 웹 성능 최적화 후 |
| :----------------------: | :---------------: | :---------------: |
|    Performance Score     |        26         |        89         |
|  First Contentful Paint  |       0.5s        |       0.5s        |
|   Total Blocking Time    |       1,670ms     |       90ms        |
|       Speed Index        |       9.5s        |       1.6s        |
| Largest Contentful Paint |       4.7s        |       1.7s        |
| Cumulative Layout Shift  |       0.227       |       0.086       |

#### ▶️ 성능 개선을 위해 어떠한 노력을 했나?
- React.memo로 불필요한 리렌더링 개선
- useCallback, useMemo로 메모이제이션
- windowing으로 첫 렌더링 시 보이는 코인만 DOM에 표시
- webpack으로 bunle size 최적화
- 렌더링 전 layout 유지하여 layout shift 최소화
- Code Splitting, Lazy Loading, Suspense
- Lottie로 애니메이션 최적화
- API 캐싱을 통해 네트워크 대역폭 절약
- throttle로 Socket 부하 분산
- react-icons 라이브러리 대신 svg 사용

> 위와 같은 작업들을 통해 **Performace Score 26점 -> 89점**으로 개선하였고, 
> **TBT, SI, LCP, CLS**에서도 유의미한 성과를 보였습니다!
<div id="6"></div>

## 📌 팀 소개

<table>
  <tr>
    <td align="center" width="150px">
      <a href="https://github.com/seungjun222" target="_blank">
        <img src="https://github.com/KDT1-FE/Y_FE_Toy1/assets/39702832/bae37c66-7793-4ab8-a4e9-d2230d9adb9c" alt="어승준 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/jseo9732" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/79249376?v=4" alt="서지수 프로필" />
      </a>
    </td>
    <td align="center" width="150px">
      <a href="https://github.com/yangjaehyuk" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/139189221?v=4" alt="박나영 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/seungjun222" target="_blank">
        어승준<br />
                팀장 (FE)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jseo9732" target="_blank">
        서지수<br />
                팀원 (FE)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/im-na0" target="_blank">
        박나영<br />
                팀원 (FE)
      </a>
    </td>
  </tr>
</table>

|  이름  |        역할        | <div align="center">개발 내용</div>                                                                                                                                                                                        |
| :----: | :-------: | :------ |
| 어승준 | FE<br />팀장 | - 기능 구현<br />&nbsp;&nbsp;&nbsp;&nbsp;- 코인 테이블<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Upbit WebSocket API 연동 및 테이블 적용<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Binance 데이터와 매칭 및 김프 계산<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 검색 기능 구현<br />&nbsp;&nbsp;&nbsp;&nbsp;- 코인 차트<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Upbit Candlestick API 연동 및 시세 차트 적용<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 선택한 코인 정보 표시<br />&nbsp;&nbsp;&nbsp;&nbsp;- 채팅<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 실시간 메시지 주고받기<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 이전 대화 가져오기<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 닉네임 랜덤 생성 및 변경<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 스크롤 맨 아래로 이동하기<br />&nbsp;&nbsp;&nbsp;&nbsp;- 헤더<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- coinlore API를 통해 global coin 정보 표시<br />- 성능 개선<br />&nbsp;&nbsp;&nbsp;&nbsp;- React.memo로 불필요한 리렌더링 개선<br />&nbsp;&nbsp;&nbsp;&nbsp;- useCallback, useMemo로 메모이제이션<br />&nbsp;&nbsp;&nbsp;&nbsp;- throttle로 Socket 부하 분산<br />&nbsp;&nbsp;&nbsp;&nbsp;- Code Splitting, Lazy Loading, Suspense<br />&nbsp;&nbsp;&nbsp;&nbsp;- Lottie로 애니메이션 최적화<br />&nbsp;&nbsp;&nbsp;&nbsp;- react-icons 라이브러리 대신 svg 사용<br />&nbsp;&nbsp;&nbsp;&nbsp;- API 캐싱을 통해 네트워크 대역폭 절약                                                                                                                                                                                                                                                        |
| 서지수 |      FE<br />팀원      | - 기능 구현<br />&nbsp;&nbsp;&nbsp;&nbsp;- 코인 테이블<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bithumb websocket api 연동 및 테이블 적용<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- coingecko api를 이용한 Bithumb 코인명, 아이콘 매칭<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 테이블 컴포넌트화 및 정렬 기능 구현<br />&nbsp;&nbsp;&nbsp;&nbsp;- 코인 차트<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bithumb candlestick api 연동 및 시세 차트 적용<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 선택한 코인 정보 표시<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 시세 차트 컴포넌트화<br />&nbsp;&nbsp;&nbsp;&nbsp;- Upbit, Bithumb api 타입 통일을 통한 컴포넌트화 개선<br />- 성능 개선<br />&nbsp;&nbsp;&nbsp;&nbsp;- windowing을 통한 첫 렌더링 시 보이는 코인만 dom에 표시<br />&nbsp;&nbsp;&nbsp;&nbsp;- React.memo를 이용한 시세 차트, 테이블 불필요한 리렌더링 개선<br />&nbsp;&nbsp;&nbsp;&nbsp;- react-icons 라이브러리 대신 svg 사용<br />                                                                                                                              |
| 박나영ㅤ |      FE<br />팀원  ㅤ    | - 기능 구현<br />&nbsp;&nbsp;&nbsp;&nbsp; - 실시간 환율 스트리밍<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - 실시간 환율을 크롤링한 정보를 클라이언트에게 Server-Sent Events를 통해 전송하는 백엔드 서버 구축<br />&nbsp;&nbsp;&nbsp;&nbsp; - 위젯<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 서브지표 api 연동 및 차트 적용<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 캐러셀 구현<br />&nbsp;&nbsp;&nbsp;&nbsp; - 김프 차트<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- tradingview 위젯 적용<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 셀렉트 박스로 심볼값 제공<br />&nbsp;&nbsp;&nbsp;&nbsp; - 다크/라이트 모드<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 디자인 시스템 구축<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Theme Provider로 공통 스타일 속성 관리구현<br />- 성능 개선<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 웹팩을 이용한 번들 사이즈 최적화<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- React.memo과 컴포넌트 분리로 불필요한 리렌더링 개선<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Suspense로 비동기처리 관리<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 렌더링 전 레이아웃 유지하여 layout shift 최소화                           |

<div id="7"></div>

## 📌 폴더 구조

<details>
<summary>폴더 구조 보기</summary>

```
📦Final-Project
 ┣ 📂src
 ┃ ┣ 📂@types
 ┃ ┃ ┣ 📜binance.types.ts
 ┃ ┃ ┣ 📜bithumb.types.ts
 ┃ ┃ ┣ 📜common.types.ts
 ┃ ┃ ┗ 📜upbit.types.ts
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂bithumb
 ┃ ┃ ┃ ┣ 📜fetchBithumbCandlestick.ts
 ┃ ┃ ┃ ┗ 📜fetchBithumbTicker.ts
 ┃ ┃ ┣ 📂coingecko
 ┃ ┃ ┃ ┗ 📜getCoingeckoData.ts
 ┃ ┃ ┣ 📂upbit
 ┃ ┃ ┃ ┣ 📜fetchUpbitDayCandle.ts
 ┃ ┃ ┃ ┗ 📜fetchUpbitMarketCode.ts
 ┃ ┃ ┣ 📜getChartWidgetData.ts
 ┃ ┃ ┣ 📜getGlobalCoinData.ts
 ┃ ┃ ┣ 📜getNickname.ts
 ┃ ┃ ┗ 📜getTickerWidgetData.ts
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📂images
 ┃ ┃ ┃ ┣ 📜Caret-Down.svg
 ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┗ 📜usdt.svg
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂ChartLeft
 ┃ ┃ ┃ ┣ 📂ChartInfo
 ┃ ┃ ┃ ┃ ┣ 📜ChartInfo.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂TradingViewWidget
 ┃ ┃ ┃ ┃ ┣ 📜TradingViewWidget.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📜ChartLeft.constant.ts
 ┃ ┃ ┃ ┣ 📜ChartLeft.styles.ts
 ┃ ┃ ┃ ┣ 📜ChartLeft.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂ChartRight
 ┃ ┃ ┃ ┣ 📂ChartCoinInfo
 ┃ ┃ ┃ ┃ ┣ 📜ChartCoinInfo.styles.ts
 ┃ ┃ ┃ ┃ ┣ 📜ChartCoinInfo.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂ChartContent
 ┃ ┃ ┃ ┃ ┣ 📜ChartContent.styles.ts
 ┃ ┃ ┃ ┃ ┣ 📜ChartContent.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📜ChartRight.styles.ts
 ┃ ┃ ┃ ┣ 📜ChartRight.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂ChatBox
 ┃ ┃ ┃ ┣ 📜ChatBox.styles.ts
 ┃ ┃ ┃ ┣ 📜ChatBox.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂ChatBtn
 ┃ ┃ ┃ ┣ 📜ChatBtn.styles.ts
 ┃ ┃ ┃ ┣ 📜ChatBtn.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂CustomSelect
 ┃ ┃ ┃ ┣ 📜CustomSelect.styles.ts
 ┃ ┃ ┃ ┣ 📜CustomSelect.tsx
 ┃ ┃ ┃ ┣ 📜CustomSelect.types.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂LoadingAnimation
 ┃ ┃ ┃ ┣ 📜LoadingAnimation.styles.ts
 ┃ ┃ ┃ ┣ 📜LoadingAnimation.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂Message
 ┃ ┃ ┃ ┣ 📜Message.styles.ts
 ┃ ┃ ┃ ┣ 📜Message.tsx
 ┃ ┃ ┃ ┣ 📜Message.types.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂SendMessage
 ┃ ┃ ┃ ┣ 📜SendMessage.styles.ts
 ┃ ┃ ┃ ┣ 📜SendMessage.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂Table
 ┃ ┃ ┃ ┣ 📂TableBox
 ┃ ┃ ┃ ┃ ┣ 📂CoinList
 ┃ ┃ ┃ ┃ ┃ ┣ 📂CoinChange
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CoinChange.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂CoinHighest
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CoinHighest.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂CoinInfo
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CoinInfo.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂CoinKimp
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CoinKimp.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂CoinLowest
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CoinLowest.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂CoinPrice
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜CoinPrice.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📂TradeValue
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TradeValue.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CoinList.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜CoinList.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜TableBox.styles.ts
 ┃ ┃ ┃ ┃ ┣ 📜TableBox.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂TableHeader
 ┃ ┃ ┃ ┃ ┣ 📂TableHeaderItem
 ┃ ┃ ┃ ┃ ┃ ┣ 📜TableHeaderItem.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜TableHeaderItem.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜TableHeader.styles.ts
 ┃ ┃ ┃ ┃ ┣ 📜TableHeader.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂TableNav
 ┃ ┃ ┃ ┃ ┣ 📜TableNav.styles.ts
 ┃ ┃ ┃ ┃ ┣ 📜TableNav.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📜Table.constant.ts
 ┃ ┃ ┃ ┣ 📜Table.styles.ts
 ┃ ┃ ┃ ┣ 📜Table.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┣ 📂Widget
 ┃ ┃ ┃ ┣ 📂Carousel
 ┃ ┃ ┃ ┃ ┣ 📜Carousel.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂ChartWidget
 ┃ ┃ ┃ ┃ ┣ 📜ChartWidget.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📂TickerWidget
 ┃ ┃ ┃ ┃ ┣ 📜TickerWidget.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┃ ┣ 📜Widget.constants.ts
 ┃ ┃ ┃ ┣ 📜Widget.styles.ts
 ┃ ┃ ┃ ┣ 📜Widget.tsx
 ┃ ┃ ┃ ┣ 📜Widget.types.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📂common
 ┃ ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┃ ┣ 📜Footer.styles.ts
 ┃ ┃ ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┗ 📂Header
 ┃ ┃ ┃ ┃ ┣ 📂ExchangeRateDisplay
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ExchangeRateDisplay.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ExchangeRateDisplay.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📂GlobalCoinLabel
 ┃ ┃ ┃ ┃ ┃ ┣ 📜GlobalCoinLabel.styles.ts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜GlobalCoinLabel.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┃ ┣ 📜Header.styles.ts
 ┃ ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┃ ┣ 📜Header.types.ts
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂firebase
 ┃ ┃ ┣ 📜config.ts
 ┃ ┃ ┣ 📜createMessages.ts
 ┃ ┃ ┣ 📜fetchMessages.ts
 ┃ ┃ ┣ 📜messageQuery.ts
 ┃ ┃ ┗ 📜orderSnapshotMessages.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📂binance
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┣ 📜updateSocketDataWithBinance.ts
 ┃ ┃ ┃ ┣ 📜useBinanceTicker.ts
 ┃ ┃ ┃ ┗ 📜useFetchExchangeRate.ts
 ┃ ┃ ┣ 📂upbit
 ┃ ┃ ┃ ┗ 📜useUpbitTicker.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜useChartTickers.ts
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ 📜useWidgetTickers.ts
 ┃ ┣ 📂pages
 ┃ ┃ ┗ 📂home
 ┃ ┃ ┃ ┣ 📜Home.page.tsx
 ┃ ┃ ┃ ┣ 📜Home.styles.ts
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂recoil
 ┃ ┃ ┗ 📂atoms
 ┃ ┃ ┃ ┣ 📜commonAtoms.ts
 ┃ ┃ ┃ ┣ ...
 ┃ ┃ ┃ ┗ 📜themeAtoms.ts
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜globalStyle.ts
 ┃ ┃ ┗ 📜theme.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜convertDate.ts
 ┃ ┃ ┣ ...
 ┃ ┃ ┗ 📜removeUSDT.ts
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜react-app-env.d.ts
 ┃ ┗ 📜reportWebVitals.ts
 ┣ 📜.eslintrc
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜README.md
 ┣ 📜config-overrides.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json

```
</details>

### 📌 개발 기간 :  `4주 - 23.10.09 ~ 23.11.03`

