function generate(numRows: number): number[][] {
  if (numRows <= 0) {
      return [];
  }

  const triangle: number[][] = [[1]];
  for(let i = 1; i < numRows; i++){
    const prevRow = triangle[i - 1];
    const row: number[] = [1];
    for (let j = 1; j < i; j++) {
        row.push(prevRow[j - 1] + prevRow[j]);
    }

    row.push(1);
    triangle.push(row);
  }

  return triangle;
};