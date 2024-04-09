-- Write your PostgreSQL query statement below
WITH FriendCounts AS (
    SELECT requester_id AS id
    FROM RequestAccepted
    UNION ALL
    SELECT accepter_id AS id
    FROM RequestAccepted
), AggregateCounts AS (
    SELECT id, COUNT(*) AS num
    FROM FriendCounts
    GROUP BY id
), MaxFriendCount AS (
    SELECT MAX(num) AS max_num
    FROM AggregateCounts
)
SELECT a.id, a.num
FROM AggregateCounts a
JOIN MaxFriendCount m ON a.num = m.max_num;