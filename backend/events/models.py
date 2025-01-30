from django.db import models
from accounts.models import User

class Event(models.Model):
    event_id = models.AutoField(primary_key=True)
    event_name = models.CharField(max_length=200, null=False, blank=False)
    event_venue = models.CharField(max_length=200, null=False, blank=False)
    event_date = models.DateField()
    event_client_name = models.CharField(max_length=200, null=False, blank=False)
    event_client_phone = models.CharField(max_length=200, null=False, blank=False)
    event_client_address = models.TextField()
    event_budget = models.FloatField(null=False, blank=False, default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.event_name