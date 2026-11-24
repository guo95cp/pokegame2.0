
/*
 * 영칼로리포케 게임 영양성분 추정 데이터
 *
 * 재료 1회 드래그 시 제공되는 중량 기준
 * 기존 영양성분 데이터를 변경된 중량에 맞춰 비례 환산
 *
 * 공식 분석값이나 실제 판매 제품의 확정 영양정보가 아닙니다.
 * 조리 후 중량 기준 (생채소는 생것)
 * 계란 반 개 = 25g 기준
 * 기본 그릇 야채는 합산하지 않음
 *
 * 열량: kcal
 * 탄수화물, 단백질, 지방, 당류: g
 * 나트륨: mg
 */

window.NUTRITION = {
  // 탄수화물
  C메밀면: {
    servingGram: 20,
    calories: 19.8,
    carbohydrate: 4.28,
    protein: 1.02,
    fat: 0.02,
    sugar: 0.1,
    sodium: 12,
  },
  C현미밥: {
    servingGram: 20,
    calories: 22.2,
    carbohydrate: 4.6,
    protein: 0.52,
    fat: 0.18,
    sugar: 0.08,
    sodium: 1,
  },

  // 채소
  V구운야채믹스: {
    servingGram: 20,
    calories: 13.33,
    carbohydrate: 1.67,
    protein: 0.47,
    fat: 0.53,
    sugar: 0.8,
    sodium: 6.67,
  },
  V깻잎: {
    servingGram: 5,
    calories: 2,
    carbohydrate: 0.35,
    protein: 0.2,
    fat: 0.03,
    sugar: 0.02,
    sodium: 0.17,
  },
  V스리라차양배추: {
    servingGram: 20,
    calories: 13.33,
    carbohydrate: 2.67,
    protein: 0.27,
    fat: 0.2,
    sugar: 1.67,
    sodium: 80,
  },
  V야채: {
    servingGram: 10,
    calories: 1.67,
    carbohydrate: 0.3,
    protein: 0.13,
    fat: 0.03,
    sugar: 0.1,
    sodium: 1.67,
  },
  V양파: {
    servingGram: 5,
    calories: 2,
    carbohydrate: 0.47,
    protein: 0.05,
    fat: 0,
    sugar: 0.22,
    sodium: 0.17,
  },
  V적채: {
    servingGram: 10,
    calories: 3,
    carbohydrate: 0.73,
    protein: 0.13,
    fat: 0,
    sugar: 0.4,
    sodium: 2.67,
  },
  V토마토: {
    servingGram: 5,
    calories: 0.83,
    carbohydrate: 0.2,
    protein: 0.05,
    fat: 0.02,
    sugar: 0.13,
    sodium: 0.33,
  },
  V할라피뇨: {
    servingGram: 5,
    calories: 1.5,
    carbohydrate: 0.33,
    protein: 0.05,
    fat: 0.02,
    sugar: 0.2,
    sodium: 0.83,
  },

  // 두부
  T두부: {
    servingGram: 10,
    calories: 8,
    carbohydrate: 0.2,
    protein: 0.9,
    fat: 0.48,
    sugar: 0.05,
    sodium: 0.75,
  },

  // 토핑
  T계란: {
    servingGram: 25,
    calories: 38.75,
    carbohydrate: 0.25,
    protein: 3.13,
    fat: 2.63,
    sugar: 0.13,
    sodium: 31.25,
  },
  T김가루: {
    servingGram: 5,
    calories: 13.75,
    carbohydrate: 2.25,
    protein: 1.75,
    fat: 0.25,
    sugar: 0,
    sodium: 5,
  },
  T무설탕김치: {
    servingGram: 20,
    calories: 6,
    carbohydrate: 1,
    protein: 0.35,
    fat: 0.1,
    sugar: 0.25,
    sodium: 125,
  },
  T날치알: {
    servingGram: 5,
    calories: 6,
    carbohydrate: 0.13,
    protein: 1,
    fat: 0.19,
    sugar: 0,
    sodium: 62.5,
  },
  T아보카도: {
    servingGram: 30,
    calories: 48,
    carbohydrate: 2.55,
    protein: 0.6,
    fat: 4.43,
    sugar: 0.23,
    sodium: 2.25,
  },
  T양파후레이크: {
    servingGram: 10,
    calories: 55,
    carbohydrate: 4,
    protein: 0.63,
    fat: 4,
    sugar: 0.75,
    sodium: 3.75,
  },
  T옥수수: {
    servingGram: 10,
    calories: 9.5,
    carbohydrate: 2.1,
    protein: 0.35,
    fat: 0.15,
    sugar: 0.45,
    sodium: 1.25,
  },
  T치즈: {
    servingGram: 5,
    calories: 16,
    carbohydrate: 0.15,
    protein: 1.13,
    fat: 1.25,
    sugar: 0.06,
    sodium: 32.5,
  },

  // 프로틴
  P닭가슴살: {
    servingGram: 20,
    calories: 33.14,
    carbohydrate: 0,
    protein: 6.2,
    fat: 0.71,
    sugar: 0,
    sodium: 14.86,
  },
  P닭다리살: {
    servingGram: 20,
    calories: 41.71,
    carbohydrate: 0,
    protein: 5.2,
    fat: 2.17,
    sugar: 0,
    sodium: 18.57,
  },
  P부채살: {
    servingGram: 20,
    calories: 40,
    carbohydrate: 0,
    protein: 5.43,
    fat: 2,
    sugar: 0,
    sodium: 12.86,
  },
  P안심: {
    servingGram: 20,
    calories: 34,
    carbohydrate: 0,
    protein: 5.71,
    fat: 1.23,
    sugar: 0,
    sodium: 12.86,
  },
  P연어: {
    servingGram: 20,
    calories: 41.43,
    carbohydrate: 0,
    protein: 4,
    fat: 2.6,
    sugar: 0,
    sodium: 12,
  },
  P오리고기: {
    servingGram: 30,
    calories: 75,
    carbohydrate: 0,
    protein: 5.57,
    fat: 5.57,
    sugar: 0,
    sodium: 171.43,
  },
  P우삼겹: {
    servingGram: 30,
    calories: 90,
    carbohydrate: 0,
    protein: 5.14,
    fat: 7.71,
    sugar: 0,
    sodium: 19.29,
  },
  P저당갈비: {
    servingGram: 30,
    calories: 70.71,
    carbohydrate: 2.14,
    protein: 6.43,
    fat: 3.86,
    sugar: 0.86,
    sodium: 150,
  },
};
