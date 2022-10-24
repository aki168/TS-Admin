export default() => {

  // https://pjchender.dev/typescript/ts-basic-types/

  // Array //
  let listOne: number[] = [1, 2, 3]
  let listTwo: Array<number> = [6, 7, 8]

  let listThree: readonly number[] = [8, 8, 8]
  let listFour: ReadonlyArray<number> = [7, 7, 7]

  // Tuple //
  let tupleOne: [number, string, boolean, number] = [29, 'momomi', true, 46]
  tupleOne = [33, 'Tomy', false, 75]

  // Tuple with Label //
  type PersonInfo = [age: number, name: string, isMarried: boolean, weight: number]
  const aiko: PersonInfo = [18, 'aiko', false, 48]

  // Tuple .. Read Only //
  const phoneBrands = ['apple', 'sony', 'LG'] as const
















}

