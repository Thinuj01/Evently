from django.urls import path
from .views import BudgetDetail, BudgetCreate, BudgetsByEvent, BudgetEdit, BudgetDelete

urlpatterns = [
    path('<int:budget_id>/', BudgetDetail.as_view(), name='get_budget_by_id'),
    path('create/', BudgetCreate.as_view(), name='create_budget'),
    path('event/<int:event_id>/', BudgetsByEvent.as_view(), name='get_budgets_by_event_id'),
    path('edit/<int:budget_id>/', BudgetEdit.as_view(), name='edit_budget'),
    path('delete/<int:budget_id>/', BudgetDelete.as_view(), name='delete_budget'),
]