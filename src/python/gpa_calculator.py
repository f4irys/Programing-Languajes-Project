# Imperative Program: UPRM GPA Calculator
# This file shows the Python/PyScript version of the GPA logic.
# It follows an imperative sequence: read courses, convert grades, sum points,
# sum credits, divide, and display the result.

GRADE_POINTS = {
    "A": 4.0,
    "B": 3.0,
    "C": 2.0,
    "D": 1.0,
    "F": 0.0
}


def estimate_gpa(courses):
    total_points = 0
    total_credits = 0

    for course in courses:
        grade = course["grade"]
        credits = course["credits"]
        total_points = total_points + (GRADE_POINTS[grade] * credits)
        total_credits = total_credits + credits

    if total_credits == 0:
        return 0

    return total_points / total_credits


# Example:
# courses = [
#     {"grade": "A", "credits": 3},
#     {"grade": "B", "credits": 3},
#     {"grade": "C", "credits": 4}
# ]
# print(round(estimate_gpa(courses), 2))
