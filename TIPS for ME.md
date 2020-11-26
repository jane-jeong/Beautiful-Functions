# Basic 
- HTML : Hypertext Markyp Language 
- CSS : Cascading Style Sheets

# HTML block-mdodel / inline-model 
- block-model : <div> 
- inline-model : <span> 

# EMMMET - HTML 축약해서 사용하기 
[ 공식 사이트 ] https://emmet.io/

[ 사용 방법 ] 축약어를 입력하고 탭 키. 축약어 입력할 때는 공백 없이 입력한다. 
- ! : HTML 기본 양식 작성 
- div.property : <div class="property"></div>
- div#property : <div id="property"></div>
- div>ul>li : ( > ) 부모와 자식을 노드들을 자동으로 만들어줌 
- div>ul+ol : ( + ) ul과 ol은 형제 노드로 생성됨 
- ul>li*5 : ( * ) li가 다섯 개 반복해서 작성됨 
- ul>li^ol : ( ^ ) ul 아래에 li를 생성하고 ul과 형제인 노드 생성 (ul>li)+ol 과 같다
- p{hello} : ( { } ) p 태그 안에 텍스트 입력
- div>(header>ul>li*2>a)+footer>p
- div.container>div.item.item${$}*10 : $는 자동으로 숫자 입력됨 (여기서는 1~10)
- p{hello} : <p>hello</p>
- p.class${item $}*5 : <p class="class1">item 1</p> 1~5까지 자동으로 숫자 들어가고 5개 반복 
- p>lorem : <p>Lorem ipsum dolor ...</p> 더미 텍스트 한 단락 생성 
- p>lorem4 : <p>Lorem ipsum dolor sit.</p> 더미 텍스트 단어 4개 생성


## 크기 단위
- height : 100% - 해당 객체가 속한 부모 크기의 100%를 쓰겠다 (부모 크기가 지정되어 있어야 함) 
- height : 100vh - 부모 크기가 지정되어 있지 않아도 전체 크기의 100% 다 쓰겠다 
- height : 100vh - 부모 크기가 지정되어 있지 않아도 전체 크기의 80%를 쓰겠다 

## 컬러 유틸리티
- COLOR TOOL : https://material.io/resources/color/#!/?view.left=0&view.right=0









# HTML Tags Full Name 
- a (href) : Anchor (Hypertext Refernce)
- id	: Identification
- div	: Division
- span : 'span' means the full extent of something from end to end; 폭; 
- h1~h6 : header1~header6
- p : Paragraph
- br : Break
- hr : horizontal rule
- i	: Italic
- b	: Bold
- u	: Underline
- ul	: Unordered Lists
- ol	: Ordered List
- li	: Listed Item
- dl	: Definition List
- dt	: Definition List term
- dd	: Definition List definition
- iframe : Inline Frame 
- sub	: subscript
- sup	: superscript
- img (src) : Image (Source)
- embed : Embed
- px	: Pixel
- pt	: Point
- tr	: Table Row
- th	: Table header
- td	: Table Data
- col	: Column
- pre	: Preformatted text
- &nbsp;	: Non Breaking Spaces; 공백; (-> HTML entity)

# CSS - selectors 
## 참고 
[ MDN - CSS selectors ]
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

[ MDN - CSS Properties References ]
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference



# CSS 레이아웃 - display
div { 
    background: Blue; 
    display: inline; // <div>는 block-model이지만 inline으로 변경해줄 수도 있음 
}

span {
    background: green; 
    display: block; // <span>은 inline-model이지만 block으로 변경해줄 수도 있음 
}

- inline : 물건(item) - contents의 크기에 맞춰서 css 속성이 적용됨. 한 줄에 여러 개 진열된다.
- block : 한 줄에 하나씩 진열된 상자. 한 줄에 여러개 진열되지 않는다. 
- inline-block : 박스는 한 줄에 적용될 수 있는데 contents에 상관없이 지정한 상자의 크기에 맞춰서 적용이 됨. 즉, 상자인데 한 줄에 여러 개가 진열될 수 있는 상자. 

