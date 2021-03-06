/*
0, 0 
'true', 1 
*/

const qnaList = [
  {
    q: '1. 다음 중 도넛 브랜드의 이름이 아닌 것은?',
    a: [
      { answer: 'a. 노티드', type: [0] },
      { answer: 'b. 올드페리', type: [0] },
      { answer: 'c. 랜디스', type: [0 ] },
      { answer: 'd. 오월의종', type: [1 ] },
    ]
  },
  {
    q: '2. 다음 중 베이글 브랜드의 이름이 아닌 것은?',
    a: [
      { answer: 'a. 코끼리', type: [0] },
      { answer: 'b. 푸하하', type: [1] },
      { answer: 'c. 런던베이글뮤지엄', type: [0] },
      { answer: 'd. 포비', type: [0] },
    ]
  },
  {
    q: '3. 다음 중 쟝블랑제리의 매장이 위치한 곳은?',
    a: [
      { answer: 'a. 낙성대', type: [1] },
      { answer: 'b. 뚝섬', type: [0] },
      { answer: 'c. 동대문', type: [0] },
      { answer: 'd. 한남동', type: [0] },
    ]
  },
  {
    q: '4. 뺑 오 쇼콜라에 초콜릿 코팅과 카카오 파우더로 마무리한 아우어베이커리의 대표 메뉴는?',
    a: [
      { answer: 'a. 빨미까레', type: [0 ] },
      { answer: 'b. 더티초코', type: [1 ] },
      { answer: 'c. 버터프레첼', type: [0 ] },
      { answer: 'd. 누텔라바나나', type: [0 ] },
    ]
  },
  {
    q: '5. 다음 중 바게트에 얇게 저민 햄과 버터를 채워넣은 프랑스식 샌드위치는?',
    a: [
      { answer: 'a. 파니니', type: [0 ] },
      { answer: 'b. 잠봉뵈르', type: [1]},
      { answer: 'c. 잠봉프로마쥬', type: [0] },
      { answer: 'd. 클럽샌드위치', type: [0] },
    ]
  },

  {
    q: '6. 다음 중 베이글과 맘모스빵으로 유명한 망원동에 위치한 빵집은?',
    a: [
      { answer: 'a. 오르랔베이커리', type: [0 ] },
      { answer: 'b. 빵굼터', type: [0 ] },
      { answer: 'c. 효자베이커리', type: [0 ] },
      { answer: 'd. 투떰즈업', type: [1 ] },
    ]
  },
  {
    q: '7. 다음 중 충무로 원형들의 메뉴가 아닌 것은?',
    a: [
      { answer: 'a. 감태퀸아망', type: [0 ] },
      { answer: 'b. 고수크림케이크', type: [0 ] },
      { answer: 'c. 바질레몬케이크', type: [1 ] },
      { answer: 'd. 핑크딜케이크', type: [0 ] },
    ]
  },
  {
    q: '8. 다음 중 가로수길에 위치한 크로플 맛집의 이름은?',
    a: [
      { answer: 'a. 덕수궁리에제와플', type: [0 ] },
      { answer: 'b. 새들러하우스', type: [1 ] },
      { answer: 'c. 와필레', type: [0 ] },
      { answer: 'd. 패트릭스와플', type: [0 ] },
    ]
  },
  {
    q: '9. 다음 중 지역명과 대표 빵집의 연결이 일치하지 않는 것은?',
    a: [
      { answer: 'a. 대전-성심당', type: [0 ] },
      { answer: 'b. 전주-궁전제과', type: [1 ] },
      { answer: 'c. 부산-옵스', type: [0 ] },
      { answer: 'd. 군산-이성당', type: [0 ] },
    ]
  },
  {
    q: '10. 다음 중 마늘빵으로 유명한 빵집이 아닌 곳은?',
    a: [
      { answer: 'a. 봉브레드', type: [0] },
      { answer: 'b. 오드랑베이커리', type: [0 ] },
      { answer: 'c. 카페레이어드', type: [1 ] },
      { answer: 'd. 만동제과', type: [0 ] },
    ]
  }
]

