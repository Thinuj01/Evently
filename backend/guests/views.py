from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Guest
from .serializers import GuestSerializer
from events.models import Event
from .utils import send_invitation_email

class GuestDetail(APIView):
    def get(self, request, guest_id):
        try:
            guest = Guest.objects.get(pk=guest_id)
        except Guest.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        serializer = GuestSerializer(guest)
        return Response(serializer.data)

class GuestCreate(APIView):
    def post(self, request):
        data = request.data
        try:
            event = Event.objects.get(pk=data['event_id'])
        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        boolRsvp = False
        if data.get('guest_rsvp') == 'Comming':
            boolRsvp = True
        guest_data = {
            'guest_name': data.get('guest_name'),
            'guest_phone': data.get('guest_phone'),
            'guest_email': data.get('guest_email'),
            'guest_address': data.get('guest_address'),
            'guest_gender': data.get('guest_gender'),
            'guest_rsvp': boolRsvp,	
            'guest_event': event.event_id}
        
        serializer = GuestSerializer(data=guest_data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class GuestsByEvent(APIView):
    def get(self, request, event_id):
        guests = Guest.objects.filter(guest_event=event_id)
        serializer = GuestSerializer(guests, many=True)
        return Response(serializer.data)
        
class GuestEdit(APIView):
    def put(self, request, guest_id):
        try:
            guest = Guest.objects.get(pk=guest_id)
        except Guest.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        data = request.data
        try:
            event = Event.objects.get(pk=data['guest_event'])
        except Event.DoesNotExist:
            return Response({"error": "Event not found"}, status=status.HTTP_404_NOT_FOUND)
        
        boolRsvp = False
        if data.get('guest_rsvp') == 'Comming':
            boolRsvp = True
        guest.guest_name = data.get('guest_name')
        guest.guest_phone = data.get('guest_phone')
        guest.guest_email = data.get('guest_email')
        guest.guest_address = data.get('guest_address')
        guest.guest_gender = data.get('guest_gender')
        guest.guest_rsvp = boolRsvp
        guest.guest_event = event
        
        guest.save()
        
        serializer = GuestSerializer(guest)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class GuestDelete(APIView):
    def delete(self, request, guest_id):
        try:
            guest = Guest.objects.get(pk=guest_id)
        except Guest.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        guest.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class InviteGuest(APIView):
    def post(self, request):
        email = request.data.get('guest_email')
        subject = request.data.get('guest_subject')
        message = request.data.get('guest_message') 
        
        send_invitation_email(email, subject, message)
        
        return Response({"message": "Invitation email sent successfully"}, status=status.HTTP_200_OK)