# CSS 레이아웃 - Position Options 
- 포지션 위치 지정: left, right, ...
- static : 기본값. html에 적용된 규칙(box model)대로 순서대로 보여지는 옵션. 해당 아이템이 속한 box의 (0, 0) 좌표에 위치함. 
- relative : left 20px, top 20px 적용하면 기본값 기준 원래 있어야 하는 자리를 기준으로 해당 값만큼 이동한다 
- absolute : 해당 아이템이 담겨 있는 상자 안의 좌표를 기준으로 지정된 좌표 값에 위치한다. 
- fixed : 상자 안에서 벗어나서 웹 페이지 안의 좌표를 기준으로 지정된 값에 위치한다. 
- sticky : 원래 있어야 하는 자리에 있으면서 스크롤 해도 움직이지 않고 원래 그 자리에 고정되는 옵션(플로팅) (Q. sticky와 다른 position 옵션을 적용할 수 있을까?) 

## 참고 
[ MDN - CSS display ]
https://developer.mozilla.org/en-US/docs/Web/CSS/display

[ MDN - CSS position ]
https://developer.mozilla.org/en-US/docs/Web/CSS/position

[ Can I Use - Browser Checker ]
https://caniuse.com/


# CSS 레이아웃 - flex box 
- flex box : 아이템을 웹 페이지 상에서 수평으로 균등하게 배치하는 등 아이템을 더 정돈되게 진열할 수 있도록 하는 옵션 
- flex box 등장 배경 : 예전에는 float이나 table로 하곤 했는데 float의 원래의 목적은 이미지와 텍스트를 어떻게 배치할 것인지 지정하기 위해서 나온 컨셉이었기 때문에 완전 적합하지는 않았다. 주먹구구로 이걸 개발자들이 float을 응용해서 썼던 것(hack) 
- 이제는 flex box가 나와서 float은 이미지와 텍스트를 배치하는 순수 목적으로 사용되고 있다. 

## 1. flex box 속성 
- container에 적용할 수 있는 속성값이 있고, container 안의 item에 적용할 수 있는 속성 값이 있다. 

### container(box 상자)에 적용하는 속성 
- display
- flex-direction 
- flex-wrap 
- flex-flow 
- justify-content 
- align-items 
- align-content 

### item에 적용하는 속성 
- order 
- flex-grow 
- flex-shrink 
- flex
- align-self 

## 2. flex box의 축 개념 
- flex box에는 중심 축과 반대 축이 있다. 
- 아이템이 수평으로 정렬되어 있으면 수평 축이 main axis, cross axis는 수평 축 
- 아이템이 수직으로 정렬되어 있으면 main axis는 수직 축, cross axis는 수직 축 

## 3. flex box 적용하기 

### [ container 속성값들 ]
- display : flex;  (왼쪽에서 오른쪽으로 정렬됨) 

- flex-direction: row; (row가 기본값. 왼쪽에서 오른쪽) 
- flex-direction: row-reverse; (오른쪽에서 왼쪽) 
- flex-direction: column; (수직축으로 변경. 위에서 아래로 수직 정렬됨) 
- flex-direction: column-reverse; (수직축으로 변경. 아래에서 위로 수직 정렬됨) 

- flex-wrap: noowrap; (기본값. 브라우저가 줄어들면 아래로 떨어지지 않고 한줄에 계속 붙어서 짜부됨)
- flex-wrap: wrap; (브라우저가 줄어들면 아이템들이 아래로 떨어짐) 
- flex-wrap: wrap-reverse; (브라우저가 줄어들면 아이템들이 아래로 떨어지는데 아래에서 부터 위 순서대로 정렬됨)  
- flex-flow: column nowrap; (direction과 wrap 두 가지 옵션을 한 꺼번에) 

- justify-content : 중심축에서(기본 수평) 아이템들을 어떻게 배치할 것인지 결정. 기본값은 flex-start; 
	- flex-start; 아이템들을 왼쪽에서 오른쪽으로 정렬 
	- flex-end; 아이템들의 순서를 바뀌지 않고 오른쪽에서 왼쪽으로 정렬
	- center; 아이템들을 센터에 배치 
	- space-around; 아이템들 사이에 space를 균등하게 배치 (가장 가장자리는 space가 한 줄 씩 들어가서 더 좁다)
	- space-evenly; 모두 똑같은 간격을 넣어줌 
	- space-beteween; 오른쪽, 왼쪽은 화면 가장자리에 맞게 배치하고 사이만 균등 분할

