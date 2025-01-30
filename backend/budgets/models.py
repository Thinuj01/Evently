from django.db import models
from events.models import Event

class Budget(models.Model):
    budget_id = models.AutoField(primary_key=True)
    budget_name = models.CharField(max_length=200, null=False, blank=False)
    budget_amount = models.FloatField(null=False, blank=False)
    budget_date = models.DateField(null=False, blank=False)
    budget_notes = models.TextField()
    budget_event = models.ForeignKey(Event, on_delete=models.CASCADE)

    def __str__(self):
        return self.budget_name
