# urls.py
from django.urls import path
from .views import UserListView,CheckUserCredentialsView

urlpatterns = [
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/check/', CheckUserCredentialsView.as_view(), name='check-user-credentials'),
]
