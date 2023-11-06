# 1.5 LeetCode 题解（标签）

**数据结构**

[`数组`](../solution/array.md)
[`矩阵`](../solution/matrix.md)
[`链表`](../solution/linked-list.md)
[`双向链表`](../solution/doubly-linked-list.md)
[`栈`](../solution/stack.md)
[`单调栈`](../solution/monotonic-stack.md)
[`队列`](../solution/queue.md)
[`单调队列`](../solution/monotonic-queue.md)
[`堆（优先队列）`](../solution/heap-priority-queue.md)
[`哈希表`](../solution/hash-table.md)
[`字符串`](../solution/string.md)
[`字符串匹配`](../solution/string-matching.md)
[`树`](../solution/tree.md)
[`二叉树`](../solution/binary-tree.md)
[`二叉搜索树`](../solution/binary-search-tree.md)
[`最小生成树`](../solution/minimum-spanning-tree.md)
[`图`](../solution/graph.md)
[`有序集合`](../solution/ordered-set.md)
[`拓扑排序`](../solution/topological-sort.md)
[`最短路`](../solution/shortest-path.md)
[`强连通分量`](../solution/strongly-connected-components.md)
[`欧拉回路`](../solution/eulerian-circuit.md)
[`双连通分量`](../solution/biconnected-components.md)
[`并查集`](../solution/disjoint-set-union.md)
[`字典树`](../solution/trie.md)
[`线段树`](../solution/segment-tree.md)
[`树状数组`](../solution/fenwick-tree.md)
[`后缀数组`](../solution/suffix-array.md)

**算法**

[`枚举`](../solution/enumeration.md)
[`递归`](../solution/recursion.md)
[`分治`](../solution/divide-and-conquer.md)
[`回溯`](../solution/backtracking.md)
<span class="blue">贪心</span>
[`动态规划`](../solution/dynamic-programming.md)
[`排序`](../solution/sorting.md)
[`桶排序`](../solution/bucket-sort.md)
[`计数排序`](../solution/counting-sort.md)
[`基数排序`](../solution/radix-sort.md)
[`归并排序`](../solution/merge-sort.md)
[`快速选择`](../solution/quick-select.md)
[`二分查找`](../solution/binary-search.md)
[`记忆化搜索`](../solution/memoization.md)
[`深度优先搜索`](../solution/depth-first-search.md)
[`广度优先搜索`](../solution/breadth-first-search.md)
[`双指针`](../solution/two-pointers.md)
[`位运算`](../solution/bit-manipulation.md)
[`前缀和`](../solution/prefix-sum.md)
[`计数`](../solution/counting.md)
[`滑动窗口`](../solution/sliding-window.md)
[`状态压缩`](../solution/state-compression.md)
[`哈希函数`](../solution/hash-function.md)
[`滚动哈希`](../solution/rolling-hash.md)
[`扫描线`](../solution/sweep-line.md)

**其他**

[`数学`](../solution/mathematics.md)
[`数论`](../solution/number-theory.md)
[`几何`](../solution/geometry.md)
[`博弈`](../solution/game-theory.md)
[`模拟`](../solution/simulation.md)
[`组合数学`](../solution/combinatorics.md)
[`随机化`](../solution/randomized-algorithms.md)
[`概率与统计`](../solution/probability-and-statistics.md)
[`水塘抽样`](../solution/reservoir-sampling.md)
[`拒绝采样`](../solution/rejection-sampling.md)
[`数据库`](../solution/database.md)
[`设计`](../solution/design.md)
[`数据流`](../solution/data-streams.md)
[`脑筋急转弯`](../solution/brain-teasers.md)
[`交互`](../solution/interaction.md)
[`迭代器`](../solution/iterators.md)
[`多线程`](../solution/multithreading.md)

<style>
.blue {
    background-color: #3eaf7c;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    border-radius: 3px;
    color: white;
    font-weight: 500;
}
table th:first-of-type { width: 10%; }
table th:nth-of-type(2) { width: 35%; }
table th:nth-of-type(3) { width: 10%; }
table th:nth-of-type(4) { width: 35%; }
table th:nth-of-type(5) { width: 10%; }
</style>


---

| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 0011 | [盛最多水的容器](https://leetcode.com/problems/container-with-most-water/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0011) | `贪心` `数组` `双指针` | <font color=#ffb800>Medium</font> |
| 0044 | [通配符匹配](https://leetcode.com/problems/wildcard-matching/) |  | `贪心` `递归` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 0045 | [跳跃游戏 II](https://leetcode.com/problems/jump-game-ii/) |  | `贪心` `数组` `动态规划` | <font color=#ffb800>Medium</font> |
| 0055 | [跳跃游戏](https://leetcode.com/problems/jump-game/) |  | `贪心` `数组` `动态规划` | <font color=#ffb800>Medium</font> |
| 0122 | [买卖股票的最佳时机 II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 0134 | [加油站](https://leetcode.com/problems/gas-station/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 0135 | [分发糖果](https://leetcode.com/problems/candy/) |  | `贪心` `数组` | <font color=#ff334b>Hard</font> |
| 0179 | [最大数](https://leetcode.com/problems/largest-number/) |  | `贪心` `数组` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0253 | [会议室 II](https://leetcode.com/problems/meeting-rooms-ii/) |  | `贪心` `数组` `双指针` `3+` | <font color=#ffb800>Medium</font> |
| 0277 | [搜寻名人](https://leetcode.com/problems/find-the-celebrity/) |  | `贪心` `图` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0280 | [摆动排序](https://leetcode.com/problems/wiggle-sort/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 0316 | [去除重复字母](https://leetcode.com/problems/remove-duplicate-letters/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0321 | [拼接最大数](https://leetcode.com/problems/create-maximum-number/) |  | `栈` `贪心` `单调栈` | <font color=#ff334b>Hard</font> |
| 0330 | [按要求补齐数组](https://leetcode.com/problems/patching-array/) |  | `贪心` `数组` | <font color=#ff334b>Hard</font> |
| 0334 | [递增的三元子序列](https://leetcode.com/problems/increasing-triplet-subsequence/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 0358 | [K 距离间隔重排字符串](https://leetcode.com/problems/rearrange-string-k-distance-apart/) |  | `贪心` `哈希表` `字符串` `3+` | <font color=#ff334b>Hard</font> |
| 0376 | [摆动序列](https://leetcode.com/problems/wiggle-subsequence/) |  | `贪心` `数组` `动态规划` | <font color=#ffb800>Medium</font> |
| 0397 | [整数替换](https://leetcode.com/problems/integer-replacement/) |  | `贪心` `位运算` `记忆化搜索` `1+` | <font color=#ffb800>Medium</font> |
| 0402 | [移掉 K 位数字](https://leetcode.com/problems/remove-k-digits/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0406 | [根据身高重建队列](https://leetcode.com/problems/queue-reconstruction-by-height/) |  | `贪心` `树状数组` `线段树` `2+` | <font color=#ffb800>Medium</font> |
| 0409 | [最长回文串](https://leetcode.com/problems/longest-palindrome/) |  | `贪心` `哈希表` `字符串` | <font color=#15bd66>Esay</font> |
| 0410 | [分割数组的最大值](https://leetcode.com/problems/split-array-largest-sum/) |  | `贪心` `数组` `二分查找` `2+` | <font color=#ff334b>Hard</font> |
| 0420 | [强密码检验器](https://leetcode.com/problems/strong-password-checker/) |  | `贪心` `字符串` `堆（优先队列）` | <font color=#ff334b>Hard</font> |
| 0435 | [无重叠区间](https://leetcode.com/problems/non-overlapping-intervals/) |  | `贪心` `数组` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 0452 | [用最少数量的箭引爆气球](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 0455 | [分发饼干](https://leetcode.com/problems/assign-cookies/) |  | `贪心` `数组` `双指针` `1+` | <font color=#15bd66>Esay</font> |
| 0484 | [寻找排列](https://leetcode.com/problems/find-permutation/) |  | `栈` `贪心` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0502 | [IPO](https://leetcode.com/problems/ipo/) |  | `贪心` `数组` `排序` `1+` | <font color=#ff334b>Hard</font> |
| 0517 | [超级洗衣机](https://leetcode.com/problems/super-washing-machines/) |  | `贪心` `数组` | <font color=#ff334b>Hard</font> |
| 0527 | [单词缩写](https://leetcode.com/problems/word-abbreviation/) |  | `贪心` `字典树` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0555 | [分割连接字符串](https://leetcode.com/problems/split-concatenated-strings/) |  | `贪心` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0561 | [数组拆分](https://leetcode.com/problems/array-partition/) |  | `贪心` `数组` `计数排序` `1+` | <font color=#15bd66>Esay</font> |
| 0581 | [最短无序连续子数组](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) |  | `栈` `贪心` `数组` `3+` | <font color=#ffb800>Medium</font> |
| 0605 | [种花问题](https://leetcode.com/problems/can-place-flowers/) |  | `贪心` `数组` | <font color=#15bd66>Esay</font> |
| 0611 | [有效三角形的个数](https://leetcode.com/problems/valid-triangle-number/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0611) | `贪心` `数组` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 0621 | [任务调度器](https://leetcode.com/problems/task-scheduler/) |  | `贪心` `数组` `哈希表` `3+` | <font color=#ffb800>Medium</font> |
| 0624 | [数组列表中的最大距离](https://leetcode.com/problems/maximum-distance-in-arrays/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 0625 | [最小因式分解](https://leetcode.com/problems/minimum-factorization/) |  | `贪心` `数学` | <font color=#ffb800>Medium</font> |
| 0630 | [课程表 III](https://leetcode.com/problems/course-schedule-iii/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#ff334b>Hard</font> |
| 0632 | [最小区间](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) |  | `贪心` `数组` `哈希表` `3+` | <font color=#ff334b>Hard</font> |
| 0646 | [最长数对链](https://leetcode.com/problems/maximum-length-of-pair-chain/) |  | `贪心` `数组` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 0649 | [Dota2 参议院](https://leetcode.com/problems/dota2-senate/) |  | `贪心` `队列` `字符串` | <font color=#ffb800>Medium</font> |
| 0659 | [分割数组为连续子序列](https://leetcode.com/problems/split-array-into-consecutive-subsequences/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0670 | [最大交换](https://leetcode.com/problems/maximum-swap/) |  | `贪心` `数学` | <font color=#ffb800>Medium</font> |
| 0678 | [有效的括号字符串](https://leetcode.com/problems/valid-parenthesis-string/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 0680 | [验证回文串 II](https://leetcode.com/problems/valid-palindrome-ii/) |  | `贪心` `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 0714 | [买卖股票的最佳时机含手续费](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 0738 | [单调递增的数字](https://leetcode.com/problems/monotone-increasing-digits/) |  | `贪心` `数学` | <font color=#ffb800>Medium</font> |
| 0757 | [设置交集大小至少为2](https://leetcode.com/problems/set-intersection-size-at-least-two/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 0763 | [划分字母区间](https://leetcode.com/problems/partition-labels/) |  | `贪心` `哈希表` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0765 | [情侣牵手](https://leetcode.com/problems/couples-holding-hands/) |  | `贪心` `深度优先搜索` `广度优先搜索` `2+` | <font color=#ff334b>Hard</font> |
| 0767 | [重构字符串](https://leetcode.com/problems/reorganize-string/) |  | `贪心` `哈希表` `字符串` `3+` | <font color=#ffb800>Medium</font> |
| 0768 | [最多能完成排序的块 II](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/) |  | `栈` `贪心` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 0769 | [最多能完成排序的块](https://leetcode.com/problems/max-chunks-to-make-sorted/) |  | `栈` `贪心` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 0781 | [森林中的兔子](https://leetcode.com/problems/rabbits-in-forest/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0807 | [保持城市天际线](https://leetcode.com/problems/max-increase-to-keep-city-skyline/) |  | `贪心` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 0826 | [安排工作以达到最大收益](https://leetcode.com/problems/most-profit-assigning-work/) |  | `贪心` `数组` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 0846 | [一手顺子](https://leetcode.com/problems/hand-of-straights/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0857 | [雇佣 K 名工人的最低成本](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/) |  | `贪心` `数组` `排序` `1+` | <font color=#ff334b>Hard</font> |
| 0860 | [柠檬水找零](https://leetcode.com/problems/lemonade-change/) |  | `贪心` `数组` | <font color=#15bd66>Esay</font> |
| 0861 | [翻转矩阵后的得分](https://leetcode.com/problems/score-after-flipping-matrix/) |  | `贪心` `位运算` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 0870 | [优势洗牌](https://leetcode.com/problems/advantage-shuffle/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0871 | [最低加油次数](https://leetcode.com/problems/minimum-number-of-refueling-stops/) |  | `贪心` `数组` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 0881 | [救生艇](https://leetcode.com/problems/boats-to-save-people/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0910 | [最小差值 II](https://leetcode.com/problems/smallest-range-ii/) |  | `贪心` `数组` `数学` `1+` | <font color=#ffb800>Medium</font> |
| 0921 | [使括号有效的最少添加](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 0936 | [戳印序列](https://leetcode.com/problems/stamping-the-sequence/) |  | `栈` `贪心` `队列` `1+` | <font color=#ff334b>Hard</font> |
| 0942 | [增减字符串匹配](https://leetcode.com/problems/di-string-match/) |  | `贪心` `数组` `双指针` `1+` | <font color=#15bd66>Esay</font> |
| 0945 | [使数组唯一的最小增量](https://leetcode.com/problems/minimum-increment-to-make-array-unique/) |  | `贪心` `数组` `计数` `1+` | <font color=#ffb800>Medium</font> |
| 0948 | [令牌放置](https://leetcode.com/problems/bag-of-tokens/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0954 | [二倍数对数组](https://leetcode.com/problems/array-of-doubled-pairs/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 0955 | [删列造序 II](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/) |  | `贪心` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 0969 | [煎饼排序](https://leetcode.com/problems/pancake-sorting/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 0976 | [三角形的最大周长](https://leetcode.com/problems/largest-perimeter-triangle/) |  | `贪心` `数组` `数学` `1+` | <font color=#15bd66>Esay</font> |
| 0984 | [不含 AAA 或 BBB 的字符串](https://leetcode.com/problems/string-without-aaa-or-bbb/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 0991 | [坏了的计算器](https://leetcode.com/problems/broken-calculator/) |  | `贪心` `数学` | <font color=#ffb800>Medium</font> |
| 1005 | [K 次取反后最大化的数组和](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1007 | [行相等的最少多米诺旋转](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 1013 | [将数组分成和相等的三个部分](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/) |  | `贪心` `数组` | <font color=#15bd66>Esay</font> |
| 1024 | [视频拼接](https://leetcode.com/problems/video-stitching/) |  | `贪心` `数组` `动态规划` | <font color=#ffb800>Medium</font> |
| 1029 | [两地调度](https://leetcode.com/problems/two-city-scheduling/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1053 | [交换一次的先前排列](https://leetcode.com/problems/previous-permutation-with-one-swap/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 1054 | [距离相等的条形码](https://leetcode.com/problems/distant-barcodes/) |  | `贪心` `数组` `哈希表` `3+` | <font color=#ffb800>Medium</font> |
| 1055 | [形成字符串的最短路径](https://leetcode.com/problems/shortest-way-to-form-string/) |  | `贪心` `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 1057 | [校园自行车分配](https://leetcode.com/problems/campus-bikes/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1058 | [最小化舍入误差以满足目标](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/) |  | `贪心` `数组` `数学` `1+` | <font color=#ffb800>Medium</font> |
| 1081 | [不同字符的最小子序列](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1090 | [受标签影响的最大值](https://leetcode.com/problems/largest-values-from-labels/) |  | `贪心` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 1121 | [将数组分成几个递增序列](https://leetcode.com/problems/divide-array-into-increasing-sequences/) |  | `贪心` `数组` | <font color=#ff334b>Hard</font> |
| 1130 | [叶值的最小代价生成树](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/) |  | `栈` `贪心` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 1144 | [递减元素使数组呈锯齿状](https://leetcode.com/problems/decrease-elements-to-make-array-zigzag/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 1147 | [段式回文](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/) |  | `贪心` `双指针` `字符串` `3+` | <font color=#ff334b>Hard</font> |
| 1167 | [连接棒材的最低费用](https://leetcode.com/problems/minimum-cost-to-connect-sticks/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 1183 | [矩阵中 1 的最大数量](https://leetcode.com/problems/maximum-number-of-ones/) |  | `贪心` `堆（优先队列）` | <font color=#ff334b>Hard</font> |
| 1196 | [最多可以买到的苹果数量](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1199 | [建造街区的最短时间](https://leetcode.com/problems/minimum-time-to-build-blocks/) |  | `贪心` `数学` `堆（优先队列）` | <font color=#ff334b>Hard</font> |
| 1217 | [玩筹码](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/) |  | `贪心` `数组` `数学` | <font color=#15bd66>Esay</font> |
| 1221 | [分割平衡字符串](https://leetcode.com/problems/split-a-string-in-balanced-strings/) |  | `贪心` `字符串` `计数` | <font color=#15bd66>Esay</font> |
| 1247 | [交换字符使得字符串相同](https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/) |  | `贪心` `数学` `字符串` | <font color=#ffb800>Medium</font> |
| 1253 | [重构 2 行二进制矩阵](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/) |  | `贪心` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 1262 | [可被三整除的最大和](https://leetcode.com/problems/greatest-sum-divisible-by-three/) |  | `贪心` `数组` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 1296 | [划分数组为连续数字的集合](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1323 | [6 和 9 组成的最大数字](https://leetcode.com/problems/maximum-69-number/) |  | `贪心` `数学` | <font color=#15bd66>Esay</font> |
| 1326 | [灌溉花园的最少水龙头数目](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/) |  | `贪心` `数组` `动态规划` | <font color=#ff334b>Hard</font> |
| 1328 | [破坏回文串](https://leetcode.com/problems/break-a-palindrome/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1330 | [翻转子数组得到最大的数组值](https://leetcode.com/problems/reverse-subarray-to-maximize-array-value/) |  | `贪心` `数组` `数学` | <font color=#ff334b>Hard</font> |
| 1338 | [数组大小减半](https://leetcode.com/problems/reduce-array-size-to-the-half/) |  | `贪心` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 1353 | [最多可以参加的会议数目](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) |  | `贪心` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 1363 | [形成三的最大倍数](https://leetcode.com/problems/largest-multiple-of-three/) |  | `贪心` `数组` `动态规划` | <font color=#ff334b>Hard</font> |
| 1382 | [将二叉搜索树变平衡](https://leetcode.com/problems/balance-a-binary-search-tree/) |  | `贪心` `树` `深度优先搜索` `3+` | <font color=#ffb800>Medium</font> |
| 1383 | [最大的团队表现值](https://leetcode.com/problems/maximum-performance-of-a-team/) |  | `贪心` `数组` `排序` `1+` | <font color=#ff334b>Hard</font> |
| 1386 | [安排电影院座位](https://leetcode.com/problems/cinema-seat-allocation/) |  | `贪心` `位运算` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 1388 | [3n 块披萨](https://leetcode.com/problems/pizza-with-3n-slices/) |  | `贪心` `数组` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 1400 | [构造 K 个回文字符串](https://leetcode.com/problems/construct-k-palindrome-strings/) |  | `贪心` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1402 | [做菜顺序](https://leetcode.com/problems/reducing-dishes/) |  | `贪心` `数组` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 1403 | [非递增顺序的最小子序列](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1405 | [最长快乐字符串](https://leetcode.com/problems/longest-happy-string/) |  | `贪心` `字符串` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 1414 | [和为 K 的最少斐波那契数字数目](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/) |  | `贪心` `数学` | <font color=#ffb800>Medium</font> |
| 1432 | [改变一个整数能得到的最大差值](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/) |  | `贪心` `数学` | <font color=#ffb800>Medium</font> |
| 1433 | [检查一个字符串是否可以打破另一个字符串](https://leetcode.com/problems/check-if-a-string-can-break-another-string/) |  | `贪心` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 1465 | [切割后面积最大的蛋糕](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1481 | [不同整数的最少数目](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/) |  | `贪心` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 1488 | [避免洪水泛滥](https://leetcode.com/problems/avoid-flood-in-the-city/) |  | `贪心` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 1505 | [最多 K 次交换相邻数位后得到的最小整数](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/) |  | `贪心` `树状数组` `线段树` `1+` | <font color=#ff334b>Hard</font> |
| 1509 | [三次操作后最大值与最小值的最小差](https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1520 | [最多的不重叠子字符串](https://leetcode.com/problems/maximum-number-of-non-overlapping-substrings/) |  | `贪心` `字符串` | <font color=#ff334b>Hard</font> |
| 1526 | [形成目标数组的子数组最少增加次数](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/) |  | `栈` `贪心` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 1529 | [最少的后缀翻转次数](https://leetcode.com/problems/minimum-suffix-flips/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1536 | [排布二进制网格的最少交换次数](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/) |  | `贪心` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 1537 | [最大得分](https://leetcode.com/problems/get-the-maximum-score/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ff334b>Hard</font> |
| 1541 | [平衡括号字符串的最少插入次数](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1546 | [和为目标值且不重叠的非空子数组的最大数目](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1558 | [得到目标数组的最少函数调用次数](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/) |  | `贪心` `位运算` `数组` | <font color=#ffb800>Medium</font> |
| 1561 | [你可以获得的最大硬币数目](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/) |  | `贪心` `数组` `数学` `2+` | <font color=#ffb800>Medium</font> |
| 1564 | [把箱子放进仓库里 I](https://leetcode.com/problems/put-boxes-into-the-warehouse-i/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1567 | [乘积为正数的最长子数组长度](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/) |  | `贪心` `数组` `动态规划` | <font color=#ffb800>Medium</font> |
| 1578 | [使绳子变成彩色的最短时间](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/) |  | `贪心` `数组` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1580 | [把箱子放进仓库里 II](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1585 | [检查字符串是否可以通过排序子字符串得到另一个字符串](https://leetcode.com/problems/check-if-string-is-transformable-with-substring-sort-operations/) |  | `贪心` `字符串` `排序` | <font color=#ff334b>Hard</font> |
| 1589 | [所有排列中的最大和](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/) |  | `贪心` `数组` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 1605 | [给定行和列的和求可行矩阵](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/) |  | `贪心` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 1606 | [找到处理最多请求的服务器](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/) |  | `贪心` `数组` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 1632 | [矩阵转换后的秩](https://leetcode.com/problems/rank-transform-of-a-matrix/) |  | `贪心` `并查集` `图` `3+` | <font color=#ff334b>Hard</font> |
| 1642 | [可以到达的最远建筑](https://leetcode.com/problems/furthest-building-you-can-reach/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 1647 | [字符频次唯一的最小删除次数](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) |  | `贪心` `哈希表` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 1648 | [销售价值减少的颜色球](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/) |  | `贪心` `数组` `数学` `3+` | <font color=#ffb800>Medium</font> |
| 1663 | [具有给定数值的最小字符串](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1665 | [完成所有任务的最少初始能量](https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 1671 | [得到山形数组的最少删除次数](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/) |  | `贪心` `数组` `二分查找` `1+` | <font color=#ff334b>Hard</font> |
| 1673 | [找出最具竞争力的子序列](https://leetcode.com/problems/find-the-most-competitive-subsequence/) |  | `栈` `贪心` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 1675 | [数组的最小偏移量](https://leetcode.com/problems/minimize-deviation-in-array/) |  | `贪心` `数组` `有序集合` `1+` | <font color=#ff334b>Hard</font> |
| 1686 | [石子游戏 VI](https://leetcode.com/problems/stone-game-vi/) |  | `贪心` `数组` `数学` `3+` | <font color=#ffb800>Medium</font> |
| 1689 | [十-二进制数的最少数目](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1702 | [修改后的最大二进制字符串](https://leetcode.com/problems/maximum-binary-string-after-change/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1703 | [得到连续 K 个 1 的最少相邻交换次数](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/) |  | `贪心` `数组` `前缀和` `1+` | <font color=#ff334b>Hard</font> |
| 1705 | [吃苹果的最大数目](https://leetcode.com/problems/maximum-number-of-eaten-apples/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 1708 | [长度为 K 的最大子数组](https://leetcode.com/problems/largest-subarray-length-k/) |  | `贪心` `数组` | <font color=#15bd66>Esay</font> |
| 1710 | [卡车上的最大单元数](https://leetcode.com/problems/maximum-units-on-a-truck/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| 1713 | [得到子序列的最少操作次数](https://leetcode.com/problems/minimum-operations-to-make-a-subsequence/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 1717 | [删除子字符串的最大得分](https://leetcode.com/problems/maximum-score-from-removing-substrings/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1727 | [重新排列后的最大子矩阵](https://leetcode.com/problems/largest-submatrix-with-rearrangements/) |  | `贪心` `数组` `矩阵` `1+` | <font color=#ffb800>Medium</font> |
| 1733 | [需要教语言的最少人数](https://leetcode.com/problems/minimum-number-of-people-to-teach/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 1736 | [替换隐藏数字得到的最晚时间](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/) |  | `贪心` `字符串` | <font color=#15bd66>Esay</font> |
| 1739 | [放置盒子](https://leetcode.com/problems/building-boxes/) |  | `贪心` `数学` `二分查找` | <font color=#ff334b>Hard</font> |
| 1753 | [移除石子的最大得分](https://leetcode.com/problems/maximum-score-from-removing-stones/) |  | `贪心` `数学` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 1754 | [构造字典序最大的合并字符串](https://leetcode.com/problems/largest-merge-of-two-strings/) |  | `贪心` `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 1764 | [通过连接另一个数组的子数组得到一个数组](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/) |  | `贪心` `数组` `字符串匹配` | <font color=#ffb800>Medium</font> |
| 1775 | [通过最少操作次数使数组的和相等](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 1785 | [构成特定和需要添加的最少元素](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 1788 | [最大化花园的美观度](https://leetcode.com/problems/maximize-the-beauty-of-the-garden/) |  | `贪心` `数组` `前缀和` | <font color=#ff334b>Hard</font> |
| 1792 | [最大平均通过率](https://leetcode.com/problems/maximum-average-pass-ratio/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 1794 | [统计距离最小的子串对个数](https://leetcode.com/problems/count-pairs-of-equal-substrings-with-minimum-difference/) |  | `贪心` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 1798 | [你能构造出连续值的最大数目](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 1802 | [有界数组中指定下标处的最大值](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/) |  | `贪心` `二分查找` | <font color=#ffb800>Medium</font> |
| 1824 | [最少侧跳次数](https://leetcode.com/problems/minimum-sideway-jumps/) |  | `贪心` `数组` `动态规划` | <font color=#ffb800>Medium</font> |
| 1827 | [最少操作使数组递增](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/) |  | `贪心` `数组` | <font color=#15bd66>Esay</font> |
| 1833 | [雪糕的最大数量](https://leetcode.com/problems/maximum-ice-cream-bars/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1838 | [最高频元素的频数](https://leetcode.com/problems/frequency-of-the-most-frequent-element/) |  | `贪心` `数组` `二分查找` `3+` | <font color=#ffb800>Medium</font> |
| 1846 | [减小和重新排列数组后的最大元素](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1850 | [邻位交换的最小次数](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/) |  | `贪心` `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 1855 | [下标对中的最大距离](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 1864 | [构成交替字符串需要的最小交换次数](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1874 | [两个数组的最小乘积和](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1877 | [数组中最大数对和的最小值](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 1881 | [插入后的最大值](https://leetcode.com/problems/maximum-value-after-insertion/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 1888 | [使二进制字符串字符交替的最少反转次数](https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/) |  | `贪心` `字符串` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 1899 | [合并若干三元组以形成目标三元组](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 1903 | [字符串中的最大奇数](https://leetcode.com/problems/largest-odd-number-in-string/) |  | `贪心` `数学` `字符串` | <font color=#15bd66>Esay</font> |
| 1921 | [消灭怪物的最大数量](https://leetcode.com/problems/eliminate-maximum-number-of-monsters/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1927 | [求和游戏](https://leetcode.com/problems/sum-game/) |  | `贪心` `数学` `博弈` | <font color=#ffb800>Medium</font> |
| 1936 | [新增的最少台阶数](https://leetcode.com/problems/add-minimum-number-of-rungs/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 1946 | [子字符串突变后可能得到的最大整数](https://leetcode.com/problems/largest-number-after-mutating-substring/) |  | `贪心` `数组` `字符串` | <font color=#ffb800>Medium</font> |
| 1953 | [你可以工作的最大周数](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 1963 | [使字符串平衡的最小交换次数](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/) |  | `栈` `贪心` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 1968 | [构造元素不等于两相邻元素平均值的数组](https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 1969 | [数组元素的最小非零乘积](https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements/) |  | `贪心` `递归` `数学` | <font color=#ffb800>Medium</font> |
| 1974 | [使用特殊打字机键入单词的最少时间](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/) |  | `贪心` `字符串` | <font color=#15bd66>Esay</font> |
| 1975 | [最大方阵和](https://leetcode.com/problems/maximum-matrix-sum/) |  | `贪心` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 1989 | [捉迷藏中可捕获的最大人数](https://leetcode.com/problems/maximum-number-of-people-that-can-be-caught-in-tag/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 1996 | [游戏中弱角色的数量](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/) |  | `栈` `贪心` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 2007 | [从双倍数组中还原原数组](https://leetcode.com/problems/find-original-array-from-doubled-array/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2014 | [重复 K 次的最长子序列](https://leetcode.com/problems/longest-subsequence-repeated-k-times/) |  | `贪心` `字符串` `回溯` `2+` | <font color=#ff334b>Hard</font> |
| 2015 | [每段建筑物的平均高度](https://leetcode.com/problems/average-height-of-buildings-in-each-segment/) |  | `贪心` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2027 | [转换字符串的最少操作次数](https://leetcode.com/problems/minimum-moves-to-convert-string/) |  | `贪心` `字符串` | <font color=#15bd66>Esay</font> |
| 2029 | [石子游戏 IX](https://leetcode.com/problems/stone-game-ix/) |  | `贪心` `数组` `数学` `2+` | <font color=#ffb800>Medium</font> |
| 2030 | [含特定字母的最小子序列](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2038 | [如果相邻两个颜色均相同则删除当前颜色](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/) |  | `贪心` `数学` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2071 | [你可以安排的最多任务数目](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/) |  | `贪心` `队列` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 2078 | [两栋颜色不同且距离最远的房子](https://leetcode.com/problems/two-furthest-houses-with-different-colors/) |  | `贪心` `数组` | <font color=#15bd66>Esay</font> |
| 2086 | [从房屋收集雨水需要的最少水桶数](https://leetcode.com/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/) |  | `贪心` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 2087 | [网格图中机器人回家的最小代价](https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid/) |  | `贪心` `数组` `矩阵` | <font color=#ffb800>Medium</font> |
| 2091 | [从数组中移除最大值和最小值](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 2098 | [长度为 K 的最大偶数和子序列](https://leetcode.com/problems/subsequence-of-size-k-with-the-largest-even-sum/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2116 | [判断一个括号字符串是否有效](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/) |  | `栈` `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 2126 | [摧毁小行星](https://leetcode.com/problems/destroying-asteroids/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2131 | [连接两字母单词得到的最长回文串](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/) |  | `贪心` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 2132 | [用邮票贴满网格图](https://leetcode.com/problems/stamping-the-grid/) |  | `贪心` `数组` `矩阵` `1+` | <font color=#ff334b>Hard</font> |
| 2136 | [全部开花的最早一天](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 2139 | [得到目标值的最少行动次数](https://leetcode.com/problems/minimum-moves-to-reach-target-score/) |  | `贪心` `数学` | <font color=#ffb800>Medium</font> |
| 2141 | [同时运行 N 台电脑的最长时间](https://leetcode.com/problems/maximum-running-time-of-n-computers/) |  | `贪心` `数组` `二分查找` `1+` | <font color=#ff334b>Hard</font> |
| 2144 | [打折购买糖果的最小开销](https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| 2160 | [拆分数位后四位数字的最小和](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/) |  | `贪心` `数学` `排序` | <font color=#15bd66>Esay</font> |
| 2170 | [使数组变成交替数组的最少操作数](https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2178 | [拆分成最多数目的正偶数之和](https://leetcode.com/problems/maximum-split-of-positive-even-integers/) |  | `贪心` `数学` `回溯` | <font color=#ffb800>Medium</font> |
| 2182 | [构造限制重复的字符串](https://leetcode.com/problems/construct-string-with-repeat-limit/) |  | `贪心` `字符串` `计数` `1+` | <font color=#ffb800>Medium</font> |
| 2193 | [得到回文串的最少操作次数](https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/) |  | `贪心` `树状数组` `双指针` `1+` | <font color=#ff334b>Hard</font> |
| 2195 | [向数组中追加 K 个整数](https://leetcode.com/problems/append-k-integers-with-minimal-sum/) |  | `贪心` `数组` `数学` `1+` | <font color=#ffb800>Medium</font> |
| 2202 | [K 次操作后最大化顶端元素](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 2207 | [字符串中最多数目的子字符串](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/) |  | `贪心` `字符串` `前缀和` | <font color=#ffb800>Medium</font> |
| 2208 | [将数组和减半的最少操作次数](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 2214 | [通关游戏所需的最低生命值](https://leetcode.com/problems/minimum-health-to-beat-game/) |  | `贪心` `数组` `前缀和` | <font color=#ffb800>Medium</font> |
| 2216 | [美化数组的最少删除数](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/) |  | `栈` `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 2224 | [转化时间需要的最少操作数](https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/) |  | `贪心` `字符串` | <font color=#15bd66>Esay</font> |
| 2233 | [K 次增加后的最大乘积](https://leetcode.com/problems/maximum-product-after-k-increments/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 2234 | [花园的最大总美丽值](https://leetcode.com/problems/maximum-total-beauty-of-the-gardens/) |  | `贪心` `数组` `双指针` `2+` | <font color=#ff334b>Hard</font> |
| 2241 | [设计一个 ATM 机器](https://leetcode.com/problems/design-an-atm-machine/) |  | `贪心` `设计` `数组` | <font color=#ffb800>Medium</font> |
| 2244 | [完成所有任务需要的最少轮数](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2259 | [移除指定数字得到的最大结果](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/) |  | `贪心` `字符串` `枚举` | <font color=#15bd66>Esay</font> |
| 2263 | [数组变为有序的最小操作次数](https://leetcode.com/problems/make-array-non-decreasing-or-non-increasing/) |  | `贪心` `动态规划` | <font color=#ff334b>Hard</font> |
| 2268 | [最少按键次数](https://leetcode.com/problems/minimum-number-of-keypresses/) |  | `贪心` `数组` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| 2271 | [毯子覆盖的最多白色砖块数](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/) |  | `贪心` `数组` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 2279 | [装满石头的背包的最大数量](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2285 | [道路的最大总重要性](https://leetcode.com/problems/maximum-total-importance-of-roads/) |  | `贪心` `图` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2294 | [划分数组使最大差为 K](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2310 | [个位数字为 K 的整数之和](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/) |  | `贪心` `数学` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 2311 | [小于等于 K 的最长二进制子序列](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/) |  | `贪心` `记忆化搜索` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2323 | [完成所有工作的最短时间 II](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2335 | [装满杯子需要的最短总时长](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/) |  | `贪心` `数组` `排序` `1+` | <font color=#15bd66>Esay</font> |
| 2340 | [生成有效数组的最少交换次数](https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/) |  | `贪心` `数组` | <font color=#ffb800>Medium</font> |
| 2350 | [不可能得到的最短骰子序列](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/) |  | `贪心` `数组` `哈希表` | <font color=#ff334b>Hard</font> |
| 2357 | [使数组中所有元素都等于零](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/) |  | `贪心` `数组` `哈希表` `3+` | <font color=#15bd66>Esay</font> |
| 2358 | [分组的最大数量](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/) |  | `贪心` `数组` `数学` `1+` | <font color=#ffb800>Medium</font> |
| 2366 | [将数组排序的最少替换次数](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/) |  | `贪心` `数组` `数学` | <font color=#ff334b>Hard</font> |
| 2371 | [最小化网格中的最大值](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/) |  | `贪心` `并查集` `图` `4+` | <font color=#ff334b>Hard</font> |
| 2375 | [根据模式串构造最小数字](https://leetcode.com/problems/construct-smallest-number-from-di-string/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2383 | [赢得比赛需要的最少训练时长](https://leetcode.com/problems/minimum-hours-of-training-to-win-a-competition/) |  | `贪心` `数组` | <font color=#15bd66>Esay</font> |
| 2384 | [最大回文数字](https://leetcode.com/problems/largest-palindromic-number/) |  | `贪心` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 2389 | [和有限的最长子序列](https://leetcode.com/problems/longest-subsequence-with-limited-sum/) |  | `贪心` `数组` `二分查找` `2+` | <font color=#15bd66>Esay</font> |
| 2405 | [子字符串的最优划分](https://leetcode.com/problems/optimal-partition-of-string/) |  | `贪心` `哈希表` `字符串` | <font color=#ffb800>Medium</font> |
| 2406 | [将区间分为最少组数](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/) |  | `贪心` `数组` `双指针` `3+` | <font color=#ffb800>Medium</font> |
| 2410 | [运动员和训练师的最大匹配数](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 2412 | [完成所有交易的初始最少钱数](https://leetcode.com/problems/minimum-money-required-before-transactions/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 2422 | [使用合并操作将数组转换为回文序列](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/) |  | `贪心` `数组` `双指针` | <font color=#ffb800>Medium</font> |
| 2429 | [最小 XOR](https://leetcode.com/problems/minimize-xor/) |  | `贪心` `位运算` | <font color=#ffb800>Medium</font> |
| 2434 | [使用机器人打印字典序最小的字符串](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/) |  | `栈` `贪心` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2436 | [使子数组最大公约数大于一的最小分割数](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/) |  | `贪心` `数组` `数学` `2+` | <font color=#ffb800>Medium</font> |
| 2439 | [最小化数组中的最大值](https://leetcode.com/problems/minimize-maximum-of-array/) |  | `贪心` `数组` `二分查找` `2+` | <font color=#ffb800>Medium</font> |
| 2448 | [使数组相等的最小开销](https://leetcode.com/problems/minimum-cost-to-make-array-equal/) |  | `贪心` `数组` `二分查找` `2+` | <font color=#ff334b>Hard</font> |
| 2449 | [使数组相似的最少操作次数](https://leetcode.com/problems/minimum-number-of-operations-to-make-arrays-similar/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 2457 | [美丽整数的最小增量](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/) |  | `贪心` `数学` | <font color=#ffb800>Medium</font> |
| 2459 | [通过移动项目到空白区域来排序数组](https://leetcode.com/problems/sort-array-by-moving-items-to-empty-space/) |  | `贪心` `数组` `排序` | <font color=#ff334b>Hard</font> |
| 2486 | [追加字符以获得子序列](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/) |  | `贪心` `双指针` `字符串` | <font color=#ffb800>Medium</font> |
| 2497 | [图中最大星和](https://leetcode.com/problems/maximum-star-sum-of-a-graph/) |  | `贪心` `图` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 2498 | [青蛙过河 II](https://leetcode.com/problems/frog-jump-ii/) |  | `贪心` `数组` `二分查找` | <font color=#ffb800>Medium</font> |
| 2499 | [让数组不相等的最小总代价](https://leetcode.com/problems/minimum-total-cost-to-make-arrays-unequal/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ff334b>Hard</font> |
| 2522 | [将字符串分割成值不超过 K 的子字符串](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/) |  | `贪心` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 2528 | [最大化城市的最小供电站数目](https://leetcode.com/problems/maximize-the-minimum-powered-city/) |  | `贪心` `队列` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 2530 | [执行 K 次操作后的最大分数](https://leetcode.com/problems/maximal-score-after-applying-k-operations/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 2541 | [使数组中所有元素相等的最小操作数 II](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/) |  | `贪心` `数组` `数学` | <font color=#ffb800>Medium</font> |
| 2542 | [最大子序列的分数](https://leetcode.com/problems/maximum-subsequence-score/) |  | `贪心` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2548 | [填满背包的最大价格](https://leetcode.com/problems/maximum-price-to-fill-a-bag/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2551 | [将珠子放入背包中](https://leetcode.com/problems/put-marbles-in-bags/) |  | `贪心` `数组` `排序` `1+` | <font color=#ff334b>Hard</font> |
| 2554 | [从一个范围内选择最多整数 I](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/) |  | `贪心` `数组` `哈希表` `2+` | <font color=#ffb800>Medium</font> |
| 2557 | [从一个范围内选择最多整数 II](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/) |  | `贪心` `数组` `二分查找` `1+` | <font color=#ffb800>Medium</font> |
| 2561 | [重排水果](https://leetcode.com/problems/rearranging-fruits/) |  | `贪心` `数组` `哈希表` | <font color=#ff334b>Hard</font> |
| 2566 | [替换一个数字后的最大差值](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/) |  | `贪心` `数学` | <font color=#15bd66>Esay</font> |
| 2567 | [修改两个元素的最小分数](https://leetcode.com/problems/minimum-score-by-changing-two-elements/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 2571 | [将整数减少到零需要的最少操作数](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/) |  | `贪心` `位运算` `动态规划` | <font color=#ffb800>Medium</font> |
| 2573 | [找出对应 LCP 矩阵的字符串](https://leetcode.com/problems/find-the-string-with-lcp/) |  | `贪心` `并查集` `字符串` `1+` | <font color=#ff334b>Hard</font> |
| 2576 | [求出最多标记下标](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/) |  | `贪心` `数组` `双指针` `2+` | <font color=#ffb800>Medium</font> |
| 2578 | [最小和分割](https://leetcode.com/problems/split-with-minimum-sum/) |  | `贪心` `数学` `排序` | <font color=#15bd66>Esay</font> |
| 2587 | [重排数组以得到最大前缀分数](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/) |  | `贪心` `数组` `前缀和` `1+` | <font color=#ffb800>Medium</font> |
| 2589 | [完成所有任务的最少时间](https://leetcode.com/problems/minimum-time-to-complete-all-tasks/) |  | `栈` `贪心` `数组` `2+` | <font color=#ff334b>Hard</font> |
| 2591 | [将钱分给最多的儿童](https://leetcode.com/problems/distribute-money-to-maximum-children/) |  | `贪心` `数学` | <font color=#15bd66>Esay</font> |
| 2592 | [最大化数组的伟大值](https://leetcode.com/problems/maximize-greatness-of-an-array/) |  | `贪心` `数组` `双指针` `1+` | <font color=#ffb800>Medium</font> |
| 2598 | [执行操作后的最大 MEX](https://leetcode.com/problems/smallest-missing-non-negative-integer-after-operations/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#ffb800>Medium</font> |
| 2599 | [使前缀和数组非负](https://leetcode.com/problems/make-the-prefix-sum-non-negative/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| 2600 | [K 件物品的最大和](https://leetcode.com/problems/k-items-with-the-maximum-sum/) |  | `贪心` `数学` | <font color=#15bd66>Esay</font> |
| 2601 | [质数减法运算](https://leetcode.com/problems/prime-subtraction-operation/) |  | `贪心` `数组` `数学` `2+` | <font color=#ffb800>Medium</font> |
| 2611 | [老鼠和奶酪](https://leetcode.com/problems/mice-and-cheese/) |  | `贪心` `数组` `排序` `1+` | <font color=#ffb800>Medium</font> |
| 2616 | [最小化数对的最大差值](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/) |  | `贪心` `数组` `二分查找` | <font color=#ffb800>Medium</font> |
| 2645 | [构造有效字符串的最少插入数](https://leetcode.com/problems/minimum-additions-to-make-valid-string/) |  | `栈` `贪心` `字符串` `1+` | <font color=#ffb800>Medium</font> |
| 2656 | [K 个元素的最大和](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/) |  | `贪心` `数组` | <font color=#15bd66>Esay</font> |
| 2659 | [将数组清空](https://leetcode.com/problems/make-array-empty/) |  | `贪心` `树状数组` `线段树` `4+` | <font color=#ff334b>Hard</font> |
| 2663 | [字典序最小的美丽字符串](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/) |  | `贪心` `字符串` | <font color=#ff334b>Hard</font> |
| 2673 | [使二叉树所有路径值相等的最小代价](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/) |  | `贪心` `树` `数组` `2+` | <font color=#ffb800>Medium</font> |
| 2680 | [最大或值](https://leetcode.com/problems/maximum-or/) |  | `贪心` `位运算` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 2708 | [一个小组的最大实力值](https://leetcode.com/problems/maximum-strength-of-a-group/) |  | `贪心` `递归` `数组` `1+` | <font color=#ffb800>Medium</font> |
| 2712 | [使所有字符相等的最小成本](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/) |  | `贪心` `字符串` `动态规划` | <font color=#ffb800>Medium</font> |
| 2732 | [找到矩阵中的好子集](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/) |  | `贪心` `位运算` `数组` `1+` | <font color=#ff334b>Hard</font> |
| 2734 | [执行子串操作后的字典序最小字符串](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/) |  | `贪心` `字符串` | <font color=#ffb800>Medium</font> |
| 2745 | [构造最长的新字符串](https://leetcode.com/problems/construct-the-longest-new-string/) |  | `贪心` `脑筋急转弯` `数学` | <font color=#ffb800>Medium</font> |
| LCP 15 | [游乐园的迷宫](https://leetcode.cn/problems/you-le-yuan-de-mi-gong/) |  | `贪心` `几何` `数组` `1+` | <font color=#ff334b>Hard</font> |
| LCP 30 | [魔塔游戏](https://leetcode.cn/problems/p0NxJO/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#ffb800>Medium</font> |
| LCP 32 | [批量处理任务](https://leetcode.cn/problems/t3fKg1/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#ff334b>Hard</font> |
| LCP 33 | [蓄水](https://leetcode.cn/problems/o8SXZn/) |  | `贪心` `数组` `堆（优先队列）` | <font color=#15bd66>Esay</font> |
| LCP 37 | [最小矩形面积](https://leetcode.cn/problems/zui-xiao-ju-xing-mian-ji/) |  | `贪心` `几何` `数组` `3+` | <font color=#ff334b>Hard</font> |
| LCP 40 | [心算挑战](https://leetcode.cn/problems/uOAnQW/) |  | `贪心` `数组` `排序` | <font color=#15bd66>Esay</font> |
| LCS 01 | [下载插件](https://leetcode.cn/problems/Ju9Xwi/) |  | `贪心` `数学` `动态规划` | <font color=#15bd66>Esay</font> |
| LCS 02 | [完成一半题目](https://leetcode.cn/problems/WqXACV/) |  | `贪心` `数组` `哈希表` `1+` | <font color=#15bd66>Esay</font> |
| 剑指 Offer 45 | [把数组排成最小的数](https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/) |  | `贪心` `字符串` `排序` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 019 | [最多删除一个字符得到回文](https://leetcode.cn/problems/RQku0D/) |  | `贪心` `双指针` `字符串` | <font color=#15bd66>Esay</font> |
| 面试题 10.11 | [峰与谷](https://leetcode.cn/problems/peaks-and-valleys-lcci/) |  | `贪心` `数组` `排序` | <font color=#ffb800>Medium</font> |
| 面试题 16.16 | [部分排序](https://leetcode.cn/problems/sub-sort-lcci/) |  | `栈` `贪心` `数组` `3+` | <font color=#ffb800>Medium</font> |