from django.urls import path
from .views import TaskDetail, TaskCreate, TasksByEvent, TaskEdit, TaskDelete

urlpatterns = [
    path('<int:task_id>/', TaskDetail.as_view(), name='get_task_by_id'),
    path('create/', TaskCreate.as_view(), name='create_task'),
    path('event/<int:event_id>/', TasksByEvent.as_view(), name='get_tasks_by_event_id'),
    path('edit/<int:task_id>/', TaskEdit.as_view(), name='edit_task'),
    path('delete/<int:task_id>/', TaskDelete.as_view(), name='delete_task'),
]