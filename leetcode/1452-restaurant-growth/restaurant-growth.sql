-- Write your PostgreSQL query statement below
SELECT
    visited_on,
    (
        SELECT SUM(amount)
        FROM customer
        WHERE visited_on BETWEEN (c.visited_on - INTERVAL '6 DAY') AND c.visited_on
    ) AS amount,
    ROUND(
        (
            SELECT SUM(amount) / 7.0
            FROM customer
            WHERE visited_on BETWEEN (c.visited_on - INTERVAL '6 DAY') AND c.visited_on
        ),
        2
    ) AS average_amount
FROM customer c
WHERE visited_on >= (
        SELECT (MIN(visited_on) + INTERVAL '6 DAY')
        FROM customer
    )
GROUP BY visited_on
ORDER BY visited_on;


