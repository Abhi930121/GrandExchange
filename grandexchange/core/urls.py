from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='Home'),
    path('about', views.About, name='about'),
    path('casino', views.Casino, name='casino'),
    path('cricket', views.Cricket, name='cricket'),
    path('card', views.Card, name='card'),
    path('football', views.Football, name='football'),
    path('login', views.LoginPage, name='LoginPage'),
    path('admindash', views.AdminDash, name='admindash'),
    path("logout/", views.LogoutPage, name="LogoutPage"),
    path('Addinstafeeds', views.AddInstaFeed, name='addinstafeeds'),
    path("deleteinstafeed/<int:id>/", views.DeleteInstaFeed, name="deleteinstafeed"),
    path("add-payment-proof/", views.AddPaymentProof, name="addpaymentproof"),
    path("delete-payment-proof/<int:id>/", views.DeletePaymentProof, name="deletepaymentproof"),



    
    ]