- align-items; 반대축(기본 수직) 에서 아이템들을 어떻게 배치하는 지 결정 
	- baseline; 텍스트에 맞게 아이템 정렬 

- align-content: 반대축의 아이템을 지정. (justify-content와 유사)
	- space between; wrap될 때 아이템들 간의 사이 값을 분할 
	- center; 중간에 배치 

### [ item 속성 값들 ]
- display : flex; 로 되어 있을 때

- order : item들의 order를 바꿈 (현업에서는 거의 쓰지 않는다) 

- flex-grow : 컨테이너(브라우저)가 커질 때 아이템의 크기가 반응형으로 커지도록 하는 속성 (아이템들이 상자의 여백을 메꾸려는 노력을 함) 
- 기본값은 0 
- flex-grow: 1; 로 하면 다른 아이템과 같은 비율로 크기 변화됨 
- flex-grow: 2; 로 하면 다른 아이템들보다 2배 큰 비율로 크기 변환됨 

- flex-shrink : 컨테이너(브라우저)가 작아질 때 아이템의 크기가 반응형으로 줄어들도록 하는 속성 (아이템들이 상자의 여백을 메꾸려는 노력을 함) 
- 기본값은 0 
- flex-shrink: 1; 로 하면 다른 아이템과 같은 비율로 크기 변화됨 
- flex-shrink: 2; 로 하면 다른 아이템들보다 2배 큰 비율로 크기 변환됨 

- flex-basis : 아이템이 공간을 얼마나 차지해야 하는 지 보다 구체적으로 지정해주는 것 
- flex-basis : auto; (기본값) 
	- 60%; 아이템 들이 공간에서 크거나 줄어들 때 계속해서 해당 비율을 유지하도록 하는 것 

- align-self : 아이템 별로 공간에서 정렬함 
	- center; 아이템 하나만 반대축 중심으로 위치 배치 

## 4. 참고 
[ CSS TRIKS - A Complete Guide to Flexbox ]
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

[ MDN - Flexbox]
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

[ Flexbox - Froggy Gmae ]
https://flexboxfroggy.com/



# 메타데이터
<meta charset="utf-8">
<meta name="author" content="Chris Mills">
<meta name="description" content="The MDN Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">

<meta property="og:image" content="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png">

<meta property="og:description" content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both Web sites
and HTML5 Apps. It also documents Mozilla products, like Firefox OS.">
<meta property="og:title" content="Mozilla Developer Network">
<meta name="twitter:title" content="Mozilla Developer Network">
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

# 파비콘 - 다양한 디바이스에 맞는 파비콘을 모두 적용한다 
<!-- third-generation iPad with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://developer.cdn.mozilla.net/static/img/favicon144.a6e4162070f4.png">
<!-- iPhone with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://developer.cdn.mozilla.net/static/img/favicon114.0e9fabd44f85.png">
<!-- first- and second-generation iPad: -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://developer.cdn.mozilla.net/static/img/favicon72.8ff9d87c82a0.png">
<!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link rel="apple-touch-icon-precomposed" href="https://developer.cdn.mozilla.net/static/img/favicon57.a2490b9a2d76.png">
<!-- basic favicon -->
<link rel="shortcut icon" href="https://developer.cdn.mozilla.net/static/img/favicon32.e02854fdcf73.png">


# 언어 설정하기 (전체 문서 언어 설정 / 개별 언어 설정) 
참고: https://www.w3.org/International/articles/language-tags/
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <title>language setting examples</title>
  </head>
  <body>
    <h1>language setting examples</h1>
    <p>Japanese example: <span lang="jp">ご飯が熱い。</span>.</p>
  </body>
</html>

# 격자무늬 배경 만들기 - CSS
body {
  background-size: 40px 40px;
  background-image:
    linear-gradient(to right, grey 1px, transparent 1px),
    linear-gradient(to bottom, grey 1px, transparent 1px);
}

# 도트무늬 배경 만들기 - CSS
body {
  background-size: 40px 40px;
  background-image: radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px);
}

# 강조
접근성 고려한 강조 : <em></em> / <strong></strong>
접근성 관련 없는 강조 : <u></u>(밑줄), <i></i>(이탤릭), <b></b>(볼드)

# 이미지에 링크 넣기 
<a href="https://www.mozilla.org/en-US/">
  <img src="mozilla-image.png" alt="mozilla logo that links to the mozilla homepage">
</a>
