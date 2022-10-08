/** 
 * Complete a function createSpiral(N) that receives an integer N and returns a two--dimensional array 
 * where numbers from 1 to N should be represented as clockwise spiral.
 * 
 * Decimal inputs are converted to whole integers for processing
 * 
 * If input is < 1, no processing is done, and control is returned
 * 
 * Create a 2 dim array of size n (input), populated with empty strings
 * Start with the topmost row (depth = 0) and create the spiral going L to R, then T to B, then R to L and finally
 * B to T till the matrix is filled up
 * 
 * L to R -> start with depth, go until ctr is < n - depth. Each element denoted by row(depth) and col(ctr) increments
 *  by count++. Here row remains the same
 * 
 * T to B -> once the row is filled up from L to R, we start the T to B. 
 *    Start at depth + 1 (ctr) to access the row after the one we just filled up until ctr < n - depth which will take 
 *    us from the 2nd row to the last row of the 2 dim array. Each element denoted by row(ctr) & col(n - depth -1)
 *    increments by count++. Here the col remains the same.
 * 
 * R to L -> now we turn right to left to continue the spiral. We start at depth + 1 (ctr).
 *    is already filled up. Take this until n - depth from R to L. Each element denoted by row(n - depth -1) & 
 *    col(n - ctr -1) increments by count++. Here the row does not change, but the column decreases towards 0 
 *    while ctr is incremented.
 * 
 * B to T - > to complete the spiral loop, now we head back to the top. Starting at depth + 1(ctr), we go until 
 *    ctr < n - depth - 1 -> 1 + the upper filled row. Each element denoted by row(n - ctr -1) & col(depth) 
 *    increments by count++. Here the row decrements as we move up, and the column remains the same.
 * 
 * Once each depth is filled up for each of the array elements, the spiral is returned.
 */

const createSpiral = (number) => {
  const n = parseInt(number)
  if(n < 1) return "n should be >= than 1"
  const spiral = new Array(n).fill('').map(()=>Array(n).fill(''));
  let count = 1;

  for (let depth = 0; depth < (n+1)/2; depth++) {

    // left to right
    for(let lToR = depth; lToR < n - depth; lToR++) {
      spiral[depth][lToR] = count++;
    }

    // top to bottom
    for(let tToB = depth + 1; tToB < n - depth; tToB++) {
      spiral[tToB][n - depth - 1] = count++;
    }

    // for right to left
    for(let rToL = depth + 1; rToL < n - depth; rToL++) {
      spiral[n - depth - 1][n - rToL - 1] = count++;
    }

    // bottom to top
    for(let bToT = depth + 1; bToT < n - depth - 1; bToT++) {
      spiral[n - bToT - 1][depth] = count++
    }
  }
  return spiral;
}

console.log(createSpiral(3.7))