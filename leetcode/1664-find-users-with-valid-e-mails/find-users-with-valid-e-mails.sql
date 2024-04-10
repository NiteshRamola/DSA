-- Write your PostgreSQL query statement below
SELECT * FROM Users WHERE mail ~ '^[a-zA-Z]{1}[a-zA-Z0-9_.-]*@leetcode\.com$';