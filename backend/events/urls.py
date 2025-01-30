from django.urls import path
from .views import EventDetail, EventCreate, EventsByUser, EventEdit

urlpatterns = [
    path('<int:event_id>/', EventDetail.as_view(), name='get_event_by_id'),
    path('create/', EventCreate.as_view(), name='create_event'),
    path('user/<int:user_id>/', EventsByUser.as_view(), name='get_events_by_user_id'),
    path('edit/<int:event_id>/', EventEdit.as_view(), name='edit_event'),
]