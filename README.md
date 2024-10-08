# 포켓몬 도감
개인 프로젝트로 진행한 포켓몬 도감입니다.
- 제작기간: 240822 ~ 240826
- 개뱔환경: JavaScript, react-router-dom, redux-toolkit, redux-persist, styled-components, react-tostify
- 개요
  - 포켓몬 목록에서 나만의 포켓몬을 선택할 수 있습니다.
  - 선택한 포켓몬은 로컬스토리지에 저장되어 재접속시에도 유지됩니다. (redux persist 사용)
  - 포켓몬 카드를 클릭하면 상세페이지로 이동해 해당 포켓몬의 정보를 확인할 수 있습니다.
 

# 주요 기능
1. 페이지 라우팅 구현
   ![랜딩페이지에서-이동](https://github.com/user-attachments/assets/4f0193f7-8c14-4d0f-9ce8-c2d03ed16922)

react-router-dom을 이용해 라우팅을 구현했습니다.

<br/>
<br/>

2. 대시보드에 포켓몬 추가 (중복 추가 방지)
   ![포켓몬-추가_-중복-추가-방지_out](https://github.com/user-attachments/assets/27eecd21-4a2b-4325-8a97-844712d216d8)

추가 버튼으로 나만의 포켓몬을 추가할 수 있습니다.
같은 포켓몬을 선택할 경우 react-tostify를 이용해 toast를 띄웁니다.

<br/>
<br/>

3. 최대 선택 수 제한
![최대-선택-수-제한_out](https://github.com/user-attachments/assets/35deee43-e424-4ed6-b5f3-0eb52909eb49)

만약 슬롯의 최대 개수를 초과하는 경우 마찬가지로 사용자에게 toast 알림을 띄웁니다.

<br/>
<br/>

4. 상세페이지

![aspose_video_133691666280748081_out](https://github.com/user-attachments/assets/d561419c-fe43-4c81-8722-092f7020ec41)

카드를 클릭하는 경우 상세페이지로 이동하며, 상세페이지에서도 포켓몬 추가/삭제가 가능합니다.

<br/>
<br/>

5. FadeIn 효과

![fadein](https://github.com/user-attachments/assets/069e9037-d44f-4b47-ac3c-29611e6d253e)

스크롤되며 브라우저에 카드가 나타났을 때를 InterSectionObserver로 감지하여 opacity fade in 효과를 주었습니다.


<br/>
<br/>

# 트러블 슈팅
✔︎ 처음 사용하는 라이브러리들의 사용법 파악이 어려웠음
- 한번에 새로운 기술들이 여럿 포함되면서 혼란이 있었음
- 컴포넌트를 작은 단위로 쪼개 테스트하며 잘 적용되고 있는지 단계별로 확인함
- 사용법에서 특히 이해가 안되는 부분은 ChatGPT, Claude를 이용해 더 간단한 예제를 확인하며 구조를 파악하고자 함

# 회고
이번 프로젝트에서 가장 실천해보고 싶었던 부분이 '주요기능 집중해서 구현 후 스타일 적용 -> 추가 구현사항 적용'이었는데 끝까지 잊지않고 잘 실천했던 점이 가장 뿌듯하다!
기능 구현하면서 스타일도 신경쓰고, 추가로 필요한 기능들도 신경쓰다보니 집중이 흩어지고 효율이 떨어지는 것 같았는데 지난 과제들보다 처음 활용해보는 것들이 많았음에도 더 빨리 처리할 수 있었던 것 같다!
새로운 라이브러리도 많이 알게됐지만, 기존에 알았어도 적용은 버벅이던 grid, context API 활용을 이번에 좀 더 감을 잡을 수 있어서 좋았다.
