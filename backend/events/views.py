from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Event
from .serializers import EventSerializer
from accounts.models import User

class EventDetail(APIView):
    def get(self, request, event_id):
        try:
            event = Event.objects.get(pk=event_id)
        except Event.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = EventSerializer(event)
        return Response(serializer.data)

class EventCreate(APIView):
    def post(self, request):
        data = request.data
        try:
            user = User.objects.get(pk=data['user_id'])
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
        event_data = {
            'event_name': data.get('event_name'),
            'event_venue': data.get('event_venue'),
            'event_date': data.get('event_date'),
            'event_client_name': data.get('event_client_name'),
            'event_client_phone': data.get('event_client_phone'),
            'event_client_address': data.get('event_client_address'),
            'user': user.user_id
        }
        
        serializer = EventSerializer(data=event_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventsByUser(APIView):
    def get(self, request, user_id):
        events = Event.objects.filter(user_id=user_id)
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
    
class EventEdit(APIView):
    def put(self, request, event_id):
        try:
            event = Event.objects.get(pk=event_id)
        except Event.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        data = request.data
        try:
            user = User.objects.get(pk=data['user'])
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
        event.event_name = data.get('event_name')
        event.event_venue = data.get('event_venue')
        event.event_date = data.get('event_date')
        event.event_client_name = data.get('event_client_name')
        event.event_client_phone = data.get('event_client_phone')
        event.event_client_address = data.get('event_client_address')
        event.event_budget = data.get('event_budget')
        event.user = user
        event.save()
        return Response(status=status.HTTP_200_OK)
    
class EventDelete(APIView):
    def delete(self, request, event_id):
        try:
            event = Event.objects.get(pk=event_id)
        except Event.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
