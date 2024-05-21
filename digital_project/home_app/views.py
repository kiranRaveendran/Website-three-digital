from django.shortcuts import render

# Create your views here.


def home_page(request):
    return render(request, 'home.html')


def gallery(request):

    return render(request, 'gallery.html')


def contact(request):
    return render(request, 'contact.html')


def projects(request):
    return render(request, 'projects.html')


def certifications(request):
    return render(request, 'certifications.html')
