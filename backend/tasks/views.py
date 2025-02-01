from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Task
from .serializers import TaskSerializer
from events.models import Event

class TaskDetail(APIView):
    def get(self, request, task_id):
        try:
            task = Task.objects.get(pk=task_id)
        except Task.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = TaskSerializer(task)
        return Response(serializer.data)
    
class TaskCreate(APIView):
    def post(self, request):
        data = request.data
        try:
            event = Event.objects.get(pk=data['event_id'])
        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        task_data = {
            'task_name': data.get('task_name'),
            'task_deadline': data.get('task_deadline'),
            'task_assigned_to': data.get('task_assigned_to'),
            'task_event': event.event_id
        }
        
        serializer = TaskSerializer(data=task_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TasksByEvent(APIView):
    def get(self, request, event_id):
        tasks = Task.objects.filter(task_event=event_id)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

class TaskEdit(APIView):
    def put(self, request, task_id):
        try:
            task = Task.objects.get(pk=task_id)
        except Task.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        data = request.data
        try:
            event = Event.objects.get(pk=data['task_event'])
        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        task_data = {
            'task_name': data.get('task_name'),
            'task_deadline': data.get('task_deadline'),
            'task_assigned_to': data.get('task_assigned_to'),
            'task_status': data.get('task_status'),
            'task_event': event.event_id
        }
        
        serializer = TaskSerializer(task, data=task_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class TaskDelete(APIView):
    def delete(self, request, task_id):
        try:
            task = Task.objects.get(pk=task_id)
        except Task.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    