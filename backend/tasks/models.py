from django.db import models
from events.models import Event

class Task(models.Model):
    task_id = models.AutoField(primary_key=True)
    task_name = models.CharField(max_length=200, null=False, blank=False)
    task_deadline = models.DateField()
    task_assigned_to = models.CharField(max_length=200, null=False, blank=False)
    task_status = models.CharField(max_length=200,default='Pending')
    task_event = models.ForeignKey(Event, on_delete=models.CASCADE)

    def __str__(self):
        return self.task_name

