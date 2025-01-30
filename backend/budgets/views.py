from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Budget
from .serializers import BudgetSerializer
from events.models import Event

class BudgetDetail(APIView):
    def get(self, request, budget_id):
        try:
            budget = Budget.objects.get(pk=budget_id)
        except Budget.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = BudgetSerializer(budget)
        return Response(serializer.data)

class BudgetCreate(APIView):
    def post(self, request):
        data = request.data
        try:
            event = Event.objects.get(pk=data['event_id'])
        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        budget_data = {
            'budget_name': data.get('budget_name'),
            'budget_amount': data.get('budget_amount'),
            'budget_date': data.get('budget_date'),
            'budget_notes': data.get('budget_notes'),
            'budget_event': event.event_id
        }
        
        serializer = BudgetSerializer(data=budget_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class BudgetsByEvent(APIView):
    def get(self, request, event_id):
        budgets = Budget.objects.filter(budget_event=event_id)
        serializer = BudgetSerializer(budgets, many=True)
        return Response(serializer.data)
    
class BudgetEdit(APIView):
    def put(self, request, budget_id):
        try:
            budget = Budget.objects.get(pk=budget_id)
        except Budget.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        data = request.data
        try:
            event = Event.objects.get(pk=data['budget_event'])
        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        budget.budget_name = data.get('budget_name')
        budget.budget_amount = data.get('budget_amount')
        budget.budget_date = data.get('budget_date')
        budget.budget_notes = data.get('budget_notes')
        budget.budget_event = event
        budget.save()
        
        serializer = BudgetSerializer(budget)
        return Response(serializer.data)
    
class BudgetDelete(APIView):
    def delete(self, request, budget_id):
        try:
            budget = Budget.objects.get(pk=budget_id)
        except Budget.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        budget.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)