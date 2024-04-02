-- Write your PostgreSQL query statement below
SELECT
    ROUND(100 * SUM(CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END)::numeric / COUNT(DISTINCT customer_id)::numeric, 2) AS immediate_percentage
FROM
    Delivery
WHERE
    (customer_id, order_date) IN
    (SELECT
        customer_id, min(order_date) AS min_date
    FROM
        Delivery
    GROUP BY
        customer_id);