const infoList = [
  {
    name: '100점',
    desc: '2022 빵덕후 능력고사가 인정하는 진정한 빵덕후. 트렌드뿐만 아니라 전통적인 빵집까지 모두 섭렵하였으며, 2022년의 빵지순례가 더 기대되는 유형.',
    sugg: '추천 빵: 원형들-무화과퀸아망, 핑크딜케이크<br>덕력 상승을 위한 추천 빵집: 파롤앤랑그'
  },
  {
    name: '90점',
    desc: '아쉽게도 진정한 빵덕후가 되기에는 2% 부족한 유형. 밥보다 빵이 좋고, 전국의 빵 트렌드를 찾아다니고 빵을 사랑하지만 진정한 빵덕후가 되기에는 2% 부족한 열정!',
    sugg: '추천 빵: 오르랔베이커리-우유크림크러핀, 랜디스-민트초콜릿도넛<br>덕력 상승을 위한 추천 빵집: 원형들'
  },
  {
    name: '80점',
    desc: '밥보다 빵이 좋은 자칭 빵덕후! 인스타그램, 유튜브 등으로 열심히 트렌드를 쫓고 있으나 진정한 빵덕후가 되기 위해서는 발로 뛰는 노력이 필요합니다.',
    sugg: '추천 빵: 투떰즈업-밤모스, 코코로카라-치즈팜<br>덕력 상승을 위한 추천 빵집: 오르랔베이커리, 랜디스'
  },
  {
    name: '70점',
    desc: '자만은 금물! 아직 못 먹어본 빵이 있다! SNS에서 유행하는 빵도 알고 있고, 이 정도면 많이 알고 있다고 생각하지만 아직 못 먹어본 빵이 많은 유형.',
    sugg: '추천 빵: 런던베이글뮤지엄-치즈포테이토베이글, 코끼리베이글-크림치즈생크림베이글<br>덕력 상승울 위한 추천 빵집: 투떰즈업, 코코로카라'
  },
  {
    name: '60점',
    desc: '한 발짝 늦는 트렌드 눈치왕! 전국의 빵 맛집을 다 방문하지는 않았어도 알만한 빵집은 다 알고 있어 누가 보면 빵 맛집은 다 가본 것처럼 보이는 타입.',
    sugg: '추천 빵: 소금집-잠봉뵈르, 동명양과자점-발로나초콜릿크림치즈<br>덕력 상승을 위한 추천 빵집: 런던베이글뮤지엄, 코끼리베이글'
  },
  {
    name: '50점',
    desc: '귀차니즘 빵덕후! 새로운 트렌드로 떠오르는 빵이 무엇인지, 어떤 빵집이 맛있는지 대충 알고 있지만 귀찮아서 먹어보지 않았을 확률이 높습니다.',
    sugg: '추천 빵: 카페레이어드-대파스콘, 만동제과-마늘바게트<br>덕력 상승을 위한 추천 빵집: 소금집, 동명양과자점'
  },
  {
    name: '40점',
    desc: '조용하지만 강한 빵덕후! 열정적으로 트렌드를 찾아다니지는 않지만, 유행하는 빵과 빵집들은 섭렵하고 있는 타입입니다.',
    sugg: '추천 빵: 노티드도넛-우유생크림도넛, 올드페리도넛-버터피스타치오<br>덕력 상승을 위한 추천 빵집: 카페레이어드, 만동제과'
  },
  {
    name: '30점',
    desc: '빵도 좋지만, 그저 간식일 뿐이야! 유행하는 빵도 어느정도 알고 있지만, 생활반경을 벗어나서 따로 빵지순례를 갈 정도의 열정은 없는 유형.',
    sugg: '추천 빵: 패트릭스와플-코코넛와플, 그레인바운더리-더블초코스모어쿠키<br>덕력 상승을 위한 추천 빵집: 노티드도넛, 올드페리도넛'
  },
  {
    name: '20점',
    desc: '빵에 관심이 없는 것은 아니지만, 그렇다고 크게 관심이 있는 건 아니야... 빵덕후가 되기위해서는 차근 차근 트렌드 업데이트가 필요한 유형!',
    sugg: '추천 빵: 아우어베이커리-빨미까레, 쟝블랑제리-단팥빵<br>덕력 상승을 위한 추천 빵집: 패트릭스와플, 그레인바운더리'
  },
  {
    name: '10점',
    desc: '어쩌다 한 가지쯤은 먹어봤어... 직접 찾아가기보다는 누가 사다 줘서, 어쩌다 보니 트렌디한 빵을 접해본 유형.',
    sugg: '추천 빵: 롤링핀-앙버터치아바타, 브리오슈도레-크루아상<br>덕력 상승을 위한 추천 빵집: 아우어베이커리, 쟝블랑제리'
  },
  {
    name: '0점',
    desc: '빵이 다 같은 빵이지, 굳이 왜 찾아 먹는지 모르겠다는 당신! 최애 빵집은 접근성 좋은 파리바게뜨, 뚜레쥬르, 혹은 동네 빵집!',
    sugg: '추천 빵: 파리바게뜨-퀸아망, 뚜레쥬르-크림코르네<br>덕력 상승을 위한 추천 빵집: 롤링핀, 브리오슈도레'
  },
]