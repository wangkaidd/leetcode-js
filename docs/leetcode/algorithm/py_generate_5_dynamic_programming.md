# 3.6 动态规划

动态规划（Dynamic Programming），简称 DP，将问题分解为互相重叠的子问题，通过反复求解子问题来解决原问题就是动态规划，如果某一问题有很多重叠子问题，使用动态规划来解是比较有效的。

#### 动态规划三要素：
* 重叠子问题
* 最优子结构
* 状态转移方程

求解动态规划的核心问题是穷举。

但是这类问题的特别之处在于，存在 **「重叠子问题」**，如果暴力穷举的话效率会极其低下。

动态规划问题一定会具备 **「最优子结构」**，才能通过子问题的最值得到原问题的最值。

另外问题千变万化，穷举所有可行解其实并不是一件容易的事，只有列出正确的 **「状态转移方程」** 才能正确地穷举。

#### 动态规划的解题方法：
* 递归+记忆化（自顶向下）
* 动态规划（自底向上）

#### 动态规划的解题步骤：
* 根据重叠子问题定义状态
* 寻找最优子结构，推导状态转移方程
* 确定dp初始状态
* 确定输出值



## 相关题目

### 动态规划基础题目

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0509) | 递归、记忆化搜索、数学、动态规划 | 简单 |
| 0070 | [爬楼梯](https://leetcode.com/problems/climbing-stairs/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0070) | 记忆化搜索、数学、动态规划 | 简单 |
| 0062 | [不同路径](https://leetcode.com/problems/unique-paths/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0062) | 数学、动态规划、组合数学 | 中等 |

### 记忆化搜索

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number/) |  | 记忆化搜索、数学、动态规划 | 简单 |
| 0375 | [猜数字大小 II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/) |  | 数学、动态规划、博弈 | 中等 |
| 0494 | [目标和](https://leetcode.com/problems/target-sum/) |  | 数组、动态规划、回溯 | 中等 |
| 0576 | [出界的路径数](https://leetcode.com/problems/out-of-boundary-paths/) |  | 动态规划 | 中等 |
| 0087 | [扰乱字符串](https://leetcode.com/problems/scramble-string/) |  | 字符串、动态规划 | 困难 |
| 0403 | [青蛙过河](https://leetcode.com/problems/frog-jump/) |  | 数组、动态规划 | 困难 |
| 0552 | [学生出勤记录 II](https://leetcode.com/problems/student-attendance-record-ii/) |  | 动态规划 | 困难 |
| 0913 | [猫和老鼠](https://leetcode.com/problems/cat-and-mouse/) |  | 图、拓扑排序、记忆化搜索、数学、动态规划、博弈 | 困难 |
| 0329 | [矩阵中的最长递增路径](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) |  | 深度优先搜索、广度优先搜索、图、拓扑排序、记忆化搜索、数组、动态规划、矩阵 | 困难 |

### 线性 DP

#### 单串线性 DP 问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0300 | [最长递增子序列](https://leetcode.com/problems/longest-increasing-subsequence/) |  | 数组、二分查找、动态规划 | 中等 |
| 0673 | [最长递增子序列的个数](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) |  | 树状数组、线段树、数组、动态规划 | 中等 |
| 0354 | [俄罗斯套娃信封问题](https://leetcode.com/problems/russian-doll-envelopes/) |  | 数组、二分查找、动态规划、排序 | 困难 |
| 0053 | [最大子数组和](https://leetcode.com/problems/maximum-subarray/) |  | 数组、分治、动态规划 | 中等 |
| 0152 | [乘积最大子数组](https://leetcode.com/problems/maximum-product-subarray/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0152) | 数组、动态规划 | 中等 |
| 0918 | [环形子数组的最大和](https://leetcode.com/problems/maximum-sum-circular-subarray/) |  | 队列、数组、分治、动态规划、单调队列 | 中等 |
| 0198 | [打家劫舍](https://leetcode.com/problems/house-robber/) |  | 数组、动态规划 | 中等 |
| 0213 | [打家劫舍 II](https://leetcode.com/problems/house-robber-ii/) |  | 数组、动态规划 | 中等 |
| 0740 | [删除并获得点数](https://leetcode.com/problems/delete-and-earn/) |  | 数组、哈希表、动态规划 | 中等 |
| 1388 | [3n 块披萨](https://leetcode.com/problems/pizza-with-3n-slices/) |  | 贪心、数组、动态规划、堆（优先队列） | 困难 |
| 0873 | [最长的斐波那契子序列的长度](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/) |  | 数组、哈希表、动态规划 | 中等 |
| 1027 | [最长等差数列](https://leetcode.com/problems/longest-arithmetic-subsequence/) |  | 数组、哈希表、二分查找、动态规划 | 中等 |
| 1055 | [形成字符串的最短路径](https://leetcode.com/problems/shortest-way-to-form-string/) |  | 贪心、双指针、字符串 | 中等 |
| 0368 | [最大整除子集](https://leetcode.com/problems/largest-divisible-subset/) |  | 数组、数学、动态规划、排序 | 中等 |
| 0032 | [最长有效括号](https://leetcode.com/problems/longest-valid-parentheses/) |  | 栈、字符串、动态规划 | 困难 |
| 0413 | [等差数列划分](https://leetcode.com/problems/arithmetic-slices/) |  | 数组、动态规划 | 中等 |
| 0091 | [解码方法](https://leetcode.com/problems/decode-ways/) |  | 字符串、动态规划 | 中等 |
| 0639 | [解码方法 II](https://leetcode.com/problems/decode-ways-ii/) |  | 字符串、动态规划 | 困难 |
| 0132 | [分割回文串 II](https://leetcode.com/problems/palindrome-partitioning-ii/) |  | 字符串、动态规划 | 困难 |
| 1220 | [统计元音字母序列的数目](https://leetcode.com/problems/count-vowels-permutation/) |  | 动态规划 | 困难 |
| 0338 | [比特位计数](https://leetcode.com/problems/counting-bits/) |  | 位运算、动态规划 | 简单 |
| 0801 | [使序列递增的最小交换次数](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/) |  | 数组、动态规划 | 困难 |
| 0871 | [最低加油次数](https://leetcode.com/problems/minimum-number-of-refueling-stops/) |  | 贪心、数组、动态规划、堆（优先队列） | 困难 |
| 0045 | [跳跃游戏 II](https://leetcode.com/problems/jump-game-ii/) |  | 贪心、数组、动态规划 | 中等 |
| 0813 | [最大平均值和的分组](https://leetcode.com/problems/largest-sum-of-averages/) |  | 数组、动态规划、前缀和 | 中等 |
| 0887 | [鸡蛋掉落](https://leetcode.com/problems/super-egg-drop/) |  | 数学、二分查找、动态规划 | 困难 |
| 0256 | [粉刷房子](https://leetcode.com/problems/paint-house/) |  | 数组、动态规划 | 中等 |
| 0265 | [粉刷房子 II](https://leetcode.com/problems/paint-house-ii/) |  | 数组、动态规划 | 困难 |
| 1473 | [粉刷房子 III](https://leetcode.com/problems/paint-house-iii/) |  | 数组、动态规划 | 困难 |
| 0975 | [奇偶跳](https://leetcode.com/problems/odd-even-jump/) |  | 栈、数组、动态规划、有序集合、单调栈 | 困难 |
| 0403 | [青蛙过河](https://leetcode.com/problems/frog-jump/) |  | 数组、动态规划 | 困难 |
| 1478 | [安排邮筒](https://leetcode.com/problems/allocate-mailboxes/) |  | 数组、数学、动态规划、排序 | 困难 |
| 1230 | [抛掷硬币](https://leetcode.com/problems/toss-strange-coins/) |  | 数学、动态规划、概率与统计 | 中等 |
| 0410 | [分割数组的最大值](https://leetcode.com/problems/split-array-largest-sum/) |  | 贪心、数组、二分查找、动态规划、前缀和 | 困难 |
| 1751 | [最多可以参加的会议数目 II](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/) |  | 数组、二分查找、动态规划、排序 | 困难 |
| 1787 | [使所有区间的异或结果为零](https://leetcode.com/problems/make-the-xor-of-all-segments-equal-to-zero/) |  | 位运算、数组、动态规划 | 困难 |
| 0121 | [买卖股票的最佳时机](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) |  | 数组、动态规划 | 简单 |
| 0122 | [买卖股票的最佳时机 II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) |  | 贪心、数组 | 中等 |
| 0123 | [买卖股票的最佳时机 III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) |  | 数组、动态规划 | 困难 |
| 0188 | [买卖股票的最佳时机 IV](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) |  | 数组、动态规划 | 困难 |
| 0309 | [最佳买卖股票时机含冷冻期](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) |  | 数组、动态规划 | 中等 |
| 0714 | [买卖股票的最佳时机含手续费](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) |  | 贪心、数组 | 中等 |

#### 双串线性 DP 问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1143 | [最长公共子序列](https://leetcode.com/problems/longest-common-subsequence/) |  | 字符串、动态规划 | 中等 |
| 0712 | [两个字符串的最小ASCII删除和](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) |  | 字符串、动态规划 | 中等 |
| 0718 | [最长重复子数组](https://leetcode.com/problems/maximum-length-of-repeated-subarray/) |  | 数组、二分查找、动态规划、滑动窗口、哈希函数、滚动哈希 | 中等 |
| 0583 | [两个字符串的删除操作](https://leetcode.com/problems/delete-operation-for-two-strings/) |  | 字符串、动态规划 | 中等 |
| 0072 | [编辑距离](https://leetcode.com/problems/edit-distance/) |  | 字符串、动态规划 | 困难 |
| 0044 | [通配符匹配](https://leetcode.com/problems/wildcard-matching/) |  | 贪心、递归、字符串、动态规划 | 困难 |
| 0010 | [正则表达式匹配](https://leetcode.com/problems/regular-expression-matching/) |  | 递归、字符串、动态规划 | 困难 |
| 0097 | [交错字符串](https://leetcode.com/problems/interleaving-string/) |  | 字符串、动态规划 | 中等 |
| 0115 | [不同的子序列](https://leetcode.com/problems/distinct-subsequences/) |  | 字符串、动态规划 | 困难 |
| 0087 | [扰乱字符串](https://leetcode.com/problems/scramble-string/) |  | 字符串、动态规划 | 困难 |

#### 矩阵线性 DP 问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0118 | [杨辉三角](https://leetcode.com/problems/pascals-triangle/) |  | 数组、动态规划 | 简单 |
| 0119 | [杨辉三角 II](https://leetcode.com/problems/pascals-triangle-ii/) |  | 数组、动态规划 | 简单 |
| 0120 | [三角形最小路径和](https://leetcode.com/problems/triangle/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0120) | 数组、动态规划 | 中等 |
| 0064 | [最小路径和](https://leetcode.com/problems/minimum-path-sum/) |  | 数组、动态规划、矩阵 | 中等 |
| 0174 | [地下城游戏](https://leetcode.com/problems/dungeon-game/) |  | 数组、动态规划、矩阵 | 困难 |
| 0221 | [最大正方形](https://leetcode.com/problems/maximal-square/) |  | 数组、动态规划、矩阵 | 中等 |
| 0931 | [下降路径最小和](https://leetcode.com/problems/minimum-falling-path-sum/) |  | 数组、动态规划、矩阵 | 中等 |
| 0576 | [出界的路径数](https://leetcode.com/problems/out-of-boundary-paths/) |  | 动态规划 | 中等 |
| 0085 | [最大矩形](https://leetcode.com/problems/maximal-rectangle/) |  | 栈、数组、动态规划、矩阵、单调栈 | 困难 |
| 0363 | [矩形区域不超过 K 的最大数值和](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/) |  | 数组、二分查找、矩阵、有序集合、前缀和 | 困难 |
| 面试题 17.24 | [最大子矩阵](https://leetcode.cn/problems/max-submatrix-lcci/) |  | 数组、动态规划、矩阵、前缀和 | 困难 |
| 1444 | [切披萨的方案数](https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/) |  | 记忆化搜索、数组、动态规划、矩阵 | 困难 |

#### 无串线性 DP 问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number/) |  | 记忆化搜索、数学、动态规划 | 简单 |
| 0650 | [只有两个键的键盘](https://leetcode.com/problems/2-keys-keyboard/) |  | 数学、动态规划 | 中等 |
| 0264 | [丑数 II](https://leetcode.com/problems/ugly-number-ii/) |  | 哈希表、数学、动态规划、堆（优先队列） | 中等 |
| 0279 | [完全平方数](https://leetcode.com/problems/perfect-squares/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0279) | 广度优先搜索、数学、动态规划 | 中等 |
| 0343 | [整数拆分](https://leetcode.com/problems/integer-break/) |  | 数学、动态规划 | 中等 |

### 背包问题

#### 0-1 背包问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0416 | [分割等和子集](https://leetcode.com/problems/partition-equal-subset-sum/) |  | 数组、动态规划 | 中等 |
| 0494 | [目标和](https://leetcode.com/problems/target-sum/) |  | 数组、动态规划、回溯 | 中等 |
| 1049 | [最后一块石头的重量 II](https://leetcode.com/problems/last-stone-weight-ii/) |  | 数组、动态规划 | 中等 |

#### 完全背包问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0279 | [完全平方数](https://leetcode.com/problems/perfect-squares/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0279) | 广度优先搜索、数学、动态规划 | 中等 |
| 0322 | [零钱兑换](https://leetcode.com/problems/coin-change/) |  | 广度优先搜索、数组、动态规划 | 中等 |
| 0518 | [零钱兑换 II](https://leetcode.com/problems/coin-change-ii/) |  | 数组、动态规划 | 中等 |
| 0139 | [单词拆分](https://leetcode.com/problems/word-break/) |  | 字典树、记忆化搜索、数组、哈希表、字符串、动态规划 | 中等 |
| 0377 | [组合总和 Ⅳ](https://leetcode.com/problems/combination-sum-iv/) |  | 数组、动态规划 | 中等 |
| 0638 | [大礼包](https://leetcode.com/problems/shopping-offers/) |  | 位运算、记忆化搜索、数组、动态规划、回溯、状态压缩 | 中等 |
| 1449 | [数位成本和为目标值的最大数字](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/) |  | 数组、动态规划 | 困难 |

#### 多重背包问题

#### 分组背包问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1155 | [掷骰子等于目标和的方法数](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/) |  | 动态规划 | 中等 |
| 2585 | [获得分数的方法数](https://leetcode.com/problems/number-of-ways-to-earn-points/) |  | 数组、动态规划 | 困难 |

#### 多维背包问题

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0474 | [一和零](https://leetcode.com/problems/ones-and-zeroes/) |  | 数组、字符串、动态规划 | 中等 |
| 0879 | [盈利计划](https://leetcode.com/problems/profitable-schemes/) |  | 数组、动态规划 | 困难 |
| 1995 | [统计特殊四元组](https://leetcode.com/problems/count-special-quadruplets/) |  | 数组、枚举 | 简单 |

### 区间 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0486 | [预测赢家](https://leetcode.com/problems/predict-the-winner/) |  | 递归、数组、数学、动态规划、博弈 | 中等 |
| 0312 | [戳气球](https://leetcode.com/problems/burst-balloons/) |  | 数组、动态规划 | 困难 |
| 0877 | [石子游戏](https://leetcode.com/problems/stone-game/) |  | 数组、数学、动态规划、博弈 | 中等 |
| 1000 | [合并石头的最低成本](https://leetcode.com/problems/minimum-cost-to-merge-stones/) |  | 数组、动态规划、前缀和 | 困难 |
| 1547 | [切棍子的最小成本](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/) |  | 数组、动态规划、排序 | 困难 |
| 0664 | [奇怪的打印机](https://leetcode.com/problems/strange-printer/) |  | 字符串、动态规划 | 困难 |
| 1039 | [多边形三角剖分的最低得分](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/) |  | 数组、动态规划 | 中等 |
| 0546 | [移除盒子](https://leetcode.com/problems/remove-boxes/) |  | 记忆化搜索、数组、动态规划 | 困难 |
| 0375 | [猜数字大小 II](https://leetcode.com/problems/guess-number-higher-or-lower-ii/) |  | 数学、动态规划、博弈 | 中等 |
| 0678 | [有效的括号字符串](https://leetcode.com/problems/valid-parenthesis-string/) |  | 栈、贪心、字符串、动态规划 | 中等 |
| 0005 | [最长回文子串](https://leetcode.com/problems/longest-palindromic-substring/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0005) | 字符串、动态规划 | 中等 |
| 0516 | [最长回文子序列](https://leetcode.com/problems/longest-palindromic-subsequence/) |  | 字符串、动态规划 | 中等 |
| 0730 | [统计不同回文子序列](https://leetcode.com/problems/count-different-palindromic-subsequences/) |  | 字符串、动态规划 | 困难 |
| 2104 | [子数组范围和](https://leetcode.com/problems/sum-of-subarray-ranges/) |  | 栈、数组、单调栈 | 中等 |

### 树形 DP

#### 固定根的树形 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0543 | [二叉树的直径](https://leetcode.com/problems/diameter-of-binary-tree/) |  | 树、深度优先搜索、二叉树 | 简单 |
| 0124 | [二叉树中的最大路径和](https://leetcode.com/problems/binary-tree-maximum-path-sum/) |  | 树、深度优先搜索、动态规划、二叉树 | 困难 |
| 1245 | [树的直径](https://leetcode.com/problems/tree-diameter/) |  | 树、深度优先搜索、广度优先搜索、图、拓扑排序 | 中等 |
| 2246 | [相邻字符不同的最长路径](https://leetcode.com/problems/longest-path-with-different-adjacent-characters/) |  | 树、深度优先搜索、图、拓扑排序、数组、字符串 | 困难 |
| 0687 | [最长同值路径](https://leetcode.com/problems/longest-univalue-path/) |  | 树、深度优先搜索、二叉树 | 中等 |
| 0337 | [打家劫舍 III](https://leetcode.com/problems/house-robber-iii/) |  | 树、深度优先搜索、动态规划、二叉树 | 中等 |
| 0333 | [最大 BST 子树](https://leetcode.com/problems/largest-bst-subtree/) |  | 树、深度优先搜索、二叉搜索树、动态规划、二叉树 | 中等 |
| 1617 | [统计子树中城市之间最大距离](https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/) |  | 位运算、树、动态规划、状态压缩、枚举 | 困难 |
| 2538 | [最大价值和与最小价值和的差值](https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/) |  | 树、深度优先搜索、数组、动态规划 | 困难 |
| 1569 | [将子数组重新排序得到同一个二叉搜索树的方案数](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/) |  | 树、并查集、二叉搜索树、记忆化搜索、数组、数学、分治、动态规划、二叉树、组合数学 | 困难 |
| 1372 | [二叉树中的最长交错路径](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/) |  | 树、深度优先搜索、动态规划、二叉树 | 中等 |
| 1373 | [二叉搜索子树的最大键值和](https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/) |  | 树、深度优先搜索、二叉搜索树、动态规划、二叉树 | 困难 |
| 0968 | [监控二叉树](https://leetcode.com/problems/binary-tree-cameras/) |  | 树、深度优先搜索、动态规划、二叉树 | 困难 |
| 1273 | [删除树节点](https://leetcode.com/problems/delete-tree-nodes/) |  | 树、深度优先搜索、广度优先搜索 | 中等 |
| 1519 | [子树中标签相同的节点数](https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label/) |  | 树、深度优先搜索、广度优先搜索、哈希表、计数 | 中等 |

#### 不定根的树形 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0310 | [最小高度树](https://leetcode.com/problems/minimum-height-trees/) |  | 深度优先搜索、广度优先搜索、图、拓扑排序 | 中等 |
| 0834 | [树中距离之和](https://leetcode.com/problems/sum-of-distances-in-tree/) |  | 树、深度优先搜索、图、动态规划 | 困难 |
| 2581 | [统计可能的树根数目](https://leetcode.com/problems/count-number-of-possible-root-nodes/) |  | 树、深度优先搜索、哈希表、动态规划 | 困难 |

### 状态压缩 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 1879 | [两个数组最小的异或值之和](https://leetcode.com/problems/minimum-xor-sum-of-two-arrays/) |  | 位运算、数组、动态规划、状态压缩 | 困难 |
| 2172 | [数组的最大与和](https://leetcode.com/problems/maximum-and-sum-of-array/) |  | 位运算、数组、动态规划、状态压缩 | 困难 |
| 1947 | [最大兼容性评分和](https://leetcode.com/problems/maximum-compatibility-score-sum/) |  | 位运算、数组、动态规划、回溯、状态压缩 | 中等 |
| 1595 | [连通两组点的最小成本](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/) |  | 位运算、数组、动态规划、状态压缩、矩阵 | 困难 |
| 1494 | [并行课程 II](https://leetcode.com/problems/parallel-courses-ii/) |  | 位运算、图、动态规划、状态压缩 | 困难 |
| 1655 | [分配重复整数](https://leetcode.com/problems/distribute-repeating-integers/) |  | 位运算、数组、动态规划、回溯、状态压缩 | 困难 |
| 1986 | [完成任务的最少工作时间段](https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks/) |  | 位运算、数组、动态规划、回溯、状态压缩 | 中等 |
| 1434 | [每个人戴不同帽子的方案数](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/) |  | 位运算、数组、动态规划、状态压缩 | 困难 |
| 1799 | [N 次操作后的最大分数和](https://leetcode.com/problems/maximize-score-after-n-operations/) |  | 位运算、数组、数学、动态规划、回溯、状态压缩、数论 | 困难 |
| 1681 | [最小不兼容性](https://leetcode.com/problems/minimum-incompatibility/) |  | 位运算、数组、动态规划、状态压缩 | 困难 |
| 0526 | [优美的排列](https://leetcode.com/problems/beautiful-arrangement/) |  | 位运算、数组、动态规划、回溯、状态压缩 | 中等 |
| 0351 | [安卓系统手势解锁](https://leetcode.com/problems/android-unlock-patterns/) |  | 动态规划、回溯 | 中等 |
| 0464 | [我能赢吗](https://leetcode.com/problems/can-i-win/) |  | 位运算、记忆化搜索、数学、动态规划、状态压缩、博弈 | 中等 |
| 0847 | [访问所有节点的最短路径](https://leetcode.com/problems/shortest-path-visiting-all-nodes/) |  | 位运算、广度优先搜索、图、动态规划、状态压缩 | 困难 |
| 0638 | [大礼包](https://leetcode.com/problems/shopping-offers/) |  | 位运算、记忆化搜索、数组、动态规划、回溯、状态压缩 | 中等 |
| 1994 | [好子集的数目](https://leetcode.com/problems/the-number-of-good-subsets/) |  | 位运算、数组、数学、动态规划、状态压缩 | 困难 |
| 1349 | [参加考试的最大学生数](https://leetcode.com/problems/maximum-students-taking-exam/) |  | 位运算、数组、动态规划、状态压缩、矩阵 | 困难 |
| 0698 | [划分为k个相等的子集](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) |  | 位运算、记忆化搜索、数组、动态规划、回溯、状态压缩 | 中等 |
| 0943 | [最短超级串](https://leetcode.com/problems/find-the-shortest-superstring/) |  | 位运算、数组、字符串、动态规划、状态压缩 | 困难 |
| 0691 | [贴纸拼词](https://leetcode.com/problems/stickers-to-spell-word/) |  | 位运算、数组、字符串、动态规划、回溯、状态压缩 | 困难 |
| 0982 | [按位与为零的三元组](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/) |  | 位运算、数组、哈希表 | 困难 |

### 计数 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0062 | [不同路径](https://leetcode.com/problems/unique-paths/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0062) | 数学、动态规划、组合数学 | 中等 |
| 0063 | [不同路径 II](https://leetcode.com/problems/unique-paths-ii/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0063) | 数组、动态规划、矩阵 | 中等 |
| 0343 | [整数拆分](https://leetcode.com/problems/integer-break/) |  | 数学、动态规划 | 中等 |
| 0096 | [不同的二叉搜索树](https://leetcode.com/problems/unique-binary-search-trees/) |  | 树、二叉搜索树、数学、动态规划、二叉树 | 中等 |
| 1259 | [不相交的握手](https://leetcode.com/problems/handshakes-that-dont-cross/) |  | 数学、动态规划 | 困难 |
| 0790 | [多米诺和托米诺平铺](https://leetcode.com/problems/domino-and-tromino-tiling/) |  | 动态规划 | 中等 |
| 0070 | [爬楼梯](https://leetcode.com/problems/climbing-stairs/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0070) | 记忆化搜索、数学、动态规划 | 简单 |
| 0746 | [使用最小花费爬楼梯](https://leetcode.com/problems/min-cost-climbing-stairs/) |  | 数组、动态规划 | 简单 |
| 0509 | [斐波那契数](https://leetcode.com/problems/fibonacci-number/) | [JS](https://2xiao.github.io/fe/leetcode/problem/0509) | 递归、记忆化搜索、数学、动态规划 | 简单 |
| 1137 | [第 N 个泰波那契数](https://leetcode.com/problems/n-th-tribonacci-number/) |  | 记忆化搜索、数学、动态规划 | 简单 |

### 数位 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 2376 | [统计特殊整数](https://leetcode.com/problems/count-special-integers/) |  | 数学、动态规划 | 困难 |
| 0357 | [统计各位数字都不同的数字个数](https://leetcode.com/problems/count-numbers-with-unique-digits/) |  | 数学、动态规划、回溯 | 中等 |
| 1012 | [至少有 1 位重复的数字](https://leetcode.com/problems/numbers-with-repeated-digits/) |  | 数学、动态规划 | 困难 |
| 0902 | [最大为 N 的数字组合](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/) |  | 数组、数学、字符串、二分查找、动态规划 | 困难 |
| 0788 | [旋转数字](https://leetcode.com/problems/rotated-digits/) |  | 数学、动态规划 | 中等 |
| 0600 | [不含连续1的非负整数](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/) |  | 动态规划 | 困难 |
| 0233 | [数字 1 的个数](https://leetcode.com/problems/number-of-digit-one/) |  | 递归、数学、动态规划 | 困难 |
| 2719 | [统计整数数目](https://leetcode.com/problems/count-of-integers/) |  | 数学、字符串、动态规划 | 困难 |
| 0248 | [中心对称数 III](https://leetcode.com/problems/strobogrammatic-number-iii/) |  | 递归、数组、字符串 | 困难 |
| 1088 | [易混淆数 II](https://leetcode.com/problems/confusing-number-ii/) |  | 数学、回溯 | 困难 |
| 1067 | [范围内的数字计数](https://leetcode.com/problems/digit-count-in-range/) |  | 数学、动态规划 | 困难 |
| 1742 | [盒子中小球的最大数量](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/) |  | 哈希表、数学、计数 | 简单 |
| 面试题 17.06 | [2出现的次数](https://leetcode.cn/problems/number-of-2s-in-range-lcci/) |  | 递归、数学、动态规划 | 困难 |

### 概率 DP

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------ | :------ | :------ | :------ | :------ |
| 0688 | [骑士在棋盘上的概率](https://leetcode.com/problems/knight-probability-in-chessboard/) |  | 动态规划 | 中等 |
| 0808 | [分汤](https://leetcode.com/problems/soup-servings/) |  | 数学、动态规划、概率与统计 | 中等 |
| 0837 | [新 21 点](https://leetcode.com/problems/new-21-game/) |  | 数学、动态规划、滑动窗口、概率与统计 | 中等 |
| 1230 | [抛掷硬币](https://leetcode.com/problems/toss-strange-coins/) |  | 数学、动态规划、概率与统计 | 中等 |
| 1467 | [两个盒子中球的颜色数相同的概率](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/) |  | 数组、数学、动态规划、回溯、组合数学、概率与统计 | 困难 |
| 1227 | [飞机座位分配概率](https://leetcode.com/problems/airplane-seat-assignment-probability/) |  | 脑筋急转弯、数学、动态规划、概率与统计 | 中等 |
| 1377 | [T 秒后青蛙的位置](https://leetcode.com/problems/frog-position-after-t-seconds/) |  | 树、深度优先搜索、广度优先搜索、图 | 困难 |
| 剑指 Offer 60 | [n个骰子的点数](https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof/) |  | 数学、动态规划、概率与统计 | 中等 |
