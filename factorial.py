# Recursive function to calculate the factorial of a number
def factorial(n):
    """
    Calculate the factorial of a number using recursion.
    :param n: Non-negative integer
    :return: Factorial of n
    """
    if n < 0:
        return "Factorial is not defined for negative numbers."
    if n == 0:
        return 1
    return n * factorial(n - 1)

# Test cases
print("Factorial of 5:", factorial(5))  # Expected output: 120
print("Factorial of 0:", factorial(0))  # Expected output: 1
print("Factorial of -1:", factorial(-1))  # Expected output: Error message