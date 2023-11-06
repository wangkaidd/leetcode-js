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
[`贪心`](../solution/greedy.md)
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
<span class="blue">组合数学</span>
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
| 0062 | [不同路径](https://leetcode.com/problems/unique-paths/) | [JS](https://2xiao.github.io/leetcode-js/leetcode/problem/0062) | `数学` `动态规划` `组合数学` | <font color=#ffb800>Medium</font> |
| 0458 | [可怜的小猪](https://leetcode.com/problems/poor-pigs/) |  | `数学` `动态规划` `组合数学` | <font color=#ff334b>Hard</font> |
| 0920 | [播放列表的数量](https://leetcode.com/problems/number-of-music-playlists/) |  | `数学` `动态规划` `组合数学` | <font color=#ff334b>Hard</font> |
| 1359 | [有效的快递序列数目](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/) |  | `数学` `动态规划` `组合数学` | <font color=#ff334b>Hard</font> |
| 1467 | [两个盒子中球的颜色数相同的概率](https://leetcode.com/problems/probability-of-a-two-boxes-having-the-same-number-of-distinct-balls/) |  | `数组` `数学` `动态规划` `3+` | <font color=#ff334b>Hard</font> |
| 1569 | [将子数组重新排序得到同一个二叉搜索树的方案数](https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/) |  | `树` `并查集` `二叉搜索树` `7+` | <font color=#ff334b>Hard</font> |
| 1641 | [统计字典序元音字符串的数目](https://leetcode.com/problems/count-sorted-vowel-strings/) |  | `数学` `动态规划` `组合数学` | <font color=#ffb800>Medium</font> |
| 1643 | [第 K 条最小指令](https://leetcode.com/problems/kth-smallest-instructions/) |  | `数组` `数学` `动态规划` `1+` | <font color=#ff334b>Hard</font> |
| 1735 | [生成乘积数组的方案数](https://leetcode.com/problems/count-ways-to-make-array-with-product/) |  | `数组` `数学` `动态规划` `2+` | <font color=#ff334b>Hard</font> |
| 1830 | [使字符串有序的最少操作次数](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/) |  | `数学` `字符串` `组合数学` | <font color=#ff334b>Hard</font> |
| 1863 | [找出所有子集的异或总和再求和](https://leetcode.com/problems/sum-of-all-subset-xor-totals/) |  | `位运算` `数组` `数学` `2+` | <font color=#15bd66>Esay</font> |
| 1866 | [恰有 K 根木棍可以看到的排列数目](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/) |  | `数学` `动态规划` `组合数学` | <font color=#ff334b>Hard</font> |
| 1916 | [统计为蚁群构筑房间的不同顺序](https://leetcode.com/problems/count-ways-to-build-rooms-in-an-ant-colony/) |  | `树` `图` `拓扑排序` `3+` | <font color=#ff334b>Hard</font> |
| 2063 | [所有子字符串中的元音](https://leetcode.com/problems/vowels-of-all-substrings/) |  | `数学` `字符串` `动态规划` `1+` | <font color=#ffb800>Medium</font> |
| 2221 | [数组的三角和](https://leetcode.com/problems/find-triangular-sum-of-an-array/) |  | `数组` `数学` `组合数学` `1+` | <font color=#ffb800>Medium</font> |
| 2338 | [统计理想数组的数目](https://leetcode.com/problems/count-the-number-of-ideal-arrays/) |  | `数学` `动态规划` `组合数学` `1+` | <font color=#ff334b>Hard</font> |
| 2400 | [恰好移动 k 步到达某一位置的方法数目](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/) |  | `数学` `动态规划` `组合数学` | <font color=#ffb800>Medium</font> |
| 2514 | [统计同位异构字符串数目](https://leetcode.com/problems/count-anagrams/) |  | `哈希表` `数学` `字符串` `2+` | <font color=#ff334b>Hard</font> |
| 2539 | [好子序列的个数](https://leetcode.com/problems/count-the-number-of-good-subsequences/) |  | `哈希表` `数学` `字符串` `2+` | <font color=#ffb800>Medium</font> |
| LCP 25 | [古董键盘](https://leetcode.cn/problems/Uh984O/) |  | `数学` `动态规划` `组合数学` | <font color=#ff334b>Hard</font> |
| LCP 37 | [最小矩形面积](https://leetcode.cn/problems/zui-xiao-ju-xing-mian-ji/) |  | `贪心` `几何` `数组` `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 098 | [路径的数目](https://leetcode.cn/problems/2AoeFn/) |  | `数学` `动态规划` `组合数学` | <font color=#ffb800>Medium</font> |