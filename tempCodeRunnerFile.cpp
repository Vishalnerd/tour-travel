#include <iostream>
using namespace std;

class ArithmeticOperations {
public:
    // Inline function for addition
    inline int add(int a, int b) {
        return a + b;
    }

    // Inline function for subtraction
    inline int subtract(int a, int b) {
        return a - b;
    }

    // Inline function for multiplication
    inline int multiply(int a, int b) {
        return a * b;
    }

    // Inline function for division
    inline double divide(int a, int b) {
        if (b == 0) {
            cout << "Error: Division by zero!" << endl;
            return 0;
        }
        return static_cast<double>(a) / b;
    }

    // Inline function for modulus
    inline int modulus(int a, int b) {
        if (b == 0) {
            cout << "Error: Modulus by zero!" << endl;
            return 0;
        }
        return a % b;
    }
};

int main() {
    ArithmeticOperations arithOps;
    int num1, num2;

    cout << "Enter two integers:" << endl;
    cin >> num1 >> num2;

    // Perform and display the arithmetic operations
    cout << "Addition: " << arithOps.add(num1, num2) << endl;
    cout << "Subtraction: " << arithOps.subtract(num1, num2) << endl;
    cout << "Multiplication: " << arithOps.multiply(num1, num2) << endl;
    cout << "Division: " << arithOps.divide(num1, num2) << endl;
    cout << "Modulus: " << arithOps.modulus(num1, num2) << endl;

    return 0;
}
