-- Write your PostgreSQL query statement below
SELECT requester_id AS id,
count(requester_id) AS num
FROM (
    SELECT ra1.requester_id
    FROM RequestAccepted ra1

    UNION ALL

    SELECT accepter_id
    FROM RequestAccepted ra2
)
GROUP BY 1
ORDER BY num DESC 
LIMIT 1;