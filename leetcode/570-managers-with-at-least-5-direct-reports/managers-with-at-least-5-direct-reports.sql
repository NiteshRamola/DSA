-- Write your PostgreSQL query statement below
SELECT m.name FROM Employee e JOIN Employee m ON e.managerid = m.id GROUP BY m.id, m.name HAVING COUNT(*) >= 5;