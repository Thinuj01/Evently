from django.db import models
from events.models import Event

class Guest(models.Model):
    guest_id = models.AutoField(primary_key=True)
    guest_name = models.CharField(max_length=200, null=False, blank=False)
    guest_phone = models.CharField(max_length=200, null=False, blank=False)
    guest_email = models.CharField(max_length=200, null=False, blank=False)
    guest_address = models.TextField()
    guest_gender = models.CharField(max_length=200, null=False, blank=False)
    guest_rsvp = models.BooleanField(default=False)
    guest_event = models.ForeignKey(Event, on_delete=models.CASCADE)

    def __str__(self):
        return self.guest_name
