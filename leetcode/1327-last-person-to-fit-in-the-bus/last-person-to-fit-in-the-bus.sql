-- Write your PostgreSQL query statement below
SELECT person_name
FROM (
    SELECT 
        person_name,
        SUM(weight) OVER (ORDER BY turn) AS total_weight,
        turn
    FROM Queue
) AS cumulative_sum
WHERE total_weight <= 1000
ORDER BY turn DESC
LIMIT 1;
