#include <chrono>
#include <iostream>
#include <ratio>
#include <vector>

#include "Algorithms/1.two-sum.cpp"

int main(int argc, char const *argv[])
{
  // Init
  int target = 9;
  std::vector<int> nums{2, 7, 11, 15};

  // Start timer
  auto start = std::chrono::steady_clock::now();
  // Execute
  Solution solution = Solution();
  std::vector<int> result = solution.twoSum(nums, target);

  for (int i : result)
  {
    std::cout << i << " ";
  }

  std::cout << std::endl;

  // End timer
  auto end = std::chrono::steady_clock::now();
  auto diff = end - start;
  std::cout
      << std::chrono::duration<double, std::milli>(diff).count()
      << " ms" << std::endl;

  return 0;
}
