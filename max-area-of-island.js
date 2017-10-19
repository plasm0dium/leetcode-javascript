/**
 * @param {number[][]} grid
 * @return {number}
 */

const findMaxArea = function (grid, row, col) {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0) {
    return 0;
  }

  grid[row][col] = 0;

  return 1 + findMaxArea(grid, row + 1, col) + findMaxArea(grid, row - 1, col) + findMaxArea(grid, row, col + 1) + findMaxArea(grid, row, col - 1);
};

const maxAreaOfIsland = function(grid) {

    let maxArea = 0;
    let islandCount = 0;
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        if (grid[row][col] === 1) {
          islandCount = findMaxArea(grid, row, col);
          if (islandCount > maxArea) {
            maxArea = islandCount;
          }
        }
      }
    }

    return maxArea;
};
