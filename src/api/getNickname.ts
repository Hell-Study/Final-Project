const adjectives = [
  '밝은',
  '재미있는',
  '행운의',
  '신비로운',
  '창의적인',
  '친절한',
  '열정적인',
  '성실한',
  '명랑한',
  '유머러스한',
  '슬기로운',
  '대담한',
  '매혹적인',
  '매력적인',
  '소심한',
  '훌륭한',
  '용감한',
  '낙천적인',
  '엉뚱한',
  '마법의',
];

const nouns = [
  '스튜어디스',
  '모험가',
  '발레리나',
  '코더',
  '게이머',
  '탐험가',
  '디자이너',
  '음악가',
  '바이올리니스트',
  '화가',
  '요리사',
  '작가',
  '엔지니어',
  '사이언티스트',
  '운동선수',
  '책략가',
  '소설가',
  '피아니스트',
  '프로그래머',
  '연구자',
];

export default function getNickname() {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}`;
}
