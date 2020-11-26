# Basic 
- HTML : Hypertext Markyp Language 
- CSS : Cascading Style Sheets

# HTML block-mdodel / inline-model 
- block-model : <div> 
- inline-model : <span> 

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
- &nbsp;	: Non Breaking Spaces; 공백; 

# CSS Layout


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
