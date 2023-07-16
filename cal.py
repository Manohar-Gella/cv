from django.shortcuts import render

def home(request):
    return render(request, 'calculator/home.html')

def calculate(request):
    if request.method == 'POST':
        num1 = float(request.POST.get('num1'))
        num2 = float(request.POST.get('num2'))
        operation = request.POST.get('operation')

        if operation == 'addition':
            result = num1 + num2
        elif operation == 'subtraction':
            result = num1 - num2
        elif operation == 'multiplication':
            result = num1 * num2
        elif operation == 'division':
            if num2 != 0:
                result = num1 / num2
            else:
                result = 'Error: Division by zero'
        else:
            result = 'Error: Invalid operation'

        return render(request, 'calculator/home.html', {'result': result})

    return render(request, 'calculator/home.html')
