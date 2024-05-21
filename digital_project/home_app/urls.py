from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home'),
    path('gallery/', views.gallery, name='gallery'),
    path('contact/', views.contact, name='contact'),
    path('projects/', views.projects, name='projects'),
    path('certifications/', views.certifications, name='certifications')
]
