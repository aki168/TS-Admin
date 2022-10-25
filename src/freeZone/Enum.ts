export default() => {
  enum Color {
    Red,
    Green,
    Blue
  }

  const mainColor:Color = Color.Red

  // ----

  type Nullable<T> = T | null

  enum BE_TIME {
    year = 'year',
    month = 'month',
    day = 'day'
  }

  const apiRes = Math.random() > 0.05 ? BE_TIME.month : null

  enum FE_TIME {
    year = 'year',
    month = 'month',
    day = 'day'
  }

  const map = {
    [BE_TIME.year]: null,
    [BE_TIME.month]: FE_TIME.month,
    [BE_TIME.day]: FE_TIME.day
  }

  // 若未設定 as conunt
  // let unit : Nullable<FE_TIME.month|FE_TIME.day> = apiRes
  // ? map[apiRes]
  // : null

  const map2 = {
    [BE_TIME.year]: null,
    [BE_TIME.month]: FE_TIME.month,
    [BE_TIME.day]: FE_TIME.day
  } as const

let unit2 : Nullable<FE_TIME.month|FE_TIME.day> = apiRes
  ? map2[apiRes]
  : null






}
