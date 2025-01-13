from django.urls import path
from .views import GuestDetail, GuestCreate, GuestsByEvent, GuestEdit, GuestDelete,InviteGuest

urlpatterns = [
    path('<int:guest_id>/', GuestDetail.as_view(), name='get_guest_by_id'),
    path('create/', GuestCreate.as_view(), name='create_guest'),
    path('event/<int:event_id>/', GuestsByEvent.as_view(), name='get_guests_by_event_id'),
    path('edit/<int:guest_id>/', GuestEdit.as_view(), name='edit_guest'),
    path('delete/<int:guest_id>/', GuestDelete.as_view(), name='delete_guest'),
    path('invite/', InviteGuest.as_view(), name='invite_guest'),
]
