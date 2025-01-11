# urls.py
from django.urls import path
from .views import UserListView,CheckUserCredentialsView,UserByEmail

urlpatterns = [
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/check/', CheckUserCredentialsView.as_view(), name='check-user-credentials'),
    path('users/email/<str:email>/', UserByEmail.as_view(), name='get_user_by_email'),
]
