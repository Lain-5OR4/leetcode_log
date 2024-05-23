# https://leetcode.com/problems/two-sum-iii-data-structure-design/description/?source=submission-noac

class TwoSum:
    # 2nd - Hashtable O(n)
    def __init__(self):
        self.nums = defaultdict(int)

    def add(self, number: int) -> None:
        self.nums[number] += 1

    def find(self, value: int) -> bool:
        for n in self.nums.keys():
            c = value - n
            if c in self.nums:
                if c == n and self.nums[n] == 1:
                    continue
                return True
        return False

    # 1st - Brute Force + List - O(n2) TIME Exceeded
    # def __init__(self):
    #     self.nums = []

    # def add(self, number: int) -> None:
    #     self.nums.append(number)

    # def find(self, value: int) -> bool:
    #     for i in range(len(self.nums)):
    #         n = self.nums[i]
    #         if value-n in self.nums[i:]:
    #             return True
    #     return False